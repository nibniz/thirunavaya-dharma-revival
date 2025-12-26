import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

interface ScheduleItem {
  time: string;
  event: string;
  description: string;
}

interface DaySchedule {
  date: string;
  day: string;
  events: ScheduleItem[];
}

const scheduleData: DaySchedule[] = [
  {
    date: "January 29, 2025",
    day: "Day 1 - Inauguration",
    events: [
      { time: "05:00 AM", event: "Brahma Muhurta Snan", description: "Sacred bathing in Bharathappuzha" },
      { time: "07:00 AM", event: "Ganapathi Homam", description: "Auspicious beginning with Lord Ganesha" },
      { time: "10:00 AM", event: "Inauguration Ceremony", description: "Grand opening by spiritual leaders" },
      { time: "04:00 PM", event: "Vedic Discourses", description: "Teachings by Dharma Acharyas" },
      { time: "07:00 PM", event: "Sandhya Aarti", description: "Evening prayers at the temple" },
    ],
  },
  {
    date: "January 30, 2025",
    day: "Day 2 - Magha Snan",
    events: [
      { time: "04:30 AM", event: "Magha Snan", description: "Sacred Magha bathing ritual" },
      { time: "08:00 AM", event: "Mass Puja", description: "Community worship ceremony" },
      { time: "11:00 AM", event: "Pravachan", description: "Spiritual discourse by Sannyasins" },
      { time: "03:00 PM", event: "Cultural Programs", description: "Classical arts and performances" },
      { time: "06:30 PM", event: "Deepotsavam", description: "Festival of lights on the river" },
    ],
  },
  {
    date: "January 31, 2025",
    day: "Day 3 - Mahamagham",
    events: [
      { time: "04:00 AM", event: "Brahmi Muhurta Snan", description: "Auspicious Mahamagham bathing" },
      { time: "06:00 AM", event: "Mahamagha Yajna", description: "Grand sacred fire ceremony" },
      { time: "10:00 AM", event: "Trimurti Darshan", description: "Special temple rituals" },
      { time: "02:00 PM", event: "Pithru Karma", description: "Ancestral rites for liberation" },
      { time: "07:00 PM", event: "Grand Aarti", description: "Concluding ceremony at the river" },
    ],
  },
];

interface EventScheduleSectionProps {
  onRegisterClick: () => void;
}

const EventScheduleSection = ({ onRegisterClick }: EventScheduleSectionProps) => {
  return (
    <SectionWrapper id="schedule" className="bg-secondary">
      <div className="text-center mb-16">
        <span className="section-subtitle">Event Schedule</span>
        <h2 className="section-title">Sacred Itinerary</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          Experience three days of spiritual immersion during the auspicious Magha Masam. 
          Join us in this sacred revival of ancient traditions.
        </p>
      </div>

      <div className="space-y-12">
        {scheduleData.map((day, dayIndex) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
            className="bg-card border border-sacred-border rounded-xl overflow-hidden"
          >
            {/* Day Header */}
            <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 border-b border-sacred-border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">{day.day}</h3>
                  <p className="text-primary font-medium">{day.date}</p>
                </div>
                <div className="w-12 h-1 bg-primary md:w-1 md:h-12" />
              </div>
            </div>

            {/* Events */}
            <div className="p-6">
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: eventIndex * 0.05 }}
                    className="flex gap-4 md:gap-6 items-start group"
                  >
                    <div className="flex-shrink-0 w-20 md:w-24">
                      <span className="text-sm md:text-base font-semibold text-primary">{event.time}</span>
                    </div>
                    <div className="w-px bg-border self-stretch relative">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/20 border-2 border-primary group-hover:bg-primary transition-colors" />
                    </div>
                    <div className="flex-1 pb-4">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {event.event}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
        <button
          onClick={onRegisterClick}
          className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-saffron-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Register for the Event
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default EventScheduleSection;
