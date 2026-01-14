"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Wallet, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "דמי רצינות בלבד",
    desc: "מתחילים עם סכום שלא חונק את התזרים. את התחמושת הכבדה תשמרו לשיווק ולכיבוש היעד.",
  },
  {
    title: "מודל 'שלם כשתרוויח'",
    desc: "היתרה? נפרסת רק כשהלקוחות מתחילים לגהץ אצלכם. הלחץ יורד, והפוקוס עובר נטו לצמיחה.",
  },
  {
    title: "סקין-אין-דה-גיים",
    desc: "אנחנו לא סתם ספקים, אנחנו שותפים. אנחנו מהמרים על ההצלחה שלכם – כי כשאתם ממריאים, גם אנחנו.",
  },
];

export default function Launchpad() {
  return (
    <section className="relative w-full pb-24 bg-[#F7F5FF] overflow-hidden">
      
      {/* --- שכבת רקע ומעברים --- */}
      <div className="absolute top-0 w-full h-[300px] z-0 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-b from-[#F0F4F8] via-[#F4F6FC] to-[#F7F5FF]" />
         <div 
           className="absolute inset-0 opacity-[0.03]"
           style={{ 
             backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'linear-gradient(to bottom, black, transparent)'
           }} 
         />
      </div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blob-2/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blob-3/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-60" />

      {/* תוכן הסקשן */}
      <div className="container mx-auto px-4 relative z-20 pt-32">
        
        {/* כותרת מרכזית */}
        <div className="text-center max-w-6xl mx-auto mb-20">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-white shadow-sm rounded-full text-blob-2 font-bold text-sm mb-8">
              <Wallet size={16} />
              <span className="tracking-wide">מימון הדור הבא 🚀</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
              <span className="block mb-2">תטוסו לשמיים.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blob-1 via-blob-2 to-blob-3">
                 על הדלק נתחשבן אחר כך.
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
               למה לחנוק את המיזם לפני שהוא נולד? תשאירו את המזומן אצלכם ביד. בונים לכם טכנולוגיה עם ביטחון.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4">
          
          {/* --- צד ימין: היתרונות --- */}
          <div className="lg:w-1/2 px-4 w-full">
            <div className="space-y-10">
              {benefits.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-white/60 flex items-center justify-center text-blob-2 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-blob-2 transition-colors">{item.title}</h4>
                    <p className="text-text-secondary text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- צד שמאל: הגרף המשודרג --- */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-center lg:translate-x-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/50 w-full max-w-[360px]"
            >
              
              {/* אזור הגרף */}
              <div className="relative h-[250px] flex items-end justify-between pt-10 px-2">
                
                {/* קווי רקע עדינים */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                  <div className="border-t border-gray-50 w-full h-full"></div>
                  <div className="border-t border-gray-50 w-full h-full"></div>
                  <div className="border-t border-gray-50 w-full h-full"></div>
                  <div className="border-t border-gray-50 w-full h-full"></div>
                </div>

                 {/* עמודה 1 (ימין): התנעה */}
                 <div className="flex flex-col items-center w-1/4 relative z-10 h-full justify-end">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "35%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-[50px] bg-[linear-gradient(180deg,#FA709A_0%,#7d469f_100%)] rounded-t-[10px] opacity-90"
                    />
                </div>

                {/* עמודה 2: בנייה */}
                <div className="flex flex-col items-center w-1/4 relative z-10 h-full justify-end">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "35%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-[50px] bg-[linear-gradient(180deg,#FA709A_0%,#7d469f_100%)] rounded-t-[10px] opacity-90"
                    />
                </div>

                {/* עמודה 3: שיגור */}
                <div className="flex flex-col items-center w-1/4 relative z-10 h-full justify-end">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "40%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-[50px] bg-[linear-gradient(180deg,#FA709A_0%,#7d469f_100%)] rounded-t-[10px] opacity-90"
                    />
                </div>
                
                {/* עמודה 4 (שמאל): המאני-טיים */}
                <div className="flex flex-col items-center w-1/4 relative z-10 h-full justify-end">
                    {/* הקו הירוק (רווחים) */}
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7, type: "spring" }}
                        className="absolute bottom-0 w-1.5 bg-[#00ca78] rounded-t-md z-20"
                    >
                         {/* האייקון למעלה */}
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#eafff3] w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_4px_10px_rgba(0,200,120,0.1)]">
                            <TrendingUp size={20} className="text-[#00ca78]" strokeWidth={3} />
                         </div>
                    </motion.div>

                    {/* העמודה הצבעונית (תשלום) */}
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-[50px] bg-[linear-gradient(180deg,#FA709A_0%,#7d469f_100%)] rounded-t-[10px] opacity-90 shadow-sm relative z-10"
                    />
                </div>

              </div>

              {/* כיתובים */}
              <div className="flex justify-between mt-4 pt-4 border-t border-gray-100 text-center">
                  <span className="text-sm font-bold text-gray-500 w-1/4">התנעה</span>
                  <span className="text-sm font-bold text-gray-500 w-1/4">בנייה</span>
                  <span className="text-sm font-bold text-gray-500 w-1/4">שיגור</span>
                  <span className="text-sm font-bold text-[#2c3e50] w-1/4">מאני-טיים</span>
              </div>

              {/* --- תוספת: מקרא (Legend) --- */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-dashed border-gray-100">
                
                {/* מקרא: תשלום */}
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-[linear-gradient(180deg,#FA709A_0%,#7d469f_100%)] shadow-sm" />
                   <span className="text-xs text-gray-500 font-medium">התשלום שלכם</span>
                </div>

                {/* מקרא: רווחים */}
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#00ca78] shadow-sm" />
                   <span className="text-xs text-gray-500 font-medium">הרווחים שלכם</span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}