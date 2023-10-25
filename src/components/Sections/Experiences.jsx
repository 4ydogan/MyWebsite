import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 2,
    year: "2023 Jan - Now",
    company: "HAVELSAN",
    degree: "Candidate Engineer",
    content: "From January 2023 and continuing to the present, I've had the privilege of working at HAVELSAN as a Candidate Engineer. This role has allowed me to further develop my skills in various programming languages and technologies, including PHP, Docker, Kubernetes, React.js, TypeScript, Java, Python, C, and Bash on Linux. It's been an enriching experience, enabling me to contribute to the development of cutting-edge solutions while honing my expertise in these essential areas. I look forward to continuing my journey as an Engineer, further expanding my knowledge, and being part of HAVELSAN's innovative projects."
  },
  {
    id: 1,
    year: "2022 May - 2022 Aug",
    company: "HAVELSAN",
    degree: "Long Term Internship",
    content: "During the summer of 2022, I had the privilege of interning at HAVELSAN, where I gained valuable real-world experience and contributed to their projects as a Long Term Intern. It was a fantastic opportunity to apply my knowledge in TypeScript, React.js, and JavaScript to solve practical challenges while learning from seasoned professionals in the field."
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
