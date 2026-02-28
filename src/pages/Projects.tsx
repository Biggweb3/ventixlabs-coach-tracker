import React from 'react';
import { cn } from '../utils';
import { Briefcase, Plus, Search, Filter, MoreVertical, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects: React.FC = () => {
  const projects = [
    { id: '1', name: 'Zenith Corp Branding', client: 'Zenith Corp', coach: 'Alex Rivera', status: 'In Progress', progress: 65, deadline: 'Mar 15, 2026' },
    { id: '2', name: 'Technical Audit - Alpha', client: 'Alpha Systems', coach: 'Sarah Chen', status: 'Review', progress: 90, deadline: 'Mar 10, 2026' },
    { id: '3', name: 'SMM Strategy Q1', client: 'Global Retail', coach: 'Jordan Lee', status: 'In Progress', progress: 30, deadline: 'Apr 05, 2026' },
    { id: '4', name: 'SEO Optimization', client: 'TechFlow', coach: 'Marcus Vane', status: 'Completed', progress: 100, deadline: 'Feb 20, 2026' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-background-light">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Projects</h2>
          <p className="text-slate-500 mt-1">Manage and track all active coaching engagements.</p>
        </div>
        <Link 
          to="/projects/assign"
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-primary/20 transition-all"
        >
          <Plus size={20} />
          Assign New Gig
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="Search projects..." />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Project Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Coach</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-900">{project.name}</p>
                    <p className="text-[10px] text-slate-500">Deadline: {project.deadline}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{project.client}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{project.coach}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-full transition-all duration-500" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-500">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase",
                      project.status === 'Completed' ? "bg-emerald-100 text-emerald-700" : 
                      project.status === 'Review' ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"
                    )}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
