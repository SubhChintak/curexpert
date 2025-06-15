import React from 'react';
import DoctorClinicInfo from "@/components/DoctorClinicInfo";
import DiagnosticCenters from "@/components/DiagnosticCenters";
import Hospitals from "@/components/Hospitals";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { 
  Stethoscope, 
  Activity, 
  Building2, 
  Phone, 
  Award, 
  FileText, 
  Plane, 
  Building, 
  Ticket, 
  HeartPulse, 
  ActivitySquare,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const services = [
    {
      id: "clinics",
      title: "Super Speciality OP Clinics",
      description: "Access top specialists across multiple disciplines for expert consultations.",
      icon: Stethoscope,
      isPremium: true,
    },
    {
      id: "diagnostics",
      title: "Diagnostic Services",
      description: "Comprehensive diagnostic solutions with state-of-the-art technology.",
      icon: Activity,
      isPremium: true,
    },
    {
      id: "hospitals",
      title: "Best Healthcare Destinations",
      description: "Connect with leading hospitals known for excellence in patient care.",
      icon: Building2,
      isPremium: true,
    },
    {
      id: "teleconsultation",
      title: "Tele Communication",
      description: "Consult with doctors remotely from the comfort of your home.",
      icon: Phone,
      isPremium: false,
    },
    {
      id: "free-assistance",
      title: "Free Medical Assistance",
      description: "Get free basic medical guidance and support for common health concerns.",
      icon: HeartPulse,
      isPremium: false,
    },
    {
      id: "second-opinion",
      title: "Second Medical Opinion",
      description: "Seek additional expert opinions on your diagnosis and treatment plans.",
      icon: Award,
      isPremium: false,
    },
    {
      id: "treatment-info",
      title: "Treatment Information & Cost",
      description: "Get detailed insights about treatments and associated costs.",
      icon: FileText,
      isPremium: false,
    },
    {
      id: "ambulance",
      title: "Train/Air Ambulance Booking",
      description: "Emergency medical transport services via air or train.",
      icon: Plane,
      isPremium: false,
    },
    {
      id: "accommodation",
      title: "Hostel/Guest House Accommodation",
      description: "Comfortable stay options near treatment centers for patients and families.",
      icon: Building,
      isPremium: false,
    },
    {
      id: "tickets",
      title: "Flight Ticket Booking",
      description: "Convenient travel arrangements tailored to ensure a smooth and stress-free experience for individuals.",
      icon: Ticket,
      isPremium: false,
    },
    {
      id: "post-treatment",
      title: "Post-treatment Care",
      description: "Comprehensive recovery support after your medical procedures.",
      icon: HeartPulse,
      isPremium: false,
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      description: "Professional rehabilitation services to improve mobility and reduce pain.",
      icon: ActivitySquare,
      isPremium: false,
    }
  ];



export function ServiceSection () {

      const [showAllServices, setShowAllServices] = useState(false);
      const [activeModal, setActiveModal] = useState<string | null>(null);
      const isMobile = useIsMobile();
    
      useEffect(() => {
        if (!isMobile) {
          setShowAllServices(true);
        } else {
          setShowAllServices(false);
        }
      }, [isMobile]);
    
      const closeModal = () => {
        setActiveModal(null);
      };


    const visibleServices = isMobile && !showAllServices ? services.slice(0, 6) : services;

  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };


  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Healthcare <span className="text-blue-600 dark:text-blue-400">Services</span>
              {/* <Cover className="text-blue-600 dark:text-blue-400">Services </Cover> */}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                CureXpert India offers a comprehensive range of healthcare services to meet all your medical needs. 
                From consultations to treatment and beyond, we're with you at every step.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ServiceCard
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    isPremium={service.isPremium}
                  />
                </motion.div>
              ))}
            </div>
            
            {isMobile && (
              <div className="mt-10 text-center">
                <Button 
                  onClick={toggleShowAllServices}
                  className="bg-blue-500 hover:bg-blue-600 text-blue-950 px-6 py-6 rounded-md shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>{showAllServices ? "Show Less" : "View More Services"}</span>
                  {showAllServices ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </Button>
              </div>
            )}
          </div>

                  <DoctorClinicInfo isOpen={activeModal === "clinics"} onClose={closeModal} />
                  <DiagnosticCenters isOpen={activeModal === "diagnostics"} onClose={closeModal} />
                  <Hospitals isOpen={activeModal === "hospitals"} onClose={closeModal} />

        </section>
  )

  
}


