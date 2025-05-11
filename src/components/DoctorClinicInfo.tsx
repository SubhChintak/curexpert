
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  image: string;
}

interface DoctorClinicInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiology",
    location: "Apollo Clinic, Kolkata",
    image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    specialty: "Neurology",
    location: "Max Healthcare, Delhi",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Dr. Anil Kumar",
    specialty: "Orthopedics",
    location: "Fortis Hospital, Mumbai",
    image: "https://i.pinimg.com/736x/69/78/19/69781905dd57ba144ab71ca4271ab294.jpg",
  },
  {
    id: 4,
    name: "Dr. Sunita Reddy",
    specialty: "Pediatrics",
    location: "Rainbow Children's Hospital, Hyderabad",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
];

export default function DoctorClinicInfo({ isOpen, onClose }: DoctorClinicInfoProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-healthcare-700 dark:text-healthcare-400">
            Super Speciality OP Clinics
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Our network includes some of the most respected specialists across India. 
            Connect with top doctors for specialized consultations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-1/3">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="h-40 sm:h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-bold text-lg text-healthcare-600 dark:text-healthcare-400">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    {doctor.location}
                  </p>
                  <Button className="mt-4 w-full bg-healthcare-600 hover:bg-healthcare-700">
                    Book Appointment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
