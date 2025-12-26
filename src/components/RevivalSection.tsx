import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const RevivalSection = () => {
  return (
    <SectionWrapper id="revival" className="bg-secondary">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-10 rounded-lg border border-primary/20">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="font-display text-xl md:text-2xl text-foreground text-center italic leading-relaxed">
              The revival symbolizes India's journey toward re-establishing itself as 
              a <strong className="text-primary">Vishwaguru</strong>—a guiding light of 
              spiritual wisdom for the world.
            </p>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <span className="section-subtitle">The Modern Revival</span>
          <h2 className="section-title">A Decisive Spiritual Resurgence</h2>
          <div className="w-24 h-0.5 bg-primary mb-8" />
          <p className="body-text mb-6">
            The revival of the Thirunavaya Mahamagha Mahotsavam represents a decisive 
            spiritual resurgence.
          </p>
          <p className="body-text mb-6">
            This restoration is guided by a united front of Sannyasins and Acharyas from 
            Kerala's traditional spiritual lineages, under the patronage and guidance of 
            revered spiritual leaders.
          </p>
          <p className="body-text">
            Anchored in the sacred significance of Magha Masam, this revival seeks to restore 
            the Mahamagham to its ancient splendor, reaffirming Dharma as the foundation of 
            collective life and spiritual unity.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RevivalSection;
