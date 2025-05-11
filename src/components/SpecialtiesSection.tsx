import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface Specialty {
  id: string;
  name: string;
  bannerImage: string;
}

const specialties: Specialty[] = [
  {
    id: "medicine",
    name: "Medicine",
    bannerImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2942&auto=format&fit=crop"
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    bannerImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    bannerImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "ophthalmology",
    name: "Eye Specialist",
    bannerImage: "https://images.unsplash.com/photo-1559725043-fb9a0bc33242?q=80&w=2671&auto=format&fit=crop"
  },
  {
    id: "gynecology",
    name: "Gynaecologist",
    bannerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "dental",
    name: "Dentist",
    bannerImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2936&auto=format&fit=crop"
  },
  {
    id: "pediatrics",
    name: "Child Specialist",
    bannerImage: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "ent",
    name: "ENT",
    bannerImage: "https://images.unsplash.com/photo-1631815588090-d4fb58bcd2c8?q=80&w=2832&auto=format&fit=crop"
  },
  {
    id: "neurology",
    name: "Neurology",
    bannerImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2873&auto=format&fit=crop"
  },
  {
    id: "medicine",
    name: "Medicine",
    bannerImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2942&auto=format&fit=crop"
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    bannerImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    bannerImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "ophthalmology",
    name: "Eye Specialist",
    bannerImage: "https://images.unsplash.com/photo-1559725043-fb9a0bc33242?q=80&w=2671&auto=format&fit=crop"
  },
  {
    id: "gynecology",
    name: "Gynaecologist",
    bannerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "dental",
    name: "Dentist",
    bannerImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2936&auto=format&fit=crop"
  },
  {
    id: "pediatrics",
    name: "Child Specialist",
    bannerImage: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "ent",
    name: "ENT",
    bannerImage: "https://images.unsplash.com/photo-1631815588090-d4fb58bcd2c8?q=80&w=2832&auto=format&fit=crop"
  },
  {
    id: "neurology",
    name: "Neurology",
    bannerImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2873&auto=format&fit=crop"
  },
  
];

export default function SpecialtiesSection() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  
  const handleSpecialtyClick = (id: string) => {
    navigate(`/specialty/${id}`);
  };

  // Set visible specialties based on the showAllSpecialties state
  // If on mobile and not showing all, show first 6
  // Otherwise show all specialties
  const visibleSpecialties = showAllSpecialties || !isMobile 
    ? specialties 
    : specialties.slice(0, 6);

  const toggleShowAllSpecialties = () => {
    setShowAllSpecialties(!showAllSpecialties);
  };
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="specialties" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Medical <span className="text-sky-600 dark:text-sky-400">Specialties</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the right specialist for your healthcare needs. We connect you with experienced doctors across various medical specialties.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {visibleSpecialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={item}
              onClick={() => handleSpecialtyClick(specialty.id)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${specialty.bannerImage})` }}
              />
              
              {/* Full overlay with gradient for entire card */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-800/80 via-sky-700/40 to-transparent transition-opacity group-hover:opacity-90" />
              
              {/* Glassmorphism headline container */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="backdrop-blur-md bg-sky-500/20 dark:bg-sky-800/30 rounded-lg p-2 border border-white/10 shadow-lg">
                  <h3 className="text-white text-base sm:text-lg font-bold tracking-wide text-center">
                    {specialty.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {isMobile && (
          <div className="mt-10 text-center">
            <Button 
              onClick={toggleShowAllSpecialties}
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md shadow-lg hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>{showAllSpecialties ? "Show Less" : "View More Specialties"}</span>
              {showAllSpecialties ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}