import {useState} from "react";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Analytics from "@/pages/Analytics.jsx";
import Settings from "@/pages/Settings";
import Notifications from "@/pages/Notifications";
import Projects from "@/pages/Projects";
import Support from "@/pages/Support";
import Billing from "@/pages/Billing";
import FileManager from "@/pages/FileManager";
import NotFound from "@/pages/NotFound";
import {Button} from "@/components/ui/button";
import {
  BarChart3,
  Bell,
  CreditCard,
  FileText,
  FolderOpen,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Settings as SettingsIcon,
  User,
  X,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, component: "dashboard" },
  { name: "Profile", icon: User, component: "profile" },
  { name: "Projects", icon: FolderOpen, component: "projects" },
  { name: "Analytics", icon: BarChart3, component: "analytics" },
  { name: "File Manager", icon: FileText, component: "filemanager" },
  { name: "Notifications", icon: Bell, component: "notifications" },
  { name: "Billing", icon: CreditCard, component: "billing" },
  { name: "Support", icon: HelpCircle, component: "support" },
  { name: "Settings", icon: SettingsIcon, component: "settings" },
];

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      case "notifications":
        return <Notifications />;
      case "projects":
        return <Projects />;
      case "analytics":
        return <Analytics />;
      case "support":
        return <Support />;
      case "billing":
        return <Billing />;
      case "filemanager":
        return <FileManager />;
      default:
        return <NotFound onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out overflow-y-auto lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.component}
                onClick={() => {
                  setCurrentPage(item.component);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === item.component
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col flex-1">
        <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-card border-b">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">
            {navigation.find((item) => item.component === currentPage)?.name ||
              "Dashboard"}
          </h1>
          <div className="w-10" />
        </div>

        <main className="lg:pl-65 p-6">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
