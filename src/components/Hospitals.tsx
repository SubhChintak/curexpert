
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Hospital {
  id: number;
  name: string;
  location: string;
  specialties: string[];
  image: string;
  accreditation: string;
}

interface HospitalsProps {
  isOpen: boolean;
  onClose: () => void;
}

const hospitals: Hospital[] = [
  {
    id: 1,
    name: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    image: "https://www.apollohospitals.com/ahmedabad/cancer-center/wp-content/uploads/2015/04/apollo-ahmedabad.jpg",
    accreditation: "JCI & NABH Accredited",
  },
  {
    id: 2,
    name: "Fortis Memorial Research Institute",
    location: "Gurugram, Haryana",
    specialties: ["Cardiac Sciences", "Neurosciences", "Organ Transplant", "Robotic Surgery"],
    image: "https://images.moneycontrol.com/static-mcnews/2018/02/Fortis-Healthcare_.jpg?impolicy=website&width=1600&height=900",
    accreditation: "NABH Accredited",
  },
  {
    id: 3,
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi",
    specialties: ["Neurosurgery", "Oncology", "Cardiology", "Urology"],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    accreditation: "NABH Accredited",
  },
];

export default function Hospitals({ isOpen, onClose }: HospitalsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-healthcare-700 dark:text-healthcare-400">
            Best Healthcare Destinations
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            CureXpert India partners with premier hospitals across the country to provide 
            you with access to world-class healthcare facilities and specialists.
          </p>
          
          <div className="space-y-8">
            {hospitals.map((hospital) => (
              <div 
                key={hospital.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-60 md:h-auto">
                    <img 
                      src={hospital.image} 
                      alt={hospital.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-xl text-healthcare-600 dark:text-healthcare-400">
                          {hospital.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {hospital.location}
                        </p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded">
                        {hospital.accreditation}
                      </span>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Key Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, idx) => (
                          <span 
                            key={idx} 
                            className="bg-healthcare-100 dark:bg-healthcare-800 text-healthcare-700 dark:text-healthcare-300 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-healthcare-600 hover:bg-healthcare-700">
                        Book Consultation
                      </Button>
                      <Button variant="outline">
                        View Hospital Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
