import React from 'react';
import { Mail, Search, Filter, Star, Trash2, Archive, Reply } from 'lucide-react';
import { cn } from '../utils';

const MOCK_MESSAGES = [
  {
    id: '1',
    sender: 'Sarah Jenkins',
    subject: 'Gig Update: Project Alpha',
    preview: 'Hi team, I just wanted to update you on the progress of Project Alpha...',
    time: '10:24 AM',
    unread: true,
    starred: true,
  },
  {
    id: '2',
    sender: 'System Alert',
    subject: 'New Coach Signup',
    preview: 'A new coach has just signed up and is awaiting approval...',
    time: '9:15 AM',
    unread: false,
    starred: false,
  },
  {
    id: '3',
    sender: 'Michael Chen',
    subject: 'Availability for Q3',
    preview: 'I am updating my availability for the upcoming quarter...',
    time: 'Yesterday',
    unread: false,
    starred: false,
  },
];

export const Inbox: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Inbox</h1>
          <p className="text-white/60">Manage your communications and alerts</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search messages..."
              className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white/20 w-full md:w-64"
            />
          </div>
          <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-white/60 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="divide-y divide-white/10">
          {MOCK_MESSAGES.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "p-4 flex items-start gap-4 cursor-pointer transition-colors hover:bg-white/[0.02]",
                msg.unread && "bg-white/[0.03]"
              )}
            >
              <div className="flex-shrink-0 mt-1">
                <button className={cn("p-1 rounded hover:bg-white/10 transition-colors", msg.starred ? "text-yellow-500" : "text-white/20")}>
                  <Star className="w-4 h-4" fill={msg.starred ? "currentColor" : "none"} />
                </button>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={cn("text-sm font-medium truncate", msg.unread ? "text-white" : "text-white/60")}>
                    {msg.sender}
                  </h3>
                  <span className="text-xs text-white/40">{msg.time}</span>
                </div>
                <h4 className={cn("text-sm mb-1 truncate", msg.unread ? "text-white font-semibold" : "text-white/80")}>
                  {msg.subject}
                </h4>
                <p className="text-sm text-white/40 truncate">{msg.preview}</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">
                  <Reply className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
