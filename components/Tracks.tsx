"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbulb, Wrench, Code2, ArrowLeft } from "lucide-react";

const tracks = [
  {
    id: 1,
    title: "רק חלום",
    subtitle: "From Zero to Hero",
    description: "יש לך רעיון מבריק על מפית? אנחנו נהפוך אותו לאפיון, עיצוב ומוצר עובד שמגייס משקיעים.",
    icon: Lightbulb,
    color: "from-blob-1 to-blob-2",
  },
  {
    id: 2,
    title: "שדרוג מערכת",
    subtitle: "Fix & Scale",
    description: "המוצר הקיים מקרטע? הקוד מסורבל? נכנס לעומק, נעשה Refactoring ונהפוך אותו למכונת ביצועים.",
    icon: Wrench,
    color: "from-blob-2 to-blob-3",
  },
  {
    id: 3,
    title: "שותף טכנולוגי",
    subtitle: "Tech Partner",
    description: "באים עם אפיון טכני? אנחנו נהיה זרוע הפיתוח החזקה שלכם. צוות עילית שמתמזג עם ה-DNA שלכם.",
    icon: Code2,
    color: "from-blob-3 to-[#3B82F6]",
  },
];

export default function Tracks() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative w-full py-32 bg-[#F0F4F8] overflow-hidden z-30">
      
      {/* --- רקע רשת הנדסי (Grid) --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* גרדיאנט עליון למעבר חלק */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F0F4F8] to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        
        {/* כותרת */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-text-primary mb-6">
            באיזה שלב <span className="text-transparent bg-clip-text bg-gradient-to-r from-blob-1 to-blob-3">אתם נמצאים?</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto font-light">
            התאמנו מסלול המראה מדויק לכל שלב בחיי המוצר.
          </p>
        </motion.div>

        {/* הכרטיסים */}
        <div className="flex flex-col lg:flex-row gap-6 h-[650px] w-full max-w-7xl mx-auto">
          {tracks.map((track) => {
            const isActive = active === track.id;

            return (
              <motion.div
                key={track.id}
                layout
                onClick={() => setActive(track.id)}
                onHoverStart={() => setActive(track.id)}
                className={`
                  group relative overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1]
                  ${isActive ? "lg:flex-[3] flex-[3] shadow-2xl ring-1 ring-white/50" : "lg:flex-[1] flex-[1] shadow-lg hover:shadow-xl"}
                  bg-white backdrop-blur-xl border border-white/40
                `}
              >
                {/* --- שכבת הצבע (תמיד קיימת) --- */}
                <div 
                  className={`
                    absolute inset-0 transition-opacity duration-700 bg-gradient-to-br ${track.color}
                    opacity-10 group-hover:opacity-20 ${isActive ? 'opacity-20' : ''}
                  `} 
                />

                {/* מספר ענק ברקע */}
                <span className="absolute -bottom-12 -right-6 text-[14rem] font-black text-text-primary/5 select-none font-heading z-0 leading-none">
                  0{track.id}
                </span>

                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-10">
                  
                  {/* חלק עליון */}
                  <div className="flex flex-col items-start w-full">
                    
                    {/* אייקון - כאן השינוי: הורדתי את ה-rotate */}
                    <div className={`
                      p-4 rounded-2xl mb-8 text-white bg-gradient-to-br ${track.color}
                      shadow-lg transform transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}
                    `}>
                      <track.icon size={32} strokeWidth={2} />
                    </div>
                    
                    <div className="relative">
                        <h3 className={`font-heading text-3xl md:text-4xl font-bold text-text-primary leading-tight transition-all duration-500 ${!isActive && 'lg:rotate-90 lg:origin-left lg:absolute lg:top-10 lg:left-2 lg:whitespace-nowrap'}`}>
                        {track.title}
                        </h3>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        className="mt-3"
                    >
                       <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blob-1 to-blob-2 tracking-wide">
                         {track.subtitle}
                       </span>
                    </motion.div>
                  </div>

                  {/* חלק תחתון */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-lg font-medium">
                        {track.description}
                      </p>
                      
                      <button className="group/btn flex items-center gap-3 font-bold text-text-primary text-lg transition-colors hover:text-blob-1">
                        בוא נדבר על זה
                        <div className="p-3 rounded-full bg-white shadow-sm group-hover/btn:translate-x-2 transition-transform duration-300">
                          <ArrowLeft size={20} />
                        </div>
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}