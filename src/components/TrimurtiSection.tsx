import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const trimurtiData = [
  {
    deity: "Lord Vishnu",
    title: "Thirunavaya Navamukundan",
    description: "Resides on one bank of the river",
    icon: "🕉️",
  },
  {
    deity: "Lord Brahma & Lord Shiva",
    title: "Sacred Temples",
    description: "Stand on the opposite bank",
    icon: "🔱",
  },
  {
    deity: "Rajarajeshwari",
    title: "The Universal Mother",
    description: "Revered at the midpoint of the river",
    icon: "✨",
  },
];

const TrimurtiSection = () => {
  return (
    <SectionWrapper id="trimurti" className="bg-secondary">
      <div className="text-center mb-16">
        <span className="section-subtitle">Trimurti Sangamam</span>
        <h2 className="section-title">A Rare Mokshasthali</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          Thirunavaya is one of the rare Divyadesams in India where the Trimurtis—Brahma, 
          Vishnu, and Shiva—are consecrated in a unique triangular configuration around the river.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {trimurtiData.map((item, index) => (
          <motion.div
            key={item.deity}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-card border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              {item.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {item.deity}
            </h3>
            <p className="text-primary font-medium mb-2">{item.title}</p>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card p-8 border border-sacred-border rounded-lg text-center max-w-3xl mx-auto"
      >
        <p className="body-text">
          This sacred geometry establishes Thirunavaya as a <strong className="text-primary">Trimurti Sangama</strong> and 
          a <strong className="text-primary">Mokshasthali</strong>, comparable to Gaya. From time immemorial, 
          devotees have performed Pithru Karma (ancestral rites) here, seeking liberation and spiritual fulfillment.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default TrimurtiSection;
