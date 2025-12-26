import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import galleryCongregation from "@/assets/gallery-congregation.jpg";

interface RevivalSectionProps {
  onRegisterClick: () => void;
}

const RevivalSection = ({ onRegisterClick }: RevivalSectionProps) => {
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
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={galleryCongregation}
              alt="Spiritual gathering at Thirunavaya temple"
              className="w-full h-80 lg:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-xl md:text-2xl text-primary-foreground text-center italic leading-relaxed">
                The revival symbolizes India's journey toward re-establishing itself as 
                a <strong className="text-primary">Vishwaguru</strong>—a guiding light of 
                spiritual wisdom for the world.
              </p>
            </div>
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
          <p className="body-text mb-8">
            Anchored in the sacred significance of Magha Masam, this revival seeks to restore 
            the Mahamagham to its ancient splendor, reaffirming Dharma as the foundation of 
            collective life and spiritual unity.
          </p>
          <button
            onClick={onRegisterClick}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-saffron-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Be Part of the Revival
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RevivalSection;
