import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Phone, BookOpen, Users } from "lucide-react";
import galleryTemple from "@/assets/gallery-temple-interior.jpg";

interface QuickInfoGridProps {
  onRegisterClick: () => void;
}

const quickInfoItems = [
  {
    icon: Calendar,
    title: "Bathing Dates",
    description: "Jan 29 - Feb 12, 2025",
    link: "#schedule",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Thirunavaya, Kerala",
    link: "#contact",
  },
  {
    icon: Clock,
    title: "Key Rituals",
    description: "Magha Snan, Yajna, Puja",
    link: "#schedule",
  },
  {
    icon: BookOpen,
    title: "About Mahamagham",
    description: "Sacred History & Significance",
    link: "#introduction",
  },
  {
    icon: Users,
    title: "Accommodation",
    description: "Stay Options Available",
    link: "#contact",
  },
  {
    icon: Phone,
    title: "Helpline",
    description: "+91 9446518126",
    link: "tel:+919446518126",
  },
];

const QuickInfoGrid = ({ onRegisterClick }: QuickInfoGridProps) => {
  return (
    <section id="quickinfo" className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src={galleryTemple}
          alt="Temple interior background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/85 to-foreground/90" />
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 sacred-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground">
            Quick Information
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {quickInfoItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/95 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-sacred-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-2 md:gap-3 group"
            >
              <motion.div 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-saffron-dark flex items-center justify-center text-primary-foreground shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <h3 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">{item.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:mt-10"
        >
          <motion.button 
            onClick={onRegisterClick} 
            className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register for Mahamagham
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInfoGrid;
