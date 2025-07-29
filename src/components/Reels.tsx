import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";

const reels = [
  {
    id: 1,
    title: "Viral Pizza Making",
    thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: "2.3M",
    description: "Behind-the-scenes pizza making that went viral",
    duration: "0:45"
  },
  {
    id: 2,
    title: "Sushi Master Class",
    thumbnail: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: "1.8M",
    description: "Mesmerizing sushi preparation techniques",
    duration: "1:20"
  },
  {
    id: 3,
    title: "Burger Assembly Art",
    thumbnail: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: "3.1M",
    description: "Satisfying burger building process",
    duration: "0:32"
  },
  {
    id: 4,
    title: "Coffee Latte Art",
    thumbnail: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: "980K",
    description: "Beautiful latte art creation",
    duration: "0:28"
  },
  {
    id: 5,
    title: "Pasta Making Magic",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: "1.5M",
    description: "Traditional pasta making from scratch",
    duration: "1:15"
  },
  {
    id: 6,
    title: "Dessert Plating",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    views: "750K",
    description: "Artistic dessert presentation",
    duration: "0:38"
  }
];

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = Math.max(0, reels.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="reels" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Reels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Viral content that captures attention and drives engagement. Our reels have generated millions of views across platforms.
          </p>
        </div>

        <div className="relative">
          {/* Navigation */}
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
              {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, reels.length)} of {reels.length}
            </div>
          </div>

          {/* Reels Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {reels.map((reel) => (
                <div 
                  key={reel.id} 
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                          {reel.duration}
                        </span>
                      </div>

                      {/* Views Badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        <Eye className="w-4 h-4" />
                        {reel.views}
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {reel.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {reel.description}
                      </p>
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

export default Reels;