import { useEffect, useRef, useState } from 'react';
import { profile, projects } from '../data.js';
import { scrollToId } from '../hooks/useActiveSection.js';

const HELP_LINES = [
  "available commands:",
  "  whoami          — quick intro",
  "  about           — jump to about",
  "  skills          — list tech stack",
  "  projects        — list & open projects",
  "  open <project>  — e.g. 'open auth-system'",
  "  experience      — jump to experience",
  "  contact         — get contact info",
  "  resume          — where to find the resume",
  "  clear           — clear this terminal",
  "  sudo make coffee — try it ;)",
];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([
    { text: "Portfolio terminal v1.0 — type 'help' to see available commands.", cls: 'out hl' },
  ]);
  const [value, setValue] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  const print = (text, cls = 'out') => setLog((prev) => [...prev, { text, cls }]);
  const printPrompt = (cmd) => setLog((prev) => [...prev, { text: '➜ ' + cmd, cls: 'prompt' }]);

  const runOpen = (arg) => {
    const proj = projects.find((p) => p.aliases.includes(arg));
    if (proj) {
      scrollToId(proj.id);
      print('→ opening ' + arg + '…', 'out hl');
    } else {
      print('project not found: ' + arg + " — try 'projects' to list them.", 'err');
    }
  };

  const handleCommand = (raw) => {
    printPrompt(raw);
    const parts = raw.split(/\s+/);
    const base = parts[0].toLowerCase();

    if (base === 'open' && parts.length > 1) {
      runOpen(parts.slice(1).join('-').toLowerCase());
      return;
    }
    if (raw.toLowerCase() === 'sudo make coffee') {
      print('☕ sudo: permission granted. brewing... done. enjoy!', 'out hl');
      return;
    }
    if (base === 'sudo') {
      print('nice try — this terminal only takes coffee orders.', 'err');
      return;
    }

    switch (base) {
      case 'help':
        HELP_LINES.forEach((l) => print(l));
        break;
      case 'whoami':
        print('Rishi Pandey — Full-Stack Developer (MERN). Final-year CS student. Builds things, ships things.', 'out hl');
        break;
      case 'about':
        scrollToId('about');
        print('→ scrolled to about.jsx');
        break;
      case 'skills':
        scrollToId('skills');
        print('React.js · Node.js · Express.js · MongoDB · Tailwind · JWT · Git', 'out hl');
        break;
      case 'projects':
        scrollToId('projects');
        print(`${projects.length} projects found: ` + projects.map((p) => p.id).join(', '));
        print('try: open auth-system');
        break;
      case 'experience':
        scrollToId('experience');
        print('→ scrolled to experience.md');
        break;
      case 'contact':
        scrollToId('contact');
        print('email: ' + profile.email, 'out hl');
        print('linkedin: ' + profile.linkedinLabel, 'out hl');
        print('github: ' + profile.githubLabel, 'out hl');
        break;
      case 'resume':
        print('resume available on request — reach out via the contact section.');
        break;
      case 'clear':
        setLog([]);
        break;
      default:
        print(`command not found: ${raw} — type 'help'`, 'err');
    }
  };

  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const raw = value.trim();
    if (!raw) return;
    handleCommand(raw);
    setValue('');
  };

  // expose a way for the hero button to open + focus the terminal
  useEffect(() => {
    window.__openTerminal = () => {
      setOpen(true);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 300);
    };
  }, []);

  return (
    <div id="term-dock">
      <div id="term-panel" className={open ? 'open' : ''}>
        <div id="term-log" ref={logRef}>
          {log.map((l, i) => (
            <div key={i} className={'line ' + l.cls}>{l.text}</div>
          ))}
        </div>
      </div>
      <div id="term-bar">
        <span className="caret">›_</span>
        <input
          id="term-input"
          ref={inputRef}
          type="text"
          placeholder="type 'help' to explore this site…"
          autoComplete="off"
          spellCheck="false"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
        />
        <span id="term-hint">try: whoami · projects · contact · sudo</span>
        <span id="term-toggle" onClick={() => setOpen((o) => !o)}>
          {open ? '▾ collapse' : '▴ expand'}
        </span>
      </div>
    </div>
  );
}
