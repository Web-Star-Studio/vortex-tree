import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal text-white">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-gold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-softgray leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-gold text-charcoal hover:bg-gold/90 transition-all duration-300">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center w-full text-softgray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
