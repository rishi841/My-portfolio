import { useEffect, useRef, useState } from 'react';
import { bootLines } from '../data.js';

export default function Boot({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const logRef = useRef(null);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setHiding(true);
    setTimeout(onDone, 500);
  };

  useEffect(() => {
    let i = 0;
    let timer;
    const step = () => {
      if (i >= bootLines.length) {
        timer = setTimeout(finish, 350);
        return;
      }
      const item = bootLines[i];
      setVisibleLines((prev) => [...prev, item]);
      setProgress(Math.round(((i + 1) / bootLines.length) * 100));
      i++;
      timer = setTimeout(step, item.delay + 90);
    };
    timer = setTimeout(step, 250);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [visibleLines]);

  return (
    <div id="boot" className={hiding ? 'hide' : ''} onClick={finish}>
      <div id="boot-inner">
        <div id="boot-log" ref={logRef}>
          {visibleLines.map((l, idx) => (
            <div key={idx} className={'line ' + l.cls}>{l.t}</div>
          ))}
        </div>
        <div id="boot-bar-track">
          <div id="boot-bar" style={{ width: progress + '%' }} />
        </div>
      </div>
    </div>
  );
}
