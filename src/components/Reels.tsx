import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Play, Eye } from "lucide-react";

const reelsData = {
  travel: [
    {
      id: 1,
      title: "Bavarian Alps Adventure",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.2M",
      description: "Breathtaking mountain views and hiking trails",
      duration: "1:45"
    },
    {
      id: 2,
      title: "Berlin Street Art Tour",
      thumbnail: "https://images.unsplash.com/photo-1587330979470-3862917134ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "890K",
      description: "Underground culture and artistic expression",
      duration: "2:10"
    },
    {
      id: 3,
      title: "Rhine Valley Castles",
      thumbnail: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "2.1M",
      description: "Medieval castles along the romantic Rhine",
      duration: "1:30"
    },
    {
      id: 4,
      title: "Oktoberfest Experience",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "3.5M",
      description: "Traditional Bavarian festival celebration",
      duration: "2:45"
    }
  ],
  restaurants: [
    {
      id: 5,
      title: "Viral Pizza Making",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "2.3M",
      description: "Behind-the-scenes pizza making that went viral",
      duration: "0:45"
    },
    {
      id: 6,
      title: "Sushi Master Class",
      thumbnail: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.8M",
      description: "Mesmerizing sushi preparation techniques",
      duration: "1:20"
    },
    {
      id: 7,
      title: "German Bakery Secrets",
      thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.1M",
      description: "Traditional German bread making process",
      duration: "2:15"
    },
    {
      id: 8,
      title: "Fine Dining Plating",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "950K",
      description: "Artistic fine dining presentation",
      duration: "1:05"
    }
  ],
  hospitality: [
    {
      id: 9,
      title: "Luxury Hotel Suite Tour",
      thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.7M",
      description: "Exclusive look at premium hospitality",
      duration: "2:30"
    },
    {
      id: 10,
      title: "Spa Day Experience",
      thumbnail: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.3M",
      description: "Relaxing wellness and spa treatments",
      duration: "1:50"
    },
    {
      id: 11,
      title: "Resort Activities Showcase",
      thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "2.2M",
      description: "Fun activities and resort amenities",
      duration: "3:00"
    },
    {
      id: 12,
      title: "Concierge Services",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "780K",
      description: "Premium guest service experience",
      duration: "1:25"
    }
  ],
  germany: [
    {
      id: 13,
      title: "Berlin Daily Life",
      thumbnail: "https://images.unsplash.com/photo-1559564484-ba0292f8d8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.5M",
      description: "Authentic daily experiences in Berlin",
      duration: "2:20"
    },
    {
      id: 14,
      title: "German Work Culture",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "920K",
      description: "Professional life and business etiquette",
      duration: "1:40"
    },
    {
      id: 15,
      title: "Christmas Markets",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "2.8M",
      description: "Traditional German Christmas celebrations",
      duration: "2:55"
    },
    {
      id: 16,
      title: "Public Transport Guide",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      views: "1.1M",
      description: "Navigating German public transportation",
      duration: "1:15"
    }
  ]
};

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState({
    travel: 0,
    restaurants: 0,
    hospitality: 0,
    germany: 0
  });
  
  const itemsPerView = 3;

  const getMaxIndex = (category: keyof typeof reelsData) => {
    return Math.max(0, reelsData[category].length - itemsPerView);
  };

  const nextSlide = (category: keyof typeof reelsData) => {
    const maxIndex = getMaxIndex(category);
    setCurrentIndex(prev => ({
      ...prev,
      [category]: prev[category] >= maxIndex ? 0 : prev[category] + 1
    }));
  };

  const prevSlide = (category: keyof typeof reelsData) => {
    const maxIndex = getMaxIndex(category);
    setCurrentIndex(prev => ({
      ...prev,
      [category]: prev[category] <= 0 ? maxIndex : prev[category] - 1
    }));
  };

  const ReelGrid = ({ category }: { category: keyof typeof reelsData }) => {
    const reels = reelsData[category];
    const maxIndex = getMaxIndex(category);
    const currentIdx = currentIndex[category];

    return (
      <div className="relative">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => prevSlide(category)}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => nextSlide(category)}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            {currentIdx + 1} - {Math.min(currentIdx + itemsPerView, reels.length)} of {reels.length}
          </div>
        </div>

        {/* Reels Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIdx * (100 / itemsPerView)}%)` }}
          >
            {reels.map((reel) => (
              <div 
                key={reel.id} 
                className="flex-shrink-0 w-full md:w-1/3"
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
              onClick={() => setCurrentIndex(prev => ({ ...prev, [category]: index }))}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIdx 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="reels" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Reels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Viral content across travel, restaurants, hospitality, and authentic German lifestyle. 
            Our diverse expertise creates content that resonates with global audiences.
          </p>
        </div>

        <Tabs defaultValue="travel" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-background/50 backdrop-blur-sm">
            <TabsTrigger value="travel" className="text-sm font-medium">
              Travel
            </TabsTrigger>
            <TabsTrigger value="restaurants" className="text-sm font-medium">
              Restaurants
            </TabsTrigger>
            <TabsTrigger value="hospitality" className="text-sm font-medium">
              Hospitality
            </TabsTrigger>
            <TabsTrigger value="germany" className="text-sm font-medium">
              Life in Germany
            </TabsTrigger>
          </TabsList>

          <TabsContent value="travel">
            <ReelGrid category="travel" />
          </TabsContent>

          <TabsContent value="restaurants">
            <ReelGrid category="restaurants" />
          </TabsContent>

          <TabsContent value="hospitality">
            <ReelGrid category="hospitality" />
          </TabsContent>

          <TabsContent value="germany">
            <ReelGrid category="germany" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Reels;