import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Clock,
  Download,
  Filter,
  RefreshCw,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  deviceStats,
  kpiData,
  monthlyData,
  recentActivity,
  topPages,
  trafficSources,
} from "@/data/mock.js";

function Analytics() {
  return (
    <div className="p-6 space-y-6">
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {kpi.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center text-xs">
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span
                    className={
                      kpi.trend === "up" ? "text-green-600" : "text-red-600"
                    }
                  >
                    {kpi.change}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {kpi.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid h-auto w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>
                  Monthly revenue performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Revenue Chart Placeholder
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Connect your analytics service
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {monthlyData.slice(-3).map((data) => (
                    <div key={data.month} className="space-y-1">
                      <p className="text-sm font-medium">{data.month}</p>
                      <p className="text-lg font-bold">
                        ${(data.revenue / 1000).toFixed(0)}k
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest changes and improvements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        activity.impact === "positive"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                    <Badge
                      variant={
                        activity.impact === "positive"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {activity.impact}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {source.source}
                      </span>
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

            <Card>
              <CardHeader>
                <CardTitle>Device Statistics</CardTitle>
                <CardDescription>User device breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceStats.map((device) => (
                    <div
                      key={device.device}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-4 w-4 bg-primary rounded" />
                        <span className="font-medium">{device.device}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">
                          {device.users.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {device.percentage}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-200">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 text-purple-400 mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">
                      Device Chart
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>
                Most visited pages and their performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                {topPages.map((page, index) => (
                  <div
                    key={page.page}
                    className="p-6 rounded-lg border shadow-sm bg-white"
                  >
                    <div className="flex items-center mb-4 space-x-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{page.page}</p>
                        <p className="text-sm text-muted-foreground">
                          {page.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center text-sm">
                      <div>
                        <p className="font-medium">{page.bounce}</p>
                        <p className="text-muted-foreground">Bounce Rate</p>
                      </div>
                      <div>
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

        <TabsContent value="conversions">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>
                  Track user journey and conversion points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { stage: "Visitors", count: 10000, percentage: 100 },
                  { stage: "Product Views", count: 6500, percentage: 65 },
                  { stage: "Add to Cart", count: 2800, percentage: 28 },
                  { stage: "Checkout", count: 1200, percentage: 12 },
                  { stage: "Purchase", count: 470, percentage: 4.7 },
                ].map(({ stage, count, percentage }) => (
                  <div key={stage} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-base">{stage}</span>
                      <span className="text-sm text-muted-foreground font-mono w-28 text-right">
                        {count.toLocaleString()} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full">
                      <Progress
                        value={percentage}
                        className="h-3 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Goals & Targets</CardTitle>
                <CardDescription>
                  Track progress against your objectives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  {
                    goal: "Monthly Revenue",
                    current: 58000,
                    target: 60000,
                    unit: "$",
                  },
                  { goal: "New Users", current: 2340, target: 2500, unit: "" },
                  {
                    goal: "Conversion Rate",
                    current: 4.7,
                    target: 5.0,
                    unit: "%",
                  },
                ].map(({ goal, current, target, unit }) => {
                  const percentage = Math.min((current / target) * 100, 100);
                  return (
                    <div key={goal} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-base">{goal}</span>
                        <span className="text-sm font-mono w-28 text-right">
                          {unit}
                          {current.toLocaleString()} / {unit}
                          {target.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full">
                        <Progress
                          value={percentage}
                          className="h-3 rounded-full"
                        />
                      </div>
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
export default Analytics;
