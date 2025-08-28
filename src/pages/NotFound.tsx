import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="space-y-6">
          
          {/* Large 404 */}
          <div className="text-8xl font-bold gradient-primary bg-clip-text text-transparent">
            404
          </div>
          
          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-muted-foreground leading-relaxed">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 transition-smooth"
              asChild
            >
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="transition-smooth"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NotFound;
