import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import PartnersSection from "@/components/PartnersSection";
import VideoCarousel from "@/components/VideoCarousel";
import FAQSection from "@/components/FAQSection";
import DoctorTestimonials from "@/components/DoctorTestimonials";
import PatientTestimonials from "@/components/PatientTestimonials";
import AnimatedHero from "@/components/AnimatedHero";
import DoctorCarousel from "@/components/DoctorCarousel";
import WhyUS from "@/components/WhyUS";
import { ServiceSection } from "@/components/ServiceSection";



const Index = () => {


  const marqueeMessages = [
    "24/7 Medical Help",
    "Top Doctors, Anytime",
    "Health Check Deals",
    "Global Patient Care",
    "Expert Second Opinions"
  ];



  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black">

        <Navbar />

        <AnimatedHero/>

        <DoctorCarousel/>
        
        <SpecialtiesSection />

        <ServiceSection/>
        
        <VideoCarousel />

        <WhyUS />

        <PatientTestimonials/>
        
        <DoctorTestimonials />
        
        <Contact />
        
        <PartnersSection />
        
        <FAQSection />

        <div className="pt-0">
        <Marquee messages={marqueeMessages} />
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
