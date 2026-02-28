import React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical, Eye } from 'lucide-react';
import { MOCK_COACHES } from '../types';
import { cn } from '../utils';

interface DashboardProps {
  isAdmin?: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ isAdmin = true }) => {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-background-light">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Gig Overview</h2>
        <p className="text-slate-500 mt-1">Monitor real-time coaching capacity and active gig distribution.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Coaches</p>
          <h3 className="text-2xl font-black mt-2">24</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Gigs</p>
          <h3 className="text-2xl font-black mt-2 text-primary">38 <span className="text-sm font-normal text-slate-400">/ 48 capacity</span></h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg. Load</p>
          <h3 className="text-2xl font-black mt-2">1.58</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">On Cooldown</p>
          <h3 className="text-2xl font-black mt-2 text-amber-500">6</h3>
        </div>
      </div>

      {/* Gig Table Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Coach Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Skillsets</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Current Gigs</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_COACHES.map((coach) => (
                <tr 
                  key={coach.id} 
                  className={cn(
                    "hover:bg-slate-50 transition-colors",
                    coach.status === 'Cooldown' && "bg-amber-50/50 border-l-4 border-amber-500"
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img alt={coach.name} className="h-9 w-9 rounded-lg object-cover" src={coach.avatar} />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{coach.name}</p>
                        <p className="text-[10px] text-slate-500">{coach.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {coach.skillsets.map(skill => (
                        <span key={skill} className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold rounded text-slate-600">{skill}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1 mb-1">
                      <div 
                        className={cn(
                          "h-full",
                          coach.status === 'Cooldown' ? "bg-amber-500 w-full" : "bg-primary",
                          coach.status === 'Active' && "w-1/2",
                          coach.status === 'Available' && "w-0"
                        )}
                      />
                    </div>
                    <p className={cn(
                      "text-xs",
                      coach.status === 'Cooldown' ? "text-amber-600 font-medium" : "text-slate-500"
                    )}>
                      {coach.status === 'Cooldown' ? 'Max capacity (2/2)' : `${coach.currentGigs}/${coach.maxGigs} gigs assigned`}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                      coach.status === 'Active' && "bg-emerald-100 text-emerald-800",
                      coach.status === 'Cooldown' && "bg-amber-100 text-amber-800 border border-amber-200 font-bold",
                      coach.status === 'Available' && "bg-blue-100 text-blue-800",
                      coach.status === 'On Leave' && "bg-slate-100 text-slate-800"
                    )}>
                      {coach.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        to={`/coaches/${coach.id}`}
                        className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all"
                      >
                        <Eye size={18} />
                      </Link>
                      <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Showing 1 to 4 of 24 coaches</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-slate-200 text-xs font-bold hover:bg-white disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded bg-primary text-white text-xs font-bold">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
