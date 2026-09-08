import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMic } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function VoiceAssistant() {
  const [isAwakeUI, setIsAwakeUI] = useState(false); // For visual rendering only
  const isAwakeRef = useRef(false); // For logic without triggering re-renders
  const [transcript, setTranscript] = useState('');
  const [isActive, setIsActive] = useState(false); // Overall listening state
  const navigate = useNavigate();
  const location = useLocation();
  const recognitionRef = useRef(null);
  const awakeTimeoutRef = useRef(null);

  // Only run on main app pages
  const isAppPage = ['/dashboard', '/inbox', '/compose'].includes(location.pathname);

  useEffect(() => {
    if (!isAppPage) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognitionRef.current = recognition;

    let finalTranscript = '';

    const goSleep = () => {
      isAwakeRef.current = false;
      setIsAwakeUI(false);
      setTranscript('');
      finalTranscript = '';
      if (awakeTimeoutRef.current) clearTimeout(awakeTimeoutRef.current);
    };

    const executeCommand = (message, action) => {
      toast.success(message, { icon: '🎙️' });
      action();
      goSleep();
    };

    const wakeUp = () => {
      isAwakeRef.current = true;
      setIsAwakeUI(true);
      setTranscript('Listening for command...');
      
      if (awakeTimeoutRef.current) clearTimeout(awakeTimeoutRef.current);
      awakeTimeoutRef.current = setTimeout(() => {
        goSleep();
      }, 7000);
    };

    const processCommand = async (cmd) => {
      let isActionable = false;

      // Check if they woke us up in this breath
      if (!isAwakeRef.current) {
        if (cmd.includes('hey') || cmd.includes('voice bridge') || cmd.includes('wake up')) {
          wakeUp();
          isActionable = true;
        } else {
          return; // Ignore background chatter
        }
      } else {
        isActionable = true;
      }

      // If we are awake (or just woke up this breath), process actions via backend API
      if (isActionable) {
        try {
          const gmailAuth = JSON.parse(localStorage.getItem('gmailToken'));
          const gmailToken = gmailAuth?.access_token || '';

          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/voice/command`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: cmd, gmailToken })
          });
          const data = await response.json();
          
          if (data.action === 'NAVIGATE' && data.target) {
            if (data.intent === 'OPEN_COMPOSE') {
              executeCommand("Opening Compose Email...", () => navigate(data.target, { state: { startVoiceCompose: true } }));
            } else {
              executeCommand(`Opening ${data.intent.replace('OPEN_', '')}...`, () => navigate(data.target));
            }
          } else if (data.action === 'API_CALL' && data.intent === 'READ_LATEST_EMAIL') {
            if (data.replyText) {
              executeCommand("Reading your latest email...", () => {
                const synth = window.speechSynthesis;
                const utterance = new SpeechSynthesisUtterance(data.replyText);
                if (data.language) {
                  // Attempt to match the spoken language if possible
                  utterance.lang = data.language;
                }
                synth.speak(utterance);
              });
            } else {
              executeCommand("I couldn't fetch your latest email.", () => {});
            }
          } else if (data.action === 'SYSTEM' && data.intent === 'STOP') {
            goSleep();
          } else if (data.intent === 'UNKNOWN') {
            // Ignore unknown commands, keep listening
            console.log("Intent not understood:", cmd);
          }
        } catch (error) {
          console.error("Failed to process command with backend:", error);
        }
      }
    };

    recognition.onstart = () => {
      setIsActive(true);
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' ';
          processCommand(event.results[i][0].transcript.toLowerCase().trim());
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      
      if (isAwakeRef.current) {
        setTranscript(interimTranscript);
      } else {
        if (interimTranscript.toLowerCase().includes('hey') || interimTranscript.toLowerCase().includes('voice bridge')) {
          wakeUp();
        }
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        setIsActive(false);
      }
    };

    let isMounted = true;
    let isPaused = false;

    const handlePause = () => { 
      isPaused = true; 
      recognition.stop(); 
    };
    
    const handleResume = () => { 
      isPaused = false; 
      try { recognition.start(); } catch(e) {} 
    };

    window.addEventListener('pause-voice-assistant', handlePause);
    window.addEventListener('resume-voice-assistant', handleResume);

    recognition.onend = () => {
      // Auto restart to simulate continuous wake-word listening
      if (isMounted && !isPaused) {
        try {
          recognition.start();
        } catch (e) {
          // Ignore "already started" errors
        }
      }
    };

    // Start recognition
    try {
      recognition.start();
    } catch (e) {
      console.error(e);
    }

    return () => {
      isMounted = false;
      setIsActive(false);
      window.removeEventListener('pause-voice-assistant', handlePause);
      window.removeEventListener('resume-voice-assistant', handleResume);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (awakeTimeoutRef.current) clearTimeout(awakeTimeoutRef.current);
    };
  }, [isAppPage, navigate]);

  // Render a subtle microphone indicator when active, and a large overlay when awake
  if (!isAppPage) return null;

  const handleManualStart = () => {
    if (!isActive && recognitionRef.current) {
      try {
        recognitionRef.current.start();
        toast.success("Voice Assistant Started", { icon: '🎙️' });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <>
      {/* Subtle indicator that VoiceBridge is listening for the wake word */}
      <div 
        onClick={handleManualStart}
        title={isActive ? "VoiceBridge is listening" : "Click to start VoiceBridge"}
        className={`fixed bottom-6 right-6 z-[99999] p-3 rounded-full shadow-lg transition-all duration-500 flex items-center justify-center cursor-pointer hover:scale-110 ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-red-50 text-red-500 animate-pulse'}`}
      >
        <FiMic size={20} className={isActive && !isAwakeUI ? 'animate-pulse' : ''} />
        {isActive && !isAwakeUI && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-ping"></div>
        )}
      </div>

      {/* Large Overlay when Awake */}
      <AnimatePresence>
        {isAwakeUI && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-[99999] w-80 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-100 p-6 overflow-hidden"
          >
            {/* Animated Background Glow */}
            <div className="absolute -inset-24 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl animate-pulse -z-10"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4 shadow-inner relative">
                <FiMic size={28} className="animate-pulse" />
                <div className="absolute inset-0 border-2 border-indigo-500 rounded-full animate-ping opacity-20"></div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">I'm listening...</h3>
              <p className="text-slate-500 text-sm italic min-h-[40px] flex items-center justify-center w-full px-4 break-words">
                "{transcript || "Say 'Open Inbox' or 'Create Email'..."}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
