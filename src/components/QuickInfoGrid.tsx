import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Phone, BookOpen, Users } from "lucide-react";

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
    <section className="py-12 bg-gradient-sacred relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 sacred-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Quick Information
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickInfoItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="info-card group"
            >
              <div className="info-card-icon group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button onClick={onRegisterClick} className="btn-primary text-lg px-10 py-4">
            Register for Mahamagham
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInfoGrid;
