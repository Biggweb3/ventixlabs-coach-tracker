import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield, History, Verified, Rocket } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'admin' | 'viewer'>('admin');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'admin') {
      navigate('/admin');
    } else {
      navigate('/viewer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#101622] relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(at_0%_0%,rgba(19,91,236,0.15)_0px,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(at_100%_100%,rgba(19,91,236,0.1)_0px,transparent_50%)]" />
      </div>

      <header className="w-full border-b border-slate-800 bg-white/5 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Rocket size={20} />
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">Ventixlabs</h2>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-5 rounded-lg transition-all shadow-lg shadow-primary/20">
            Contact Sales
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Agency Portal</h1>
            <p className="text-slate-400 text-sm">Private section for team</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex border-b border-slate-800">
              <button 
                onClick={() => setActiveTab('admin')}
                className={`flex-1 py-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'admin' 
                    ? "border-primary text-primary bg-primary/5" 
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                Admin Login
              </button>
              <button 
                onClick={() => setActiveTab('viewer')}
                className={`flex-1 py-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'viewer' 
                    ? "border-primary text-primary bg-primary/5" 
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                Viewer Login
              </button>
            </div>

            <div className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      required
                      className="w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-500" 
                      placeholder="Enter your agency email" 
                      type="email" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-slate-300">Password</label>
                    <button type="button" className="text-xs font-semibold text-primary hover:underline">Forgot password?</button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      required
                      className="w-full pl-11 pr-12 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-slate-500" 
                      placeholder="Enter your password" 
                      type={showPassword ? "text" : "password"} 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input className="w-4 h-4 rounded border-slate-700 text-primary focus:ring-primary bg-slate-800" id="remember" type="checkbox" />
                  <label className="ml-2 text-sm text-slate-400" htmlFor="remember">Keep me logged in for 30 days</label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                >
                  <span>Sign In to Dashboard</span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">Enterprise Security Enabled</p>
                <div className="flex justify-center gap-4 text-slate-600">
                  <Shield size={20} title="2FA Ready" />
                  <Verified size={20} title="SSL Encrypted" />
                  <History size={20} title="Activity Logs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-xs text-slate-600">© 2026 Ventixlabs. All rights reserved.</p>
      </footer>
    </div>
  );
};
