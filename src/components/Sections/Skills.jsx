import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I use a diverse set of technologies, including PHP, Docker, Kubernetes, TypeScript, Java, and C, for web development and application deployment. This versatility allows me to choose the right tools for different projects, fostering continuous learning and adaptability.",
  progressData: [
    {
      id: 1,
      name: "PHP",
      percentage: 85,
    },
    {
      id: 2,
      name: "Docker - Kubernates",
      percentage: 80,
    },
    {
      id: 3,
      name: "React.js",
      percentage: 75,
    },
    {
      id: 4,
      name: "TypeScript",
      percentage: 75,
    },
    {
      id: 5,
      name: "Java",
      percentage: 75,
    },
    {
      id: 6,
      name: "Python",
      percentage: 70,
    },
    {
      id: 7,
      name: "C",
      percentage: 70,
    },
    {
      id: 8,
      name: "Bash & Linux",
      percentage: 70,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
