import SectionWrapper from "./SectionWrapper";

const DisruptionSection = () => {
  return (
    <SectionWrapper id="disruption" pattern>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-subtitle">Disruption & Decline</span>
          <h2 className="section-title">A Period of Darkness</h2>
          <div className="sacred-divider" />
        </div>

        <div className="space-y-6">
          <p className="body-text">
            Approximately 250 years ago, the Mahamagham tradition was disrupted due to colonial 
            interventions, political invasions, and social upheavals.
          </p>
          <p className="body-text">
            Historical conflicts, including invasions and later colonial policies, dismantled 
            major Hindu spiritual assemblies across India. In Kerala, these disruptions fractured 
            the spiritual and cultural fabric of Valluvanad, making it impossible for society to 
            immediately revive this ancient Dharma-based congregation.
          </p>
          <p className="body-text">
            Over time, several temples, Gurukulas, and learning centers in Thirunavaya fell into 
            neglect or destruction, and the continuity of the Thirunavaya Yogam faced near extinction.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DisruptionSection;
