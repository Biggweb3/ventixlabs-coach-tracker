import React from 'react';
import { X, Upload, Info, ArrowRight, User } from 'lucide-react';

interface AddCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCoachModal: React.FC<AddCoachModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-[560px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Add New Coach</h2>
            <p className="text-slate-500 mt-1">Fill in the profile details to register a new coach on the platform.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <div className="px-8 py-4 space-y-6 overflow-y-auto max-h-[70vh]">
          {/* Profile Picture Upload Area */}
          <div className="flex flex-col items-center justify-center py-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
                <User className="text-slate-400" size={32} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload className="text-primary" size={24} />
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-sm font-semibold text-slate-900">Profile Photo</p>
              <p className="text-xs text-slate-500">JPG, PNG or GIF. Max 5MB.</p>
            </div>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Alexander Pierce" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400" placeholder="alexander@agency.com" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Skillsets</label>
              <div className="relative">
                <select className="w-full min-h-[110px] p-2 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" multiple>
                  <option className="py-1 px-2 rounded hover:bg-primary/10" value="smm">Social Media Management (SMM)</option>
                  <option className="py-1 px-2 rounded hover:bg-primary/10" value="webdev">Web Development</option>
                  <option className="py-1 px-2 rounded hover:bg-primary/10" value="branding">Branding & Identity</option>
                  <option className="py-1 px-2 rounded hover:bg-primary/10" value="seo">SEO Optimization</option>
                  <option className="py-1 px-2 rounded hover:bg-primary/10" value="content">Content Strategy</option>
                  <option className="py-1 px-2 rounded hover:bg-primary/10" value="copy">Copywriting</option>
                </select>
                <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1">
                  <Info size={12} />
                  Hold Ctrl (Cmd) to select multiple options
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div>
                <p className="text-sm font-semibold text-slate-900">Monthly Gig Limit</p>
                <p className="text-xs text-slate-500">Maximum active projects allowed</p>
              </div>
              <input className="w-16 h-10 text-center rounded-lg border border-slate-200 bg-white focus:ring-primary outline-none" type="number" defaultValue={5} />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-8 py-6 mt-4 flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="px-8 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
            <span>Create Coach</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
