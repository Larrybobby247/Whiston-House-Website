import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function FAQ({ items, title = "Questions, answered.", intro = "A few useful details before you begin your application." }: { items: { q: string; a: string }[]; title?: string; intro?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq-section section-pad" id="faq">
      <div className="section-grid">
        <Reveal className="section-heading sticky-heading">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </Reveal>
        <Reveal className="faq-list" delay={0.08}>
          {items.map((item, index) => {
            const expanded = open === index;
            return (
              <div className={`faq-item ${expanded ? "is-open" : ""}`} key={item.q}>
                <button onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded} aria-controls={`faq-answer-${index}`}>
                  <span>{item.q}</span><motion.span animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.2 }}><Plus /></motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div id={`faq-answer-${index}`} className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }}>
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
