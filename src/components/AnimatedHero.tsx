
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AnimatedHero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative overflow-hidden bg-gray-900 text-white min-h-[85vh] flex items-center lg:h-screen w-screen">
      {/* Dark background with overlay */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div> */}

      <video autoPlay muted loop preload="none" className="w-full h-full object-cover absolute inset-0 bg-cover bg-center opacity-160">
  <source src="/curexpert-uploads/curexpert-video02.mp4" type="video/mp4" />
  Your browser doesn't support the video!
</video>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      
     {/* Main content */}
     <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Center aligned content */}
          <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
            {/* Animated badge */}
            <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Bringing World-Class Healthcare to Your Doorstep <br/>
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white backdrop-blur-sm text-xl md:text-3xl lg:text-5xl">
          Expert Care for Every Cure
        </span>
        
      </h2>
            
            {/* Sub headline with animation coming from right - placed below headline */}
            <div className="relative z-20 mx-auto max-w-2xl pt-5 py-8 text-center text-sm text-neutral-200 md:text-base">
              <motion.p 
                className="text-sm md:text-xl text-white/90"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.9,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                Providing specialized healthcare services, 
                connecting you with top doctors, 
                premier hospitals, and comprehensive 
                medical solutions across India.
              </motion.p>
            </div>
            
            {/* Both buttons together below sub-headline */}
            <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <Button 
                  className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
                >
                  <span><a href="#services">ExploreServices</a></span>
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>
              
              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <Button 
                  variant="outline" 
                  className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
                >
                  <span><a href="#contact">Get Consultation</a></span>
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AnimatedHero;