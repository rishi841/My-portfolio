const tabs = [
  { id: 'home', label: 'home.jsx' },
  { id: 'about', label: 'about.jsx' },
  { id: 'skills', label: 'skills.json' },
  { id: 'projects', label: 'projects/' },
  { id: 'experience', label: 'experience.md' },
  { id: 'contact', label: 'contact.md' },
];

export default function TabBar({ active, onNavigate }) {
  return (
    <div className="tabbar">
      {tabs.map((t) => (
        <div
          key={t.id}
          className={'tab' + (active === t.id ? ' on' : '')}
          onClick={() => onNavigate(t.id)}
        >
          {t.label}
        </div>
      ))}
    </div>
  );
}
