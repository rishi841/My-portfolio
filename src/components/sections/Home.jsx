import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data.js';

const codeTokens = [
  ['tok-kw', 'const '], ['tok-fn', 'rishi'], ['tok-punc', ' = {\n  '],
  ['tok-key', 'role'], ['tok-punc', ': '], ['tok-str', "'Full-Stack Developer'"], ['tok-punc', ',\n  '],
  ['tok-key', 'stack'], ['tok-punc', ': ['], ['tok-str', "'React'"], ['tok-punc', ', '], ['tok-str', "'Node'"], ['tok-punc', ', '], ['tok-str', "'Express'"], ['tok-punc', ', '], ['tok-str', "'MongoDB'"], ['tok-punc', ']'], ['tok-punc', ',\n  '],
  ['tok-key', 'strengths'], ['tok-punc', ': ['], ['tok-str', "'auth'"], ['tok-punc', ', '], ['tok-str', "'REST APIs'"], ['tok-punc', ', '], ['tok-str', "'UI'"], ['tok-punc', ']'], ['tok-punc', ',\n  '],
  ['tok-key', 'status'], ['tok-punc', ': '], ['tok-str', "'open_to_work'"], ['tok-punc', ',\n  '],
  ['tok-key', 'hire'], ['tok-punc', ': '], ['tok-fn', '() => '], ['tok-str', "'let\\'s talk'"], ['tok-punc', ',\n'],
  ['tok-punc', '};'],
];
const fullText = codeTokens.map((t) => t[1]).join('');
const symbols = ['{ }', '</>', '=>', 'const', ';', '[ ]', 'npm', 'git', 'fn()', '==='];

function CodePanel() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer;
    const step = () => {
      i++;
      setCount(i);
      if (i < fullText.length) timer = setTimeout(step, 16 + Math.random() * 22);
    };
    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, []);

  let remaining = count;
  const spans = [];
  for (const [cls, text] of codeTokens) {
    if (remaining <= 0) break;
    const chunk = text.slice(0, remaining);
    spans.push({ cls, chunk });
    remaining -= chunk.length;
  }

  return (
    <div className="code-panel">
      <div className="cp-head">
        <span style={{ background: 'var(--coral)' }} />
        <span style={{ background: 'var(--amber)' }} />
        <span style={{ background: 'var(--teal)' }} />
        <span className="cp-title">whoami.js</span>
      </div>
      <div className="cp-body" id="cp-body">
        {spans.map((s, i) => (
          <span key={i} className={s.cls}>{s.chunk}</span>
        ))}
        <span id="cp-cursor" />
      </div>
    </div>
  );
}

function RoleTypewriter() {
  const [text, setText] = useState('');

  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let timer;
    const tick = () => {
      const word = profile.roles[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) { deleting = true; timer = setTimeout(tick, 1400); return; }
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) { deleting = false; ri = (ri + 1) % profile.roles.length; timer = setTimeout(tick, 300); return; }
      }
      timer = setTimeout(tick, deleting ? 35 : 65);
    };
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, []);

  return <div className="hero-role" id="hero-role-type">{text}</div>;
}

function Floaters() {
  const hostRef = useRef(null);
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const count = window.innerWidth < 720 ? 6 : 12;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'floater';
      s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      s.style.left = Math.random() * 100 + '%';
      s.style.fontSize = 12 + Math.random() * 14 + 'px';
      s.style.animationDuration = 14 + Math.random() * 14 + 's';
      s.style.animationDelay = Math.random() * 12 + 's';
      host.appendChild(s);
      nodes.push(s);
    }
    return () => nodes.forEach((n) => n.remove());
  }, []);
  return <div id="floaters" ref={hostRef} />;
}

export default function Home({ onOpenTerminal }) {
  return (
    <section className="pane" id="home">
      <Floaters />
      <div className="hero-grid">
        <div className="hero-left">
          <div className="eyebrow"></div>
          <h1 className="hero-name">{profile.name}</h1>
          <RoleTypewriter />
          <p className="hero-lede">
            Final-year CS Engineering student who builds full-stack web apps end to end — from
            React interfaces down to authentication and database design. This site is one of my
            projects too; try the terminal at the bottom.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            <span className="btn btn-ghost" onClick={onOpenTerminal}>Open terminal ›_</span>
          </div>
        </div>
        <CodePanel />
      </div>
    </section>
  );
}
