import { motion } from "framer-motion";

const announcements = [
  "🕉️ Thirunavaya Mahamagha Mahotsavam 2025 - Register Now!",
  "📅 Sacred Bathing Dates: January 29 - February 12, 2025",
  "🙏 Experience the divine confluence at Bharathappuzha",
  "✨ Mahamagham - The Great Spiritual Gathering Returns",
];

const AnnouncementBar = () => {
  return (
    <div className="bg-accent text-accent-foreground py-2 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...announcements, ...announcements].map((text, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
