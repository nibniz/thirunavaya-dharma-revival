import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

import galleryRitual from "@/assets/gallery-ritual.jpg";
import galleryTempleInterior from "@/assets/gallery-temple-interior.jpg";
import galleryYajna from "@/assets/gallery-yajna.jpg";
import galleryRiver from "@/assets/gallery-river.jpg";
import galleryLamp from "@/assets/gallery-lamp.jpg";
import galleryCongregation from "@/assets/gallery-congregation.jpg";
import galleryGopuram from "@/assets/gallery-gopuram.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { src: galleryRitual, alt: "Sacred river bathing ritual at sunrise", title: "Sacred Bathing Ritual" },
  { src: galleryTempleInterior, alt: "Temple interior with oil lamps and devotees", title: "Temple Prayers" },
  { src: galleryYajna, alt: "Vedic yajna fire ceremony", title: "Vedic Yajna" },
  { src: galleryRiver, alt: "Aerial view of Bharathappuzha river", title: "Bharathappuzha" },
  { src: galleryLamp, alt: "Traditional brass oil lamp", title: "Sacred Lamp" },
  { src: galleryCongregation, alt: "Spiritual gathering at temple", title: "Divine Congregation" },
  { src: galleryGopuram, alt: "Temple gopuram at sunset", title: "Temple Gopuram" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <SectionWrapper id="gallery" pattern>
      <div className="text-center mb-16">
        <span className="section-subtitle">Photo Gallery</span>
        <h2 className="section-title">Sacred Moments</h2>
        <div className="sacred-divider" />
        <p className="body-text max-w-3xl mx-auto">
          Witness the divine beauty of Thirunavaya and the sacred traditions that 
          have been preserved for millennia.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative overflow-hidden rounded-lg cursor-pointer group ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                index === 0 ? "aspect-square" : "aspect-square"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary-foreground font-medium text-sm md:text-base">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-lg">
                <p className="text-primary-foreground font-display text-xl">{selectedImage.title}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-foreground/50 hover:bg-foreground/70 rounded-full text-primary-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default GallerySection;
