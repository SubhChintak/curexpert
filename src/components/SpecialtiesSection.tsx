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
    bannerImage: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    bannerImage: "https://images.pexels.com/photos/207496/pexels-photo-207496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    bannerImage: "https://plus.unsplash.com/premium_photo-1723108858066-66b1bd834675?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "eyespecialist",
    name: "Eye Specialist",
    bannerImage: "https://plus.unsplash.com/premium_photo-1664478176640-979307f52046?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "gynecology",
    name: "Gynaecologist",
    bannerImage: "https://plus.unsplash.com/premium_photo-1702599037743-79b357229fb5?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "dental",
    name: "Dentist",
    bannerImage: "https://images.unsplash.com/photo-1606811951341-756fdd437682?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "childspecialist",
    name: "Child Specialist",
    bannerImage: "https://images.unsplash.com/photo-1576766125535-b04e15fd0273?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "ent",
    name: "ENT",
    bannerImage: "https://plus.unsplash.com/premium_photo-1661779725491-e997e70928fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "neurology",
    name: "Neurology",
    bannerImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2873&auto=format&fit=crop"
  },
  {
    id: "paediatrics",
    name: "Paediatrics",
    bannerImage: "https://images.unsplash.com/photo-1676313030076-4ac0b37050fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "nephrology",
    name: "Nephrology",
    bannerImage: "https://plus.unsplash.com/premium_photo-1722608200931-5c787cf3053d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    bannerImage: "https://plus.unsplash.com/premium_photo-1722947097108-9af829cf1ded?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "urology",
    name: "Urology",
    bannerImage: "https://plus.unsplash.com/premium_photo-1702599099904-4f25f14b0471?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "oncology",
    name: "Oncology",
    bannerImage: "https://images.unsplash.com/photo-1693264882139-6a308957c9ae?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    bannerImage: "https://plus.unsplash.com/premium_photo-1661901748991-17870b6614af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "neurosurgeon",
    name: "Neuro Surgeon",
    bannerImage: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "ayurvedic",
    name: "Ayurvedic",
    bannerImage: "https://images.unsplash.com/photo-1569936906148-06de87cb0681?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "homeopathy",
    name: "Homeopathy",
    bannerImage: "https://images.unsplash.com/photo-1512867957657-38dbae50a35b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Medical <span className="text-blue-600 dark:text-blue-400">Specialties</span>
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 via-blue-700/40 to-transparent transition-opacity group-hover:opacity-90" />
              
              {/* Glassmorphism headline container */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="backdrop-blur-md bg-blue-900/90 dark:bg-blue-900/90 rounded-lg p-2 border border-white/40 shadow-xl">
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-lg hover:shadow-lg transition-all flex items-center space-x-2"
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