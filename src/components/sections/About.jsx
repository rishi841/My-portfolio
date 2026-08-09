import { about } from '../../data.js';

export default function About() {
  const paragraphs = about.split('\n\n');
  return (
    <section className="pane fade-up" id="about">
      <h2 className="sec-title"><span className="num">01</span> About</h2>
      <p className="lede-block">
        {paragraphs.map((p, i) => (
          <span key={i}>
            {p}
            {i < paragraphs.length - 1 && <><br /><br /></>}
          </span>
        ))}
      </p>
    </section>
  );
}
