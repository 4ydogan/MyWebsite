import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 1,
      name: "TypeScript",
      percentage: 80,
    },
    {
      id: 2,
      name: "React.js",
      percentage: 80,
    },
    {
      id: 3,
      name: "Java",
      percentage: 75,
    },
    {
      id: 4,
      name: "C",
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
