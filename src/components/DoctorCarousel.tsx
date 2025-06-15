
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// interface Doctor {
//   id: string;
//   name: string;
//   photo: string;
//   degrees: string[];
//   specialty: string;
//   visitingDates: string;
// }

// const doctors: Doctor[] = [
//   {
//     id: "1",
//     name: "Dr. Rajesh Kumar",
//     photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     degrees: ["MBBS", "MD"],
//     specialty: "Cardiology",
//     visitingDates: "10–12 June"
//   },
//   {
//     id: "2",
//     name: "Dr. Priya Sharma",
//     photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
//     degrees: ["MBBS", "MS"],
//     specialty: "Orthopedics",
//     visitingDates: "15–17 June"
//   },
//   {
//     id: "3",
//     name: "Dr. Amit Patel",
//     photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     degrees: ["MBBS", "DM"],
//     specialty: "Neurology",
//     visitingDates: "20–22 June"
//   },
//   {
//     id: "4",
//     name: "Dr. Sneha Gupta",
//     photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
//     degrees: ["MBBS", "MD"],
//     specialty: "Dermatology",
//     visitingDates: "25–27 June"
//   },
//   {
//     id: "5",
//     name: "Dr. Vikram Singh",
//     photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     degrees: ["MBBS", "MS"],
//     specialty: "General Surgery",
//     visitingDates: "30 June–2 July"
//   },
//   {
//     id: "6",
//     name: "Dr. Kavita Reddy",
//     photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
//     degrees: ["MBBS", "MD"],
//     specialty: "Pediatrics",
//     visitingDates: "5–7 July"
//   },
//   {
//     id: "7",
//     name: "Dr. Arjun Mehta",
//     photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     degrees: ["MBBS", "MD"],
//     specialty: "Psychiatry",
//     visitingDates: "10–12 July"
//   },
//   {
//     id: "8",
//     name: "Dr. Nisha Jain",
//     photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
//     degrees: ["MBBS", "MS"],
//     specialty: "Ophthalmology",
//     visitingDates: "15–17 July"
//   }
// ];

// const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
//   return (
//     <motion.div 
//       className="bg-stone-200 dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-xl transition-all duration-300 p-6 mx-4 min-w-[280px] border border-gray-200 dark:border-gray-700"
//       whileHover={{ y: -5 }}
//     >
//       <div className="text-center">
//         <div className="relative mx-auto w-20 h-20 mb-4">
//           <img
//             src={doctor.photo}
//             alt={doctor.name}
//             className="w-full h-full object-cover rounded-full border-1 border-stone-300 dark:border-black shadow-lg"
//           />
//           <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-1 border-white dark:border-gray-800"></div>
//         </div>
        
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//           {doctor.name}
//         </h3>
        
//         <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
//           {doctor.degrees.join(", ")}
//         </p>
        
//         <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//           {doctor.specialty}
//         </p>
        
//         <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
//           <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
//             Available Dates
//           </p>
//           <p className="text-sm font-medium text-gray-900 dark:text-white">
//             {doctor.visitingDates}
//           </p>
//         </div>
        
//         <Button 
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2"
//           size="sm"
//         >
//           Book Now
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// const DoctorCarousel = () => {
//   const [isPaused, setIsPaused] = useState(false);
  
//   // Duplicate the doctors array to create seamless loop
//   const duplicatedDoctors = [...doctors, ...doctors];

//   return (
//     <section className="py-16 bg-white dark:bg-black overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 mb-8">
//         <motion.div 
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Exclusive for <span className="text-blue-600 dark:text-blue-400"> This Month</span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
//             Consult with our experienced specialists available for appointments. 
//             Book your consultation today.
//           </p>
//         </motion.div>
//       </div>
      
//       <div 
//         className="relative"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
//         <motion.div
//           className="flex"
//           animate={{
//             x: isPaused ? undefined : "-50%"
//           }}
//           transition={{
//             duration: isPaused ? 0 : 40,
//             ease: "linear",
//             repeat: isPaused ? 0 : Infinity,
//           }}
//           style={{
//             width: `${duplicatedDoctors.length * 320}px`
//           }}
//         >
//           {duplicatedDoctors.map((doctor, index) => (
//             <DoctorCard 
//               key={`${doctor.id}-${index}`} 
//               doctor={doctor} 
//             />
//           ))}
//         </motion.div>
        
//         {/* Gradient overlays for fade effect */}
//         {/* <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
//         <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div> */}
//       </div>
//     </section>
//   );
// };

// export default DoctorCarousel;



import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  photo: string;
  degrees: string[];
  specialty: string;
  hospital: string;
  visitingDates: string;
  purposeOfVisit: string;
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    photo: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
    degrees: ["MBBS", "MD"],
    specialty: "Cardiology",
    hospital: "Apollo Hospital, Delhi",
    visitingDates: "10–12 June",
    purposeOfVisit: "Heart Consultation & Treatment"
  },
  {
    id: "2",
    name: "Dr. Priya Sharma",
    photo: "https://i.pinimg.com/736x/f6/2d/a3/f62da3aacbaf68f5a3853da5a20b3fb0.jpg",
    degrees: ["MBBS", "MS"],
    specialty: "Orthopedics",
    hospital: "Fortis Hospital, Mumbai",
    visitingDates: "15–17 June",
    purposeOfVisit: "Bone & Joint Care"
  },
  {
    id: "3",
    name: "Dr. Amit Patel",
    photo: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
    degrees: ["MBBS", "DM"],
    specialty: "Neurology",
    hospital: "Max Hospital, Bangalore",
    visitingDates: "20–22 June",
    purposeOfVisit: "Brain & Nervous System"
  },
  {
    id: "4",
    name: "Dr. Sneha Gupta",
    photo: "https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg",
    degrees: ["MBBS", "MD"],
    specialty: "Dermatology",
    hospital: "Medanta Hospital, Gurgaon",
    visitingDates: "25–27 June",
    purposeOfVisit: "Skin & Hair Treatment"
  },
  {
    id: "5",
    name: "Dr. Vikram Singh",
    photo: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
    degrees: ["MBBS", "MS"],
    specialty: "General Surgery",
    hospital: "AIIMS, New Delhi",
    visitingDates: "30 June–2 July",
    purposeOfVisit: "Surgical Procedures"
  },
  {
    id: "6",
    name: "Dr. Kavita Reddy",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    degrees: ["MBBS", "MD"],
    specialty: "Pediatrics",
    hospital: "Rainbow Hospital, Hyderabad",
    visitingDates: "5–7 July",
    purposeOfVisit: "Child Healthcare"
  },
  {
    id: "7",
    name: "Dr. Arjun Mehta",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    degrees: ["MBBS", "MD"],
    specialty: "Psychiatry",
    hospital: "Nimhans, Bangalore",
    visitingDates: "10–12 July",
    purposeOfVisit: "Mental Health Care"
  },
  {
    id: "8",
    name: "Dr. Nisha Jain",
    photo: "https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg",
    degrees: ["MBBS", "MS"],
    specialty: "Ophthalmology",
    hospital: "Sankara Nethralaya, Chennai",
    visitingDates: "15–17 July",
    purposeOfVisit: "Eye Care & Surgery"
  }
];

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <motion.div 
      className="bg-stone-200 dark:bg-gradient-to-br dark:from-blue-950 dark:to-blue-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 mx-4 min-w-[320px] border border-gray-200 dark:border-blue-800"
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col h-full">
        {/* Doctor Image */}
        <div className="relative mx-auto w-32 h-32 mb-4">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-lg border-1 border-stone-300 dark:border-black shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-green-900 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Doctor Info */}
        <div className="text-center flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {doctor.name}
          </h3>
          
          <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 ">
            {doctor.degrees.join(", ")}
          </p>
          
          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 dark:bg-blue-800/30 rounded-lg p-3 border border-white/40 shadow-xl/20">
              <p className="text-xs text-gray-600 dark:text-blue-300 mb-1 font-medium">
                Specialization
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {doctor.purposeOfVisit}
              </p>
            </div>
            
            <div className="flex items-center justify-center text-gray-600 dark:text-blue-300 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <p className="text-xs">
                {doctor.hospital}
              </p>
            </div>
            
            <div className="flex items-center justify-center text-gray-600 dark:text-blue-300">
              <Calendar className="w-4 h-4 mr-2" />
              <p className="text-xs font-medium">
                Available: {doctor.visitingDates}
              </p>
            </div>
          </div>
        </div>
        
        {/* Book Button */}
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-3 mt-auto"
          size="sm"
        >
          Get an Appointment
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
            Exclusive for <span className="text-blue-600 dark:text-blue-400">This Month</span>
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
            width: `${duplicatedDoctors.length * 352}px`
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