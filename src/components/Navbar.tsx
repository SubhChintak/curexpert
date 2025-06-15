
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSpecialties = () => {
    setIsSpecialtiesOpen(!isSpecialtiesOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const specialties = [
    { id: "medicine", name: "Medicine" },
    { id: "orthopedic", name: "Orthopedic" },
    { id: "gastroenterology", name: "Gastroenterology" },
    { id: "ophthalmology", name: "Eye Specialist" },
    { id: "gynecology", name: "Gynaecologist" },
    { id: "dental", name: "Dentist" },
    { id: "pediatrics", name: "Child Specialist" },
    { id: "ent", name: "ENT" },
    { id: "neurology", name: "Neurology" }
  ];

  // Combined list of all services (premium and non-premium)
  const services = [
    // Premium services
    { id: "clinics", name: "Super Speciality OP Clinics", isPremium: true },
    { id: "diagnostics", name: "Diagnostic Services", isPremium: true },
    { id: "hospitals", name: "Best Healthcare Destinations", isPremium: true },
    // Regular services
    { id: "teleconsultation", name: "Tele Communication", isPremium: false },
    { id: "free-assistance", name: "Free Medical Assistance", isPremium: false },
    { id: "second-opinion", name: "Second Medical Opinion", isPremium: false },
    { id: "treatment-info", name: "Treatment Information & Cost", isPremium: false },
    { id: "ambulance", name: "Train/Air Ambulance Booking", isPremium: false },
    { id: "accommodation", name: "Hostel/Guest House Accommodation", isPremium: false },
    { id: "tickets", name: "Flight Ticket Booking", isPremium: false },
    { id: "post-treatment", name: "Post-treatment Care", isPremium: false },
    { id: "physiotherapy", name: "Physiotherapy", isPremium: false }
  ];

  const handleSpecialtyClick = (specialtyId: string) => {
    navigate(`/specialty/${specialtyId}`);
    setIsMenuOpen(false);
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/8415045165?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20CureXpert%20India%20services."  );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-750/90 dark:bg-blue-750/95 backdrop-blur-3xl border-b border-blue-800/50 dark:border-blue-800/50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
          
            <img 
              src="/curexpert-uploads/curexpert-logo.png" 
              alt="CureXpert Logo" 
              className="w-10 h-10"
              onClick={() => navigate('/#')}
              style={{ cursor: 'pointer' }}
            />
            <div 
              // className="font-bold text-xl sm:text-2xl"
              // onClick={() => navigate('/')}
              // style={{ cursor: 'pointer' }}
            >
              {/* CureXpert */}
              <a href="/#" className="font-bold text-2xl sm:text-2xl text-red-500">Cure</a><a href="/#" className=" font-bold text-2xl sm:text-2xl text-blue-500">Xpert</a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Services Navigation */}
            <div className="relative">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blue-900 hover:text-blue-400 text-blue-300">Services</NavigationMenuTrigger>
                    <NavigationMenuContent className="navigation-dropdown">
                      <div className="p-6 bg-blue-950 border border-blue-800 rounded-md shadow-xl w-[650px]">
                        <div className="mb-6 pb-4 border-b border-blue-800">
                          <h3 className="text-blue-400 font-semibold mb-3">Premium Services</h3>
                          <ul className="grid grid-cols-1 gap-3">
                            {services.filter(s => s.isPremium).map((service) => (
                              <li key={service.id}>
                                <button
                                  onClick={() => handleServiceClick(service.id)}
                                  className="block select-none p-2 rounded-md leading-none no-underline outline-none transition-colors hover:bg-blue-900 text-white hover:text-blue-400 w-full text-left"
                                >
                                  {service.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-blue-400 font-semibold mb-3">General Services</h3>
                          <ul className="grid grid-cols-3 gap-3">
                            {services.filter(s => !s.isPremium).map((service) => (
                              <li key={service.id}>
                                <button
                                  onClick={() => handleServiceClick(service.id)}
                                  className="block select-none p-2 rounded-md leading-none no-underline outline-none transition-colors hover:bg-blue-900 text-white hover:text-blue-400 w-full text-left"
                                >
                                  {service.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Specialties Navigation */}
            <div className="relative">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-blue-900 hover:text-blue-400 text-blue-300">Specialties</NavigationMenuTrigger>
                    <NavigationMenuContent className="navigation-dropdown">
                      <ul className="grid grid-cols-3 gap-3 p-6 w-[550px] bg-blue-950 border border-blue-800 rounded-md shadow-xl">
                        {specialties.map((specialty) => (
                          <li key={specialty.id}>
                            <button
                              onClick={() => handleSpecialtyClick(specialty.id)}
                              className="block select-none p-3 rounded-md leading-none no-underline outline-none transition-colors hover:bg-blue-900 text-white hover:text-blue-400 w-full text-left"
                            >
                              <div className="text-sm font-medium leading-none">{specialty.name}</div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <a
              href="/#"
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
            <Button onClick={handleWhatsApp} className="bg-blue-500 hover:bg-blue-600 text-blue-950 font-semibold">
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-blue-300 hover:text-blue-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-blue-800">
            <nav className="flex flex-col space-y-4">
              {/* Services dropdown for mobile */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-left text-blue-400 hover:text-blue-500 transition-colors font-bold"
                >
                  <span>Services</span>
                  {isServicesOpen ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <div className="mb-2">
                      <h4 className="text-blue-400 font-semibold mb-1 text-sm">Premium Services</h4>
                      {services.filter(s => s.isPremium).map((service) => (
                        <button
                          key={service.id}
                          className="block text-white hover:text-blue-400 transition-colors py-1 w-full text-left"
                          onClick={() => handleServiceClick(service.id)}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-1 text-sm">General Services</h4>
                      {services.filter(s => !s.isPremium).map((service) => (
                        <button
                          key={service.id}
                          className="block text-white hover:text-blue-400 transition-colors py-1 w-full text-left"
                          onClick={() => handleServiceClick(service.id)}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Specialties dropdown for mobile */}
              <div>
                <button
                  onClick={toggleSpecialties}
                  className="flex items-center justify-between w-full text-left text-blue-400 hover:text-blue-500 transition-colors font-bold"
                >
                  <span>Specialties</span>
                  {isSpecialtiesOpen ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
                
                {isSpecialtiesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {specialties.map((specialty) => (
                      <button
                        key={specialty.id}
                        className="block text-white hover:text-blue-400 transition-colors py-1 w-full text-left"
                        onClick={() => handleSpecialtyClick(specialty.id)}
                      >
                        {specialty.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href="/#"
                className="text-blue-400 hover:text-blue-500 transition-colors font-bold"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-blue-400 hover:text-blue-500 transition-colors font-bold"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button onClick={handleWhatsApp} className="bg-blue-500 hover:bg-blue-600 text-blue-950 font-semibold w-full">
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}