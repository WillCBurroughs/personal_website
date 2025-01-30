import React from "react";
import "../../index.css";

const TimelineItem = ({ title, subtitle, year, classNameDot = "timeline-dot" }) => (
  <div className="timeline-item">
    <div className= {classNameDot} ></div>
    <div className="timeline-content">
      <h4>{title}</h4>
      <p>{subtitle}</p>
      {year && <span className="timeline-year">{year}</span>}
    </div>
  </div>
);

const Timeline = () => (
  <div className="timeline">
    <div className="timeline-line"></div>
    <TimelineItem 
        classNameDot="timeline-header"
    />
    <TimelineItem
      title="Education"
      subtitle="Bachelor of Science Biology"
      year="University of Kentucky, 2023"
    />
    <TimelineItem
      title="Software Engineer"
      subtitle="Sky Systemz, 2024-2025"
      year="Experience"
    />
    <TimelineItem
      title="JavaScript Developer"
      subtitle="AWS Certified Developer – Associate"
      year="Certifications"
    />
  </div>
);

export default Timeline;