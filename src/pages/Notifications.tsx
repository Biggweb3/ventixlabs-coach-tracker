import React, { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  UserPlus, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  History,
  Search,
  Settings as SettingsIcon,
  MoreVertical
} from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../types';
import { cn } from '../utils';

export const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All Alerts' | 'Gig Limits' | 'New Signups' | 'System Events'>('All Alerts');

  const filteredNotifications = activeTab === 'All Alerts' 
    ? MOCK_NOTIFICATIONS 
    : MOCK_NOTIFICATIONS.filter(n => n.category === activeTab);

  const getIcon = (type: string) => {
    switch (type) {
      case 'Gig Limit reached': return <AlertTriangle className="text-amber-600" size={24} />;
      case 'New Coach': return <UserPlus className="text-primary" size={24} />;
      case 'Security Alert': return <Shield className="text-rose-600" size={24} />;
      case 'Gig Completed': return <CheckCircle className="text-indigo-600" size={24} />;
      default: return <Bell size={24} />;
    }
  };

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'Gig Limit reached': return "bg-amber-100 text-amber-700 border-amber-200";
      case 'New Coach': return "bg-primary/10 text-primary border-primary/20";
      case 'Security Alert': return "bg-rose-100 text-rose-700 border-rose-200";
      case 'Gig Completed': return "bg-slate-100 text-slate-500 border-slate-200";
      default: return "bg-slate-100 text-slate-500 border-slate-200";
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background-light overflow-y-auto">
      {/* Page Header */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-900 text-3xl font-black leading-tight tracking-tight">Notifications & Alerts</h2>
          <p className="text-slate-500 text-base max-w-xl">Monitor coach activity, gig limits, and system health in real-time to ensure optimal agency operations.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors">
            <CheckCircle size={18} />
            Mark all as read
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 md:px-8">
        <div className="flex border-b border-slate-200 gap-8 overflow-x-auto no-scrollbar">
          {['All Alerts', 'Gig Limits', 'New Signups', 'System Events'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={cn(
                "flex flex-col items-center justify-center border-b-2 pb-3 transition-colors whitespace-nowrap px-1 text-sm font-bold",
                activeTab === tab ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <div className="p-6 md:p-8 flex flex-col gap-4">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id}
            className={cn(
              "group flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl bg-white p-5 shadow-sm border border-slate-200 hover:border-primary/50 transition-all",
              notification.read && "opacity-75 grayscale-[0.5]"
            )}
          >
            <div className="flex flex-1 gap-4">
              <div className={cn(
                "flex-shrink-0 size-12 rounded-full flex items-center justify-center",
                notification.type === 'Gig Limit reached' && "bg-amber-500/10",
                notification.type === 'New Coach' && "bg-primary/10",
                notification.type === 'Security Alert' && "bg-rose-500/10",
                notification.type === 'Gig Completed' && "bg-indigo-500/10"
              )}>
                {getIcon(notification.type)}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border",
                    getBadgeClass(notification.type)
                  )}>
                    {notification.type}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{notification.time}</span>
                </div>
                <p className="text-slate-900 text-base font-bold leading-tight">{notification.title}</p>
                <p className="text-slate-500 text-sm">{notification.description}</p>
                <div className="mt-4">
                  {notification.type === 'Gig Limit reached' && (
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-700 hover:bg-primary hover:text-white transition-all">
                      View Coach Profile
                      <ArrowRight size={14} />
                    </button>
                  )}
                  {notification.type === 'New Coach' && (
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                      Review Onboarding
                      <CheckCircle size={14} />
                    </button>
                  )}
                  {notification.type === 'Security Alert' && (
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-700 hover:bg-rose-600 hover:text-white transition-all">
                      Review Security Log
                      <Shield size={14} />
                    </button>
                  )}
                  {notification.read && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                      <History size={12} />
                      Marked as read by Sarah C.
                    </span>
                  )}
                </div>
              </div>
            </div>
            {notification.image && (
              <div 
                className="w-full md:w-64 h-32 bg-slate-100 rounded-lg flex-shrink-0 relative overflow-hidden group-hover:opacity-90 transition-opacity" 
                style={{ backgroundImage: `url(${notification.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="p-8 flex justify-center border-t border-slate-200">
        <button className="px-6 py-2 rounded-lg border border-slate-300 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
          Load older notifications
        </button>
      </div>
    </div>
  );
};
