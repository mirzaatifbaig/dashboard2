import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {AlertTriangle, ArrowLeft, HelpCircle, RefreshCw,} from "lucide-react";
import {helpfulLinks} from "@/data/mock.js";

export default function NotFound({ onNavigate }) {
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      onNavigate("dashboard");
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="flex justify-center">
          <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 justify-center">
            <Button onClick={handleGoBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Button
              variant="outline"
              onClick={handleRefresh}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            or try one of these pages:
          </div>

          <Card>
            <CardContent className="p-4 space-y-3">
              {helpfulLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="w-full flex items-center justify-center gap-2 p-3 rounded-md hover:bg-accent transition-colors text-sm font-medium"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-3">
            Still need help? Contact our support team.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate("support")}
            className="flex items-center gap-2"
          >
            <HelpCircle className="h-4 w-4" />
            Get Support
          </Button>
        </div>

        <div className="pt-4 text-xs text-muted-foreground">
          Error Code: 404 - Page Not Found
        </div>
      </div>
    </div>
  );
}
