import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Eye,
  Clock,
  Target,
  DollarSign,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Analytics() {
  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$284,592',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      period: 'vs last month'
    },
    {
      title: 'Active Users',
      value: '14,832',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      period: 'vs last month'
    },
    {
      title: 'Page Views',
      value: '892,431',
      change: '-2.1%',
      trend: 'down',
      icon: Eye,
      period: 'vs last month'
    },
    {
      title: 'Conversion Rate',
      value: '4.7%',
      change: '+0.8%',
      trend: 'up',
      icon: Target,
      period: 'vs last month'
    }
  ];

  const trafficSources = [
    { source: 'Organic Search', visits: 45320, percentage: 38.2, color: 'bg-blue-500' },
    { source: 'Direct Traffic', visits: 32180, percentage: 27.1, color: 'bg-green-500' },
    { source: 'Social Media', visits: 21890, percentage: 18.4, color: 'bg-purple-500' },
    { source: 'Email Marketing', visits: 12670, percentage: 10.7, color: 'bg-orange-500' },
    { source: 'Paid Advertising', visits: 6540, percentage: 5.5, color: 'bg-red-500' }
  ];

  const topPages = [
    { page: '/dashboard', views: 89340, bounce: '12.3%', avgTime: '4:32' },
    { page: '/products', views: 67210, bounce: '15.7%', avgTime: '3:45' },
    { page: '/pricing', views: 54890, bounce: '22.1%', avgTime: '2:18' },
    { page: '/about', views: 43250, bounce: '18.4%', avgTime: '2:56' },
    { page: '/contact', views: 32180, bounce: '8.9%', avgTime: '1:43' }
  ];

  const deviceStats = [
    { device: 'Desktop', users: 52840, percentage: 58.3 },
    { device: 'Mobile', users: 32190, percentage: 35.5 },
    { device: 'Tablet', users: 5610, percentage: 6.2 }
  ];

  const recentActivity = [
    { action: 'New user registration spike', time: '2 hours ago', impact: 'positive' },
    { action: 'Conversion rate increased', time: '4 hours ago', impact: 'positive' },
    { action: 'Page load time improved', time: '6 hours ago', impact: 'positive' },
    { action: 'Bounce rate increased on /pricing', time: '8 hours ago', impact: 'negative' },
    { action: 'Social media traffic grew', time: '12 hours ago', impact: 'positive' }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 42000, users: 12000, conversion: 3.2 },
    { month: 'Feb', revenue: 45000, users: 13500, conversion: 3.5 },
    { month: 'Mar', revenue: 48000, users: 14200, conversion: 3.8 },
    { month: 'Apr', revenue: 52000, users: 15800, conversion: 4.1 },
    { month: 'May', revenue: 55000, users: 16900, conversion: 4.3 },
    { month: 'Jun', revenue: 58000, users: 17500, conversion: 4.5 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <BarChart3 className="h-8 w-8" />
            Analytics
          </h1>
          <p className="text-muted-foreground">
            Track your performance and gain insights from your data
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center text-xs">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {kpi.change}
                  </span>
                  <span className="text-muted-foreground ml-1">{kpi.period}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Revenue Chart Placeholder</p>
                    <p className="text-xs text-muted-foreground">Connect your analytics service</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {monthlyData.slice(-3).map((data) => (
                    <div key={data.month} className="space-y-1">
                      <p className="text-sm font-medium">{data.month}</p>
                      <p className="text-lg font-bold">${(data.revenue / 1000).toFixed(0)}k</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest changes and improvements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${
                      activity.impact === 'positive' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                    <Badge variant={activity.impact === 'positive' ? 'default' : 'destructive'}>
                      {activity.impact}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Traffic Tab */}
        <TabsContent value="traffic">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{source.source}</span>
                      <span className="text-sm text-muted-foreground">
                        {source.visits.toLocaleString()} ({source.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${source.color}`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Device Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Device Statistics</CardTitle>
                <CardDescription>User device breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceStats.map((device) => (
                    <div key={device.device} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-4 w-4 bg-primary rounded" />
                        <span className="font-medium">{device.device}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{device.users.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{device.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 h-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-200">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Device Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Behavior Tab */}
        <TabsContent value="behavior">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{page.page}</p>
                        <p className="text-sm text-muted-foreground">
                          {page.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-center">
                        <p className="font-medium">{page.bounce}</p>
                        <p className="text-muted-foreground">Bounce Rate</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{page.avgTime}</p>
                        <p className="text-muted-foreground">Avg Time</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Conversions Tab */}
        <TabsContent value="conversions">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Conversion Funnel */}
            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Track user journey and conversion points</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { stage: 'Visitors', count: 10000, percentage: 100 },
                  { stage: 'Product Views', count: 6500, percentage: 65 },
                  { stage: 'Add to Cart', count: 2800, percentage: 28 },
                  { stage: 'Checkout', count: 1200, percentage: 12 },
                  { stage: 'Purchase', count: 470, percentage: 4.7 }
                ].map((stage) => (
                  <div key={stage.stage} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{stage.stage}</span>
                      <span className="text-sm text-muted-foreground">
                        {stage.count.toLocaleString()} ({stage.percentage}%)
                      </span>
                    </div>
                    <Progress value={stage.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Goals & Targets */}
            <Card>
              <CardHeader>
                <CardTitle>Goals & Targets</CardTitle>
                <CardDescription>Track progress against your objectives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { goal: 'Monthly Revenue', current: 58000, target: 60000, unit: '$' },
                  { goal: 'New Users', current: 2340, target: 2500, unit: '' },
                  { goal: 'Conversion Rate', current: 4.7, target: 5.0, unit: '%' }
                ].map((goal) => {
                  const percentage = (goal.current / goal.target) * 100;
                  return (
                    <div key={goal.goal} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{goal.goal}</span>
                        <span className="text-sm">
                          {goal.unit}{goal.current.toLocaleString()} / {goal.unit}{goal.target.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={Math.min(percentage, 100)} className="h-3" />
                      <p className="text-xs text-muted-foreground">
                        {percentage.toFixed(1)}% of target achieved
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
