
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="hover:bg-transparent focus-visible:bg-transparent"
    >
      <Sun className="h-5 w-5 text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}


// import { useState, useEffect } from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "@/components/ThemeProvider";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <div className="flex items-center justify-center">
//       <div className="flex rounded-full p-1 bg-gray-100 dark:bg-gray-800 relative w-full max-w-xs sm:max-w-md shadow-md">
//         {/* Light Mode Toggle */}
//         <button
//           onClick={() => setTheme("light")}
//           className={`flex items-center justify-between rounded-full py-2 px-4 flex-1 transition-all duration-300 ${
//             theme === "light" 
//               ? "bg-white text-gray-700 shadow-sm" 
//               : "text-gray-400 hover:text-gray-600"
//           }`}
//           aria-label="Switch to light mode"
//         >
//           <span className="font-medium mr-2 text-sm sm:text-base">LIGHT MODE</span>
//           <Sun className="h-5 w-5" />
//         </button>
        
//         {/* Dark Mode Toggle */}
//         <button
//           onClick={() => setTheme("dark")}
//           className={`flex items-center justify-between rounded-full py-2 px-4 flex-1 transition-all duration-300 ${
//             theme === "dark" 
//               ? "bg-gray-900 text-gray-200 shadow-sm" 
//               : "text-gray-500 hover:text-gray-700"
//           }`}
//           aria-label="Switch to dark mode"
//         >
//           <Moon className="h-5 w-5 mr-2" />
//           <span className="font-medium text-sm sm:text-base">DARK MODE</span>
//         </button>
//       </div>
//     </div>
//   );
// }