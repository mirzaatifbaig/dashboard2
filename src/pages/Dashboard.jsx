import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      description: 'from last month'
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+180.1%',
      trend: 'up',
      icon: Users,
      description: 'from last month'
    },
    {
      title: 'Orders',
      value: '12,234',
      change: '+19%',
      trend: 'up',
      icon: ShoppingCart,
      description: 'from last month'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      description: 'from last month'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'New user registered', time: '2 minutes ago', status: 'success' },
    { id: 2, action: 'Payment processed', time: '5 minutes ago', status: 'success' },
    { id: 3, action: 'Server maintenance', time: '1 hour ago', status: 'warning' },
    { id: 4, action: 'Database backup completed', time: '2 hours ago', status: 'success' },
    { id: 5, action: 'New order received', time: '3 hours ago', status: 'success' }
  ];

  const projects = [
    { name: 'Website Redesign', progress: 75, status: 'In Progress', dueDate: 'Dec 15, 2024' },
    { name: 'Mobile App', progress: 50, status: 'In Progress', dueDate: 'Jan 30, 2025' },
    { name: 'API Integration', progress: 90, status: 'Review', dueDate: 'Dec 10, 2024' },
    { name: 'Database Migration', progress: 25, status: 'Planning', dueDate: 'Feb 15, 2025' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest system activities and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-3">
                  {activity.status === 'success' && (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  )}
                  {activity.status === 'warning' && (
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                  </div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
            <CardDescription>Track your ongoing projects and their completion status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{project.name}</h4>
                  <Badge variant="outline">{project.status}</Badge>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{project.progress}% complete</span>
                  <span>Due: {project.dueDate}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used actions and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Create Project', description: 'Start a new project', icon: '🚀' },
              { title: 'Invite Team', description: 'Add team members', icon: '👥' },
              { title: 'View Reports', description: 'Analytics & insights', icon: '📊' },
              { title: 'Settings', description: 'Configure preferences', icon: '⚙️' }
            ].map((action) => (
              <Card key={action.title} className="cursor-pointer hover:bg-accent transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <h3 className="font-medium">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
