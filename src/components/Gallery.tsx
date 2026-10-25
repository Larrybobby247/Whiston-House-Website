import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { gallery } from "../data";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  const move = (direction: number) => setActive((current) => current === null ? null : (current + direction + gallery.length) % gallery.length);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="gallery-section section-pad" id="gallery">
      <Reveal className="gallery-heading">
        <p className="eyebrow">Life around the home</p>
        <h2>Work that matters in<br /><em>everyday moments.</em></h2>
        <p>Eight glimpses of the care, routines and journeys at the heart of these roles. Select any image to take a closer look.</p>
      </Reveal>
      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <motion.button
            key={image.src}
            className={`gallery-item gallery-item-${index + 1}`}
            onClick={() => setActive(index)}
            aria-label={`Open image: ${image.label}`}
            initial={{ opacity: 1, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
            transition={{ duration: .65, delay: (index % 4) * .05 }}
          >
            <span className="gallery-image"><img src={image.src} alt={image.alt} loading="lazy" /></span>
            <span className="gallery-caption"><span>0{index + 1}</span><strong>{image.label}</strong><Expand size={17} /></span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[active].label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && close()}>
            <button className="lightbox-close" onClick={close} aria-label="Close gallery"><X /></button>
            <button className="lightbox-prev" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft /></button>
            <motion.figure key={active} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .25 }}>
              <img src={gallery[active].src} alt={gallery[active].alt} />
              <figcaption><span>{gallery[active].label}</span><span>{active + 1} / {gallery.length}</span></figcaption>
            </motion.figure>
            <button className="lightbox-next" onClick={() => move(1)} aria-label="Next image"><ArrowRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
