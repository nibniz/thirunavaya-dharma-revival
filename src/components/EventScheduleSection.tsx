import { motion } from "framer-motion";
import { Calendar, Clock, Sun, Moon, Flame } from "lucide-react";
import galleryRiver from "@/assets/gallery-river.jpg";
import galleryYajna from "@/assets/gallery-yajna.jpg";

interface ScheduleItem {
  time: string;
  event: string;
  description: string;
  icon: typeof Sun;
}

interface DaySchedule {
  date: string;
  day: string;
  type: "shahi" | "regular";
  events: ScheduleItem[];
}

const scheduleData: DaySchedule[] = [
  {
    date: "January 29, 2025",
    day: "Day 1 - Inauguration",
    type: "shahi",
    events: [
      { time: "05:00 AM", event: "Brahma Muhurta Snan", description: "Sacred bathing in Bharathappuzha", icon: Sun },
      { time: "07:00 AM", event: "Ganapathi Homam", description: "Auspicious beginning with Lord Ganesha", icon: Flame },
      { time: "10:00 AM", event: "Inauguration Ceremony", description: "Grand opening by spiritual leaders", icon: Sun },
      { time: "04:00 PM", event: "Vedic Discourses", description: "Teachings by Dharma Acharyas", icon: Sun },
      { time: "07:00 PM", event: "Sandhya Aarti", description: "Evening prayers at the temple", icon: Moon },
    ],
  },
  {
    date: "January 30, 2025",
    day: "Day 2 - Magha Snan",
    type: "regular",
    events: [
      { time: "04:30 AM", event: "Magha Snan", description: "Sacred Magha bathing ritual", icon: Sun },
      { time: "08:00 AM", event: "Mass Puja", description: "Community worship ceremony", icon: Flame },
      { time: "11:00 AM", event: "Pravachan", description: "Spiritual discourse by Sannyasins", icon: Sun },
      { time: "03:00 PM", event: "Cultural Programs", description: "Classical arts and performances", icon: Sun },
      { time: "06:30 PM", event: "Deepotsavam", description: "Festival of lights on the river", icon: Moon },
    ],
  },
  {
    date: "January 31, 2025",
    day: "Day 3 - Mahamagham",
    type: "shahi",
    events: [
      { time: "04:00 AM", event: "Brahmi Muhurta Snan", description: "Auspicious Mahamagham bathing", icon: Sun },
      { time: "06:00 AM", event: "Mahamagha Yajna", description: "Grand sacred fire ceremony", icon: Flame },
      { time: "10:00 AM", event: "Trimurti Darshan", description: "Special temple rituals", icon: Sun },
      { time: "02:00 PM", event: "Pithru Karma", description: "Ancestral rites for liberation", icon: Sun },
      { time: "07:00 PM", event: "Grand Aarti", description: "Concluding ceremony at the river", icon: Moon },
    ],
  },
];

interface EventScheduleSectionProps {
  onRegisterClick: () => void;
}

const EventScheduleSection = ({ onRegisterClick }: EventScheduleSectionProps) => {
  return (
    <section id="schedule" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-sacred" />
      <div className="absolute inset-0 sacred-pattern opacity-30" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="section-subtitle">Event Schedule</span>
          <h2 className="section-title">Sacred Bathing Dates</h2>
          <div className="sacred-divider" />
          <p className="body-text max-w-3xl mx-auto px-4">
            Experience three days of spiritual immersion during the auspicious Magha Masam. 
            Join us in this sacred revival of ancient traditions.
          </p>
        </motion.div>

        {/* Hero Image Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-10 md:mb-14 mx-4 md:mx-0"
        >
          <div className="grid md:grid-cols-2 gap-1">
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={galleryRiver}
                alt="Sacred river bathing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-primary-foreground">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gold">Sacred Bathing</p>
                <p className="text-lg md:text-xl font-display font-bold">Bharathappuzha River</p>
              </div>
            </div>
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img
                src={galleryYajna}
                alt="Sacred fire ceremony"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-primary-foreground">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gold">Divine Rituals</p>
                <p className="text-lg md:text-xl font-display font-bold">Mahamagha Yajna</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bathing Dates Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10"
        >
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-saffron-dark"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs md:text-sm font-medium text-foreground">Shahi Snan (Special)</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-4 h-4 rounded-full bg-gradient-to-r from-gold to-gold-light"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <span className="text-xs md:text-sm font-medium text-foreground">Regular Snan</span>
          </div>
        </motion.div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: dayIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className="sacred-card overflow-hidden"
            >
              {/* Day Header */}
              <motion.div 
                className={`p-4 md:p-6 ${day.type === "shahi" 
                  ? "bg-gradient-to-r from-primary to-saffron-dark" 
                  : "bg-gradient-to-r from-gold to-gold-light"
                } text-primary-foreground relative overflow-hidden`}
                whileHover={{ backgroundPosition: "200% center" }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-10 -top-10 text-8xl font-display"
                  >
                    ॐ
                  </motion.div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-medium opacity-90">{day.date}</span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold">{day.day}</h3>
                  {day.type === "shahi" && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-block mt-2 px-3 py-1 bg-primary-foreground/20 rounded-full text-[10px] md:text-xs font-semibold"
                    >
                      ✨ Shahi Snan Day
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {/* Events */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: eventIndex * 0.08 }}
                    className="flex gap-3 md:gap-4 items-start group cursor-pointer"
                  >
                    <motion.div 
                      className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <event.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                        <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-muted-foreground" />
                        <span className="text-[10px] md:text-xs font-semibold text-primary">{event.time}</span>
                      </div>
                      <h4 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary transition-colors truncate">
                        {event.event}
                      </h4>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 line-clamp-2">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10 md:mt-12 px-4"
        >
          <p className="text-muted-foreground mb-4 text-sm md:text-base">Secure your place in this sacred gathering</p>
          <motion.button 
            onClick={onRegisterClick} 
            className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register for the Event
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventScheduleSection;
