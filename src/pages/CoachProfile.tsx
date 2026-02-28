import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Star, 
  Shield,
  ExternalLink,
  Clock,
  CheckCircle
} from 'lucide-react';
import { MOCK_COACHES } from '../types';
import { cn } from '../utils';

export const CoachProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const coach = MOCK_COACHES.find(c => c.id === id);

  if (!coach) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-white">
        <p className="text-xl font-bold mb-4">Coach not found</p>
        <Link to="/admin" className="text-indigo-400 hover:text-indigo-300">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/admin" className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors mb-2">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <div className="relative inline-block mb-4">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className={cn(
                "absolute bottom-2 right-2 w-6 h-6 rounded-full border-2 border-[#0A0A0A]",
                coach.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'
              )} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">{coach.name}</h1>
            <p className="text-white/60 mb-4">{coach.email}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {coach.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-colors">
                Message
              </button>
              <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-medium transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/60 text-sm">
                <Mail className="w-4 h-4 mr-3" />
                {coach.email}
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <Phone className="w-4 h-4 mr-3" />
                +1 (555) 000-0000
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <MapPin className="w-4 h-4 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Gigs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Current Load</p>
              <p className="text-2xl font-bold text-white">{coach.currentGigs} / {coach.gigLimit}</p>
              <div className="mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 rounded-full" 
                  style={{ width: `${(coach.currentGigs / coach.gigLimit) * 100}%` }}
                />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-white">98%</p>
              <div className="flex items-center mt-1 text-emerald-400 text-xs">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Top Rated
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Experience</p>
              <p className="text-2xl font-bold text-white">4.5 Years</p>
              <p className="text-white/40 text-xs mt-1">Joined Jan 2020</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Active Projects</h3>
              <Link to="/projects/assign" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">
                Assign New
              </Link>
            </div>
            <div className="divide-y divide-white/10">
              {[1, 2].map((i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Project {i === 1 ? 'Alpha' : 'Beta'}</h4>
                      <p className="text-white/40 text-sm">Client: {i === 1 ? 'TechCorp' : 'GlobalSoft'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-white text-sm font-medium">85% Complete</p>
                      <p className="text-white/40 text-xs">Due in 12 days</p>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Performance History</h3>
            <div className="space-y-4">
              {[
                { label: 'Completed Gigs', value: '142', icon: CheckCircle, color: 'text-emerald-400' },
                { label: 'Avg. Response Time', value: '2.4 Hours', icon: Clock, color: 'text-indigo-400' },
                { label: 'Client Satisfaction', value: '4.9/5.0', icon: Star, color: 'text-amber-400' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-5 h-5", item.color)} />
                    <span className="text-white/80 text-sm">{item.label}</span>
                  </div>
                  <span className="text-white font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
