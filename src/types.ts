import { 
  LayoutDashboard, 
  Mail, 
  Users, 
  Briefcase, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  ChevronRight, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Download, 
  MoreVertical,
  Rocket,
  Shield,
  History,
  LogOut,
  UserPlus,
  Calendar,
  Layers,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Verified,
  MapPin
} from 'lucide-react';

export interface Coach {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  skillsets: string[];
  skills: string[]; // Alias for skillsets
  currentGigs: number;
  maxGigs: number;
  gigLimit: number; // Alias for maxGigs
  status: 'Active' | 'Cooldown' | 'Available' | 'On Leave';
  efficiency?: string;
}

export interface Gig {
  id: string;
  clientName: string;
  category: string;
  startDate: string;
  endDate: string;
  coachId: string;
}

export interface Notification {
  id: string;
  type: 'Gig Limit reached' | 'New Coach' | 'Security Alert' | 'Gig Completed';
  title: string;
  description: string;
  time: string;
  image?: string;
  read: boolean;
  category: 'Gig Limits' | 'New Signups' | 'System Events';
}

export const MOCK_COACHES: Coach[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    email: 'alex.rivera@ventixlabs.com',
    role: 'Senior Coach',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    skillsets: ['SMM', 'Content'],
    skills: ['SMM', 'Content'],
    currentGigs: 1,
    maxGigs: 2,
    gigLimit: 2,
    status: 'Active',
    efficiency: '98%'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah.chen@ventixlabs.com',
    role: 'Technical Lead',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    skillsets: ['Web Dev', 'UI/UX'],
    skills: ['Web Dev', 'UI/UX'],
    currentGigs: 2,
    maxGigs: 2,
    gigLimit: 2,
    status: 'Cooldown',
    efficiency: '94%'
  },
  {
    id: '3',
    name: 'Marcus Vane',
    email: 'marcus.vane@ventixlabs.com',
    role: 'SEO Specialist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    skillsets: ['SEO', 'Ads'],
    skills: ['SEO', 'Ads'],
    currentGigs: 0,
    maxGigs: 2,
    gigLimit: 2,
    status: 'Available',
    efficiency: 'N/A'
  },
  {
    id: '4',
    name: 'Jordan Lee',
    email: 'jordan.lee@ventixlabs.com',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    skillsets: ['SMM', 'Web Dev'],
    skills: ['SMM', 'Web Dev'],
    currentGigs: 2,
    maxGigs: 2,
    gigLimit: 2,
    status: 'Cooldown',
    efficiency: '99%'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'Gig Limit reached',
    title: 'Sarah Connor reached the 2-gig limit (Cooldown Active)',
    description: 'Coach has reached the maximum allowed concurrent gigs for this period. Automatic assignment paused.',
    time: '2 mins ago',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=200&fit=crop',
    read: false,
    category: 'Gig Limits'
  },
  {
    id: '2',
    type: 'New Coach',
    title: 'Marcus Wright joined the agency as Senior Coach',
    description: 'A new application has been approved. Coach specialization: Executive Leadership & Strategy.',
    time: '45 mins ago',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
    read: false,
    category: 'New Signups'
  },
  {
    id: '3',
    type: 'Security Alert',
    title: 'Suspicious login attempt detected from London, UK',
    description: 'Multiple failed login attempts for user \'admin_main\'. Account has been temporarily locked for security.',
    time: '3 hours ago',
    read: false,
    category: 'System Events'
  },
  {
    id: '4',
    type: 'Gig Completed',
    title: 'Project \'Zenith\' successfully completed by Kyle Reese',
    description: 'The 12-week coaching program for Zenith Corp has finished. Client feedback is pending.',
    time: 'Yesterday',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    read: true,
    category: 'Gig Limits'
  }
];
