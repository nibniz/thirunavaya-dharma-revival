import { motion } from "framer-motion";
import galleryRitual from "@/assets/gallery-ritual.jpg";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src={galleryRitual}
          alt="Sacred ritual background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-background/90 to-secondary/95" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 sacred-pattern opacity-40" />

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-6xl md:text-8xl text-primary/10 font-display"
      >
        ॐ
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 text-6xl md:text-8xl text-gold/10 font-display"
      >
        ॐ
      </motion.div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-subtitle inline-block"
          >
            Introduction
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            A Sacred Revival
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sacred-divider origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body-text mb-6"
          >
            The revival of the Thirunavaya Mahamagha Mahotsavam is not merely the resurrection 
            of a festival. It is the re-establishment of Kerala's spiritual and cultural nucleus.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-text"
          >
            For centuries, Thirunavaya functioned as the land where Dharma shaped leadership, 
            where spiritual authority guided governance, and where India's sacred waters converged. 
            The restoration of this Mahamagham represents a powerful return to the source of Kerala's 
            ancient spiritual identity and civilizational continuity.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center gap-4 mt-8"
          >
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-2xl text-primary">☸</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
