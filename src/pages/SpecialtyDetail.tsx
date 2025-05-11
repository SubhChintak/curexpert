
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, CalendarDays, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  location: string;
  bio: string;
  image: string;
  gallery: string[];
  rating: number;
  availableDates: string[];
  specialDates?: { date: string; note: string }[];
}

// Mock data for each specialty
const specialtyDoctors: Record<string, Doctor[]> = {
  medicine: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "General Medicine",
      experience: "15+ years",
      location: "Apollo Hospital, Delhi",
      bio: "Dr. Kumar specializes in treating complex internal medicine cases with a patient-centered approach.",
      image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.8,
      availableDates: ["Monday", "Wednesday", "Friday"],
      specialDates: [
        { date: "2025-04-15", note: "Special consultations for chronic conditions" },
        { date: "2025-04-22", note: "Health camp at Apollo Hospital" }
      ]
    },
    {
      id: 2,
      name: "Dr. Sanjana Gupta",
      specialty: "Internal Medicine",
      experience: "12 years",
      location: "Max Healthcare, Mumbai",
      bio: "Dr. Gupta is an expert in preventive care and managing chronic conditions with holistic approaches.",
      image: "https://i.pinimg.com/736x/f6/2d/a3/f62da3aacbaf68f5a3853da5a20b3fb0.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.7,
      availableDates: ["Tuesday", "Thursday", "Saturday"],
      specialDates: [
        { date: "2025-04-18", note: "Women's health special consultation" }
      ]
    }
  ],
  orthopedic: [
    {
      id: 1,
      name: "Dr. Vikram Singh",
      specialty: "Orthopedic Surgery",
      experience: "18 years",
      location: "Fortis Hospital, Bangalore",
      bio: "Dr. Singh specializes in joint replacement surgeries and sports injuries with minimal invasive techniques.",
      image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.9,
      availableDates: ["Monday", "Wednesday", "Friday"],
      specialDates: [
        { date: "2025-04-20", note: "Sports injury workshop" }
      ]
    },
    {
      id: 2,
      name: "Dr. Ananya Patel",
      specialty: "Sports Medicine",
      experience: "10 years",
      location: "AIIMS, Delhi",
      bio: "Dr. Patel specializes in sports injuries and rehabilitation with cutting-edge therapeutic approaches.",
      image: "https://i.pinimg.com/736x/f6/2d/a3/f62da3aacbaf68f5a3853da5a20b3fb0.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.6,
      availableDates: ["Tuesday", "Thursday", "Saturday"],
      specialDates: [
        { date: "2025-04-25", note: "Athlete performance assessment session" }
      ]
    }
  ],
  gastroenterology: [
    {
      id: 1,
      name: "Dr. Rahul Mehta",
      specialty: "Gastroenterology",
      experience: "14 years",
      location: "Medanta Hospital, Gurugram",
      bio: "Dr. Mehta specializes in advanced endoscopic procedures and treatment of digestive disorders.",
      image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1581056771107-24695e868ed6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1631815589140-377ca3e3f8f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.8,
      availableDates: ["Monday", "Wednesday", "Friday"],
      specialDates: [
        { date: "2025-04-16", note: "GI disorders awareness camp" }
      ]
    }
  ],
  ophthalmology: [
    {
      id: 1,
      name: "Dr. Neeraj Sharma",
      specialty: "Ophthalmology",
      experience: "20 years",
      location: "Eye Care Center, Chennai",
      bio: "Dr. Sharma is an expert in corneal transplants and LASIK surgeries with international certifications.",
      image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.9,
      availableDates: ["Monday", "Tuesday", "Thursday"],
      specialDates: [
        { date: "2025-04-19", note: "Free eye screening camp" }
      ]
    }
  ],
  gynecology: [
    {
      id: 1,
      name: "Dr. Kavita Singh",
      specialty: "Obstetrics & Gynecology",
      experience: "16 years",
      location: "Cloudnine Hospital, Hyderabad",
      bio: "Dr. Singh specializes in high-risk pregnancies and reproductive endocrinology with compassionate care.",
      image: "https://i.pinimg.com/736x/f6/2d/a3/f62da3aacbaf68f5a3853da5a20b3fb0.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1566669437687-7040a6985df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.8,
      availableDates: ["Tuesday", "Thursday", "Saturday"],
      specialDates: [
        { date: "2025-04-22", note: "Women's wellness workshop" }
      ]
    }
  ],
  dental: [
    {
      id: 1,
      name: "Dr. Pooja Reddy",
      specialty: "Dental Surgery",
      experience: "12 years",
      location: "Clove Dental, Pune",
      bio: "Dr. Reddy is an expert in cosmetic dentistry and advanced dental implant procedures.",
      image: "https://i.pinimg.com/736x/f6/2d/a3/f62da3aacbaf68f5a3853da5a20b3fb0.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.7,
      availableDates: ["Monday", "Wednesday", "Friday"],
      specialDates: [
        { date: "2025-04-18", note: "Kid-friendly dental checkup day" }
      ]
    }
  ],
  pediatrics: [
    {
      id: 1,
      name: "Dr. Amit Tiwari",
      specialty: "Pediatrics",
      experience: "14 years",
      location: "Rainbow Children's Hospital, Bangalore",
      bio: "Dr. Tiwari specializes in developmental pediatrics and neonatal care with a child-friendly approach.",
      image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.9,
      availableDates: ["Tuesday", "Thursday", "Saturday"],
      specialDates: [
        { date: "2025-04-25", note: "Vaccination awareness program" }
      ]
    }
  ],
  ent: [
    {
      id: 1,
      name: "Dr. Suresh Iyer",
      specialty: "ENT",
      experience: "15 years",
      location: "Columbia Asia, Kolkata",
      bio: "Dr. Iyer specializes in advanced ENT surgeries and hearing loss treatments with minimally invasive techniques.",
      image: "https://i.pinimg.com/736x/77/9f/23/779f23ae620f11a2fca378dcf3fe580d.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1609964729554-a403153d31dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.6,
      availableDates: ["Monday", "Wednesday", "Friday"],
      specialDates: [
        { date: "2025-04-20", note: "Hearing aid consultation day" }
      ]
    }
  ],
  neurology: [
    {
      id: 1,
      name: "Dr. Priya Subramaniam",
      specialty: "Neurology",
      experience: "18 years",
      location: "Manipal Hospital, Bangalore",
      bio: "Dr. Subramaniam specializes in treating neurological disorders with a focus on minimally invasive treatments.",
      image: "https://i.pinimg.com/736x/f6/2d/a3/f62da3aacbaf68f5a3853da5a20b3fb0.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1562788869-c5e0326628fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1631208955776-8e222a66a0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.8,
      availableDates: ["Tuesday", "Thursday", "Saturday"],
      specialDates: [
        { date: "2025-04-17", note: "Brain health awareness session" }
      ]
    }
  ]
};

// Function to capitalize first letter of a string
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Function to display star rating
const DisplayRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : index < rating
              ? "text-yellow-400 fill-yellow-400 opacity-50"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">({rating})</span>
    </div>
  );
};

export default function SpecialtyDetail() {
  const { specialtyId } = useParams<{ specialtyId: string }>();
  
  // Default to medicine if no specialty is provided
  const specialty = specialtyId || "medicine";
  const doctors = specialtyDoctors[specialty] || [];
  
  const specialtyName = {
    medicine: "Medicine",
    orthopedic: "Orthopedic",
    gastroenterology: "Gastroenterology",
    ophthalmology: "Eye Specialist",
    gynecology: "Gynaecologist",
    dental: "Dentist",
    pediatrics: "Child Specialist",
    ent: "ENT",
    neurology: "Neurology"
  }[specialty] || capitalizeFirstLetter(specialty);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-stone-200 dark:bg-black">
        <Navbar />
        
        <div className="container mx-auto px-4 py-12 mt-16">
          {/* <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div> */}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              <span className="text-sky-600 dark:text-sky-400">{specialtyName}</span> Specialists
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Connect with our experienced {specialtyName.toLowerCase()} specialists for quality healthcare
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
            {doctors.map((doctor) => (
              <motion.div 
                key={doctor.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 lg:w-1/4 relative">
                    <div className="h-72 md:h-full w-full overflow-hidden">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-sky-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                      {doctor.experience}
                    </div>
                  </div>
                  
                  <div className="p-6 md:w-2/3 lg:w-3/4">
                    <div className="md:flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                          {doctor.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {doctor.specialty} • {doctor.location}
                        </p>
                        <DisplayRating rating={doctor.rating} />
                      </div>
                      
                      <Button className="mt-4 md:mt-0 bg-sky-600 hover:bg-sky-700 text-white">
                        Book Appointment
                      </Button>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                      {doctor.bio}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center">
                          <CalendarDays className="h-5 w-5 mr-2 text-sky-500" />
                          Weekly Availability
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {doctor.availableDates.map((day, idx) => (
                            <Badge key={idx} variant="outline" className="bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800">
                              {day}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {doctor.specialDates && doctor.specialDates.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-sky-500" />
                            Special Dates
                          </h3>
                          <div className="space-y-2">
                            {doctor.specialDates.map((specialDate, idx) => (
                              <div key={idx} className="text-sm border-l-2 border-sky-500 pl-3 py-1">
                                <span className="font-medium text-sky-600 dark:text-sky-400">{specialDate.date}</span>
                                <p className="text-gray-600 dark:text-gray-400">{specialDate.note}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-5">
                  {/* <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Gallery
                  </h3> */}
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {doctor.gallery.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg aspect-video bg-gray-100 dark:bg-gray-800">
                              <img 
                                src={image} 
                                alt={`${doctor.name} - Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </motion.div>
            ))}
          </div>
          
          {doctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No specialists found for this specialty. Please check back later.
              </p>
              <Link to="/">
                <Button className="mt-6 bg-sky-600 hover:bg-sky-700 text-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
