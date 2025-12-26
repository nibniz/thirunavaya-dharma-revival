import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import galleryYajna from "@/assets/gallery-yajna.jpg";

const DivineRootsSection = () => {
  return (
    <SectionWrapper id="divine-roots" pattern>
      <div className="text-center mb-12">
        <span className="section-subtitle">The Divine & Historical Roots</span>
        <h2 className="section-title">Sacred Origins</h2>
        <div className="sacred-divider" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={galleryYajna}
              alt="Vedic Yajna fire ceremony"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-primary-foreground font-display text-lg italic">
                "The holy Tirthas declared that their divine presence would remain 
                in the River Nila every year during the month of Magha."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default DivineRootsSection;
