import { skills } from '../../data.js';

export default function Skills() {
  return (
    <section className="pane fade-up" id="skills">
      <h2 className="sec-title"><span className="num">02</span> Skills</h2>
      <div className="skill-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
