import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  HelpCircle, 
  MessageSquare, 
  Book, 
  Phone,
  Mail,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  FileText,
  Video,
  Headphones
} from 'lucide-react';

export default function Support() {
  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Enter your email address and follow the instructions sent to your email.'
    },
    {
      question: 'How can I update my billing information?',
      answer: 'You can update your billing information by going to Settings > Billing. From there, you can update your payment method, billing address, and view your invoices.'
    },
    {
      question: 'What file formats are supported for uploads?',
      answer: 'We support the following file formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, JPG, PNG, GIF, and MP4. Maximum file size is 100MB per file.'
    },
    {
      question: 'How do I invite team members to my workspace?',
      answer: 'To invite team members, navigate to Settings > Team Management. Click "Invite Member", enter their email address, select their role, and send the invitation.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.'
    },
    {
      question: 'How can I export my data?',
      answer: 'You can export your data by going to Settings > Data Management. Select the data you want to export and choose your preferred format (CSV, JSON, or PDF).'
    },
    {
      question: 'What are the system requirements?',
      answer: 'Our platform works on any modern web browser. We recommend Chrome, Firefox, Safari, or Edge. For the best experience, ensure your browser is up to date.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'To cancel your subscription, go to Settings > Billing > Subscription. Click "Cancel Subscription" and follow the prompts. Your access will continue until the end of your billing period.'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageSquare,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Usually within 5 minutes',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us an email and we\'ll get back to you',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 24 hours',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Call our support hotline for urgent issues',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      available: false
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      icon: Video,
      availability: 'By appointment',
      responseTime: 'Within 2 business days',
      available: true
    }
  ];

  const helpResources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics and set up your account',
      icon: Book,
      category: 'Tutorial',
      readTime: '5 min read'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      icon: Video,
      category: 'Video',
      readTime: '15 min watch'
    },
    {
      title: 'API Documentation',
      description: 'Complete reference for developers',
      icon: FileText,
      category: 'Developer',
      readTime: '30 min read'
    },
    {
      title: 'Best Practices',
      description: 'Tips and tricks to get the most out of our platform',
      icon: CheckCircle,
      category: 'Guide',
      readTime: '10 min read'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: AlertCircle,
      category: 'Support',
      readTime: '8 min read'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      icon: Users,
      category: 'Community',
      readTime: 'Ongoing'
    }
  ];

  const recentTickets = [
    {
      id: '#TK-001',
      subject: 'Unable to upload files',
      status: 'Open',
      priority: 'High',
      created: '2 hours ago',
      agent: 'Sarah Wilson'
    },
    {
      id: '#TK-002',
      subject: 'Billing question about invoice',
      status: 'In Progress',
      priority: 'Medium',
      created: '1 day ago',
      agent: 'Mike Johnson'
    },
    {
      id: '#TK-003',
      subject: 'Feature request for dark mode',
      status: 'Closed',
      priority: 'Low',
      created: '3 days ago',
      agent: 'Emma Davis'
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
          <HelpCircle className="h-10 w-10" />
          Support Center
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get help, find answers, and learn how to make the most of our platform
        </p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help articles..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <Card>
        <CardHeader>
          <CardTitle>Get Support</CardTitle>
          <CardDescription>Choose the best way to reach our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {supportChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.title} className={`cursor-pointer transition-colors ${
                  channel.available ? 'hover:bg-accent' : 'opacity-60'
                }`}>
                  <CardContent className="p-4 text-center">
                    <div className={`h-12 w-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      channel.available ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-1">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{channel.description}</p>
                    <div className="space-y-1 text-xs">
                      <p><strong>Available:</strong> {channel.availability}</p>
                      <p><strong>Response:</strong> {channel.responseTime}</p>
                    </div>
                    {channel.available && (
                      <Button size="sm" className="mt-3 w-full">
                        {channel.title === 'Live Chat' ? 'Start Chat' : 
                         channel.title === 'Email Support' ? 'Send Email' :
                         channel.title === 'Phone Support' ? 'Call Now' : 'Schedule Call'}
                      </Button>
                    )}
                    {!channel.available && (
                      <Badge variant="secondary" className="mt-3">
                        Currently Unavailable
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Support Tabs */}
      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Help Resources</CardTitle>
              <CardDescription>Guides, tutorials, and documentation to help you succeed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {helpResources.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <Card key={resource.title} className="cursor-pointer hover:bg-accent transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-sm">{resource.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                {resource.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {resource.description}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {resource.readTime}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Form Tab */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Send us a message and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
                  <option value="low">Low - General question</option>
                  <option value="medium">Medium - Non-urgent issue</option>
                  <option value="high">High - Urgent business impact</option>
                  <option value="critical">Critical - System down</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your issue in detail. Include any error messages, steps to reproduce, and what you expected to happen."
                  className="min-h-32"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Button className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline">
                  Attach Files
                </Button>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> We typically respond to support requests within 24 hours. 
                  For urgent issues, please use our live chat or call our support hotline.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Support Tickets Tab */}
        <TabsContent value="tickets">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Support Tickets</CardTitle>
                  <CardDescription>Track your support requests and their status</CardDescription>
                </div>
                <Button>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  New Ticket
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTickets.map((ticket) => (
                  <Card key={ticket.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold">{ticket.id}</h3>
                              <Badge variant={
                                ticket.status === 'Open' ? 'destructive' :
                                ticket.status === 'In Progress' ? 'default' : 'secondary'
                              }>
                                {ticket.status}
                              </Badge>
                              <Badge variant="outline" className={
                                ticket.priority === 'High' ? 'border-red-500 text-red-500' :
                                ticket.priority === 'Medium' ? 'border-yellow-500 text-yellow-500' :
                                'border-green-500 text-green-500'
                              }>
                                {ticket.priority}
                              </Badge>
                            </div>
                            <p className="text-sm font-medium">{ticket.subject}</p>
                            <p className="text-xs text-muted-foreground">
                              Created {ticket.created} • Assigned to {ticket.agent}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {ticket.agent.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {recentTickets.length === 0 && (
                <div className="text-center py-8">
                  <Headphones className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No support tickets</h3>
                  <p className="text-muted-foreground mb-4">
                    You haven't submitted any support requests yet.
                  </p>
                  <Button>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Create Your First Ticket
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
