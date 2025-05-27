import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  FileText,
  Settings,
  Shield,
  Star,
  Users,
} from "lucide-react";

export default function Billing() {
  const currentPlan = {
    name: "Professional",
    price: 29,
    billing: "monthly",
    nextBilling: "2024-12-15",
    status: "active",
  };

  const plans = [
    {
      name: "Starter",
      price: 9,
      yearlyPrice: 90,
      description: "Perfect for individuals getting started",
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Support",
        "Core Features",
      ],
      recommended: false,
      current: false,
    },
    {
      name: "Professional",
      price: 29,
      yearlyPrice: 290,
      description: "Ideal for growing teams and businesses",
      features: [
        "25 Projects",
        "100GB Storage",
        "Priority Support",
        "Advanced Features",
        "Team Collaboration",
        "Analytics Dashboard",
      ],
      recommended: true,
      current: true,
    },
    {
      name: "Enterprise",
      price: 99,
      yearlyPrice: 990,
      description: "For large organizations with complex needs",
      features: [
        "Unlimited Projects",
        "1TB Storage",
        "24/7 Phone Support",
        "All Features",
        "Advanced Security",
        "Custom Integrations",
        "Dedicated Account Manager",
      ],
      recommended: false,
      current: false,
    },
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-11-15",
      amount: 29.0,
      status: "paid",
      plan: "Professional",
      period: "Nov 2024",
    },
    {
      id: "INV-2024-002",
      date: "2024-10-15",
      amount: 29.0,
      status: "paid",
      plan: "Professional",
      period: "Oct 2024",
    },
    {
      id: "INV-2024-003",
      date: "2024-09-15",
      amount: 29.0,
      status: "paid",
      plan: "Professional",
      period: "Sep 2024",
    },
    {
      id: "INV-2024-004",
      date: "2024-08-15",
      amount: 29.0,
      status: "paid",
      plan: "Professional",
      period: "Aug 2024",
    },
    {
      id: "INV-2024-005",
      date: "2024-07-15",
      amount: 9.0,
      status: "paid",
      plan: "Starter",
      period: "Jul 2024",
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      brand: "Visa",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Credit Card",
      last4: "5555",
      brand: "Mastercard",
      expiry: "09/25",
      isDefault: false,
    },
  ];

  const usage = {
    projects: { used: 12, limit: 25 },
    storage: { used: 45.2, limit: 100 },
    teamMembers: { used: 8, limit: 20 },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "overdue":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "paid":
        return CheckCircle;
      case "pending":
        return Clock;
      case "overdue":
        return AlertCircle;
      default:
        return Clock;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <CreditCard className="h-8 w-8" />
            Billing & Subscription
          </h1>
          <p className="text-muted-foreground">
            Manage your subscription, billing information, and view invoices
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Billing Settings
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Current Subscription</span>
            <Badge variant="default" className="text-green-600 bg-green-100">
              {currentPlan.status}
            </Badge>
          </CardTitle>
          <CardDescription>
            Your active plan and billing information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold">{currentPlan.name} Plan</h3>
                <p className="text-3xl font-bold text-primary">
                  ${currentPlan.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /{currentPlan.billing}
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Next billing date:</span>
                  <span className="font-medium">
                    {new Date(currentPlan.nextBilling).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Billing cycle:</span>
                  <span className="font-medium capitalize">
                    {currentPlan.billing}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">Change Plan</Button>
                <Button variant="outline">Cancel Subscription</Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Usage this month</h4>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Projects</span>
                    <span>
                      {usage.projects.used} / {usage.projects.limit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${(usage.projects.used / usage.projects.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Storage</span>
                    <span>
                      {usage.storage.used}GB / {usage.storage.limit}GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${(usage.storage.used / usage.storage.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Team Members</span>
                    <span>
                      {usage.teamMembers.used} / {usage.teamMembers.limit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{
                        width: `${(usage.teamMembers.used / usage.teamMembers.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="plans" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="usage">Usage Details</TabsTrigger>
        </TabsList>

        <TabsContent value="plans">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Choose Your Plan</h2>
              <p className="text-muted-foreground">
                Upgrade or downgrade your subscription at any time
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.recommended ? "border-primary shadow-lg scale-105" : ""
                  } ${plan.current ? "border-green-500" : ""}`}
                >
                  {plan.recommended && (
                    <Badge className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <Star className="h-3 w-3 mr-1" />
                      Recommended
                    </Badge>
                  )}
                  {plan.current && (
                    <Badge
                      variant="outline"
                      className="absolute -top-2 left-1/2 -translate-x-1/2 border-green-500 text-green-600"
                    >
                      Current Plan
                    </Badge>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold">
                        ${plan.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          /month
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        or ${plan.yearlyPrice}/year (save 17%)
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.current ? "outline" : "default"}
                      disabled={plan.current}
                    >
                      {plan.current ? "Current Plan" : "Choose Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Billing History</span>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </CardTitle>
              <CardDescription>
                View and download your past invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => {
                    const StatusIcon = getStatusIcon(invoice.status);
                    return (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">
                          {invoice.id}
                        </TableCell>
                        <TableCell>
                          {new Date(invoice.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>{invoice.period}</TableCell>
                        <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getStatusColor(invoice.status)}
                          >
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Payment Methods</span>
                <Button>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardTitle>
              <CardDescription>
                Manage your payment methods and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <Card key={method.id} className="relative">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">
                              {method.brand} ending in {method.last4}
                            </h3>
                            {method.isDefault && (
                              <Badge variant="default">Default</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Expires {method.expiry}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {!method.isDefault && (
                          <Button variant="outline" size="sm">
                            Set as Default
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Current Usage</CardTitle>
                <CardDescription>
                  Your usage for the current billing period
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-blue-500" />
                      <span>Projects</span>
                    </div>
                    <span className="font-medium">
                      {usage.projects.used} / {usage.projects.limit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${(usage.projects.used / usage.projects.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Storage</span>
                    </div>
                    <span className="font-medium">
                      {usage.storage.used}GB / {usage.storage.limit}GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${(usage.storage.used / usage.storage.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      <span>Team Members</span>
                    </div>
                    <span className="font-medium">
                      {usage.teamMembers.used} / {usage.teamMembers.limit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{
                        width: `${(usage.teamMembers.used / usage.teamMembers.limit) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Summary</CardTitle>
                <CardDescription>
                  Your upcoming charges and billing details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Professional Plan</span>
                    <span>$29.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      Next billing:{" "}
                      {new Date(currentPlan.nextBilling).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total</span>
                    <span>$29.00</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">
                      Billing Information
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your subscription automatically renews on{" "}
                    {new Date(currentPlan.nextBilling).toLocaleDateString()}.
                    You can cancel anytime before then.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
