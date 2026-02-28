import React from 'react';
import { 
  Palette, 
  Bell, 
  Shield, 
  CreditCard, 
  Cpu, 
  Search, 
  HelpCircle, 
  Plus, 
  Trash2,
  Image as ImageIcon,
  UserPlus
} from 'lucide-react';
import { cn } from '../utils';

export const SettingsPage: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-background-light overflow-y-auto">
      <main className="flex flex-1 gap-8 px-10 py-10 max-w-7xl mx-auto w-full flex-col lg:flex-row">
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className="text-slate-900 text-2xl font-extrabold tracking-tight">Settings</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your coaching platform preferences</p>
          </div>
          <nav className="flex flex-col gap-1">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 text-left">
              <Palette size={18} />
              <span className="text-sm font-semibold">Branding</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all text-left">
              <Bell size={18} />
              <span className="text-sm font-medium">Notifications</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all text-left">
              <Shield size={18} />
              <span className="text-sm font-medium">User Permissions</span>
            </button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-all text-left">
              <CreditCard size={18} />
              <span className="text-sm font-medium">Billing & Plans</span>
            </button>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col gap-8">
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-slate-900 text-lg font-bold">Identity & Branding</h2>
              <p className="text-slate-500 text-sm">Customize how your agency looks to clients and coaches.</p>
            </div>
            <div className="p-6 space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-32 h-32 rounded-2xl bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300">
                  <ImageIcon className="text-slate-400" size={32} />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-slate-900 font-semibold">Agency Logo</h3>
                    <p className="text-slate-500 text-sm">Recommended size: 512x512px. PNG, JPG or SVG.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-primary text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">Upload Logo</button>
                    <button className="bg-slate-100 text-slate-700 text-sm font-bold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors">Remove</button>
                  </div>
                </div>
              </div>
              <hr className="border-slate-200" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Primary Brand Color</label>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-20 rounded-lg bg-primary border border-slate-200"></div>
                    <input className="flex-1 bg-slate-100 border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary px-3 py-2" type="text" defaultValue="#135BEC" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">Secondary Accent Color</label>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-20 rounded-lg bg-slate-400 border border-slate-200"></div>
                    <input className="flex-1 bg-slate-100 border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary px-3 py-2" type="text" defaultValue="#94A3B8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 flex justify-end gap-3">
              <button className="text-slate-600 text-sm font-semibold px-4 py-2">Discard</button>
              <button className="bg-primary text-white text-sm font-bold py-2 px-6 rounded-lg">Save Changes</button>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-slate-900 text-lg font-bold">User Permissions</h2>
                <p className="text-slate-500 text-sm">Manage team access and assign administrative roles.</p>
              </div>
              <button className="flex items-center gap-2 bg-primary text-white text-sm font-bold py-2 px-4 rounded-lg">
                <UserPlus size={16} />
                Invite Member
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-500 text-xs uppercase tracking-wider bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 font-semibold">Team Member</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Role</th>
                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { name: 'Alex Rivera', email: 'alex@agencycontrol.com', role: 'Admin', status: 'Active', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
                    { name: 'Sarah Chen', email: 'sarah.c@agencycontrol.com', role: 'Viewer', status: 'Active', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
                    { name: 'Jordan Smith', email: 'jsmith@agencycontrol.com', role: 'Editor', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' }
                  ].map((member) => (
                    <tr key={member.email}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={member.avatar} className="size-10 rounded-full object-cover" alt={member.name} />
                          <div>
                            <p className="text-sm font-bold text-slate-900">{member.name}</p>
                            <p className="text-xs text-slate-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                          member.status === 'Active' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                        )}>
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select className="bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 p-0 cursor-pointer hover:text-primary transition-colors">
                          <option selected={member.role === 'Admin'}>Admin</option>
                          <option selected={member.role === 'Editor'}>Editor</option>
                          <option selected={member.role === 'Viewer'}>Viewer</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
