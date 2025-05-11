
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CalendarDays, Hospital, Bed, Stethoscope, Building, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Doctor data for clinics
const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiology",
    image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
    location: "Apollo Clinic, Kolkata",
    availability: ["Mon", "Wed", "Fri"],
    contact: "+91 9876543210",
    experience: "15+ years"
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    specialty: "Neurology",
    image: "https://i.pinimg.com/736x/65/81/c9/6581c98046813a53a711aaf1ad9ad5ed.jpg",
    location: "Max Healthcare, Delhi",
    availability: ["Tue", "Thu", "Sat"],
    contact: "+91 9876543211",
    experience: "12 years"
  },
  {
    id: 3,
    name: "Dr. Anil Kumar",
    specialty: "Orthopedics",
    image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
    location: "Fortis Hospital, Mumbai",
    availability: ["Mon", "Tue", "Thu"],
    contact: "+91 9876543212",
    experience: "18 years"
  },
  {
    id: 4,
    name: "Dr. Sunita Reddy",
    specialty: "Pediatrics",
    image: "https://i.pinimg.com/736x/65/81/c9/6581c98046813a53a711aaf1ad9ad5ed.jpg",
    location: "Rainbow Children's Hospital, Hyderabad",
    availability: ["Wed", "Fri", "Sat"],
    contact: "+91 9876543213",
    experience: "10 years"
  },
];

// Diagnostic centers data
const diagnosticCenters = [
  {
    id: 1,
    name: "HealthScan Diagnostics",
    image: "https://i.pinimg.com/736x/f6/3e/b2/f63eb26ca6c05b11be07051c0ce6649d.jpg",
    location: "Kolkata, West Bengal",
    services: ["Full Body Checkup", "MRI Scan", "CT Scan", "Ultrasound", "Blood Tests"],
    contact: "+91 9876543214",
    timings: "8:00 AM - 8:00 PM"
  },
  {
    id: 2,
    name: "Metro Diagnostics",
    image: "https://i.pinimg.com/736x/5e/e4/54/5ee4543ed4fb9064194c2de3cde0f159.jpg",
    location: "Delhi NCR",
    services: ["Pathology", "Radiology", "Cardiac Tests", "Neurology Tests"],
    contact: "+91 9876543215",
    timings: "7:00 AM - 9:00 PM"
  },
  {
    id: 3,
    name: "Precision Medical Labs",
    image: "https://i.pinimg.com/736x/1f/1e/65/1f1e658bdfb30d2def11675c07b33b44.jpg",
    location: "Mumbai, Maharashtra",
    services: ["Blood Tests", "Genetic Testing", "Microbiological Tests", "Hormone Tests"],
    contact: "+91 9876543216",
    timings: "7:30 AM - 7:30 PM"
  },
];

// Hospital data
const hospitals = [
  {
    id: 1,
    name: "Apollo Hospitals",
    image: "https://www.apollohospitals.com/ahmedabad/cancer-center/wp-content/uploads/2015/04/apollo-ahmedabad.jpg",
    location: "Chennai, Tamil Nadu",
    specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    bedsCount: 300,
    established: 1983,
    rating: 4.7
  },
  {
    id: 2,
    name: "Fortis Healthcare",
    image: "https://images.moneycontrol.com/static-mcnews/2018/02/Fortis-Healthcare_.jpg?impolicy=website&width=1600&height=900",
    location: "Gurugram, Haryana",
    specialties: ["Cardiac Surgery", "Gastroenterology", "Neurosurgery", "Transplants"],
    bedsCount: 250,
    established: 1996,
    rating: 4.6
  },
  {
    id: 3,
    name: "Max Super Speciality Hospital",
    image: "https://www.healzone.co.in/storage/app/public/hospitals/July2023/F4OymRuciA62o4l9hUD7-gallery.jpg",
    location: "New Delhi",
    specialties: ["Oncology", "Renal Sciences", "Cardiac Sciences", "Neurosciences"],
    bedsCount: 320,
    established: 2000,
    rating: 4.8
  },
];

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  // All services mapping with more detailed content
  const allServices: Record<string, {
    title: string, 
    description: string, 
    isPremium: boolean,
    longDescription?: string,
    features?: string[],
    process?: string[]
  }> = {
    // Premium services with detailed content
    clinics: {
      title: "Super Speciality OP Clinics",
      description: "Connect with specialized doctors for expert consultations across various medical disciplines.",
      isPremium: true,
      longDescription: "Our Super Speciality OP Clinics offer access to the most experienced and qualified medical specialists in the country. We facilitate appointments with top doctors across a wide range of medical specialties, ensuring you receive the highest standard of care.",
      features: [
        "Access to over 500+ specialist doctors",
        "Priority appointment scheduling",
        "Comprehensive medical documentation",
        "Follow-up consultation management",
        "Personalized care plans"
      ],
      process: [
        "Share your medical requirements with our team",
        "Receive recommendations for appropriate specialists",
        "Select your preferred doctor and appointment time",
        "Attend your consultation at the designated clinic",
        "Get follow-up support and care coordination"
      ]
    },
    diagnostics: {
      title: "Diagnostic Centers",
      description: "Access comprehensive diagnostic services with state-of-the-art equipment and expert technicians.",
      isPremium: true,
      longDescription: "Our network of premium diagnostic centers is equipped with the latest medical technology and staffed by skilled technicians and specialists. We provide accurate, timely, and comprehensive diagnostic services to aid in precise medical evaluations.",
      features: [
        "Advanced imaging technologies (MRI, CT, PET scans)",
        "Comprehensive laboratory testing facilities",
        "Quick turnaround times for results",
        "Digital reports accessible online",
        "Expert interpretation by specialist radiologists"
      ],
      process: [
        "Book your diagnostic test through our platform",
        "Visit the center with your prescription",
        "Undergo the required diagnostic procedures",
        "Receive your reports within the promised timeframe",
        "Get expert analysis and next steps guidance"
      ]
    },
    hospitals: {
      title: "Best Healthcare Destinations",
      description: "Partner with leading hospitals that offer world-class healthcare facilities and treatments.",
      isPremium: true,
      longDescription: "We connect patients with India's best hospitals that are renowned for their exceptional facilities, advanced medical technologies, and outstanding care. Our partner hospitals maintain the highest standards of healthcare delivery and patient experience.",
      features: [
        "JCI and NABH accredited facilities",
        "Cutting-edge medical infrastructure",
        "Multi-specialty treatment capabilities",
        "World-class patient care environments",
        "Comprehensive emergency services"
      ],
      process: [
        "Discuss your hospital requirements with our advisors",
        "Review our recommendations based on your medical needs",
        "Select your preferred healthcare facility",
        "Complete pre-admission formalities with our assistance",
        "Experience seamless hospital care with our support"
      ]
    },
    // Regular services
    teleconsultation: {
      title: "Tele Communication",
      description: "Consult with doctors remotely from the comfort of your home.",
      isPremium: false
    },
    "free-assistance": {
      title: "Free Medical Assistance",
      description: "Get free basic medical guidance and support for common health concerns.",
      isPremium: false
    },
    "second-opinion": {
      title: "Second Medical Opinion",
      description: "Seek additional expert opinions on your diagnosis and treatment plans.",
      isPremium: false
    },
    "treatment-info": {
      title: "Treatment Information & Cost",
      description: "Get detailed insights about treatments and associated costs.",
      isPremium: false
    },
    ambulance: {
      title: "Train/Air Ambulance Booking",
      description: "Emergency medical transport services via air or train.",
      isPremium: false
    },
    accommodation: {
      title: "Hostel/Guest House Accommodation",
      description: "Comfortable stay options near treatment centers for patients and families.",
      isPremium: false
    },
    tickets: {
      title: "Flight Ticket Booking",
      description: "Convenient travel arrangements tailored to ensure a smooth and stress-free experience for individuals.",
      isPremium: false
    },
    "post-treatment": {
      title: "Post-treatment Care",
      description: "Comprehensive recovery support after your medical procedures.",
      isPremium: false
    },
    physiotherapy: {
      title: "Physiotherapy",
      description: "Professional rehabilitation services to improve mobility and reduce pain.",
      isPremium: false
    }
  };
  
  const serviceInfo = allServices[serviceId || ""] || {
    title: "Healthcare Service",
    description: "Explore our premium healthcare services.",
    isPremium: false
  };
  
  // Render special content for premium services
  const renderSpecialContent = () => {
    if (serviceId === "clinics") {
      return (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-sky-400 dark:text-sky-400">Our Specialist Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-sky-600 dark:text-sky-400">{doctor.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Stethoscope className="h-4 w-4 mr-1" /> {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span>Available: {doctor.availability.join(", ")}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span>{doctor.contact}</span>
                  </div>
                  <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200 mt-2">{doctor.experience}</Badge>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Book Appointment</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      );
    } else if (serviceId === "diagnostics") {
      return (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-sky-400 dark:text-sky-400">Our Diagnostic Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diagnosticCenters.map((center) => (
              <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={center.image} 
                    alt={center.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-sky-600 dark:text-sky-400">{center.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" /> {center.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Services Offered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {center.services.map((service, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="bg-sky-50 text-sky-700 border-sky-200 text-xs"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <Calendar className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span>{center.timings}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <Phone className="h-4 w-4 mr-1 mt-0.5 text-gray-500" />
                    <span>{center.contact}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">Book Test</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      );
    } else if (serviceId === "hospitals") {
      return (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-sky-400 dark:text-sky-400">Our Partner Hospitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-sky-600 dark:text-sky-400 flex items-center">
                    <Hospital className="h-5 w-5 mr-2" />
                    {hospital.name}
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" /> {hospital.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Key Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.map((specialty, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="bg-sky-50 text-sky-700 border-sky-200 text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1 text-gray-500" />
                      <span>Est. {hospital.established}</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{hospital.bedsCount} Beds</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg 
                        key={idx}
                        className={`h-4 w-4 ${idx < Math.floor(hospital.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">{hospital.rating}/5</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700">View Hospital</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };
  
  // Service content
  const renderServiceContent = () => {
    return (
      <div className={`rounded-xl mt-10 shadow-lg p-6 md:p-8 ${
        serviceInfo.isPremium 
          ? "bg-gradient-to-br from-sky-950 to-sky-900 text-white" 
          : "bg-white dark:bg-gray-800"
      }`}>
        <h2 className={`text-2xl font-bold mb-4 ${
          serviceInfo.isPremium 
            ? "text-sky-400" 
            : "text-gray-900 dark:text-white"
        }`}>
          About {serviceInfo.title}
        </h2>
        <p className={`mb-6 ${
          serviceInfo.isPremium 
            ? "text-white/90" 
            : "text-gray-600 dark:text-gray-300"
        }`}>
          {serviceInfo.longDescription || serviceInfo.description} Our team of healthcare professionals is committed to providing you with the best possible care and support throughout your healthcare journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className={`p-6 rounded-lg ${
            serviceInfo.isPremium 
              ? "bg-sky-900/50 border border-sky-800" 
              : "bg-gray-50 dark:bg-gray-700"
          }`}>
            <h3 className={`text-lg font-semibold mb-3 ${
              serviceInfo.isPremium 
                ? "text-sky-400" 
                : "text-gray-800 dark:text-white"
            }`}>Key Features</h3>
            <ul className={`list-disc pl-5 space-y-2 ${
              serviceInfo.isPremium 
                ? "text-white/90" 
                : "text-gray-600 dark:text-gray-300"
            }`}>
              {serviceInfo.features ? (
                serviceInfo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <>
                  <li>Professional healthcare experts</li>
                  <li>Timely and efficient service</li>
                  <li>Affordable healthcare solutions</li>
                  <li>Personalized care approach</li>
                  <li>24/7 customer support</li>
                </>
              )}
            </ul>
          </div>
          
          <div className={`p-6 rounded-lg ${
            serviceInfo.isPremium 
              ? "bg-sky-900/50 border border-sky-800" 
              : "bg-gray-50 dark:bg-gray-700"
          }`}>
            <h3 className={`text-lg font-semibold mb-3 ${
              serviceInfo.isPremium 
                ? "text-sky-400" 
                : "text-gray-800 dark:text-white"
            }`}>How It Works</h3>
            <ol className={`list-decimal pl-5 space-y-2 ${
              serviceInfo.isPremium 
                ? "text-white/90" 
                : "text-gray-600 dark:text-gray-300"
            }`}>
              {serviceInfo.process ? (
                serviceInfo.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              ) : (
                <>
                  <li>Schedule an appointment through our platform</li>
                  <li>Receive confirmation and pre-appointment instructions</li>
                  <li>Complete any required paperwork before your appointment</li>
                  <li>Attend your appointment and receive care</li>
                  <li>Follow up as recommended by healthcare providers</li>
                </>
              )}
            </ol>
          </div>
        </div>
        
        <div className="mt-8">
          <Button className={`px-6 py-2 ${
            serviceInfo.isPremium 
              ? "bg-sky-500 hover:bg-sky-600 text-sky-950 font-semibold" 
              : "bg-sky-600 hover:bg-sky-700 text-white"
          }`}>
            Book This Service
          </Button>
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className={`py-12 pt-24 ${serviceInfo.isPremium ? 'bg-gradient-to-b from-sky-950 to-sky-900' : ''}`}>
          <div className="container mx-auto px-4">
            {/* <div className="flex items-center mb-8">
              <Link to="/" className={`flex items-center ${
                serviceInfo.isPremium 
                  ? "text-sky-400 hover:text-sky-300" 
                  : "text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
              } transition-colors`}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </div> */}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${
                serviceInfo.isPremium 
                  ? "text-sky-400" 
                  : "text-gray-900 dark:text-white"
              }`}>
                {serviceInfo.title}
              </h1>
              <p className={
                serviceInfo.isPremium 
                  ? "text-white/90" 
                  : "text-gray-600 dark:text-gray-300"
              }>
                {serviceInfo.description}
              </p>
            </motion.div>
            
            {/* {renderServiceContent()} */}
            
            {renderSpecialContent()}

            {renderServiceContent()}
            
            {!serviceId && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Service details not found. Please return to the home page.
                </p>
                <Link to="/">
                  <Button className="mt-6 bg-sky-500 hover:bg-sky-600 text-sky-950 font-semibold">
                    Return to Home
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}
