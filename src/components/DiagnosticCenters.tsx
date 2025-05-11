
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DiagnosticCenter {
  id: number;
  name: string;
  location: string;
  services: string[];
  image: string;
}

interface DiagnosticCentersProps {
  isOpen: boolean;
  onClose: () => void;
}

const diagnosticCenters: DiagnosticCenter[] = [
  {
    id: 1,
    name: "HealthScan Diagnostics",
    location: "Kolkata, West Bengal",
    services: ["Full Body Checkup", "MRI Scan", "CT Scan", "Ultrasound", "Blood Tests"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Metro Diagnostics",
    location: "Delhi NCR",
    services: ["Pathology", "Radiology", "Cardiac Tests", "Neurology Tests"],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Precision Medical Labs",
    location: "Mumbai, Maharashtra",
    services: ["Blood Tests", "Genetic Testing", "Microbiological Tests", "Hormone Tests"],
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
];

export default function DiagnosticCenters({ isOpen, onClose }: DiagnosticCentersProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-healthcare-700 dark:text-healthcare-400">
            Diagnostic Services
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We partner with leading diagnostic centers across India that offer comprehensive testing 
            and diagnostic services with state-of-the-art equipment and experienced technicians.
          </p>
          
          <div className="space-y-6">
            {diagnosticCenters.map((center) => (
              <div 
                key={center.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={center.image} 
                      alt={center.name} 
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="font-bold text-xl text-healthcare-600 dark:text-healthcare-400">
                      {center.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {center.location}
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Services Offered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {center.services.map((service, idx) => (
                          <span 
                            key={idx} 
                            className="bg-healthcare-100 dark:bg-healthcare-800 text-healthcare-700 dark:text-healthcare-300 px-3 py-1 rounded-full text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex space-x-3">
                      <Button className="bg-healthcare-600 hover:bg-healthcare-700">
                        Book Test
                      </Button>
                      <Button variant="outline">
                        View Details
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
