
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

      <video autoPlay muted loop className="w-full h-full object-cover absolute inset-0 bg-cover bg-center opacity-160">
  <source src="/lovable-uploads/hero-video.mp4" type="video/mp4" />
  Your browser does not support the video!
</video>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent"></div>
      
     {/* Main content */}
     <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Center aligned content */}
          <div className="w-full text-center lg:text-left">
            {/* Animated badge */}
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block bg-teal-600/30 backdrop-blur-sm px-4 py-2 rounded-lg mb-6"
            >
              <h3 className="text-lg font-medium text-white">Welcome to CureXpert India</h3>
            </motion.div> */}
            
            {/* Main headline with animation - much bigger and wider (2/3 screen) */}
            <div className="overflow-hidden mx-auto lg:mx-0 w-full lg:w-2/3">
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                Your Health Journey<br />
                <motion.span 
                  className="text-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                 Our Priority
                </motion.span>
              </motion.h1>
            </div>
            
            {/* Sub headline with animation coming from right - placed below headline */}
            <div className="overflow-hidden mx-auto lg:mx-0 w-full lg:w-3/4 mb-8">
              <motion.p 
                className="text-xl md:text-2xl text-white/90"
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-md text-lg shadow-lg hover:shadow-teal-700/20 transition-all duration-300 group w-full sm:w-auto"
                >
                  <span><a href="#services">Explore Our Services</a></span>
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
                  className="border-2 border-white text-white px-6 py-6 rounded-md text-lg bg-transparent hover:bg-white/10 transition-all duration-300 group w-full sm:w-auto"
                >
                  <span><a href="#contact">Get a Free Consultation</a></span>
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
        
        {/* Animated horizontal scroll indicator */}
        {/* {!isMobile && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <a href="#services" className="text-white/70 hover:text-white flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </a>
          </motion.div>
        )} */}
        
        {/* Animated particles in background */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              initial={{
                width: Math.random() * 6 + 4,
                height: Math.random() * 6 + 4,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AnimatedHero;