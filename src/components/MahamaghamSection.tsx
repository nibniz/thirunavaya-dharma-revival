import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const MahamaghamSection = () => {
  return (
    <SectionWrapper id="mahamagham" pattern>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-subtitle">Mahamagham</span>
          <h2 className="section-title">The Era of Spiritual Governance</h2>
          <div className="w-24 h-0.5 bg-primary mb-8" />
          <p className="body-text mb-6">
            Historically, the Mahamagha Mahotsavam was far more than a religious congregation. 
            It was the spiritual foundation of Kerala's governance and cultural order.
          </p>
          <p className="body-text mb-6">
            For centuries, assemblies of Sannyasins, Rishis, and Dharma Acharyas gathered at 
            Thirunavaya during the Magha Mela and the 12-year Mahamagham cycle. These assemblies 
            consecrated and appointed Perumals (rulers), ensuring that governance remained aligned with Dharma.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
          <div className="bg-card p-10 border-l-4 border-primary rounded-lg relative">
            <svg
              className="w-12 h-12 text-primary/20 absolute top-6 right-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
              At each Mahamagham, the reigning Perumal would step down, and a new ruler would 
              be spiritually selected, reaffirming the principle that authority flowed from 
              Dharma rather than power.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MahamaghamSection;
