
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isPremium?: boolean;
  onClick?: () => void;
}

export default function ServiceCard({ id, title, description, icon: Icon, isPremium = false, onClick }: ServiceCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Navigate to service page for all services
      navigate(`/service/${id}`);
    }
  };
  
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
      className={cn(
        "p-6 rounded-xl cursor-pointer transition-all duration-300",
        isPremium 
          ? "bg-gradient-to-br from-sky-950 to-sky-900 dark:from-sky-950 dark:to-sky-900 border border-sky-800 dark:border-sky-800 shadow-lg"
          : "bg-stone-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
      )}
      onClick={handleClick}
    >
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center mb-4",
        isPremium 
          ? "bg-sky-900 dark:bg-sky-900 text-sky-400"
          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
      )}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className={cn(
        "font-semibold text-lg mb-2",
        isPremium 
          ? "text-sky-400" 
          : "text-gray-800 dark:text-white"
      )}>
        {title}
      </h3>
      
      <p className={isPremium ? "text-white/80" : "text-gray-600 dark:text-gray-300 text-sm"}>
        {description}
      </p>
      
      {isPremium && (
        <div className="mt-4 text-xs text-sky-400 font-semibold flex items-center">
          <span>Premium Service</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      )}
    </motion.div>
  );
}
