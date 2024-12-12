import React from "react";
import "./ProgressBar.css";

const SkillsBar = () => {
  const htmlPercentage = 90;
  const cssPercentage = 85;
  const bootstrapPercentage = 85;
  const djangoPercentage = 55;
  const mySqlPercentage = 50;
  const wpPercentage = 90;
  const psPercentage = 95;
  const aiPercentage = 95;
  const idPercentage = 65;
  const prPercentage = 50;
  const figPercentage = 90;
  const canvaPercentage = 90;
  const klaPercentage = 60;
  const phpPercentage = 55;

  return (
    <>
      <div className="skills-container">
      <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">HTML</div>
            <div className="percentage-skills">{htmlPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${htmlPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">CSS</div>
            <div className="percentage-skills">{cssPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${cssPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">CSS Bootstrap</div>
            <div className="percentage-skills">{bootstrapPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${bootstrapPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Django</div>
            <div className="percentage-skills">{djangoPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${djangoPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">PHP</div>
            <div className="percentage-skills">{phpPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${phpPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">MySQL</div>
            <div className="percentage-skills">{mySqlPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${mySqlPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">WordPress</div>
            <div className="percentage-skills">{wpPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${wpPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Photoshop</div>
            <div className="percentage-skills">{psPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${psPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Illustrator</div>
            <div className="percentage-skills">{aiPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${aiPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">InDesign</div>
            <div className="percentage-skills">{idPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${idPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Premier Pro</div>
            <div className="percentage-skills">{prPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${prPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Figma</div>
            <div className="percentage-skills">{figPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${figPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Canva</div>
            <div className="percentage-skills">{canvaPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${canvaPercentage}%`} height="7"
        ></svg>
        </div>

        <div className="skills">
        <div className="skill-title">
            <div className="tech-stack-skills">Klaviyo</div>
            <div className="percentage-skills">{klaPercentage}%</div>
        </div>
        <svg
          className="progress-bar-skills"
          width={`${klaPercentage}%`} height="7"
        ></svg>
        </div>
        </div>
    </>
  );
};

export default SkillsBar;