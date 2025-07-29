import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Restaurant Success Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Sparkles className="text-accent w-6 h-6" />
            <span className="text-accent font-semibold">Transform Your Restaurant</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Reimagine Your
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Dreams & Business
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            We help restaurants and businesses create powerful social media presence, 
            engage customers, and drive real growth through strategic digital marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              Explore Our Services
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-white/70">Restaurants Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500%</div>
              <div className="text-white/70">Average Engagement Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/70">Support & Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;