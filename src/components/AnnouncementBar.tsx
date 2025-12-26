import { motion } from "framer-motion";

const announcements = [
  "🕉️ Thirunavaya Mahamagha Mahotsavam 2025 - Register Now!",
  "📅 Sacred Bathing Dates: January 29 - February 12, 2025",
  "🙏 Experience the divine confluence at Bharathappuzha",
  "✨ Mahamagham - The Great Spiritual Gathering Returns",
];

const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-accent text-accent-foreground py-2 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...announcements, ...announcements, ...announcements, ...announcements].map((text, index) => (
          <span key={index} className="mx-8 text-xs md:text-sm font-medium">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
