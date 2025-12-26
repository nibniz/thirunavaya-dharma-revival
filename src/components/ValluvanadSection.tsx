import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const highlights = [
  "Ancient Gurukulas and Vedic learning centers",
  "Kalari institutions and classical art traditions",
  "Thunchaththu Ezhuthachan, the father of the Malayalam language",
  "Indigenous and Vedic spiritual lineages coexisting harmoniously",
];

const ValluvanadSection = () => {
  return (
    <SectionWrapper id="valluvanad" className="bg-secondary">
      <div className="text-center mb-12">
        <span className="section-subtitle">Valluvanad</span>
        <h2 className="section-title">The Cradle of Kerala's Civilization</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          The region of Valluvanad, nourished by Bharathappuzha and centered around Thirunavaya, 
          was the cultural and spiritual powerhouse of ancient Kerala.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 bg-card p-6 border border-sacred-border rounded-lg"
          >
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <p className="text-foreground font-medium">{item}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="body-text text-center max-w-3xl mx-auto"
      >
        Thirunavaya itself functioned as the primary center of Kerala's indigenous Vedic education 
        system, known as the <strong className="text-primary">Thirunavaya Yogam</strong>.
      </motion.p>
    </SectionWrapper>
  );
};

export default ValluvanadSection;
