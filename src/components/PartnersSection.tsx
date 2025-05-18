
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'hospital' | 'clinic' | 'diagnostic';
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Apollo Hospitals",
    logo: "https://i.pinimg.com/736x/a7/af/8c/a7af8c5e2417277e444faba90c4d7ea4.jpg",
    type: "hospital"
  },
  {
    id: 2,
    name: "Max Healthcare",
    logo: "https://i.pinimg.com/736x/ee/35/ca/ee35ca79ca705b930af64c50d05a8b0d.jpg",
    type: "hospital"
  },
  {
    id: 3,
    name: "Fortis Healthcare",
    logo: "https://i.pinimg.com/736x/ae/3d/d7/ae3dd7b6009eecbc8fc601757753a8ae.jpg",
    type: "hospital"
  },
  {
    id: 4,
    name: "Rainbow Hospitals",
    logo: "https://i.pinimg.com/736x/1b/24/7b/1b247bccf495959d94b0c05fea93b502.jpg",
    type: "hospital"
  },
  {
    id: 5,
    name: "Medanta",
    logo: "https://i.pinimg.com/736x/41/1a/18/411a185465f754e764dbae65559b9dfd.jpg",
    type: "hospital"
  },
  {
    id: 6,
    name: "City Diagnostic Center",
    logo: "https://i.pinimg.com/736x/1b/24/7b/1b247bccf495959d94b0c05fea93b502.jpg",
    type: "diagnostic"
  },
  {
    id: 7,
    name: "HealthFirst Clinic",
    logo: "https://i.pinimg.com/736x/41/1a/18/411a185465f754e764dbae65559b9dfd.jpg",
    type: "clinic"
  },
  {
    id: 8,
    name: "Manipal Hospitals",
    logo: "https://i.pinimg.com/736x/58/e3/b2/58e3b263a80a3ccfe6a41212732bb0da.jpg",
    type: "hospital"
  },
  {
    id: 9,
    name: "Thyrocare",
    logo: "https://i.pinimg.com/736x/1b/24/7b/1b247bccf495959d94b0c05fea93b502.jpg",
    type: "diagnostic"
  },
  {
    id: 10,
    name: "Columbia Asia",
    logo: "https://i.pinimg.com/736x/2b/26/f5/2b26f567d7efe70c180006de6cbb1e6b.jpg",
    type: "hospital"
  }
];

export default function PartnersSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-20 bg-white dark:bg-black">

    {/* <section className="py-20 bg-blue-400 dark:bg-black"> */}
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Trusted <span className="text-blue-600 dark:text-blue-400">Partners</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We collaborate with leading hospitals, clinics, and diagnostic centers across India to ensure you receive the best healthcare services.
          </p>
        </motion.div>

        <div className="px-8 md:px-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-2 h-full">
                    <div className="bg-stone-200 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700">
                      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 border-2 border-healthcare-100 dark:border-healthcare-800 shadow-md rounded-full flex items-center justify-center mb-4 overflow-hidden">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-center font-medium text-gray-900 dark:text-white">
                        {partner.name}
                      </h3>
                      <span className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-1">
                        {partner.type}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
