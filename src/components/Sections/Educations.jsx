import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2019 - Present",
    degree: "TOBB University of Economics and Technology",
    content:
      "Computer Science - Bachelor’s Degree",
  },
  {
    id: 2,
    year: "2015 - 2019",
    degree: "Yozgat Şehitler Fen Lisesi",
    content:
      "High School",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
