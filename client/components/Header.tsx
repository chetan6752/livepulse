import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg md:text-xl">L</span>
            </div>
            <span className="font-bold text-lg md:text-xl gradient-text">
              LivePulse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How it Works
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/join">
              <Button variant="outline" size="sm">
                Join Event
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/create">
              <Button variant="primary" size="sm">
                Create Event
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Join Event
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/create" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Create Event
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
