import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, FiInbox, FiEdit3, FiMic, FiSend, FiFileText, 
  FiStar, FiAlertCircle, FiTrash2, FiSearch, FiBell, FiMoon,
  FiMoreVertical, FiChevronLeft, FiChevronRight, FiChevronDown,
  FiPaperclip, FiArchive, FiInfo, FiMail, FiClock, FiFolder, FiTag,
  FiCornerUpLeft, FiCornerUpRight, FiArrowRight, FiDownload
} from 'react-icons/fi';
import { MdOutlineGraphicEq } from 'react-icons/md';
import { FaCrown, FaGoogleDrive } from 'react-icons/fa';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import Sidebar from '../components/Sidebar';

export default function Inbox() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Primary');
  const [emails, setEmails] = useState([]);
  const [activeEmail, setActiveEmail] = useState(null);
  const [inboxStats, setInboxStats] = useState({ total: 0, unread: 0 });
  const [loading, setLoading] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;

  // Fetch emails
  useEffect(() => {
    const fetchEmails = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const gmailAuth = JSON.parse(localStorage.getItem('gmailToken'));
      const gmailToken = gmailAuth?.access_token || '';

      if (!userInfo || !userInfo.token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/emails`, {
          headers: { 
            'Authorization': `Bearer ${userInfo.token}`,
            'x-gmail-token': gmailToken
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setEmails(data.emails);
          setInboxStats({ total: data.total, unread: data.unread });
          if (data.emails.length > 0) {
            fetchEmailDetails(data.emails[0].id, userInfo.token);
          }
        }
      } catch (error) {
        console.error("Failed to fetch emails", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, [navigate]);

  const fetchEmailDetails = async (id, token) => {
    try {
      const gmailAuth = JSON.parse(localStorage.getItem('gmailToken'));
      const gmailToken = gmailAuth?.access_token || '';

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/emails/${id}`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'x-gmail-token': gmailToken
        }
      });
      if (response.ok) {
        const data = await response.json();
        setActiveEmail(data);
      }
    } catch (error) {
      console.error("Failed to fetch email details", error);
    }
  };

  const handleEmailClick = (id) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    fetchEmailDetails(id, userInfo.token);
  };

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center bg-white text-indigo-600 font-bold">Loading Inbox...</div>;
  }

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
              placeholder="Search emails..." 
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
          {/* Profile */}
          
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar unreadCount={inboxStats.unread} />

        {/* Message List Column */}
        <div className="w-96 shrink-0 border-r border-slate-200 flex flex-col bg-white">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-800">Inbox</h2>
              <span className="text-slate-500 font-medium">({inboxStats.unread})</span>
              <FiSearch size={14} className="text-slate-400 ml-1 cursor-pointer" />
            </div>
            <FiMoreVertical className="text-slate-400 cursor-pointer" />
          </div>

          <div className="flex px-4 border-b border-slate-100">
            <button className="px-4 py-3 text-indigo-600 font-bold border-b-2 border-indigo-600 text-sm">Primary</button>
            <button className="px-4 py-3 text-slate-500 hover:text-slate-700 font-medium text-sm flex items-center gap-2">
              Promotions <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">12</span>
            </button>
            <button className="px-4 py-3 text-slate-500 hover:text-slate-700 font-medium text-sm flex items-center gap-2">
              Social <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">8</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {emails.map((email) => (
              <div 
                key={email.id} 
                onClick={() => handleEmailClick(email.id)}
                className={`flex gap-3 px-4 py-4 border-b border-slate-100 cursor-pointer transition-colors group ${activeEmail?.id === email.id ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}`}
              >
                <div className="pt-1">
                  <div className="w-4 h-4 border border-slate-300 rounded focus-within:ring-2 flex items-center justify-center cursor-pointer"></div>
                </div>
                <div className="pt-0.5">
                  <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs ${email.sender.avatarColor}`}>
                    {email.sender.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className={`truncate mr-2 ${email.isRead ? 'font-medium text-slate-700' : 'font-bold text-slate-900'}`}>
                      {email.sender.name}
                    </span>
                    <span className={`text-[10px] shrink-0 ${email.isRead ? 'text-slate-400' : 'font-bold text-indigo-600'}`}>
                      {email.time}
                    </span>
                  </div>
                  <div className={`text-xs truncate mb-1 ${email.isRead ? 'font-medium text-slate-600' : 'font-bold text-slate-800'}`}>
                    {email.subject}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                    {email.snippet}
                    {email.hasAttachment && <FiPaperclip size={10} className="shrink-0 text-slate-400" />}
                  </div>
                </div>
                <div className="pt-1 px-1 flex flex-col items-center">
                  <FiStar size={14} className={email.isStarred ? "text-amber-400 fill-amber-400" : "text-slate-300 group-hover:text-slate-400"} />
                </div>
              </div>
            ))}
          </div>

          <div className="py-2.5 px-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>1–25 of {inboxStats.total}</span>
            <div className="flex items-center gap-1">
              <button className="p-1 text-slate-400 hover:text-slate-600"><FiChevronLeft size={16} /></button>
              <button className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center">1</button>
              <button className="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">2</button>
              <button className="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">3</button>
              <button className="p-1 text-slate-400 hover:text-slate-600"><FiChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* Reading Pane Column */}
        <div className="flex-1 flex flex-col bg-white relative">
          {activeEmail ? (
            <>
              {/* Action Toolbar */}
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <div className="flex items-center gap-5 text-slate-500">
                  <button className="hover:text-slate-800"><FiChevronLeft size={18} /></button>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <button className="hover:text-slate-800" title="Archive"><FiArchive size={18} /></button>
                  <button className="hover:text-slate-800" title="Report spam"><FiAlertCircle size={18} /></button>
                  <button className="hover:text-slate-800" title="Delete"><FiTrash2 size={18} /></button>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <button className="hover:text-slate-800" title="Mark unread"><FiMail size={18} /></button>
                  <button className="hover:text-slate-800" title="Snooze"><FiClock size={18} /></button>
                  <button className="hover:text-slate-800" title="Move to"><FiFolder size={18} /></button>
                  <button className="hover:text-slate-800" title="Labels"><FiTag size={18} /></button>
                  <button className="hover:text-slate-800"><FiMoreVertical size={18} /></button>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>1 of {inboxStats.total}</span>
                  <div className="flex gap-2">
                    <button className="hover:text-slate-800"><FiChevronLeft size={16} /></button>
                    <button className="hover:text-slate-800"><FiChevronRight size={16} /></button>
                  </div>
                </div>
              </div>

              {/* Email Content Scrollable */}
              <div className="flex-1 overflow-y-auto p-8 scrollbar-hide relative">
                
                {/* Subject */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-slate-800">{activeEmail.subject}</h1>
                    {activeEmail.labels.map(label => (
                      <span key={label} className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">{label}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <FiStar className={activeEmail.isStarred ? "text-amber-400 fill-amber-400" : ""} size={20} />
                    <FiMoreVertical size={20} />
                  </div>
                </div>

                {/* Sender Info */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-sm ${activeEmail.sender.avatarColor}`}>
                      {activeEmail.sender.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-slate-800">{activeEmail.sender.name}</span>
                        <span className="text-xs text-slate-500 font-medium">&lt;{activeEmail.sender.email}&gt;</span>
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 cursor-pointer hover:text-slate-700">
                        to {activeEmail.to} <FiChevronDown size={12} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500">{activeEmail.time}</span>
                    <button className="text-slate-400 hover:text-slate-700"><FiCornerUpLeft size={16} /></button>
                    <button className="text-slate-400 hover:text-slate-700"><FiMoreVertical size={16} /></button>
                  </div>
                </div>

                {/* Body */}
                <div className="text-sm text-slate-700 leading-relaxed max-w-4xl font-medium" dangerouslySetInnerHTML={{ __html: activeEmail.body }} />

                {/* Attachments */}
                {activeEmail.attachments && activeEmail.attachments.length > 0 && (
                  <div className="mt-10 border-t border-slate-100 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-slate-700 text-xs">Attachments ({activeEmail.attachments.length})</span>
                      <button className="text-indigo-600 font-bold text-xs flex items-center gap-1 hover:text-indigo-700">
                        <FiDownload /> Download all
                      </button>
                    </div>
                    
                    <div className="flex gap-4">
                      {activeEmail.attachments.map((file, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-xl p-3 flex gap-3 items-center hover:bg-slate-50 cursor-pointer w-64 transition-colors">
                          <div className="bg-red-100 text-red-600 p-2.5 rounded-lg">
                            <BsFileEarmarkPdfFill size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-slate-700 text-xs truncate mb-0.5">{file.name}</div>
                            <div className="text-[10px] text-slate-500 font-medium">{file.size}</div>
                          </div>
                          <div className="flex flex-col gap-2 text-slate-400">
                            <FiDownload size={14} className="hover:text-slate-700" />
                            <FaGoogleDrive size={14} className="hover:text-slate-700" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reply Actions */}
                <div className="mt-10 flex gap-3">
                  <button className="px-5 py-2 border border-slate-200 rounded-full font-bold text-slate-600 text-xs hover:bg-slate-50 flex items-center gap-2">
                    <FiCornerUpLeft size={14} /> Reply
                  </button>
                  <button className="px-5 py-2 border border-slate-200 rounded-full font-bold text-slate-600 text-xs hover:bg-slate-50 flex items-center gap-2">
                    <FiCornerUpLeft size={14} className="scale-x-[-1]" /> Reply all
                  </button>
                  <button className="px-5 py-2 border border-slate-200 rounded-full font-bold text-slate-600 text-xs hover:bg-slate-50 flex items-center gap-2">
                    <FiArrowRight size={14} /> Forward
                  </button>
                </div>

                <div className="h-32"></div> {/* Spacer for fixed bottom input */}
              </div>

              {/* Bottom Fixed VoiceBridge Input */}
              <div className="absolute bottom-6 left-8 right-8">
                <div className="bg-white border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-full p-2 flex items-center z-40 gap-3">
                  <div className="w-8 h-8 rounded-full ml-2 bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {userInfo?.name ? userInfo.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <input 
                    type="text" 
                    placeholder="Reply or type / to use VoiceBridge..." 
                    className="flex-1 bg-transparent border-none focus:outline-none px-2 text-sm font-medium text-slate-700 placeholder:text-slate-400"
                  />
                  <div className="flex items-center gap-2 pr-2 shrink-0">
                    <button className="w-10 h-10 flex items-center justify-center text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors bg-indigo-50/50">
                      <FiMic size={18} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                      <FiMoreVertical size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400 font-medium flex-col gap-4">
              <FiMail size={48} className="text-slate-200" />
              <p>Select an email to read</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
