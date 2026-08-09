import { profile, projects } from '../data.js';
import { scrollToId } from '../hooks/useActiveSection.js';

const navItems = [
  { id: 'home', label: 'home.jsx' },
  { id: 'about', label: 'about.jsx' },
  { id: 'skills', label: 'skills.json' },
];
const tailItems = [
  { id: 'experience', label: 'experience.md' },
  { id: 'contact', label: 'contact.md' },
];

function activeStyle(isActive) {
  return isActive
    ? { background: 'var(--bg-raised)', color: 'var(--teal)', borderLeftColor: 'var(--teal)' }
    : undefined;
}

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside id="sidebar">
      <div className="sb-brand"><b>rishi-pandey</b>/portfolio</div>

      <div className="sb-group-label">root</div>
      {navItems.map((item) => (
        <div
          key={item.id}
          className="sb-item"
          style={activeStyle(active === item.id)}
          onClick={() => onNavigate(item.id)}
        >
          <span className="dot" /> {item.label}
        </div>
      ))}

      <div className="sb-group-label">projects /</div>
      {projects.map((p) => (
        <div
          key={p.id}
          className="sb-item sb-sub"
          style={active === 'projects' ? { color: 'var(--teal)' } : undefined}
          onClick={() => scrollToId(p.id)}
        >
          <span className="dot" /> {p.id}.js
        </div>
      ))}

      <div className="sb-group-label">root</div>
      {tailItems.map((item) => (
        <div
          key={item.id}
          className="sb-item"
          style={activeStyle(active === item.id)}
          onClick={() => onNavigate(item.id)}
        >
          <span className="dot" /> {item.label}
        </div>
      ))}

      <div className="sb-foot">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">↗ {profile.githubLabel}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">↗ {profile.linkedinLabel}</a>
      </div>
    </aside>
  );
}
