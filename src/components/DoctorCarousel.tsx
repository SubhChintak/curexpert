
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Doctor {
  id: string;
  name: string;
  photo: string;
  degrees: string[];
  specialty: string;
  visitingDates: string;
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    degrees: ["MBBS", "MD"],
    specialty: "Cardiology",
    visitingDates: "10–12 June"
  },
  {
    id: "2",
    name: "Dr. Priya Sharma",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    degrees: ["MBBS", "MS"],
    specialty: "Orthopedics",
    visitingDates: "15–17 June"
  },
  {
    id: "3",
    name: "Dr. Amit Patel",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    degrees: ["MBBS", "DM"],
    specialty: "Neurology",
    visitingDates: "20–22 June"
  },
  {
    id: "4",
    name: "Dr. Sneha Gupta",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    degrees: ["MBBS", "MD"],
    specialty: "Dermatology",
    visitingDates: "25–27 June"
  },
  {
    id: "5",
    name: "Dr. Vikram Singh",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    degrees: ["MBBS", "MS"],
    specialty: "General Surgery",
    visitingDates: "30 June–2 July"
  },
  {
    id: "6",
    name: "Dr. Kavita Reddy",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    degrees: ["MBBS", "MD"],
    specialty: "Pediatrics",
    visitingDates: "5–7 July"
  },
  {
    id: "7",
    name: "Dr. Arjun Mehta",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    degrees: ["MBBS", "MD"],
    specialty: "Psychiatry",
    visitingDates: "10–12 July"
  },
  {
    id: "8",
    name: "Dr. Nisha Jain",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    degrees: ["MBBS", "MS"],
    specialty: "Ophthalmology",
    visitingDates: "15–17 July"
  }
];

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <motion.div 
      className="bg-stone-200 dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-xl transition-all duration-300 p-6 mx-4 min-w-[280px] border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
    >
      <div className="text-center">
        <div className="relative mx-auto w-20 h-20 mb-4">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-full border-1 border-stone-300 dark:border-black shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-1 border-white dark:border-gray-800"></div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {doctor.name}
        </h3>
        
        <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
          {doctor.degrees.join(", ")}
        </p>
        
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {doctor.specialty}
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
            Available Dates
          </p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {doctor.visitingDates}
          </p>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
          size="sm"
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
};

const DoctorCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate the doctors array to create seamless loop
  const duplicatedDoctors = [...doctors, ...doctors];

  return (
    <section className="py-16 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Exclusive for <span className="text-blue-600 dark:text-blue-400"> This Month</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Consult with our experienced specialists available for appointments. 
            Book your consultation today.
          </p>
        </motion.div>
      </div>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex"
          animate={{
            x: isPaused ? undefined : "-50%"
          }}
          transition={{
            duration: isPaused ? 0 : 40,
            ease: "linear",
            repeat: isPaused ? 0 : Infinity,
          }}
          style={{
            width: `${duplicatedDoctors.length * 320}px`
          }}
        >
          {duplicatedDoctors.map((doctor, index) => (
            <DoctorCard 
              key={`${doctor.id}-${index}`} 
              doctor={doctor} 
            />
          ))}
        </motion.div>
        
        {/* Gradient overlays for fade effect */}
        {/* <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div> */}
      </div>
    </section>
  );
};

export default DoctorCarousel;