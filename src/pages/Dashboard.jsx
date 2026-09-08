import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, FiInbox, FiEdit3, FiMic, FiSend, FiFileText, 
  FiStar, FiAlertCircle, FiTrash2, FiSettings, FiHelpCircle,
  FiCheckCircle, FiChevronDown, FiMail, FiSearch, FiTag
} from 'react-icons/fi';
import { MdOutlineGraphicEq } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo || !userInfo.token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/dashboard`, {
          headers: {
            'Authorization': `Bearer ${userInfo.token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setDashboardData(data);
        } else {
          // If token fails, log out
          localStorage.removeItem('userInfo');
          navigate('/login');
        }
      } catch (error) {
        console.error("Failed to fetch dashboard", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [navigate]);

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

  const getFirstName = (fullName) => {
    if (!fullName) return '';
    return fullName.split(' ')[0];
  };

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center bg-slate-50 text-indigo-600 font-bold">Loading VoiceBridge...</div>;
  }

  const firstName = getFirstName(dashboardData?.user?.name || 'User');

  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden font-sans select-none">
      
      {/* Electron Title Bar - Draggable */}
      <div className="flex justify-between items-center px-6 py-2 w-full border-b border-gray-100 z-50 bg-white sticky top-0" >
        <div className="flex items-center gap-3 w-64" >
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 p-1.5 rounded-full text-white shadow-md">
            <MdOutlineGraphicEq size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">VoiceBridge</span>
        </div>
        
        {/* Window Controls - Non-draggable */}
        
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar unreadCount={24} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Top Navbar */}
          <header className="w-full flex justify-end items-center px-8 pt-6 pb-2">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-white px-3 py-1.5 rounded-full border border-transparent hover:border-slate-200 transition-all">
              <div className="w-7 h-7 rounded-full border-2 border-indigo-100 flex items-center justify-center bg-indigo-50 text-indigo-600 font-bold text-xs">
                {firstName.charAt(0)}
              </div>
              <span className="text-sm font-bold text-slate-700">Welcome, {firstName}</span>
              <FiChevronDown className="text-slate-400" size={14} />
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide px-8 pt-2">
            
            {/* Hero Section */}
            <div className="flex items-center justify-between mb-10 relative">
              <div>
                <h1 className="text-4xl font-black text-slate-800 tracking-tight">Good Morning, {firstName}! <span className="text-3xl">👋</span></h1>
                <p className="text-slate-500 font-medium mt-2">Your voice assistant is ready to help you.</p>
              </div>

              {/* Graphic right */}
              <div className="flex items-center gap-6 relative">
                {/* Wave background visualization */}
                <div className="absolute right-[120%] w-[300px] h-20 opacity-40 pointer-events-none">
                  <svg viewBox="0 0 500 100" className="w-full h-full stroke-indigo-400 fill-none" preserveAspectRatio="none">
                     <path d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50" strokeWidth="2" />
                     <path d="M0,50 Q75,100 150,50 T300,50 T450,50 T500,50" strokeWidth="1.5" className="opacity-60" />
                  </svg>
                </div>
                
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-200 flex items-center justify-center border-4 border-white">
                  <FiMic size={32} className="text-white drop-shadow-md" />
                  <div className="absolute inset-[-10px] border border-indigo-200 rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 min-w-[160px] relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <FiMic className="text-indigo-600" size={14} />
                    <span className="text-xs font-bold text-slate-800">Voice Status</span>
                  </div>
                  <div className="text-indigo-600 text-sm font-bold mb-2">Listening...</div>
                  <div className="flex gap-1 items-end h-3">
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                      <motion.div 
                        key={i} 
                        className="w-1 bg-indigo-400 rounded-t-full"
                        animate={{ height: ["20%", "100%", "40%"] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Carousel */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-slate-800 mb-4">What would you like to do?</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                
                <div className="min-w-[200px] bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:bg-white transition-all cursor-pointer flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl shrink-0"><FiMail size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Read Emails</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">Listen to your emails</p>
                  </div>
                </div>

                <div className="min-w-[200px] bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:bg-white transition-all cursor-pointer flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0"><FiEdit3 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Compose Email</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">Write and send with your voice</p>
                  </div>
                </div>

                <div className="min-w-[200px] bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:bg-white transition-all cursor-pointer flex items-start gap-4">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl shrink-0"><FiFileText size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Summarize</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">Get quick AI summaries</p>
                  </div>
                </div>

                <div className="min-w-[200px] bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:bg-white transition-all cursor-pointer flex items-start gap-4">
                  <div className="bg-orange-100 text-orange-500 p-3 rounded-xl shrink-0"><FiSearch size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Search Emails</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">Find emails instantly</p>
                  </div>
                </div>

                <div className="min-w-[200px] bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:bg-white transition-all cursor-pointer flex items-start gap-4">
                  <div className="bg-pink-100 text-pink-500 p-3 rounded-xl shrink-0"><FiTag size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Manage Email</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">Organize and manage easily</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Recent Activity */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activity</h3>
                <div className="space-y-6">
                  {dashboardData?.recentActivity?.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`${activity.color} ${activity.iconColor} p-3 rounded-xl`}>
                          {activity.type === 'read' && <FiMail size={18} />}
                          {activity.type === 'compose' && <FiEdit3 size={18} />}
                          {activity.type === 'summarize' && <FiFileText size={18} />}
                          {activity.type === 'search' && <FiSearch size={18} />}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">{activity.title}</h4>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">{activity.description}</p>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-slate-400">{activity.time}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                  View all activity &rarr;
                </button>
              </div>

              {/* Right Column Grid */}
              <div className="flex flex-col gap-6">
                
                {/* Daily Overview */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-800">Daily Overview</h3>
                    <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700">View Analytics &rarr;</button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
                      <div className="bg-indigo-100 text-indigo-600 p-2.5 rounded-xl"><FiMail size={18} /></div>
                      <div>
                        <div className="text-xl font-black text-slate-800 leading-none">{dashboardData?.stats?.emailsReceived}</div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Emails Received</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
                      <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl"><FiSend size={18} /></div>
                      <div>
                        <div className="text-xl font-black text-slate-800 leading-none">{dashboardData?.stats?.emailsSent}</div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Emails Sent</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
                      <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-xl"><FiFileText size={18} /></div>
                      <div>
                        <div className="text-xl font-black text-slate-800 leading-none">{dashboardData?.stats?.summariesGenerated}</div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Summaries Generated</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
                      <div className="bg-orange-100 text-orange-500 p-2.5 rounded-xl"><FiMic size={18} /></div>
                      <div>
                        <div className="text-xl font-black text-slate-800 leading-none">{dashboardData?.stats?.voiceCommands}</div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-1">Voice Commands</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100 relative overflow-hidden flex-1 flex flex-col justify-center">
                  <div className="absolute right-[-20%] bottom-[-50%] w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="text-3xl text-indigo-300 font-serif leading-none mb-2">"</div>
                  <p className="text-sm font-bold text-slate-700 relative z-10">
                    Technology should empower everyone. Voice is the bridge to independence.
                  </p>
                  <p className="text-xs font-bold text-indigo-600 mt-3">— VoiceBridge</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Fixed Input Bar */}
          <div className="px-8 pb-6 pt-4 shrink-0 bg-slate-50">
            <div className="bg-white border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] rounded-full p-2 flex items-center">
              <button className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white shadow-md transition-colors shrink-0">
                <FiMic size={20} />
              </button>
              <input 
                type="text" 
                placeholder="Tap the mic or type a command..." 
                className="flex-1 bg-transparent border-none focus:outline-none px-4 text-sm font-medium text-slate-700 placeholder:text-slate-400"
              />
              <div className="flex items-center gap-2 pr-2 shrink-0">
                <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path><path d="M7 16h10"></path></svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                  <FiSend size={18} />
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
