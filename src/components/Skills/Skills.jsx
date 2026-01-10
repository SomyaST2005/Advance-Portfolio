import "./Skills.css";
import { skills } from "./skillsData";
import SkillNode from "./SkillNode";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skill Network</h2>

      <div className="skills-map">
        {skills.map(skill => (
          <SkillNode key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
