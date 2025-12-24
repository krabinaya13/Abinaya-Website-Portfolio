import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              className="flex items-center gap-2 text-xl font-bold cursor-pointer hover:text-accent transition-smooth"
              onClick={() => scrollToSection("hero")}
            >
              <span className="animate-pulse">🌐</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome to my Dataverse
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-smooth hover:text-accent ${
                    activeSection === item.id 
                      ? "text-accent" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="hover-scale"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              
              <Button 
                size="sm"
                variant="outline"
                className="bg-accent/10 border-accent/20 text-accent hover:bg-accent hover:text-white transition-smooth"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-accent transition-smooth"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-smooth hover:text-accent ${
                    activeSection === item.id 
                      ? "text-accent" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                size="sm"
                variant="outline"
                className="w-full bg-accent/10 border-accent/20 text-accent hover:bg-accent hover:text-white transition-smooth"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;