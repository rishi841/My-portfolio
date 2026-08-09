import { experience } from '../../data.js';

export default function Experience() {
  return (
    <section className="pane fade-up" id="experience">
      <h2 className="sec-title"><span className="num">04</span> Experience</h2>
      {experience.map((item, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-role">{item.role}</div>
          <div className="tl-org">{item.org}</div>
          <div className="tl-date">{item.date}</div>
          {item.desc && <div className="tl-desc">{item.desc}</div>}
        </div>
      ))}
    </section>
  );
}
