import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const practices = [
  "Sacred bathing rituals",
  "Vratas (vows) and Tapas (austerities)",
  "Japa, Parayana, and spiritual observances",
];

const MaghaMasamSection = () => {
  return (
    <SectionWrapper id="magha-masam" pattern>
      <div className="text-center mb-12">
        <span className="section-subtitle">Magha Masam</span>
        <h2 className="section-title">The Most Auspicious Month</h2>
        <div className="sacred-divider" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="body-text mb-6">
            According to the Hindu Panchangam, Magha Masam is one of the most sacred months, 
            traditionally associated with Sannyasins and kings.
          </p>
          <p className="body-text mb-6">This month includes:</p>
          <ul className="space-y-3 mb-8">
            {practices.map((practice, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">{practice}</span>
              </motion.li>
            ))}
          </ul>
          <p className="body-text">
            The fortnight from Mauni Amavasya to Magha Pournima is considered exceptionally 
            powerful, with every Tithi imbued with divine energy.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card p-8 border border-sacred-border rounded-lg"
        >
          <div className="text-center">
            <h3 className="font-display text-2xl text-primary mb-4">Kalpavasa</h3>
            <p className="body-text italic">
              Scriptures affirm that spending the entire month of Magha near a holy Tirtha 
              and engaging in spiritual practices yields the fruit of a Kalpa (eon) of penance.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MaghaMasamSection;
