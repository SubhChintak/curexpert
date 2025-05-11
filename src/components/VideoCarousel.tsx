import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Video {
  id: string;
  title: string;
  description: string;
}

// Convert YouTube URLs to proper format and extract video IDs
const videos: Video[] = [
  {
    id: "G0Iibyfxwis",
    title: "WATCH THIS To Avoid Heart Attack: Lifestyle, Food & Painkillers – Dr. Ramakanta",
    description: "By Raj Shamani"
  },
  {
    id: "YCBlUomst5s",
    title: "DIABETES SE BACHO - Top Dr. Rahul Baxi Ki Expert Advice | Cause, Myths & More",
    description: "By The Ranveer Show"
  },
  {
    id: "FN0_ow76hU8",
    title: "The Mental Health Doctor: Your Phone Screen & Sitting Is Destroying Your Brain!",
    description: "By The Diary of a CEO"
  },
  {
    id: "tUMMfLTFUwQ",
    title: "Keep Your Eyes SAFE - Motiyabind, Eye Surgery, Contact Lens & More ",
    description: "By The Ranveer Show"
  }
];

export default function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleVideo = (videoId: string) => {
    if (activeVideo === videoId) {
      setActiveVideo(null);
    } else {
      setActiveVideo(videoId);
    }
  };

  const getYouTubeThumbnail = (videoId: string) => {
    // YouTube provides various thumbnail resolutions
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
     <section className="py-20 bg-white dark:bg-black overflow-hidden w-full">

    {/* <section className="py-20 bg-sky-400 dark:bg-black overflow-hidden w-full"> */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-sky-600 dark:text-sky-400">Videos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Watch our collection of informative videos about healthcare services and patient experiences.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col overflow-hidden">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-4">
                      {activeVideo === video.id ? (
                        <iframe 
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                          title={video.title}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div 
                          className="absolute inset-0 bg-black cursor-pointer overflow-hidden"
                          onClick={() => toggleVideo(video.id)}
                          style={{
                            backgroundImage: `url(${getYouTubeThumbnail(video.id)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-800/80 to-sky-600/80 hover:from-sky-800/70 hover:to-sky-600/70 transition-all duration-300"> */}
                          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                            <button
                              className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                              aria-label="Play video"
                            >
                              <Play className="h-8 w-8" />
                            </button>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                              <div>
                                {/* <h3 className="text-white text-xl font-bold">{video.title}</h3>
                                <p className="text-white/80 text-sm mt-1">{video.description}</p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {!activeVideo || activeVideo !== video.id ? (
                      <>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {video.description}
                        </p>
                      </>
                    ) : (
                      <Button 
                        variant="outline"
                        className="mt-4" 
                        onClick={() => setActiveVideo(null)}
                      >
                        Close Video
                      </Button>
                    )}
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
                      }}
                      
                    >
                      <ExternalLink className="h-4 w-4" />
                      Watch on YouTube
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0 mr-2 bg-sky-500 text-white hover:bg-sky-600 border-none" />
            <CarouselNext className="static translate-y-0 ml-2 bg-sky-500 text-white hover:bg-sky-600 border-none" />
          </div>
        </Carousel>
      </div>
      
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-sky-100/50 dark:bg-sky-900/20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-sky-100/50 dark:bg-sky-900/20 blur-3xl z-0"></div> */}
    </section>
  );
}
