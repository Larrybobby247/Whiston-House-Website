import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, FileText, Landmark, Plane, Send, Stamp } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const steps = [
  { title: "Submit your application", short: "Apply", text: "Complete the application form with your personal details, experience and chosen position. If you qualify, you will receive the online travel and recruitment agency’s contact details and guidance for the next stage.", icon: Send },
  { title: "Documents are processed", short: "Process", text: "The experienced online travel and recruitment agency in London will guide you through the requirements and process the necessary employment and travel documentation in coordination with the relevant British authorities.", icon: FileText },
  { title: "Papers reach the mission", short: "Forward", text: "Once your papers are fully processed and ready, they will be forwarded to the relevant British diplomatic mission or visa application centre responsible for your location for the final stage.", icon: Plane },
  { title: "Attend your appointment", short: "Attend", text: "After the documents arrive, you will be notified and invited to attend an appointment for collection of your documents and the final endorsement stage.", icon: Landmark },
  { title: "Complete final requirements", short: "Finish", text: "The final stage includes any required biometric information, passport stamping and collection of your travel documents. After approval, you can make the necessary arrangements for relocation.", icon: Stamp },
];

function VectorScene({ active }: { active: number }) {
  const reduceMotion = useReducedMotion();
  const common = reduceMotion ? {} : { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.96 } };
  return (
    <div className="process-visual" aria-hidden="true">
      <svg viewBox="0 0 560 500" className="process-svg">
        <defs>
          <pattern id="dot-pattern" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="#dec9b8" /></pattern>
          <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#3c3835" floodOpacity=".1" /></filter>
        </defs>
        <path d="M36 398C142 326 121 148 259 116c119-28 151 85 267 18" fill="none" stroke="#dec9b8" strokeWidth="2" strokeDasharray="5 10" />
        <motion.path d="M36 398C142 326 121 148 259 116c119-28 151 85 267 18" fill="none" stroke="#bc773f" strokeWidth="3" strokeLinecap="round" initial={false} animate={{ pathLength: (active + 1) / steps.length }} transition={{ duration: reduceMotion ? 0 : 0.65 }} />
        <circle cx="36" cy="398" r="10" fill="#3c3835" />
        <circle cx="526" cy="134" r="10" fill="#bc773f" />
        <rect x="0" y="0" width="560" height="500" fill="url(#dot-pattern)" opacity=".22" />
        <AnimatePresence mode="wait">
          <motion.g key={active} {...common} transition={{ duration: 0.35 }} style={{ transformOrigin: "280px 250px" }}>
            {active === 0 && <g filter="url(#soft-shadow)">
              <rect x="164" y="116" width="234" height="276" rx="8" fill="#faf6f3" stroke="#3c3835" strokeWidth="2" />
              <rect x="188" y="149" width="94" height="12" rx="6" fill="#bc773f" />
              {[199, 242, 285, 328].map((y) => <g key={y}><rect x="188" y={y} width="158" height="9" rx="4" fill="#dec9b8" /><rect x="188" y={y + 17} width="184" height="4" rx="2" fill="#3c3835" opacity=".22" /></g>)}
              <motion.path d="m383 120 75-43-19 82-19-18-17 20-8-10z" fill="#bc773f" initial={reduceMotion ? false : { x: -30, y: 30 }} animate={{ x: 0, y: 0 }} />
            </g>}
            {active === 1 && <g filter="url(#soft-shadow)">
              <rect x="170" y="105" width="220" height="280" rx="8" fill="#faf6f3" stroke="#3c3835" strokeWidth="2" />
              <rect x="195" y="137" width="115" height="12" rx="6" fill="#3c3835" />
              {[185, 222, 259].map((y) => <rect key={y} x="195" y={y} width="168" height="8" rx="4" fill="#dec9b8" />)}
              <motion.circle cx="330" cy="330" r="57" fill="#bc773f" initial={reduceMotion ? false : { rotate: -25, scale: .7 }} animate={{ rotate: 0, scale: 1 }} />
              <path d="m306 330 16 16 33-38" fill="none" stroke="#faf6f3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <motion.g animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "425px 155px" }}><circle cx="425" cy="155" r="42" fill="none" stroke="#3c3835" strokeWidth="3" strokeDasharray="5 7" /><circle cx="425" cy="113" r="7" fill="#bc773f" /></motion.g>
            </g>}
            {active === 2 && <g>
              <motion.g animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <path d="m116 272 300-135 48 24-96 61 57 63-29 16-88-42-58 34-22-9 35-54-118 66z" fill="#bc773f" stroke="#3c3835" strokeWidth="2" strokeLinejoin="round" />
              </motion.g>
              <path d="M108 366c89 33 199 21 301-54" fill="none" stroke="#3c3835" strokeWidth="2" strokeDasharray="6 9" />
              <rect x="162" y="311" width="109" height="79" rx="5" fill="#faf6f3" stroke="#3c3835" strokeWidth="2" transform="rotate(9 162 311)" />
              <path d="m170 322 48 35 47-25" fill="none" stroke="#bc773f" strokeWidth="3" />
            </g>}
            {active === 3 && <g filter="url(#soft-shadow)">
              <path d="M128 382h310M150 350h267M169 179h229M142 156h283l-141-72z" fill="#f5ece5" stroke="#3c3835" strokeWidth="3" strokeLinejoin="round" />
              {[184, 240, 296, 352, 408].map((x) => <path key={x} d={`M${x} 190v151`} stroke="#3c3835" strokeWidth="14" />)}
              <path d="M182 202v129M238 202v129M294 202v129M350 202v129M406 202v129" stroke="#faf6f3" strokeWidth="7" />
              <motion.circle cx="283" cy="137" r="19" fill="#bc773f" animate={reduceMotion ? undefined : { scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              <path d="M256 382v-63h54v63" fill="#3c3835" />
            </g>}
            {active === 4 && <g filter="url(#soft-shadow)">
              <rect x="146" y="127" width="196" height="252" rx="10" fill="#3c3835" />
              <rect x="164" y="147" width="160" height="213" rx="4" fill="#bc773f" />
              <circle cx="244" cy="220" r="44" fill="none" stroke="#faf6f3" strokeWidth="3" />
              <path d="M211 222c21-32 46-32 67 0M215 237c20-19 40-19 59 0" fill="none" stroke="#faf6f3" strokeWidth="3" />
              <motion.g initial={reduceMotion ? false : { y: -60, rotate: -12 }} animate={{ y: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 180, damping: 16 }}>
                <rect x="304" y="259" width="112" height="92" rx="9" fill="#faf6f3" stroke="#3c3835" strokeWidth="3" />
                <path d="m324 307 21 19 45-49" fill="none" stroke="#3c3835" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="342" y="215" width="37" height="59" rx="5" fill="#dec9b8" stroke="#3c3835" strokeWidth="3" />
              </motion.g>
            </g>}
          </motion.g>
        </AnimatePresence>
      </svg>
      <div className="visual-caption"><span>Step {active + 1} of {steps.length}</span><strong>{steps[active].short}</strong></div>
    </div>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  return (
    <section className="process-section section-pad" id="process">
      <Reveal className="process-title">
        <p className="eyebrow light">Your journey to Whiston House</p>
        <h2>From application to arrival,<br /><em>one clear step at a time.</em></h2>
        <p>All employment and travel documentation is handled through an online travel and recruitment agency in London. Select a step to explore the process.</p>
      </Reveal>
      <div className="process-grid">
        <Reveal className="process-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const selected = index === active;
            return (
              <button key={step.title} className={`process-step ${selected ? "selected" : ""}`} onClick={() => setActive(index)} aria-expanded={selected}>
                <span className="step-icon"><Icon size={20} /></span>
                <span className="step-copy"><span className="step-number">0{index + 1}</span><strong>{step.title}</strong><AnimatePresence initial={false}>{selected && <motion.span className="step-description" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}>{step.text}</motion.span>}</AnimatePresence></span>
                <span className="step-check">{index < active ? <Check size={17} /> : <ArrowRight size={17} />}</span>
              </button>
            );
          })}
          <div className="process-controls">
            <button onClick={() => setActive((active - 1 + steps.length) % steps.length)} aria-label="Previous step"><ArrowLeft /></button>
            <span>{active + 1} / {steps.length}</span>
            <button onClick={() => setActive((active + 1) % steps.length)} aria-label="Next step"><ArrowRight /></button>
          </div>
        </Reveal>
        <Reveal delay={.1}><VectorScene active={active} /></Reveal>
      </div>
    </section>
  );
}
