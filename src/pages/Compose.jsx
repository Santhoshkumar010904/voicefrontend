import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiSearch, FiBell, FiMoon, FiChevronDown, FiX,
  FiMail, FiCalendar, FiFolder, FiClock, FiHeart, FiFrown,
  FiSend, FiMic, FiPaperclip, FiLink, FiImage, FiSmile, FiMoreVertical, FiTrash2
} from 'react-icons/fi';
import { MdOutlineGraphicEq } from 'react-icons/md';
import Sidebar from '../components/Sidebar';
import toast from 'react-hot-toast';

export default function Compose() {
  const navigate = useNavigate();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sending, setSending] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;
  const [activeTab, setActiveTab] = useState('templates');

  const templates = [
    { icon: FiMail, color: 'text-indigo-500', bg: 'bg-indigo-50', title: 'General', desc: 'For general updates' },
    { icon: FiCalendar, color: 'text-purple-500', bg: 'bg-purple-50', title: 'Meeting Request', desc: 'Request a meeting' },
    { icon: FiFolder, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Project Update', desc: 'Share project updates' },
    { icon: FiClock, color: 'text-blue-400', bg: 'bg-blue-50', title: 'Follow Up', desc: 'Follow up on an email' },
    { icon: FiHeart, color: 'text-rose-500', bg: 'bg-rose-50', title: 'Thank You', desc: 'Thank someone' },
    { icon: FiFrown, color: 'text-emerald-500', bg: 'bg-emerald-50', title: 'Apology', desc: 'Send an apology' },
  ];

  const handleSend = async () => {
    if (!to || !subject) {
      toast.error('Please enter a recipient and subject.');
      return;
    }
    
    setSending(true);
    const gmailAuth = JSON.parse(localStorage.getItem('gmailToken'));
    const gmailToken = gmailAuth?.access_token || '';

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/emails/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userInfo?.token || ''}`
        },
        body: JSON.stringify({ to, subject, body, gmailToken })
      });

      if (response.ok) {
        toast.success('Email sent successfully!', { style: { background: '#10B981', color: '#fff', fontSize: '18px', padding: '16px' }});
        setTimeout(() => navigate('/inbox'), 1000);
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      toast.error('An error occurred.');
    } finally {
      setSending(false);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.startVoiceCompose) {
      window.history.replaceState({}, document.title);
      startConversationalCompose();
    }
  }, [location]);

  const speakAndListen = (text, maxDurationMs = 7000, silenceMs = 3000) => {
    return new Promise((resolve) => {
      // Pause global voice assistant immediately so it yields the mic
      window.dispatchEvent(new Event('pause-voice-assistant'));

      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      
      utterance.onend = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
          toast.error("Speech Recognition not supported here.");
          window.dispatchEvent(new Event('resume-voice-assistant'));
          resolve("");
          return;
        }
        
        // Give the global mic 200ms to fully release the hardware
        setTimeout(() => {
          const recognition = new SpeechRecognition();
          recognition.continuous = true; // Use continuous so it doesn't stop on short pauses
          recognition.interimResults = true;
          recognition.lang = 'en-US';
          
          let finalResult = "";
          let silenceTimer = null;
          let maxTimer = null;
          
          const stopListening = () => {
            if (silenceTimer) clearTimeout(silenceTimer);
            if (maxTimer) clearTimeout(maxTimer);
            try { recognition.stop(); } catch(e) {}
          };
          
          recognition.onstart = () => {
            toast(`Listening...`, { icon: '🎙️', duration: maxDurationMs });
            // Max time fallback
            maxTimer = setTimeout(() => {
              stopListening();
            }, maxDurationMs);
            // Initial silence timeout
            silenceTimer = setTimeout(() => {
              stopListening();
            }, silenceMs);
          };
          
          recognition.onresult = (event) => {
            let currentStr = "";
            for (let i = 0; i < event.results.length; i++) {
              currentStr += event.results[i][0].transcript;
            }
            finalResult = currentStr;
            
            // Reset silence timer because they are still speaking
            if (silenceTimer) clearTimeout(silenceTimer);
            silenceTimer = setTimeout(() => {
              stopListening();
            }, silenceMs);
          };
          
          recognition.onerror = (e) => {
            console.error("Speech error:", e.error);
            stopListening();
          };

          recognition.onend = () => {
            if (silenceTimer) clearTimeout(silenceTimer);
            if (maxTimer) clearTimeout(maxTimer);
            
            if (!finalResult) {
              toast.error("Didn't catch that. Voice compose stopped.");
            }
            window.dispatchEvent(new Event('resume-voice-assistant'));
            resolve(finalResult.trim());
          };
          
          try { recognition.start(); } catch (e) { 
            window.dispatchEvent(new Event('resume-voice-assistant'));
            resolve(""); 
          }
        }, 200);
      };
      
      synth.speak(utterance);
    });
  };

  const startConversationalCompose = async () => {
    toast.success("Starting Voice Composition", { icon: '🤖' });
    
    // To: 7s max, 3s silence
    const recipient = await speakAndListen("Who would you like to send it to?", 7000, 3000);
    if (!recipient) return;
    
    // Simple heuristic: remove spaces, add @gmail.com if missing
    let formattedEmail = recipient.toLowerCase().replace(/\s+/g, '');
    if (!formattedEmail.includes('@')) formattedEmail += '@gmail.com';
    setTo(formattedEmail);
    
    // Subject: 7s max, 3s silence
    const subj = await speakAndListen("What would you like the subject to be?", 7000, 3000);
    if (!subj) return;
    setSubject(subj);
    
    // Content: 15s max, 5s silence (allows them to pause and think while dictating)
    const content = await speakAndListen("And what would you like to say?", 15000, 5000);
    if (!content) return;
    
    setBody(content);
    
    // Confirm: 5s max, 2.5s silence
    const confirm = await speakAndListen("Your email is ready. Would you like me to send it?", 5000, 2500);
    if (confirm && (confirm.toLowerCase().includes('yes') || confirm.toLowerCase().includes('send'))) {
      toast.success("Voice confirmation received, sending...");
      
      // Need a small timeout to let state update visually before triggering send
      setTimeout(() => {
        // Trigger the exact same handleSend function natively!
        document.getElementById('send-email-btn')?.click();
      }, 500);
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col overflow-hidden font-sans select-none text-sm">
      
      {/* Top Navbar */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 shrink-0 bg-white" >
        <div className="flex items-center gap-3 w-64" >
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 p-1.5 rounded-full text-white shadow-md">
            <MdOutlineGraphicEq size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">VoiceBridge</span>
        </div>
        
        <div className="flex-1 max-w-2xl px-8" >
          <div className="bg-slate-100 rounded-lg flex items-center px-4 py-2 text-slate-500 border border-transparent focus-within:border-indigo-300 focus-within:bg-white transition-all">
            <FiSearch size={18} className="text-slate-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search emails, people or keywords..." 
              className="bg-transparent border-none outline-none w-full text-slate-700 placeholder:text-slate-400"
            />
            <div className="bg-white border border-slate-200 rounded px-2 py-0.5 text-xs font-bold text-slate-400 shrink-0 shadow-sm">
              Ctrl /
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6" >
          <div className="flex items-center gap-4 text-slate-500">
            <div className="relative cursor-pointer hover:text-slate-700">
              <FiBell size={20} />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full border-2 border-white">3</span>
            </div>
            <FiMoon size={20} className="cursor-pointer hover:text-slate-700" />
          </div>
            
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar unreadCount={24} />

        {/* Middle Column (Templates & AI) */}
        <div className="w-72 shrink-0 border-r border-slate-200 bg-white flex flex-col">
          <div className="flex border-b border-slate-200 text-sm font-bold text-slate-500">
            <div 
              className={`flex-1 py-4 text-center cursor-pointer border-b-2 ${activeTab === 'templates' ? 'border-indigo-600 text-indigo-600' : 'border-transparent hover:bg-slate-50'}`}
              onClick={() => setActiveTab('templates')}
            >
              Templates
            </div>
            <div 
              className={`flex-1 py-4 text-center flex items-center justify-center gap-2 cursor-pointer border-b-2 ${activeTab === 'ai' ? 'border-indigo-600 text-indigo-600' : 'border-transparent hover:bg-slate-50'}`}
              onClick={() => setActiveTab('ai')}
            >
              <span className="text-lg leading-none pt-0.5">✨</span> AI Assistant
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {templates.map((t, idx) => (
              <div key={idx} className="flex items-center p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm cursor-pointer transition-all bg-white group">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${t.bg} ${t.color} mr-3 group-hover:scale-105 transition-transform`}>
                  <t.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-700 text-xs mb-0.5">{t.title}</div>
                  <div className="text-[10px] text-slate-400">{t.desc}</div>
                </div>
                <FiChevronDown className="text-slate-300 -rotate-90 group-hover:text-slate-400" />
              </div>
            ))}

            {/* Write with Voice Card */}
            <div 
              onClick={startConversationalCompose}
              className="mt-4 p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 cursor-pointer relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 font-bold text-indigo-900 mb-2">
                <span className="text-indigo-600 text-lg">✨</span> Write with Voice
              </div>
              <p className="text-xs text-indigo-700/80 mb-6 font-medium pr-4 leading-relaxed">
                Dictate your email and let VoiceBridge compose it for you.
              </p>
              
              <div className="flex items-center justify-between">
                {/* Mock Audio Wave */}
                <div className="flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  {[4, 8, 12, 6, 14, 8, 4, 10, 16, 6, 8, 4].map((h, i) => (
                    <div key={i} className="w-1 bg-indigo-400 rounded-full" style={{ height: `${h}px` }}></div>
                  ))}
                </div>
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                  <FiMic size={18} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Plain Text</span>
            <div className="w-8 h-5 bg-slate-200 rounded-full relative cursor-pointer">
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Right Column (Compose Area) */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-slate-800 cursor-pointer hover:bg-slate-50 px-2 py-1 rounded">
              New Email <FiChevronDown className="text-slate-400 mt-0.5" />
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1 cursor-pointer hover:text-slate-600">
                <FiMail /> Save Draft
              </span>
              <button className="hover:text-slate-800" onClick={() => navigate('/dashboard')}><FiX size={20} /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-6 flex flex-col gap-4">
            
            {/* To Field */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-2 focus-within:border-indigo-300 transition-colors">
              <span className="text-sm font-medium text-slate-500 w-12">To</span>
              <input 
                type="text" 
                placeholder="Add recipient(s)" 
                className="flex-1 border-none outline-none text-sm font-medium text-slate-800 placeholder:text-slate-300"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <span className="text-sm font-bold text-indigo-500 cursor-pointer hover:text-indigo-600 mr-2">Cc</span>
              <span className="text-sm font-bold text-indigo-500 cursor-pointer hover:text-indigo-600">Bcc</span>
            </div>

            {/* Subject Field */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-2 focus-within:border-indigo-300 transition-colors">
              <span className="text-sm font-medium text-slate-500 w-12">Subject</span>
              <input 
                type="text" 
                placeholder="Add a subject" 
                className="flex-1 border-none outline-none text-sm font-bold text-slate-800 placeholder:text-slate-300"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Email Body */}
            <div className="flex-1 relative mt-2">
              <textarea 
                className="w-full h-full border-none outline-none resize-none text-sm text-slate-700 leading-relaxed font-medium placeholder:text-slate-400 placeholder:font-normal"
                placeholder="Write your email here..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              {!body && (
                <div className="absolute top-10 left-0 text-sm text-slate-500 pointer-events-none">
                  --<br/>
                  Best regards,<br/>
                  Arjun Kumar
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="px-8 py-4 border-t border-slate-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="flex rounded-lg overflow-hidden shadow-sm">
                <button 
                  id="send-email-btn"
                  onClick={handleSend}
                  disabled={sending}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 flex items-center gap-2 transition-colors disabled:opacity-70"
                >
                  <FiSend size={16} /> {sending ? 'Sending...' : 'Send'}
                </button>
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-2.5 py-2.5 transition-colors border-l border-indigo-500">
                  <FiChevronDown size={16} />
                </button>
              </div>
              
              <button className="border border-slate-200 text-indigo-600 font-bold hover:bg-indigo-50 px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors">
                <FiMic size={16} /> Send with Voice
              </button>

              <div className="flex items-center gap-2 ml-4 text-slate-500">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><FiPaperclip size={18}/></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><FiLink size={18}/></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><FiImage size={18}/></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><FiSmile size={18}/></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><span className="text-lg font-serif italic">y</span></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><FiMail size={18}/></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><FiMoreVertical size={18}/></button>
              </div>
            </div>

            <div className="flex items-center gap-6 text-slate-500">
              <button className="p-2 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <FiTrash2 size={18} />
              </button>
              <div className="flex items-center gap-2 text-xs font-bold">
                Draft saved at 10:30 AM 
                <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
