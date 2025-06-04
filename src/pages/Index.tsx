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

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DynamicCounter from "@/components/DynamicCounter";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PartnersSection from "@/components/PartnersSection";
import VideoCarousel from "@/components/VideoCarousel";
import FAQSection from "@/components/FAQSection";
import DoctorTestimonials from "@/components/DoctorTestimonials";
import PatientTestimonials from "@/components/PatientTestimonials";
import DoctorClinicInfo from "@/components/DoctorClinicInfo";
import DiagnosticCenters from "@/components/DiagnosticCenters";
import Hospitals from "@/components/Hospitals";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import { Cover } from "@/components/ui/cover";
import { Hero } from "@/components/Hero";
import DoctorCarousel from "@/components/DoctorCarousel";

const Index = () => {
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

  const marqueeMessages = [
    "24/7 Medical Help",
    "Top Doctors, Anytime",
    "Health Check Deals",
    "Global Patient Care",
    "Expert Second Opinions"
  ];

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

  const visibleServices = isMobile && !showAllServices ? services.slice(0, 6) : services;

  const toggleShowAllServices = () => {
    setShowAllServices(!showAllServices);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black">

        

      {/* <div className="min-h-screen flex flex-col bg-blue-400 dark:bg-black"> */}
        <Navbar />
{/*         <div className="pt-20">
        <Marquee messages={marqueeMessages} />
        </div> */}
        
        {/* <section className="relative py-20 hero-gradient text-white lg:h-screen w-screen">

          <video autoPlay muted loop className="w-full h-full object-cover absolute inset-0 bg-cover bg-center opacity-160">
  <source src="/lovable-uploads/hero-video.mp4" type="video/mp4" />
  Your browser does not support the video!
</video>


          <div className="container mx-auto px-4 py-10 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.h1 
                className="text-5xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Your Health Journey, <span className="text-blue-950/95">Our Priority</span>
              </motion.h1>
              <motion.p 
                className="text-xl font-bold mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                CureXpert India connects you with the best healthcare services across the country. 
                From specialized clinics to premier hospitals, we're your healthcare navigator.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href="#services" 
                  className="bg-white text-teal-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100  shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Our Services
                </a>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </section> */}

        <AnimatedHero/>

        {/* <Hero/> */}

        {/* <div className="pt-0">
        <Marquee messages={marqueeMessages} />
        </div> */}

        <DoctorCarousel/>
        
        <SpecialtiesSection />
        
        {/* <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"> */}
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
        </section>
        
        <VideoCarousel />

        
        
        <section className="py-20 bg-white dark:bg-black">

        {/* <section className="py-20 bg-blue-400 dark:bg-black"> */}
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="text-blue-600 dark:text-blue-400">CureXpert India</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the factors that make us the preferred healthcare facilitator for patients across India.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Trusted Network
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Partner with vetted healthcare providers known for excellence and patient satisfaction.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={150} suffix="+" prefix="" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Patients Served</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our dedicated team is available round-the-clock to assist with your healthcare needs.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={365} suffix=" days/year" prefix="" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Always Available</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Cost Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Clear information about treatment costs and financial planning support.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={30} suffix="%" prefix="Up to " />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Cost Savings</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  End-to-End Care
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                Convenient travel arrangements tailored to ensure a smooth and stress-free experience for individuals.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={55} suffix="+" prefix="" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Healthcare Partners</p>
              </motion.div>
            </div>
          </div>
        </section>
        


        <PatientTestimonials/>
        <DoctorTestimonials />
        
        <Contact />
        
        <PartnersSection />
        
        <FAQSection />

        <div className="pt-0">
        <Marquee messages={marqueeMessages} />
        </div>
        
        <Footer />
        
        <DoctorClinicInfo isOpen={activeModal === "clinics"} onClose={closeModal} />
        <DiagnosticCenters isOpen={activeModal === "diagnostics"} onClose={closeModal} />
        <Hospitals isOpen={activeModal === "hospitals"} onClose={closeModal} />
      </div>
    </ThemeProvider>
  );
};

export default Index;
