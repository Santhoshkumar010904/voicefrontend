import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiMail, FiEdit3, FiFolder, FiLock } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { MdOutlineGraphicEq, MdSecurity } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useGoogleLogin } from '@react-oauth/google';

export default function ConnectGmail() {
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Google Auth Success:', tokenResponse);
      toast.success('Successfully connected to Gmail!');
      // Here you would typically send the token to your backend to exchange for refresh tokens
      // and securely store the Gmail access token/refresh token associated with the user account.
      localStorage.setItem('gmailToken', JSON.stringify(tokenResponse));
      // Simulate redirect to dashboard
      setTimeout(() => navigate('/dashboard'), 2000); 
    },
    onError: (error) => {
      console.error('Google Auth Error:', error);
      toast.error('Failed to connect to Google. Please try again.');
    },
    // We request full gmail scopes plus standard profile scopes as requested for VoiceBridge
    scope: 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    prompt: 'consent',
  });

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleBackClick = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setShowLogoutModal(true);
    } else {
      navigate(-1);
    }
  };

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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const features = [
    {
      icon: <FiMail className="text-indigo-600" size={20} />,
      title: "Read Emails Aloud",
      desc: "Listen to your emails in your preferred language.",
      bg: "bg-indigo-50"
    },
    {
      icon: <FiEdit3 className="text-blue-600" size={20} />,
      title: "Compose with Voice",
      desc: "Dictate and send emails using your voice.",
      bg: "bg-blue-50"
    },
    {
      icon: <FiFolder className="text-purple-600" size={20} />,
      title: "Smart Organization",
      desc: "Summarize, search, and organize emails easily.",
      bg: "bg-purple-50"
    },
    {
      icon: <FiLock className="text-emerald-600" size={20} />,
      title: "Private & Secure",
      desc: "We only access what's necessary and keep your data safe.",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="h-screen bg-slate-50 text-slate-800 font-sans flex flex-col relative overflow-hidden select-none">
      
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
      <main className="flex-1 flex flex-row items-center justify-center w-full max-w-[1300px] mx-auto px-8 z-10 gap-16 h-full relative">
        

        {/* Left Section (Hero & Graphics) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-[0.45] h-full flex flex-col justify-center space-y-6 relative"
        >
          <div className="absolute top-[50%] left-[20%] w-[300px] h-[300px] bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none z-0"></div>
          
          <motion.div variants={itemVariants} className="text-indigo-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            AI POWERED • VOICE FIRST • ACCESSIBLE FOR ALL
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-slate-900">
            Your Voice.<br/>
            Your Inbox.<br/>
            <span className="text-indigo-600">No Barriers.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-sm lg:text-base text-slate-500 leading-relaxed font-medium max-w-sm">
            Connect your Gmail account to let VoiceBridge read, write, and manage your emails using the power of your voice.
          </motion.p>
          
          <motion.div variants={itemVariants} className="relative py-8 flex items-center">
            <div className="absolute w-[150%] left-[-20%] h-32 opacity-30 pointer-events-none overflow-hidden">
              <svg viewBox="0 0 1000 200" className="w-full h-full stroke-indigo-400 fill-none" preserveAspectRatio="none">
                <path d="M-100,100 C100,50 200,150 400,100 C600,50 700,150 900,100 C1100,50 1200,150 1400,100" strokeWidth="1.5" />
                <path d="M-100,100 C150,20 250,180 450,100 C650,20 750,180 950,100 C1150,20 1250,180 1450,100" strokeWidth="1" className="opacity-60" />
              </svg>
            </div>
            
            <div className="relative z-10 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 shadow-xl shadow-indigo-200 flex items-center justify-center border-[3px] border-white ml-8">
              <BiMicrophone size={50} className="text-white drop-shadow-md" />
              <div className="absolute inset-[-15px] border border-indigo-200 rounded-full"></div>
              <div className="absolute inset-[-30px] border border-indigo-100 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex items-center gap-4 max-w-sm mt-4">
            <div className="bg-indigo-600 p-2.5 rounded-full text-white shrink-0">
              <MdSecurity size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-xs">Your data is safe and secure with us.</h4>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">We respect your privacy and never read emails without your permission.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section (Connect Gmail Card) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="flex-[0.55] h-full flex items-center justify-center py-6"
        >
          <div className="bg-white w-full max-w-[550px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 lg:p-10 max-h-full overflow-y-auto overflow-x-hidden scrollbar-hide relative">
            
            {/* Form Back Button */}
            <button 
              onClick={handleBackClick}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 flex items-center justify-center w-8 h-8 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-slate-500 hover:text-indigo-600 transition-colors"
              title="Go Back"
            >
              <FiArrowLeft size={16} strokeWidth={3} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-5 mb-8 pr-10">
              <div className="bg-slate-50 p-4 rounded-full shadow-inner border border-slate-100 shrink-0">
                {/* SVG Gmail Logo approximation since FcGoogle is a bit generic */}
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.73V42.5h10c1.38,0,2.5-1.12,2.5-2.5V16.2z"/>
                  <path fill="#1e88e5" d="M3,16.2l3.61,1.93l6.39,5.54V42.5H3c-1.38,0-2.5-1.12-2.5-2.5V16.2z"/>
                  <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.68 24,31.93 35,23.68 36,17"/>
                  <path fill="#c62828" d="M3,12.3v3.9l10,7.48V11.2L3,12.3z"/>
                  <path fill="#fbc02d" d="M45,12.3v3.9l-10,7.48V11.2L45,12.3z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Connect Your Gmail</h2>
                <p className="text-xs text-slate-500 font-medium mt-1">Securely connect your Gmail account to get started.</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-5 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`${feature.bg} p-2.5 rounded-xl shrink-0 mt-0.5`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{feature.title}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Privacy Box */}
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex gap-3 mb-8">
              <HiOutlineShieldCheck className="text-indigo-600 shrink-0 mt-0.5" size={20} />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                VoiceBridge will only access your Gmail to read, send, and manage emails as per your commands. You can disconnect anytime.
              </p>
            </div>

            {/* Buttons */}
            <button 
              onClick={() => loginWithGoogle()}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-md shadow-indigo-200 hover:shadow-lg flex items-center justify-center gap-2 mb-4"
            >
              <div className="bg-white p-1 rounded">
                <FcGoogle size={16} />
              </div>
              Connect with Google
            </button>

            <div className="flex items-center gap-4 py-2 mb-4">
              <div className="flex-1 h-px bg-slate-100"></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-slate-100"></div>
            </div>

            <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
              <FiMail size={18} className="text-slate-500" />
              Connect with Gmail Manually
            </button>

            <div className="flex items-center justify-center gap-1.5 mt-6 text-[10px] text-slate-400 font-medium">
              <FiLock size={12} />
              We use secure OAuth 2.0 authentication and never store your password.
            </div>

          </div>
        </motion.div>

      </main>

      {/* Centered Logout Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="bg-red-50 p-4 rounded-full text-red-500 mb-4">
                <FiLock size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">Ready to Leave?</h3>
              <p className="text-slate-500 font-medium mb-8 text-sm px-4">
                Are you sure you want to go back? This action will securely log you out of your VoiceBridge account.
              </p>
              <div className="flex gap-4 w-full">
                <button 
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    localStorage.removeItem('userInfo');
                    navigate('/');
                    setTimeout(() => toast.success('Logged out successfully'), 100);
                  }}
                  className="flex-1 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-200 transition-colors"
                >
                  Yes, Log Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
