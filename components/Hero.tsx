"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Rocket } from "lucide-react";

interface CloudProps {
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}

const clientTypes = [
  "יש לכם רק רעיון על מפית?",
  "המוצר הקיים עושה בעיות?",
  "באים עם אפיון טכני מוכן?",
];

const Cloud = ({ className, delay = 0, duration = 20, scale = 1 }: CloudProps) => (
  <motion.div
    initial={{ x: "-5%" }}
    animate={{ x: "5%" }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay: delay,
    }}
    // שינוי כאן: opacity-20 (במקום 40) ו-blur-[120px] לרכות מקסימלית
    className={`absolute rounded-full blur-[120px] opacity-20 mix-blend-multiply ${className}`}
    style={{ transform: `scale(${scale})` }}
  />
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % clientTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#F0F4F8]">
      
      {/* רעש רקע */}
      <div className="noise-overlay fixed inset-0 z-[1] opacity-[0.04] pointer-events-none" />

      {/* --- עננים בסידור סימטרי ורך --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        
        {/* צד שמאל למעלה - ורוד */}
        <Cloud 
            className="top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blob-1" 
            delay={0} 
            duration={25} 
        />
        
        {/* צד ימין למעלה - סגול */}
        <Cloud 
            className="top-[-10%] right-[-10%] w-[700px] h-[700px] bg-blob-2" 
            delay={2} 
            duration={28} 
        />
        
        {/* אמצע למטה - טורקיז */}
        <Cloud 
            className="bottom-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blob-3" 
            delay={5} 
            duration={20} 
            scale={1.3} 
        />
      </div>

      {/* התוכן */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl border border-white/60 rounded-full shadow-sm"
        >
          <Sparkles size={16} className="text-blob-2" />
          <span className="text-sm font-bold text-text-secondary tracking-wide">בית תוכנה מהדור החדש</span>
        </motion.div>

        <h1 className="font-heading text-6xl md:text-8xl lg:text-8xl font-bold tracking-tight mb-6 relative">
          <span className="block text-text-primary drop-shadow-sm mb-3">מהדמיון שלכם</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blob-1 via-blob-2 to-blob-3 pb-4">
            למסך של כולם.
          </span>
        </h1>

        <div className="h-12 mb-12 flex items-center justify-center">
            <motion.p
                key={textIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-text-secondary"
            >
                {clientTypes[textIndex]}
            </motion.p>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blob-1 via-blob-2 to-blob-3 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
          <button className="relative flex items-center gap-3 px-10 py-5 bg-text-primary rounded-full text-white font-bold text-xl shadow-2xl overflow-hidden">
            <span className="relative z-10">בואו נמריא ביחד</span>
            <Rocket className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
          </button>
        </motion.div>

      </div>

      {/* מעבר הדרגתי לחלק הבא */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#F0F4F8] to-transparent z-20 pointer-events-none" />
    </div>
  );
}