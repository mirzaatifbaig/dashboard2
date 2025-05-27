import {
  AlertCircle,
  Award,
  Book,
  CheckCircle,
  DollarSign,
  Eye,
  FileText,
  HelpCircle,
  Home,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Shield,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
export const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and follow the instructions sent to your email.',
  },
  {
    question: "How can I update my billing information?",
    answer:
      "You can update your billing information by going to Settings > Billing. From there, you can update your payment method, billing address, and view your invoices.",
  },
  {
    question: "What file formats are supported for uploads?",
    answer:
      "We support the following file formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG, GIF, and MP4. Maximum file size is 100MB per file.",
  },
  {
    question: "How do I invite team members to my workspace?",
    answer:
      'To invite team members, navigate to Settings > Team Management. Click "Invite Member", enter their email address, select their role, and send the invitation.',
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.",
  },
  {
    question: "How can I export my data?",
    answer:
      "You can export your data by going to Settings > Data Management. Select the data you want to export and choose your preferred format (CSV, JSON, or PDF).",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Our platform works on any modern web browser. We recommend Chrome, Firefox, Safari, or Edge. For the best experience, ensure your browser is up to date.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      'To cancel your subscription, go to Settings > Billing > Subscription. Click "Cancel Subscription" and follow the prompts. Your access will continue until the end of your billing period.',
  },
];

export const supportChannels = [
  {
    title: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageSquare,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Usually within 5 minutes",
    available: true,
  },
  {
    title: "Email Support",
    description: "Send us an email and we'll get back to you",
    icon: Mail,
    availability: "24/7",
    responseTime: "Within 24 hours",
    available: true,
  },
  {
    title: "Phone Support",
    description: "Call our support hotline for urgent issues",
    icon: Phone,
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    available: false,
  },
  {
    title: "Video Call",
    description: "Schedule a screen sharing session",
    icon: Video,
    availability: "By appointment",
    responseTime: "Within 2 business days",
    available: true,
  },
];

export const helpResources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics and set up your account",
    icon: Book,
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks",
    icon: Video,
    category: "Video",
    readTime: "15 min watch",
  },
  {
    title: "API Documentation",
    description: "Complete reference for developers",
    icon: FileText,
    category: "Developer",
    readTime: "30 min read",
  },
  {
    title: "Best Practices",
    description: "Tips and tricks to get the most out of our platform",
    icon: CheckCircle,
    category: "Guide",
    readTime: "10 min read",
  },
  {
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    icon: AlertCircle,
    category: "Support",
    readTime: "8 min read",
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share experiences",
    icon: Users,
    category: "Community",
    readTime: "Ongoing",
  },
];

export const recentTickets = [
  {
    id: "#TK-001",
    subject: "Unable to upload files",
    status: "Open",
    priority: "High",
    created: "2 hours ago",
    agent: "Sarah Wilson",
  },
  {
    id: "#TK-002",
    subject: "Billing question about invoice",
    status: "In Progress",
    priority: "Medium",
    created: "1 day ago",
    agent: "Mike Johnson",
  },
  {
    id: "#TK-003",
    subject: "Feature request for dark mode",
    status: "Closed",
    priority: "Low",
    created: "3 days ago",
    agent: "Emma Davis",
  },
];

export const helpfulLinks = [
  { label: "Dashboard", action: () => onNavigate("dashboard"), icon: Home },
  { label: "Projects", action: () => onNavigate("projects"), icon: Search },
  { label: "Support", action: () => onNavigate("support"), icon: HelpCircle },
];
export const notifications = [
  {
    id: 1,
    type: "message",
    title: "New message from Sarah Wilson",
    description:
      "Hey! I wanted to discuss the new project requirements with you.",
    time: "2 minutes ago",
    read: false,
    priority: "high",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    type: "system",
    title: "System maintenance scheduled",
    description: "Scheduled maintenance will occur tonight from 2-4 AM EST.",
    time: "1 hour ago",
    read: false,
    priority: "medium",
  },
  {
    id: 3,
    type: "project",
    title: 'Project "Website Redesign" updated',
    description: "New tasks have been added to the project board.",
    time: "3 hours ago",
    read: true,
    priority: "low",
  },
  {
    id: 4,
    type: "achievement",
    title: "Congratulations! Achievement unlocked",
    description: "You've completed 10 projects this month. Great work!",
    time: "1 day ago",
    read: true,
    priority: "high",
  },
  {
    id: 5,
    type: "reminder",
    title: "Meeting reminder",
    description: "Team standup meeting starts in 30 minutes.",
    time: "2 days ago",
    read: true,
    priority: "medium",
  },
];
export const userInfo = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joinDate: "January 2023",
  role: "Senior Developer",
  department: "Engineering",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
};
export const achievements = [
  {
    title: "Project Leader",
    description: "Led 5+ successful projects",
    icon: Award,
  },
  {
    title: "Team Player",
    description: "Excellent collaboration skills",
    icon: Star,
  },
  {
    title: "Innovation Award",
    description: "Best new feature 2024",
    icon: Shield,
  },
];
export const files = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.4 MB",
    modified: "2024-11-20",
    owner: "Alice Johnson",
    shared: true,
    category: "Documents",
  },
  {
    id: 2,
    name: "Dashboard Screenshot.png",
    type: "image",
    size: "856 KB",
    modified: "2024-11-19",
    owner: "Bob Smith",
    shared: false,
    category: "Images",
  },
  {
    id: 3,
    name: "Meeting Recording.mp4",
    type: "video",
    size: "45.2 MB",
    modified: "2024-11-18",
    owner: "Carol Brown",
    shared: true,
    category: "Videos",
  },
  {
    id: 4,
    name: "Financial Report Q3.xlsx",
    type: "spreadsheet",
    size: "1.8 MB",
    modified: "2024-11-17",
    owner: "David Wilson",
    shared: false,
    category: "Documents",
  },
  {
    id: 5,
    name: "Team Photo.jpg",
    type: "image",
    size: "3.2 MB",
    modified: "2024-11-16",
    owner: "Emma Davis",
    shared: true,
    category: "Images",
  },
  {
    id: 6,
    name: "Code Archive.zip",
    type: "archive",
    size: "12.5 MB",
    modified: "2024-11-15",
    owner: "Frank Miller",
    shared: false,
    category: "Archives",
  },
  {
    id: 7,
    name: "Presentation Draft.pptx",
    type: "presentation",
    size: "5.7 MB",
    modified: "2024-11-14",
    owner: "Grace Lee",
    shared: true,
    category: "Documents",
  },
  {
    id: 8,
    name: "Background Music.mp3",
    type: "audio",
    size: "4.1 MB",
    modified: "2024-11-13",
    owner: "Henry Chang",
    shared: false,
    category: "Audio",
  },
];
export const folders = [
  { name: "Projects", files: 24, modified: "2024-11-20" },
  { name: "Documents", files: 18, modified: "2024-11-19" },
  { name: "Images", files: 42, modified: "2024-11-18" },
  { name: "Archives", files: 8, modified: "2024-11-17" },
];
export const kpiData = [
  {
    title: "Total Revenue",
    value: "$284,592",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    period: "vs last month",
  },
  {
    title: "Active Users",
    value: "14,832",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    period: "vs last month",
  },
  {
    title: "Page Views",
    value: "892,431",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
    period: "vs last month",
  },
  {
    title: "Conversion Rate",
    value: "4.7%",
    change: "+0.8%",
    trend: "up",
    icon: Target,
    period: "vs last month",
  },
];
export const trafficSources = [
  {
    source: "Organic Search",
    visits: 45320,
    percentage: 38.2,
    color: "bg-blue-500",
  },
  {
    source: "Direct Traffic",
    visits: 32180,
    percentage: 27.1,
    color: "bg-green-500",
  },
  {
    source: "Social Media",
    visits: 21890,
    percentage: 18.4,
    color: "bg-purple-500",
  },
  {
    source: "Email Marketing",
    visits: 12670,
    percentage: 10.7,
    color: "bg-orange-500",
  },
  {
    source: "Paid Advertising",
    visits: 6540,
    percentage: 5.5,
    color: "bg-red-500",
  },
];
export const topPages = [
  { page: "/dashboard", views: 89340, bounce: "12.3%", avgTime: "4:32" },
  { page: "/products", views: 67210, bounce: "15.7%", avgTime: "3:45" },
  { page: "/pricing", views: 54890, bounce: "22.1%", avgTime: "2:18" },
  { page: "/about", views: 43250, bounce: "18.4%", avgTime: "2:56" },
  { page: "/contact", views: 32180, bounce: "8.9%", avgTime: "1:43" },
];
export const deviceStats = [
  { device: "Desktop", users: 52840, percentage: 58.3 },
  { device: "Mobile", users: 32190, percentage: 35.5 },
  { device: "Tablet", users: 5610, percentage: 6.2 },
];
export const recentActivity = [
  {
    action: "New user registration spike",
    time: "2 hours ago",
    impact: "positive",
  },
  {
    action: "Conversion rate increased",
    time: "4 hours ago",
    impact: "positive",
  },
  {
    action: "Page load time improved",
    time: "6 hours ago",
    impact: "positive",
  },
  {
    action: "Bounce rate increased on /pricing",
    time: "8 hours ago",
    impact: "negative",
  },
  {
    action: "Social media traffic grew",
    time: "12 hours ago",
    impact: "positive",
  },
];
export const monthlyData = [
  { month: "Jan", revenue: 42000, users: 12000, conversion: 3.2 },
  { month: "Feb", revenue: 45000, users: 13500, conversion: 3.5 },
  { month: "Mar", revenue: 48000, users: 14200, conversion: 3.8 },
  { month: "Apr", revenue: 52000, users: 15800, conversion: 4.1 },
  { month: "May", revenue: 55000, users: 16900, conversion: 4.3 },
  { month: "Jun", revenue: 58000, users: 17500, conversion: 4.5 },
];
export const actions = [
  {
    title: "Create Project",
    description: "Start a new project",
    icon: "🚀",
  },
  {
    title: "Invite Team",
    description: "Add team members",
    icon: "👥",
  },
  {
    title: "View Reports",
    description: "Analytics & insights",
    icon: "📊",
  },
  {
    title: "Settings",
    description: "Configure preferences",
    icon: "⚙️",
  },
];
export const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
    description: "from last month",
  },
  {
    title: "Orders",
    value: "12,234",
    change: "+19%",
    trend: "up",
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    description: "from last month",
  },
];
export const projects = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Modern online shopping platform with React and Node.js",
    status: "In Progress",
    priority: "High",
    progress: 75,
    dueDate: "2024-12-15",
    team: [
      {
        name: "Alice Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Bob Smith",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Carol Brown",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      },
    ],
    tasks: { completed: 18, total: 24 },
    starred: true,
  },
  {
    id: 2,
    name: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication",
    status: "Planning",
    priority: "High",
    progress: 15,
    dueDate: "2025-02-20",
    team: [
      {
        name: "David Wilson",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Emma Davis",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face",
      },
    ],
    tasks: { completed: 3, total: 20 },
    starred: false,
  },
  {
    id: 3,
    name: "Dashboard Analytics",
    description: "Real-time analytics dashboard for business intelligence",
    status: "Review",
    priority: "Medium",
    progress: 90,
    dueDate: "2024-12-10",
    team: [
      {
        name: "Frank Miller",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Grace Lee",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Henry Chang",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Ivy Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face",
      },
    ],
    tasks: { completed: 27, total: 30 },
    starred: true,
  },
  {
    id: 4,
    name: "CRM System",
    description: "Customer relationship management system for sales teams",
    status: "Completed",
    priority: "Medium",
    progress: 100,
    dueDate: "2024-11-30",
    team: [
      {
        name: "Jack Thompson",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Kate Anderson",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face",
      },
    ],
    tasks: { completed: 15, total: 15 },
    starred: false,
  },
  {
    id: 5,
    name: "Inventory Management",
    description: "Automated inventory tracking and management system",
    status: "On Hold",
    priority: "Low",
    progress: 35,
    dueDate: "2025-03-15",
    team: [
      {
        name: "Liam Wilson",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      },
    ],
    tasks: { completed: 7, total: 20 },
    starred: false,
  },
  {
    id: 6,
    name: "Social Media Platform",
    description:
      "Next-generation social networking platform with advanced features",
    status: "In Progress",
    priority: "High",
    progress: 60,
    dueDate: "2025-01-30",
    team: [
      {
        name: "Maya Patel",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Noah Garcia",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      },
      {
        name: "Olivia Kim",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      },
    ],
    tasks: { completed: 12, total: 20 },
    starred: true,
  },
];
