
import React from 'react';
import { X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Doctor {
  id: number;
  name: string;
  degree: string;
  specialty: string;
  image: string;
  visitingHours: string;
  address: string;
}

interface DoctorModalProps {
  specialty: string;
  isOpen: boolean;
  onClose: () => void;
}

// Sample doctors data grouped by specialty
const doctorsBySpecialty: Record<string, Doctor[]> = {
  medicine: [
    {
      id: 1,
      name: "Dr. Amit Sharma",
      degree: "MD (Internal Medicine)",
      specialty: "Medicine",
      image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
      visitingHours: "10:00 AM - 2:00 PM (Mon-Fri)",
      address: "Apollo Clinic, 123 Health Street, Kolkata"
    },
    {
      id: 2,
      name: "Dr. Riya Gupta",
      degree: "MD (Medicine), DM (Cardiology)",
      specialty: "Medicine",
      image: "https://i.pinimg.com/736x/be/9f/0a/be9f0a3227aa0b49cf16a624cf42df93.jpg",
      visitingHours: "4:00 PM - 8:00 PM (Mon-Sat)",
      address: "Max Healthcare, 45 Park Avenue, Delhi"
    }
  ],
  orthopedic: [
    {
      id: 3,
      name: "Dr. Vikram Singh",
      degree: "MS (Orthopedics)",
      specialty: "Orthopedic",
      image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
      visitingHours: "9:00 AM - 1:00 PM (Tue-Sun)",
      address: "Fortis Hospital, 78 Bone Care Lane, Mumbai"
    },
    {
      id: 4,
      name: "Dr. Pooja Malhotra",
      degree: "DNB (Orthopedics), Fellowship in Joint Replacement",
      specialty: "Orthopedic",
      image: "https://i.pinimg.com/736x/be/9f/0a/be9f0a3227aa0b49cf16a624cf42df93.jpg",
      visitingHours: "5:00 PM - 9:00 PM (Mon-Fri)",
      address: "AIIMS Outreach Clinic, 23 Medical Complex, Chennai"
    }
  ],
  gastroenterology: [
    {
      id: 5,
      name: "Dr. Rahul Kapoor",
      degree: "MD, DM (Gastroenterology)",
      specialty: "Gastroenterology",
      image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
      visitingHours: "11:00 AM - 3:00 PM (Mon, Wed, Fri)",
      address: "Gastro Care Center, 56 Digestion Road, Bangalore"
    }
  ],
  ophthalmology: [
    {
      id: 6,
      name: "Dr. Ananya Reddy",
      degree: "MS (Ophthalmology)",
      specialty: "Eye Specialist",
      image: "https://i.pinimg.com/736x/be/9f/0a/be9f0a3227aa0b49cf16a624cf42df93.jpg",
      visitingHours: "10:00 AM - 6:00 PM (Mon-Sat)",
      address: "Vision Care, 89 Eye Street, Hyderabad"
    }
  ],
  gynecology: [
    {
      id: 7,
      name: "Dr. Neha Joshi",
      degree: "MD (Obstetrics & Gynecology)",
      specialty: "Gynaecologist",
      image: "https://i.pinimg.com/736x/be/9f/0a/be9f0a3227aa0b49cf16a624cf42df93.jpg",
      visitingHours: "9:00 AM - 1:00 PM (Mon-Sat)",
      address: "Women's Health Clinic, 34 Maternity Road, Pune"
    }
  ],
  dental: [
    {
      id: 8,
      name: "Dr. Sanjay Mehta",
      degree: "BDS, MDS (Orthodontics)",
      specialty: "Dentist",
      image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
      visitingHours: "4:00 PM - 9:00 PM (Mon-Sat)",
      address: "Smile Dental Clinic, 12 Tooth Avenue, Ahmedabad"
    }
  ],
  pediatrics: [
    {
      id: 9,
      name: "Dr. Kavita Patel",
      degree: "MD (Pediatrics)",
      specialty: "Child Specialist",
      image: "https://i.pinimg.com/736x/be/9f/0a/be9f0a3227aa0b49cf16a624cf42df93.jpg",
      visitingHours: "10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM (Mon-Fri)",
      address: "Kids Care Center, 67 Children's Lane, Jaipur"
    }
  ],
  ent: [
    {
      id: 10,
      name: "Dr. Vivek Khanna",
      degree: "MS (ENT)",
      specialty: "ENT",
      image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
      visitingHours: "11:00 AM - 7:00 PM (Tue-Sun)",
      address: "Ear Nose Throat Care, 45 Hearing Plaza, Lucknow"
    }
  ],
  neurology: [
    {
      id: 11,
      name: "Dr. Rajiv Mehra",
      degree: "MD (Medicine), DM (Neurology)",
      specialty: "Neurology",
      image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
      visitingHours: "9:00 AM - 3:00 PM (Mon, Wed, Fri)",
      address: "Brain & Nerve Center, 23 Neuron Street, Chandigarh"
    }
  ]
};

export default function DoctorModal({ specialty, isOpen, onClose }: DoctorModalProps) {
  if (!isOpen) return null;

  const doctors = doctorsBySpecialty[specialty] || [];
  const specialtyName = doctors.length > 0 ? doctors[0].specialty : "";

  const handleBookAppointment = (doctor: Doctor) => {
    // Phone number for WhatsApp
    const phoneNumber = "+919876543210";
    // Create message template
    const message = `Hello, I would like to book an appointment with ${doctor.name}, ${doctor.specialty} specialist at ${doctor.address}. Please help me schedule a visit during the available hours: ${doctor.visitingHours}.`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-healthcare-700 dark:text-healthcare-400">
            {specialtyName} Specialists
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          {doctors.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300 py-8">
              No doctors found for this specialty. Please try another specialty or contact us for assistance.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="sm:col-span-1">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="h-40 sm:h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:col-span-2">
                      <h3 className="font-bold text-lg text-healthcare-600 dark:text-healthcare-400">
                        {doctor.name}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {doctor.degree}
                      </p>
                      
                      <div className="mt-3 space-y-2">
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {doctor.visitingHours}
                          </p>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {doctor.address}
                          </p>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handleBookAppointment(doctor)}
                        className="mt-4 w-full bg-healthcare-600 hover:bg-healthcare-700 text-white"
                      >
                        <Phone className="h-4 w-4 mr-2" /> Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
