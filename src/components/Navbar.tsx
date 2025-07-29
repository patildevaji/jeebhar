import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Jeebhar
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection('reels')}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Our Reels
              </button>
              <Button
                variant="gradient"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection('reels')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              Our Reels
            </button>
            <div className="px-3 py-2">
              <Button
                variant="gradient"
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;