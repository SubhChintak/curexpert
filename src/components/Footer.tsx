
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";

const locations = {
  agartala: "CureXpert India Health Point, Pragati Rd, krishnanagar, Agartala, Tripura 799002",
  udaipur: "CureXpert Health Point, Khilpara, Udaipur Tripura 799114"
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="bg-gradient-to-r from-sky-950 to-sky-900 text-white py-16">

    <footer className="bg-gradient-to-r from-sky-950 to-sky-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/curexpert-logo.png" 
                alt="CureXpert Logo" 
                className="h-10 w-10 mr-2" 
              />
              <span className="font-bold text-2xl">
                <span className="font-bold text-2xl sm:text-2xl text-red-600">Cure</span><span className=" font-bold text-2xl sm:text-2xl text-sky-500">Xpert</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Transforming healthcare, one patient at a time. We connect you with premium healthcare services across India.
            </p>
            <div className="pt-4">
              <div className="flex items-center text-gray-300 mb-2">
                <Phone className="h-4 w-4 mr-3 text-sky-400" />
                <span>+91 9876 543210</span>
              </div>
              <div className="flex items-center text-gray-300 mb-2">
                <Mail className="h-4 w-4 mr-3 text-sky-400" />
                <span>contact@curexpert.in</span>
              </div>
              {/* <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-sky-400" />
                <span className="text-sm">123 Healthcare Avenue, Sector 5, Kolkata, West Bengal 700091</span>
              </div> */}
              <div className="space-y-2">
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-sky-400" />
                <span className="text-sm">{locations.agartala}</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-sky-400" />
                <span className="text-sm">{locations.udaipur}</span>
              </div>
            </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-5 border-b border-sky-800 pb-2 inline-block text-sky-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#specialties" className="text-gray-300 hover:text-sky-400 transition-colors">Medical Specialties</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-sky-400 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-5 border-b border-sky-800 pb-2 inline-block text-sky-400">
              Connect With Us
            </h3>
            <div className="grid grid-cols-5 gap-3">
              <a href="https://www.facebook.com/profile.php?id=61574901291317" target="_blank" rel="noopener noreferrer" 
                className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-sky-950 hover:text-sky-950">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/curexpertindia?igsh=YzJ4bWx6cTVwZHl1" target="_blank" rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-sky-950 hover:text-sky-950">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="bg-sky-900 hover:bg-sky-600 p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-sky-400 hover:text-sky-950">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-sky-950 hover:text-sky-950">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="bg-sky-900 hover:bg-sky-600 p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 text-sky-400 hover:text-sky-950">
                <Youtube className="h-5 w-5" />
              </a> */}
            </div>
            
            <div className="mt-8 pt-6 border-t border-sky-800">
              <p className="text-gray-300 text-sm">
                © {currentYear} CureXpert India. All rights reserved.
              </p>
              <p className="text-white text-sm mt-1 flex items-center">
                {/* <img 
                  src="/lovable-uploads/curexpert-logo.png" 
                  alt="CureXpert Logo" 
                  className="h-4 w-4 mr-1" 
                />  */}
                Designed and Developed by<a href="https://github.com/" className="text-sm ml-1 text-sky-400">SubhChintak.in </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
