import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiHome, FiInbox, FiStar, FiAlertCircle, FiSend, 
  FiFileText, FiMail, FiTrash2, FiPaperclip 
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { MdOutlineGraphicEq } from 'react-icons/md';

export default function Sidebar({ unreadCount = 24 }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const mainNav = [
    { name: 'Home', path: '/dashboard', icon: FiHome },
    { name: 'Inbox', path: '/inbox', icon: FiInbox, badge: unreadCount, badgeActive: true },
    { name: 'Starred', path: '#', icon: FiStar },
    { name: 'Important', path: '#', icon: FiAlertCircle },
    { name: 'Sent', path: '#', icon: FiSend },
    { name: 'Drafts', path: '#', icon: FiFileText, badge: '7' },
    { name: 'All Mail', path: '#', icon: FiMail },
    { name: 'Spam', path: '#', icon: FiAlertCircle, badge: '12' },
    { name: 'Trash', path: '#', icon: FiTrash2 },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 flex flex-col overflow-hidden pb-6 bg-slate-50/50 h-full relative z-20">
      
      {/* Compose Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 shrink-0"
      >
        <motion.button 
          onClick={() => navigate('/compose')}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-indigo-500 text-white font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
        >
          <span className="text-lg leading-none">+</span> Compose
        </motion.button>
      </motion.div>

      {/* Navigation Links */}
      <motion.nav 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="space-y-1 px-3 mb-6 flex-1 flex flex-col"
      >
        {mainNav.map((item) => {
          const active = isActive(item.path);
          return (
            <motion.div 
              key={item.name}
              variants={itemVars}
              onClick={() => item.path !== '#' && navigate(item.path)}
              className="relative px-3 py-2.5 rounded-xl cursor-pointer group"
            >
              {/* Premium sliding background animation for active state */}
              {active && (
                <motion.div 
                  layoutId="activeSidebarTab"
                  className="absolute inset-0 bg-indigo-100/60 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={`transition-colors duration-300 ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                  <span className={`font-medium transition-colors duration-300 ${active ? 'text-indigo-700 font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {item.name}
                  </span>
                </div>
                {item.badge && (
                  <span className={`py-0.5 px-2 rounded-full text-xs font-bold transition-colors ${
                    active || item.badgeActive ? 'bg-indigo-500 text-white shadow-sm' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}

        <motion.div variants={itemVars} className="px-3 pt-4 pb-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
          Smart Views
        </motion.div>

        <motion.div variants={itemVars} className="relative px-3 py-2 rounded-xl cursor-pointer hover:bg-slate-100/50 group transition-colors flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-[18px] flex justify-center text-slate-400 text-lg group-hover:text-indigo-400 transition-colors">○</span> 
            <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Unread</span>
          </div>
          <span className="text-slate-500 text-xs font-bold group-hover:text-slate-700">{unreadCount}</span>
        </motion.div>

        <motion.div variants={itemVars} className="relative px-3 py-2 rounded-xl cursor-pointer hover:bg-slate-100/50 group transition-colors flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiPaperclip size={18} className="text-slate-400 group-hover:text-indigo-400 transition-colors" /> 
            <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Attachments</span>
          </div>
          <span className="text-slate-500 text-xs font-bold group-hover:text-slate-700">8</span>
        </motion.div>
      </motion.nav>

      {/* Gmail Connect Button at Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-auto px-4 shrink-0"
      >
        <motion.div 
          onClick={() => {
            localStorage.clear();
            window.location.href = '/';
          }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-between px-4 py-3 bg-white border border-slate-200 shadow-sm rounded-xl cursor-pointer hover:shadow-md transition-shadow"
          title="Click to Logout"
        >
          <div className="flex items-center gap-3 text-slate-700 font-bold text-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path fill="#4caf50" d="M21,7.2v10.3c0,1-0.8,1.8-1.8,1.8h-2.5V10.8L21,7.2z"/>
              <path fill="#1e88e5" d="M3,7.2v10.3C3,18.5,3.8,19.3,4.8,19.3h2.5V10.8L3,7.2z"/>
              <polygon fill="#e53935" points="16.7,10.8 12,14.3 7.3,10.8 7.3,6.2 12,9.7 16.7,6.2 "/>
              <path fill="#c62828" d="M3,12.3v3.9l10,7.48V11.2L3,12.3z"/>
              <path fill="#fbc02d" d="M21,12.3v3.9l-10,7.48V11.2L21,12.3z"/>
            </svg>
            <span className="text-red-500">Disconnect</span>
          </div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          ></motion.div>
        </motion.div>
      </motion.div>

    </aside>
  );
}
