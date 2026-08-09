import { profile } from '../../data.js';

export default function Contact() {
  return (
    <section className="pane fade-up" id="contact" style={{ borderBottom: 'none' }}>
      <h2 className="sec-title"><span className="num">05</span> Contact</h2>
      <p className="lede-block">
        Open to internships and full-stack roles. Fastest way to reach me is email — or just type{' '}
        <span style={{ color: 'var(--teal)' }}>contact</span> in the terminal below.
      </p>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span className="k">Email</span>{profile.email}
        </a>
        <a className="contact-card" href={`tel:${profile.phoneHref}`}>
          <span className="k">Phone</span>{profile.phone}
        </a>
        <a className="contact-card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <span className="k">LinkedIn</span>{profile.linkedinLabel.replace('linkedin.com', '')}
        </a>
        <a className="contact-card" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span className="k">GitHub</span>{profile.githubLabel.replace('github.com', '')}
        </a>
      </div>
    </section>
  );
}
