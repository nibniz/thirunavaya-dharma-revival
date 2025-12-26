import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const riverAspects = [
  { title: "The Convergence", description: "All Indian Tirthas meet here" },
  { title: "Divine Vitality", description: "Flow of Devatachaitanyam" },
  { title: "Living Source", description: "Of Prana and spiritual energy" },
];

const BharathappuzhaSection = () => {
  return (
    <SectionWrapper id="bharathappuzha" className="bg-secondary">
      <div className="text-center mb-16">
        <span className="section-subtitle">Bharathappuzha</span>
        <h2 className="section-title">The River of India</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          Bharathappuzha originates from Trimurti Malai and flows through sacred lands 
          before reaching Thirunavaya and merging with the sea.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {riverAspects.map((aspect, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center bg-card p-8 border border-sacred-border rounded-lg"
          >
            <div className="w-1 h-12 bg-primary mx-auto mb-6" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {aspect.title}
            </h3>
            <p className="text-muted-foreground">{aspect.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="body-text text-center max-w-2xl mx-auto font-medium"
      >
        Bathing in its waters during Magha is considered one of the highest forms of spiritual purification.
      </motion.p>
    </SectionWrapper>
  );
};

export default BharathappuzhaSection;
