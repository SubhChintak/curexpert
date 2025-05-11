
import { useState } from "react";
import { MapPin, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Contact() {
  const phoneNumber = "+919876543210";
  // const address = "123 Healthcare Avenue, Sector 5, Kolkata, West Bengal 700091";
  const locations = {
    agartala: "CureXpert India Health Point, Agartala",
    udaipur: "CureXpert India Health Point, Udaipur"
  };

  const [selectedLocation, setSelectedLocation] = useState<'agartala' | 'udaipur'>('agartala');
  

  const mapUrls = {
    agartala: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3197401573643!2d91.272489!3d23.842777299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50075e892c7%3A0x69cfcd9b76ed9387!2sCureXpert%20India%20Health%20Point%2C%20Agartala!5e0!3m2!1sen!2sin!4v1745484410693!5m2!1sen!2sin",

    udaipur: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.040853278798!2d91.487433!3d23.531032999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375399002945f3b3%3A0xee962e2a68176f99!2sCureXpert%20India%20Health%20Point%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1745484269682!5m2!1sen!2sin"
  };
  
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };
  
  // const handleWhatsApp = () => {
  //   window.open("https://wa.me/8415045165?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20CureXpert%20India%20services.");
  // };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918415045165?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20CureXpert%20India%20services."  );
  };
  
  // const handleGetDirections = () => {
  //   window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`);
  // };

  const handleGetDirections = (location: string) => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`);
  };

  const handleSelectLocation = (location: 'agartala' | 'udaipur') => {
    setSelectedLocation(location);
  };

  return (
    // <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
    
    <section id="contact" className="py-16 bg-white dark:bg-black text-gray-900 dark:text-white">
    {/* <section id="contact" className="py-16 bg-sky-400 dark:bg-black text-gray-900 dark:text-white"> */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold mb-4 inline-block border-b-4 border-sky-400 pb-2">
            Get In Touch
          </h2>
          
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Health Journey?
            </h3>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mb-8">
              Whether you have questions about our healthcare approach, want to discuss your 
              specific health needs, or are ready to book a service, we're here to help.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                onClick={handleCall}
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
              
              <Button 
                onClick={handleWhatsApp}
                className="bg-transparent hover:bg-healthcare-900/20 border-2 border-sky-500 text-gray-900 dark:text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
              >
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    className="bg-transparent hover:bg-healthcare-900/20 border-2 border-sky-500 text-gray-900 dark:text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
                  >
                    <MapPin className="mr-2 h-5 w-5" /> Get Directions <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white dark:bg-gray-800 p-2 shadow-xl rounded-md border border-gray-200 dark:border-gray-700">
                  <DropdownMenuItem 
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => handleGetDirections(locations.agartala)}
                  >
                    <MapPin className="mr-2 h-4 w-4 text-sky-600" /> Agartala
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => handleGetDirections(locations.udaipur)}
                  >
                    <MapPin className="mr-2 h-4 w-4 text-sky-600" /> Udaipur
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          

          {/* <div className="flex items-center gap-4 mb-4">
              <span className="text-lg font-semibold">View Location:</span>
              <Button 
                variant={selectedLocation === 'agartala' ? 'default' : 'outline'}
                onClick={() => handleSelectLocation('agartala')}
                className={`px-4 py-2 ${selectedLocation === 'agartala' ? 'bg-healthcare-600 text-white' : 'border-healthcare-500'}`}
              >
                <MapPin className="mr-2 h-4 w-4" /> Agartala
              </Button>
              <Button 
                variant={selectedLocation === 'udaipur' ? 'default' : 'outline'}
                onClick={() => handleSelectLocation('udaipur')}
                className={`px-4 py-2 ${selectedLocation === 'udaipur' ? 'bg-healthcare-600 text-white' : 'border-healthcare-500'}`}
              >
                <MapPin className="mr-2 h-4 w-4" /> Udaipur
              </Button>
            </div> */}
          

          <div className="h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
            <iframe 
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233556.46337007132!2d90.96761839453126!3d23.8427773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50075e892c7%3A0x69cfcd9b76ed9387!2sCureXpert%20India%20Health%20Point%2C%20Agartala!5e0!3m2!1sen!2sin!4v1744493781003!5m2!1sen!2sin"

              src={mapUrls[selectedLocation]} 

              // src="https://www.google.com/maps/d/u/0/embed?mid=1EOksfycIlmzhg-iZqIIunWgdTl-cQvI&ehbc=2E312F&noprof=1" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              // title="CureXpert India Location"
              title={`CureXpert India ${selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)} Location`}
            ></iframe>
          </div>

          <div className="flex items-center gap-4 mb-4 pt-5">
              <span className="text-lg font-semibold">View Location:</span>
              <Button 
                variant={selectedLocation === 'agartala' ? 'default' : 'outline'}
                onClick={() => handleSelectLocation('agartala')}
                className={`px-4 py-2 ${selectedLocation === 'agartala' ? 'bg-sky-600 text-white' : 'border-sky-500'}`}
              >
                <MapPin className="mr-2 h-4 w-4" /> Agartala
              </Button>
              <Button 
                variant={selectedLocation === 'udaipur' ? 'default' : 'outline'}
                onClick={() => handleSelectLocation('udaipur')}
                className={`px-4 py-2  ${selectedLocation === 'udaipur' ? 'bg-sky-600 text-white' : 'border-sky-500'}`}
              >
                <MapPin className="mr-2 h-4 w-4" /> Udaipur
              </Button>
            </div>


        </div>
      </div>
    </section>
  );
}


{/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1EOksfycIlmzhg-iZqIIunWgdTl-cQvI&ehbc=2E312F&noprof=1" width="640" height="480"></iframe> */}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467207.7310018191!2d90.9395182!3d23.8164512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375399002945f3b3%3A0xee962e2a68176f99!2sCureXpert%20India%20Health%20Point%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1744838992210!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467207.7310018191!2d90.9395182!3d23.8164512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f50075e892c7%3A0x69cfcd9b76ed9387!2sCureXpert%20India%20Health%20Point%2C%20Agartala!5e0!3m2!1sen!2sin!4v1744839080632!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}