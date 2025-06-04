
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  image: string;
  degrees: string;
  specialty: string;
  testimonial: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    image: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
    degrees: "MBBS, MD, DM (Cardiology)",
    specialty: "Cardiologist",
    testimonial: "CureXpert has revolutionized how I connect with patients needing specialized cardiac care. Their platform ensures patients reach the right specialists at the right time."
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    image: "https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg",
    degrees: "MBBS, MS (Ortho), DNB",
    specialty: "Orthopedic Surgeon",
    testimonial: "As an orthopedic surgeon, I appreciate how CureXpert connects patients to quality care. Their service has helped many of my patients find appropriate follow-up care."
  },
  {
    id: 3,
    name: "Dr. Anand Mehta",
    image: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
    degrees: "MBBS, MD (Internal Medicine)",
    specialty: "General Physician",
    testimonial: "CureXpert's platform has been instrumental in helping my patients find specialized care and diagnostic services. I highly recommend their professional services."
  },
  {
    id: 4,
    name: "Dr. Sunita Patel",
    image: "https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg",
    degrees: "MBBS, MD (Dermatology)",
    specialty: "Dermatologist",
    testimonial: "The team at CureXpert provides exceptional service in connecting patients with specialized care. Their platform has enhanced my practice's reach significantly."
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    image: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
    degrees: "MBBS, MD, DM (Neurology)",
    specialty: "Neurologist",
    testimonial: "CureXpert's commitment to patient care is outstanding. They've helped many of my patients navigate complex healthcare journeys with ease and confidence."
  }
];

export default function DoctorTestimonials() {
  return (
    // <section className="py-20 bg-gradient-to-br from-healthcare-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Medical <span className="text-blue-600 dark:text-blue-400">Professionals</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from doctors who recommend our services to their patients.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {doctors.map((doctor) => (
              <CarouselItem key={doctor.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-stone-200 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <CardContent className="p-6">
                    <div className="relative mb-8">
                      {/* <QuoteIcon className="absolute -top-3 -left-2 w-8 h-8 text-blue-900 dark:text-blue-400 opacity-50" /> */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed z-10 relative pl-4">
                        {doctor.testimonial}
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Avatar className="h-12 w-12 border-1 border-healthcare-100 dark:border-blue-800 shadow-lg">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback className="bg-healthcare-100 text-blue-600 font-bold text-xl dark:bg-blue-900 dark:text-blue-400">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{doctor.name}</h4>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">{doctor.specialty}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">{doctor.degrees}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0 mr-2 bg-blue-500 text-white hover:bg-blue-600 border-none" />
            <CarouselNext className="static translate-y-0 ml-2 bg-blue-500 text-white hover:bg-blue-600 border-none" />
          </div>
        </Carousel>
      </div>
      
      {/* <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-healthcare-100/50 dark:bg-healthcare-900/20 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-healthcare-100/50 dark:bg-healthcare-900/20 blur-3xl z-0"></div> */}
    </section>
  );
}
