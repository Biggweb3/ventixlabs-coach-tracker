import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils';
import { 
  LayoutDashboard, 
  Mail, 
  Users, 
  Briefcase, 
  Settings, 
  Rocket,
  Search,
  Bell,
  HelpCircle,
  Menu,
  X,
  Plus,
  Eye
} from 'lucide-react';

interface SidebarProps {
  isAdmin?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isAdmin = true }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: isAdmin ? '/admin' : '/viewer' },
    { icon: Mail, label: 'Inbox', path: '/notifications', badge: 4 },
    { icon: Users, label: 'Coaches', path: '/coaches' },
    { icon: Briefcase, label: 'Projects', path: '/projects' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform lg:translate-x-0 lg:static",
        !isOpen && "-translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-1.5 rounded-lg">
              <Rocket className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-slate-900">
                {isAdmin ? 'Admin panel' : 'Viewer panel'}
              </h1>
              <p className="text-xs text-slate-500">Ventixlabs</p>
            </div>
          </div>

          <nav className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Main Menu</p>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  location.pathname === item.path 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-200">
          {!isAdmin && (
            <div className="mb-6 p-4 rounded-xl bg-slate-100 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Restricted Access</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                You are in viewer mode. Contact your admin to request editing permissions.
              </p>
            </div>
          )}
          {bottomItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                location.pathname === item.path 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export const Header: React.FC<SidebarProps> = ({ isAdmin = true }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-500" 
            placeholder="Search coaches, skills or gigs..." 
            type="text" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {isAdmin ? (
          <Link 
            to="/coaches/add"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            <Plus size={18} />
            Add Coach
          </Link>
        ) : (
          <div className="flex items-center px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200">
            <Eye className="text-amber-600 mr-1.5" size={14} />
            <span className="text-amber-700 text-xs font-bold uppercase tracking-wider">View Only</span>
          </div>
        )}
        
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900">{isAdmin ? 'Alex Admin' : 'Alex Johnson'}</p>
            <p className="text-[10px] text-slate-500">{isAdmin ? 'Super User' : 'Viewer Role'}</p>
          </div>
          <img 
            alt="User Profile" 
            className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/20" 
            src={isAdmin 
              ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
              : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            } 
          />
        </div>
      </div>
    </header>
  );
};
