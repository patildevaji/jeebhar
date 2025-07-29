import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Palette, 
  BarChart3, 
  Video,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: BarChart3,
    title: "Brand Management",
    subtitle: "Build a powerful brand identity",
    description: "We craft compelling brand stories that resonate with your target audience. Our comprehensive brand management includes logo design, brand guidelines, voice development, and consistent messaging across all platforms. We ensure your restaurant stands out in a crowded market with a unique identity that customers remember and trust.",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Reputation Management"]
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Social Media Management",
    subtitle: "Engage and grow your audience",
    description: "Our expert team handles your daily social media presence across Instagram, Facebook, TikTok, and more. We create engaging posts, respond to comments, manage your community, and build meaningful relationships with your customers. From content planning to community management, we've got you covered 24/7.",
    features: ["Content Scheduling", "Community Management", "Analytics Tracking", "Platform Optimization"]
  },
  {
    id: 3,
    icon: Palette,
    title: "Content Creation",
    subtitle: "Stunning visuals that convert",
    description: "Professional photography, videography, and graphic design that showcases your restaurant in the best light. We create mouth-watering food photography, engaging stories, promotional videos, and branded graphics that drive customer action. Every piece of content is crafted to align with your brand and marketing goals.",
    features: ["Professional Photography", "Video Production", "Graphic Design", "Copywriting"]
  },
  {
    id: 4,
    icon: Video,
    title: "Social Media Advertising",
    subtitle: "Targeted ads that deliver results",
    description: "Strategic paid advertising campaigns across Facebook, Instagram, and Google that reach your ideal customers. We handle everything from audience research and ad creation to campaign optimization and performance tracking. Our data-driven approach ensures maximum ROI and sustainable business growth.",
    features: ["Ad Campaign Management", "Audience Targeting", "ROI Optimization", "Performance Analytics"]
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for restaurants and food businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
              onClick={() => toggleService(service.id)}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    {expandedService === service.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                {expandedService === service.id && (
                  <div className="animate-fade-in">
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;