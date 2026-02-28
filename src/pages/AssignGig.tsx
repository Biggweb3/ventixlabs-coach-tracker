import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Briefcase, 
  UserSearch, 
  Info, 
  Calendar as CalendarIcon, 
  CheckCircle,
  FileText,
  Users
} from 'lucide-react';

export const AssignGig: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd save the data
    navigate('/admin');
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-background-light">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          <Link to="/admin" className="text-slate-500 hover:text-primary transition-colors">Gigs</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 font-medium">Assign New Gig</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">Assign New Gig</h1>
          <p className="text-slate-500 text-base">Allocate a project to an available coach and manage their workload capacity.</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          {/* Card Hero Section */}
          <div className="relative h-48 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent"></div>
            <img 
              className="w-full h-full object-cover mix-blend-overlay opacity-40" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop" 
              alt="Office"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-md">
                <FileText className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-slate-900 text-lg font-bold">Gig Assignment Form</h3>
                <p className="text-slate-500 text-sm">Fill in the details below to initialize the project.</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-8">
            {/* Coach Selection Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <UserSearch className="text-primary" size={20} />
                <h4 className="font-semibold text-slate-900">Coach Selection</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Select Coach</span>
                  <div className="relative">
                    <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:border-primary focus:ring-primary transition-all appearance-none pr-10 pl-4">
                      <option disabled selected value="">Search and select a coach...</option>
                      <option value="1">Alex Rivera (1/2 Gigs)</option>
                      <option value="2">Sarah Chen (0/2 Gigs)</option>
                      <option value="3">Marcus Wright (2/2 Gigs - Unavailable)</option>
                      <option value="4">Jordan Smith (1/3 Gigs)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight className="rotate-90" size={20} />
                    </div>
                  </div>
                </label>

                {/* Cooldown Warning Banner */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <Info className="text-amber-600 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-bold text-amber-900">Cooldown Warning</p>
                    <p className="text-sm text-amber-800 leading-snug">
                      Assigning this gig will move this coach to Cooldown as they will reach their maximum capacity of 2/2 gigs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Gig Details Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Info className="text-primary" size={20} />
                <h4 className="font-semibold text-slate-900">Gig Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Client Name</span>
                  <input 
                    required
                    className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:border-primary focus:ring-primary transition-all px-4" 
                    placeholder="Enter client or company name" 
                    type="text" 
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-700">Service Category</span>
                  <div className="relative">
                    <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:border-primary focus:ring-primary transition-all appearance-none pr-10 pl-4">
                      <option disabled selected value="">Select category</option>
                      <option value="strategic">Strategic Coaching</option>
                      <option value="technical">Technical Training</option>
                      <option value="leadership">Leadership Dev</option>
                      <option value="operations">Operational Audit</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight className="rotate-90" size={20} />
                    </div>
                  </div>
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Project Duration</span>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <input className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:border-primary focus:ring-primary transition-all px-4" type="date" />
                      <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={18} />
                    </div>
                    <div className="relative">
                      <input className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 h-12 focus:border-primary focus:ring-primary transition-all px-4" type="date" />
                      <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={18} />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Select start and estimated end date for this project.</p>
                </label>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-100 mt-4">
              <button 
                type="button"
                onClick={() => navigate('/admin')}
                className="px-6 h-12 rounded-lg text-slate-600 font-semibold hover:bg-slate-100 transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-8 h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:opacity-90 transition-all flex items-center gap-2"
              >
                <CheckCircle size={20} />
                Confirm Assignment
              </button>
            </div>
          </form>
        </div>

        {/* Additional Context Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 flex flex-col gap-3">
            <Users className="text-primary" size={24} />
            <h5 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Active Coaches</h5>
            <p className="text-2xl font-black text-slate-900">24</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 flex flex-col gap-3">
            <History className="text-amber-500" size={24} />
            <h5 className="font-bold text-sm text-slate-900 uppercase tracking-wider">In Cooldown</h5>
            <p className="text-2xl font-black text-slate-900">8</p>
          </div>
          <div className="p-5 rounded-xl border border-slate-200 bg-white/50 flex flex-col gap-3">
            <CheckCircle className="text-emerald-500" size={24} />
            <h5 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Free Capacity</h5>
            <p className="text-2xl font-black text-slate-900">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};
