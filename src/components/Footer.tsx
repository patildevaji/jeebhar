import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Jeebhar
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Transforming restaurants through strategic social media marketing, 
              creative content, and data-driven campaigns that deliver real results.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:border-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:border-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:border-primary">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:border-primary">
                <Music className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reels')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Reels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-background/60 mb-1">Address</p>
                <p className="text-background/80">
                  123 Digital Street<br />
                  Marketing District, MD 12345
                </p>
              </div>
              <div>
                <p className="text-sm text-background/60 mb-1">Phone</p>
                <p className="text-background/80">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-background/60 mb-1">Email</p>
                <p className="text-background/80">hello@jeebhar.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Jeebhar. All rights reserved. Transforming restaurants through digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;