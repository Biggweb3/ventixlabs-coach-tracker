import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AssignGig } from './pages/AssignGig';
import { Notifications } from './pages/Notifications';
import { SettingsPage } from './pages/Settings';
import { Projects } from './pages/Projects';
import { Inbox } from './pages/Inbox';
import { CoachProfile } from './pages/CoachProfile';
import { Sidebar, Header } from './components/Layout';
import { AddCoachModal } from './components/AddCoachModal';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isAddCoachOpen, setIsAddCoachOpen] = useState(false);

  // Handle the virtual route for adding a coach
  React.useEffect(() => {
    if (location.pathname === '/coaches/add') {
      setIsAddCoachOpen(true);
    } else {
      setIsAddCoachOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isAdmin={true} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isAdmin={true} />
        <main className="flex-1 overflow-y-auto flex flex-col">
          {children}
        </main>
      </div>
      <AddCoachModal 
        isOpen={isAddCoachOpen} 
        onClose={() => window.history.back()} 
      />
    </div>
  );
};

const ViewerLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar isAdmin={false} />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header isAdmin={false} />
      <main className="flex-1 overflow-y-auto flex flex-col">
        {children}
      </main>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><Dashboard isAdmin={true} /></AdminLayout>} />
        <Route path="/inbox" element={<AdminLayout><Inbox /></AdminLayout>} />
        <Route path="/coaches" element={<AdminLayout><Dashboard isAdmin={true} /></AdminLayout>} />
        <Route path="/coaches/:id" element={<AdminLayout><CoachProfile /></AdminLayout>} />
        <Route path="/coaches/add" element={<AdminLayout><Dashboard isAdmin={true} /></AdminLayout>} />
        <Route path="/projects" element={<AdminLayout><Projects /></AdminLayout>} />
        <Route path="/projects/assign" element={<AdminLayout><AssignGig /></AdminLayout>} />
        <Route path="/notifications" element={<AdminLayout><Notifications /></AdminLayout>} />
        <Route path="/settings" element={<AdminLayout><SettingsPage /></AdminLayout>} />
        
        {/* Viewer Routes */}
        <Route path="/viewer" element={<ViewerLayout><Dashboard isAdmin={false} /></ViewerLayout>} />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
