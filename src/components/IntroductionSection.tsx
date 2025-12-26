import SectionWrapper from "./SectionWrapper";

const IntroductionSection = () => {
  return (
    <SectionWrapper id="introduction" className="bg-secondary">
      <div className="text-center max-w-4xl mx-auto">
        <span className="section-subtitle">Introduction</span>
        <h2 className="section-title">A Sacred Revival</h2>
        <div className="sacred-divider" />
        <p className="body-text mb-6">
          The revival of the Thirunavaya Mahamagha Mahotsavam is not merely the resurrection 
          of a festival. It is the re-establishment of Kerala's spiritual and cultural nucleus.
        </p>
        <p className="body-text">
          For centuries, Thirunavaya functioned as the land where Dharma shaped leadership, 
          where spiritual authority guided governance, and where India's sacred waters converged. 
          The restoration of this Mahamagham represents a powerful return to the source of Kerala's 
          ancient spiritual identity and civilizational continuity.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default IntroductionSection;
