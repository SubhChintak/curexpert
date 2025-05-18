import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
 
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { 
//   Carousel, 
//   CarouselContent, 
//   CarouselItem, 
//   CarouselNext, 
//   CarouselPrevious 
// } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import { QuoteIcon } from "lucide-react";

// interface Doctor {
//   id: number;
//   name: string;
//   image: string;
//   degrees: string;
//   specialty: string;
//   testimonial: string;
// }

// const doctors: Doctor[] = [
//   {
//     id: 1,
//     name: "Dr. Rajesh Kumar",
//     image: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
//     degrees: "MBBS, MD, DM (Cardiology)",
//     specialty: "Cardiologist",
//     testimonial: "CureXpert has revolutionized how I connect with patients needing specialized cardiac care. Their platform ensures patients reach the right specialists at the right time."
//   },
//   {
//     id: 2,
//     name: "Dr. Priya Sharma",
//     image: "https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg",
//     degrees: "MBBS, MS (Ortho), DNB",
//     specialty: "Orthopedic Surgeon",
//     testimonial: "As an orthopedic surgeon, I appreciate how CureXpert connects patients to quality care. Their service has helped many of my patients find appropriate follow-up care."
//   },
//   {
//     id: 3,
//     name: "Dr. Anand Mehta",
//     image: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
//     degrees: "MBBS, MD (Internal Medicine)",
//     specialty: "General Physician",
//     testimonial: "CureXpert's platform has been instrumental in helping my patients find specialized care and diagnostic services. I highly recommend their professional services."
//   },
//   {
//     id: 4,
//     name: "Dr. Sunita Patel",
//     image: "https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg",
//     degrees: "MBBS, MD (Dermatology)",
//     specialty: "Dermatologist",
//     testimonial: "The team at CureXpert provides exceptional service in connecting patients with specialized care. Their platform has enhanced my practice's reach significantly."
//   },
//   {
//     id: 5,
//     name: "Dr. Vikram Singh",
//     image: "https://i.pinimg.com/736x/c1/63/22/c16322c706fcb76d10aa09f842d8d27a.jpg",
//     degrees: "MBBS, MD, DM (Neurology)",
//     specialty: "Neurologist",
//     testimonial: "CureXpert's commitment to patient care is outstanding. They've helped many of my patients navigate complex healthcare journeys with ease and confidence."
//   }
// ];

export default function PatientTestimonials() {


    const testimonials = [
      {
        quote:
          "Thanks to CureXpert, I’ve fully recovered and feel better than ever. Their expert guidance and care changed my life.",
        name: "Rajesh Sharma",
        designation: "Diabetes",
        src: "https://plus.unsplash.com/premium_photo-1664475561761-849e7871e0b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHBhdGllbnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        quote:
          "CureXpert provided exceptional support throughout my recovery. I never imagined I could manage my asthma so well.",
        name: "Amit Verma",
        designation: "Asthma",
        src: "https://plus.unsplash.com/premium_photo-1726768945604-63642968ec52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBhdGllbnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        quote:
          "I had almost lost hope, but CureXpert’s team helped me recover from arthritis with personalized care and treatment.",
        name: "Sandeep Nair",
        designation: "Arthritis",
        src: "https://plus.unsplash.com/premium_photo-1664478214797-c3c932160cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0aWVudCUyMHBob3RvfGVufDB8fDB8fHww",
      },
      {
        quote:
          "Recovering from liver disease felt impossible until I found CureXpert. Their support and treatment truly saved me.",
        name: "Vikram Desai",
        designation: "Liver Disease",
        src: "https://images.unsplash.com/photo-1646369506164-f8f24d4d6d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBhdGllbnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        quote:
          "CureXpert's holistic approach helped me beat hypertension naturally. I feel more energetic and balanced now.",
        name: "Anil Kapoor",
        designation: "Hypertension",
        src: "https://images.unsplash.com/photo-1698465281093-9f09159733b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhdGllbnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      }
      
      ];

  return (
    // <section className="py-20 bg-gradient-to-br from-healthcare-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-blue-600 dark:text-blue-400">Patients</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from patients who recommend our services.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials}/>
      </div>
    </section>
  );
}
