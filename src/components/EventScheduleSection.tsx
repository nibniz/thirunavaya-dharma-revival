import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Calendar, Clock, Sun, Moon, Flame } from "lucide-react";

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
    <SectionWrapper id="schedule" className="bg-gradient-sacred sacred-pattern">
      <div className="text-center mb-12">
        <span className="section-subtitle">Event Schedule</span>
        <h2 className="section-title">Sacred Bathing Dates</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          Experience three days of spiritual immersion during the auspicious Magha Masam. 
          Join us in this sacred revival of ancient traditions.
        </p>
      </div>

      {/* Bathing Dates Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-6 mb-10"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-saffron-dark" />
          <span className="text-sm font-medium text-foreground">Shahi Snan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gold to-gold-light" />
          <span className="text-sm font-medium text-foreground">Regular Snan</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
            className="sacred-card overflow-hidden"
          >
            {/* Day Header */}
            <div className={`p-6 ${day.type === "shahi" 
              ? "bg-gradient-to-r from-primary to-saffron-dark" 
              : "bg-gradient-to-r from-gold to-gold-light"
            } text-primary-foreground`}>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium opacity-90">{day.date}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{day.day}</h3>
              {day.type === "shahi" && (
                <span className="inline-block mt-2 px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-semibold">
                  Shahi Snan Day
                </span>
              )}
            </div>

            {/* Events */}
            <div className="p-6 space-y-4">
              {day.events.map((event, eventIndex) => (
                <motion.div
                  key={event.time}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <event.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-semibold text-primary">{event.time}</span>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      {event.event}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{event.description}</p>
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
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-4">Secure your place in this sacred gathering</p>
        <button onClick={onRegisterClick} className="btn-primary text-lg px-10 py-4">
          Register for the Event
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default EventScheduleSection;
