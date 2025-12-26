import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const DivineRootsSection = () => {
  return (
    <SectionWrapper id="divine-roots" pattern>
      <div className="text-center mb-12">
        <span className="section-subtitle">The Divine & Historical Roots</span>
        <h2 className="section-title">Sacred Origins</h2>
        <div className="sacred-divider" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="body-text mb-6">
            Thirunavaya, situated on the banks of the River Nila (Bharathappuzha), 
            is revered as one of the most sacred spiritual landscapes of India.
          </p>
          <p className="body-text mb-6">
            According to ancient tradition, Lord Brahma performed a grand Yajna at 
            Thirunavaya at the request of Parasurama for the protection of the land 
            and the prosperity of its people. This divine Yajna was conducted during 
            the highly auspicious month of Magha.
          </p>
          <p className="body-text">
            During this Yajna, all the holy waters of India, led by Goddess Ganga, 
            converged into the River Nila. This divine congregation sanctified the 
            river permanently, earning it the name <strong className="text-foreground">Bharathappuzha</strong> – 
            the River of India, making it the only river in the country named after Bharata.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card p-8 border border-sacred-border rounded-lg"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <p className="body-text text-center italic">
            "Rishis, Saptarshis, and all divine beings witnessed this sacred event. 
            Upon completion of the Yajna, the holy Tirthas declared that their divine 
            presence would remain in the River Nila every year during the month of Magha, 
            granting atonement, merit, and spiritual upliftment to the land and its people."
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default DivineRootsSection;
