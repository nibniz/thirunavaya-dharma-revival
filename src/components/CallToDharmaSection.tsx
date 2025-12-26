import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const CallToDharmaSection = () => {
  return (
    <SectionWrapper id="call-to-dharma" pattern>
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-subtitle">Thirunavaya</span>
        <h2 className="section-title">A Call to Dharma</h2>
        <div className="sacred-divider" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="body-text mb-6">
            The revival of the Thirunavaya Mahamagha Mahotsavam is not an act of remembrance—it 
            is an act of responsibility.
          </p>
          <p className="body-text mb-6">
            It calls upon devotees, seekers, scholars, and cultural custodians to participate 
            in restoring a tradition that once unified spirituality, governance, and culture.
          </p>
          <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
            By reviving this sacred congregation, we reaffirm Dharma as the foundation 
            of collective well-being and spiritual continuity.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CallToDharmaSection;
