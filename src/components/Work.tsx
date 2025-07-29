import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Using placeholder images for the work showcase
const workItems = [
  {
    id: 1,
    title: "Casa Italiana",
    description: "Increased social engagement by 400% through authentic Italian content strategy",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Restaurant Transformation",
    results: "+400% Engagement"
  },
  {
    id: 2,
    title: "Sushi Zen",
    description: "Built premium brand identity that doubled their customer base in 6 months",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Brand Development",
    results: "+200% Customers"
  },
  {
    id: 3,
    title: "Urban Burger Co.",
    description: "Viral TikTok campaigns generated 50K+ new followers and packed restaurants",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Viral Marketing",
    results: "50K+ Followers"
  },
  {
    id: 4,
    title: "Bistro Lumière",
    description: "Sophisticated content strategy increased reservations by 250%",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Content Strategy",
    results: "+250% Reservations"
  },
  {
    id: 5,
    title: "Taco Libre",
    description: "Authentic Mexican storytelling tripled their Instagram followers",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Social Growth",
    results: "+300% Followers"
  },
  {
    id: 6,
    title: "The Garden Café",
    description: "Organic content approach increased monthly revenue by 180%",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Revenue Growth",
    results: "+180% Revenue"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, workItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real restaurants. See how we've transformed businesses and helped them achieve remarkable growth.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevSlide}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, workItems.length)} of {workItems.length}
            </div>
          </div>

          {/* Work Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {workItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 w-full md:w-1/3 px-4"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                          {item.results}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <Button variant="ghost" className="group/btn p-0 h-auto">
                        View Case Study
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;