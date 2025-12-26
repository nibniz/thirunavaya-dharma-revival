import { motion } from "framer-motion";
import heroImage from "@/assets/hero-temple.jpg";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Thirunavaya Temple at sunrise on the banks of Bharathappuzha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--foreground))_100%)]" />
      </div>

      <div className="section-container relative z-10 text-center py-20 pt-32">
        {/* Decorative Om Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-6xl md:text-8xl text-primary font-display">ॐ</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gold bg-foreground/30 px-6 py-2 rounded-full backdrop-blur-sm border border-gold/30">
            Kumbhamela – Thirunavaya • 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          Thirunavaya
          <br />
          <span className="text-primary">Mahamagha Mahotsavam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-xl md:text-2xl lg:text-3xl italic text-primary-foreground/90 mb-6"
        >
          Reclaiming Kerala's Ancient Spiritual Nucleus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed font-body mb-10"
        >
          On the sacred banks of Bharathappuzha, the Thirunavaya Mahamagha Mahotsavam 
          marks the revival of a civilizational tradition that once guided Dharma, 
          governance, and culture in Kerala.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onRegisterClick}
            className="px-10 py-4 bg-gradient-to-r from-primary to-saffron-dark text-primary-foreground font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-lg transform hover:-translate-y-1"
          >
            Register Now
          </button>
          <a
            href="#schedule"
            className="px-10 py-4 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 backdrop-blur-sm"
          >
            View Schedule
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#introduction"
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-gold to-primary" />
    </section>
  );
};

export default HeroSection;
