import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { useTheme } from '../lib/ThemeContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border bg-background/80 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md mr-8"
          >
            Shivam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    isActive(item.path) && "w-full"
                  )}
                />
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 hover:bg-accent hover:text-accent-foreground"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-5 w-5 transition-transform hover:rotate-45" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent hover:text-accent-foreground"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-5 w-5 transition-transform hover:rotate-45" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:bg-accent hover:text-accent-foreground"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X className="h-6 w-6 transition-transform hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform hover:rotate-90" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] z-40 transition-all duration-300 ease-in-out overflow-y-auto",
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-1 bg-background/95 border-b border-border shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-all duration-200",
                isActive(item.path)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
