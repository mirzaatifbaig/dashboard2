import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Bell, Download, Eye, Lock, Mail, Palette, Settings as SettingsIcon, Shield, Smartphone,} from "lucide-react";

export default function Settings() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and application settings
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full h-auto lg:grid-cols-4 ">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5" />
                  General Settings
                </CardTitle>
                <CardDescription>
                  Basic account and application preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter username"
                      defaultValue="alexjohnson"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">
                          Pacific Standard Time
                        </SelectItem>
                        <SelectItem value="est">
                          Eastern Standard Time
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Standard Time
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Standard Time
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">System Preferences</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-save drafts</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically save your work as you type
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Show desktop notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your desktop
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable analytics</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us improve by sharing usage data
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className={"w-full"}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive and how
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Notifications
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly digest</Label>
                      <p className="text-sm text-muted-foreground">
                        Get a weekly summary of your activity
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Project updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications about project changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive news and product updates
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Push Notifications
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Real-time updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Instant notifications for important events
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Team mentions</Label>
                      <p className="text-sm text-muted-foreground">
                        When someone mentions you in a discussion
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Daily reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Daily task and deadline reminders
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Control your privacy settings and data sharing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 max-w-full">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Profile Visibility
                </h3>

                <div className="space-y-4 max-w-full">
                  <div className="flex flex-col md:flex-col max-w-full">
                    <div className="space-y-0.5">
                      <Label>Public profile</Label>
                      <p className="text-sm text-muted-foreground break-words">
                        Make your profile visible to everyone
                      </p>
                    </div>
                    <div className="mt-2 md:mt-1">
                      <Switch />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-col max-w-full">
                    <div className="space-y-0.5">
                      <Label>Show online status</Label>
                      <p className="text-sm text-muted-foreground break-words">
                        Let others see when you're online
                      </p>
                    </div>
                    <div className="mt-2 md:mt-1">
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-col max-w-full">
                    <div className="space-y-0.5">
                      <Label>Activity tracking</Label>
                      <p className="text-sm text-muted-foreground break-words">
                        Track your activity for analytics
                      </p>
                    </div>
                    <div className="mt-2 md:mt-1">
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4 max-w-full">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Security Settings
                </h3>

                <div className="flex flex-col space-y-4 max-w-full">
                  <Button
                    variant="outline"
                    className="justify-start w-full md:w-auto"
                  >
                    Change Password
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start w-full md:w-auto"
                  >
                    Enable Two-Factor
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start w-full md:w-auto"
                  >
                    Manage Connected Apps
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4 max-w-full">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Data Management
                </h3>

                <div className="flex flex-col space-y-2 max-w-full">
                  <Button
                    variant="outline"
                    className="justify-start w-full md:w-auto"
                  >
                    Download Your Data
                  </Button>

                  <Button
                    variant="destructive"
                    className="justify-start w-full md:w-auto"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance & Display
              </CardTitle>
              <CardDescription>
                Customize how the application looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Theme</Label>
                  <Select defaultValue="light">
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Font size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Sidebar position</Label>
                  <Select defaultValue="left">
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Display Options</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact view</Label>
                    <p className="text-sm text-muted-foreground">
                      Show more content in less space
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Show animations</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth transitions and animations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>High contrast mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Improve visibility with higher contrast
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button className="w-full md:w-auto">Save All Changes</Button>
      </div>
    </div>
  );
}
