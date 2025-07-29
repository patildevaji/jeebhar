import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  UtensilsCrossed, 
  Building2, 
  MapPin,
  Calendar,
  Users,
  Award
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      category: "Travel & Tourism",
      icon: Plane,
      years: "8+ Years",
      description: "Specialized in promoting travel destinations, hotels, and tourism experiences across Europe and beyond.",
      highlights: [
        "50+ Destinations Promoted",
        "Tourism Board Partnerships", 
        "Multi-language Campaigns",
        "Cultural Content Creation"
      ],
      color: "bg-blue-500"
    },
    {
      category: "Restaurants & Food",
      icon: UtensilsCrossed,
      years: "6+ Years", 
      description: "Expert in restaurant marketing, food photography, and culinary storytelling that drives customer engagement.",
      highlights: [
        "150+ Restaurants",
        "Viral Food Content",
        "Menu Photography",
        "Chef Collaborations"
      ],
      color: "bg-orange-500"
    },
    {
      category: "Hospitality Industry",
      icon: Building2,
      years: "7+ Years",
      description: "Comprehensive marketing solutions for hotels, resorts, and hospitality brands across different market segments.",
      highlights: [
        "Luxury Hotel Campaigns",
        "Booking Optimization",
        "Guest Experience Content",
        "Revenue Growth Strategies"
      ],
      color: "bg-purple-500"
    },
    {
      category: "Life in Germany",
      icon: MapPin,
      years: "5+ Years",
      description: "Authentic storytelling about German culture, lifestyle, and business practices for international audiences.",
      highlights: [
        "Cultural Integration Content",
        "Business Etiquette Guides", 
        "Local Experience Sharing",
        "International Community Building"
      ],
      color: "bg-green-500"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "10+", icon: Calendar },
    { label: "Successful Projects", value: "500+", icon: Award },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Countries Worked In", value: "15+", icon: MapPin }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade of expertise across travel, hospitality, and cultural marketing. 
            We understand what resonates with international audiences and local communities alike.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${exp.color} text-white`}>
                    <exp.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{exp.category}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.years}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero border-none">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to leverage our expertise for your business?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're in travel, hospitality, or looking to expand internationally, 
                our cross-cultural experience gives you the edge you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Your Project
                </button>
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  View Our Portfolio
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;