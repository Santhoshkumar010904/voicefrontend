import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { BiUser, BiEnvelope, BiLockAlt, BiHide, BiShow, BiMicrophone } from 'react-icons/bi';
import { MdOutlineGraphicEq, MdSecurity } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fix the errors to login.', { duration: 5000 });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful! Redirecting...', { duration: 5000 });
        localStorage.setItem('userInfo', JSON.stringify(data));
        
        setTimeout(() => {
          // If they already connected Gmail previously, go straight to Dashboard
          const hasGmail = localStorage.getItem('gmailToken');
          if (hasGmail) {
            navigate('/dashboard');
          } else {
            navigate('/connect-gmail');
          }
        }, 2000);
      } else {
        toast.error(data.message || 'Invalid credentials');
      }
    } catch (error) {
      toast.error('Unable to connect to server');
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
      <main className="flex-1 flex flex-row items-center justify-center w-full max-w-[1250px] mx-auto px-8 z-10 gap-16 h-full">
        
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
            VoiceBridge is an AI-powered voice-based email assistant that helps blind and differently-abled users to read, write, and manage emails in their own language.
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
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">We respect your privacy.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section (Login Form) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="flex-[0.55] h-full flex items-center justify-center py-6"
        >
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 lg:p-10 max-h-full overflow-y-auto overflow-x-hidden scrollbar-hide relative">
            
            {/* Form Back Button */}
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 flex items-center justify-center w-8 h-8 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-slate-500 hover:text-indigo-600 transition-colors"
              title="Go Back"
            >
              <FiArrowLeft size={16} strokeWidth={3} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pr-10">
              <div className="bg-indigo-50 p-3 rounded-full text-indigo-600 shrink-0">
                <BiUser size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Welcome Back!</h2>
                <p className="text-xs text-slate-500 font-medium mt-1">Login to continue to VoiceBridge</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <BiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address" 
                    className={`w-full bg-slate-50 border text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 font-medium ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'}`} 
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <div className="relative">
                  <BiLockAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password" 
                    className={`w-full bg-slate-50 border text-sm rounded-xl pl-10 pr-10 py-3 outline-none focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 font-medium ${errors.password ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'}`} 
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPassword ? <BiShow size={18} /> : <BiHide size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.password}</p>}
              </div>

              {/* Forgot Password and Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="rememberMe" 
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
                  />
                  <label htmlFor="rememberMe" className="text-[11px] text-slate-600 font-medium cursor-pointer">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-[11px] text-indigo-600 font-bold hover:underline">
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md shadow-indigo-200 hover:shadow-lg flex items-center justify-center gap-2 mt-2">
                Login
                <FiArrowRight size={16} />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 h-px bg-slate-100"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">or</span>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>

              {/* Google Login */}
              <button type="button" className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
                <FcGoogle size={18} />
                Continue with Google
              </button>

              {/* Register Link */}
              <div className="text-center pt-2">
                <p className="text-xs text-slate-500 font-medium">
                  Don't have an account? <button type="button" onClick={() => navigate('/register')} className="text-indigo-600 font-bold hover:underline">Register</button>
                </p>
              </div>

            </form>
          </div>
        </motion.div>

      </main>
      
      {/* Scrollbar hide styling via inline style to prevent needing a tailwind plugin */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
