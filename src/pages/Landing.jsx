import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
import { FiArrowRight, FiSend } from 'react-icons/fi';
import { BiGlobe, BiMicrophone, BiEnvelope, BiFile, BiUndo } from 'react-icons/bi';
import { MdOutlineGraphicEq, MdTranslate, MdAccessibility, MdSecurity } from 'react-icons/md';

export default function Landing() {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 2.5 second delay before hiding splash screen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // IPC handlers for Window Controls
  const handleMinimize = () => {
    if (window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('minimize-window');
    }
  };

  const handleMaximize = () => {
    if (window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('maximize-window');
    }
  };

  const handleClose = () => {
    if (window.require) {
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send('close-window');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const floatVariants = {
    animate: (custom) => ({
      y: [0, -10, 0],
      transition: {
        duration: custom,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-50"
            
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="relative flex items-center justify-center mb-8"
            >
              {/* Pulsing ring */}
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-40 animate-[pulse_2s_ease-in-out_infinite]"></div>
              
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center border-4 border-white z-10">
                <BiMicrophone size={60} className="text-white drop-shadow-md" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center mt-6"
            >
              <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-2">
                Voice<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Bridge</span>
              </h1>
              
              {/* Animated Sound Wave */}
              <div className="flex items-center justify-center gap-1.5 mt-6 h-8">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      height: ["20%", "100%", "40%", "90%", "20%"] 
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                    className="w-1.5 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-full"
                    style={{ height: '20%' }}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold tracking-[0.2em] uppercase text-[10px] lg:text-xs mt-4">
                <BsStars size={12} />
                Initializing AI Engine...
                <BsStars size={12} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative overflow-hidden select-none">
      
      {/* Modern Background Graphics */}
      
      {/* Glowing Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none z-0"></div>

      {/* Elegant Sound Wave (Thin Lines) */}
      <div className="absolute top-[35%] left-0 w-full h-[30%] opacity-40 pointer-events-none z-0 overflow-hidden flex items-center">
        <svg viewBox="0 0 1000 200" className="w-[150%] h-full stroke-indigo-300 fill-none" preserveAspectRatio="none">
          <path d="M-100,100 C100,0 200,200 400,100 C600,0 700,200 900,100 C1100,0 1200,200 1400,100" strokeWidth="1.5" />
          <path d="M-100,100 C150,-50 250,250 450,100 C650,-50 750,250 950,100 C1150,-50 1250,250 1450,100" strokeWidth="1" className="opacity-60" />
          <path d="M-100,100 C50,50 150,150 350,100 C550,50 650,150 850,100 C1050,50 1150,150 1350,100" strokeWidth="2" className="opacity-40" />
        </svg>
      </div>

      {/* Electron Title Bar - Draggable */}
      <div className="flex justify-between items-center px-6 py-3 w-full border-b border-gray-200 z-50 bg-white/60 backdrop-blur-md sticky top-0" >
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 p-1.5 rounded-full text-white shadow-md">
            <MdOutlineGraphicEq size={18} />
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-700">VoiceBridge</span>
        </div>
        
        {/* Window Controls - Non-draggable */}
        
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-row items-center justify-center w-full max-w-[1250px] mx-auto px-10 z-10 gap-12 h-full">
        
        {/* Left Section (Hero Text) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-[0.5] space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-sm">
            <BsStars size={16} />
            AI Powered Voice Assistant
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-slate-900">
            Voice<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Bridge</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-slate-700 space-y-2">
            <p>Your Voice.</p>
            <p>Your Inbox. <span className="text-indigo-600">No Barriers.</span></p>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg text-slate-500 leading-relaxed font-medium">
            An intelligent, voice-first email assistant designed to help blind and differently-abled users read, write, and manage emails entirely hands-free.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-row items-center gap-4 pt-4">
            <button 
              onClick={() => navigate('/register')}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-1"
            >
              <BsStars />
              Get Started
              <FiArrowRight />
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-indigo-600 border-2 border-indigo-100 hover:border-indigo-200 px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-md shadow-indigo-50 hover:shadow-lg hover:-translate-y-1"
            >
              Login
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-slate-400 font-medium pt-2 text-sm">
            <BiGlobe size={18} />
            Seamlessly works across multiple languages
          </motion.div>
        </motion.div>

        {/* Right Section (Visual / Mic) */}
        <div className="flex-[0.5] relative w-full h-full flex items-center justify-center">
          
          {/* Decorative Dashed Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] border border-dashed border-indigo-200 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] border border-dashed border-purple-100 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
          </div>

          {/* Center Mic Button */}
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative z-20 flex flex-col items-center gap-6"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border-4 border-white">
                <BiMicrophone size={90} className="text-white drop-shadow-md" />
              </div>
            </div>
            <div className="text-center bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/50">
              <p className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Tap & Speak</p>
              <p className="text-sm text-slate-500 font-medium">I'm listening...</p>
            </div>
          </motion.div>

          {/* Floating Cards (Fixed corner positioning to prevent overlap) */}
          <motion.div variants={floatVariants} custom={4.5} animate="animate" className="absolute top-4 lg:top-8 -left-4 lg:-left-12 bg-white/90 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl shadow-xl flex items-start gap-4 w-52 hover:scale-105 transition-transform cursor-default z-30">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shrink-0">
              <BiEnvelope size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm leading-tight">Read Emails</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Listen instantly</p>
            </div>
          </motion.div>

          <motion.div variants={floatVariants} custom={5.2} animate="animate" className="absolute top-16 lg:top-20 -right-4 lg:-right-12 bg-white/90 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl shadow-xl flex items-start gap-4 w-52 hover:scale-105 transition-transform cursor-default z-30">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600 shrink-0">
              <FiSend size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm leading-tight">Send Emails</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Compose with voice</p>
            </div>
          </motion.div>

          <motion.div variants={floatVariants} custom={4.8} animate="animate" className="absolute bottom-24 lg:bottom-28 -left-4 lg:-left-12 bg-white/90 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl shadow-xl flex items-start gap-4 w-52 hover:scale-105 transition-transform cursor-default z-30">
            <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 shrink-0">
              <BiFile size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm leading-tight">Summarize</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Get AI summaries</p>
            </div>
          </motion.div>

          <motion.div variants={floatVariants} custom={5.5} animate="animate" className="absolute bottom-4 lg:bottom-8 -right-4 lg:-right-12 bg-white/90 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl shadow-xl flex items-start gap-4 w-52 hover:scale-105 transition-transform cursor-default z-30">
            <div className="bg-pink-100 p-3 rounded-xl text-pink-600 shrink-0">
              <BiUndo size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm leading-tight">Reply & Manage</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">Organize easily</p>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Bottom Features Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="w-full max-w-[1400px] mx-auto px-10 pb-8 z-10 shrink-0"
      >
        {/* Enforced single row since window min width is 900px */}
        <div className="bg-white/80 backdrop-blur-lg border border-slate-200/60 rounded-3xl shadow-2xl shadow-slate-200/50 p-6 flex flex-row justify-between items-center divide-x divide-slate-100">
          
          <div className="flex items-center gap-3 group px-4 flex-1">
            <div className="bg-indigo-100 p-3 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <MdOutlineGraphicEq size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Voice First</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Control using voice</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group px-4 flex-1">
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <MdTranslate size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Multi-Language</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Speak native language</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group px-4 flex-1">
            <div className="bg-purple-100 p-3 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <BsStars size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">AI Powered</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Smart understanding</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group px-4 flex-1">
            <div className="bg-teal-100 p-3 rounded-2xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <MdAccessibility size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Accessible</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Built for everyone</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group px-4 flex-1">
            <div className="bg-pink-100 p-3 rounded-2xl text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <MdSecurity size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Secure</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium leading-tight">Privacy protected</p>
            </div>
          </div>

        </div>
      </motion.div>
      
    </div>
    </>
  );
}
