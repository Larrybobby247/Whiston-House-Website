import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { gallery } from '../data/content.js'
import { Head, Ph } from './Sections.jsx'
const Tile = ({ g, full }) => g.src ? <img src={g.src} alt={g.alt || g.t} loading="lazy" /> : <Ph kind={g.t} style={{ background: g.c }} note={full ? 'Illustrative placeholder — add an authorised photograph' : ''} />
export default function Gallery() {
  const [i, setI] = useState(null), touch = useRef(0), n = gallery.length
  const step = d => setI(v => (v + d + n) % n)
  useEffect(() => {
    if (i === null) return
    const k = e => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    document.body.style.overflow = 'hidden'; addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', k) }
  }, [i])
  return (<section id="gallery" className="sec beige"><div className="wrap"><Head label="GALLERY" title="Home Interiors & Living Spaces" sub="Explore selected images of the home environment and household spaces. Images shown are illustrative unless captioned otherwise; no family photographs are shown without authorisation." />
    <div className="gal">{gallery.map((g, k) => <button key={g.t} className={'gt' + (g.big ? ' big' : '') + (g.tall ? ' tall' : '')} onClick={() => setI(k)} aria-label={'Open image: ' + g.t}><Tile g={g} /><span className="cap">{g.t}</span></button>)}</div></div>
    {i !== null && <div className="lb" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setI(null)} onTouchStart={e => touch.current = e.touches[0].clientX} onTouchEnd={e => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1) }}>
      <button className="lbx" aria-label="Close" onClick={() => setI(null)} autoFocus><X /></button>
      <button className="lbp" aria-label="Previous image" onClick={e => { e.stopPropagation(); step(-1) }}><ChevronLeft /></button>
      <figure onClick={e => e.stopPropagation()}><div className="lbi"><Tile g={gallery[i]} full /></div><figcaption>{gallery[i].t} · {i + 1}/{n}</figcaption></figure>
      <button className="lbn" aria-label="Next image" onClick={e => { e.stopPropagation(); step(1) }}><ChevronRight /></button></div>}
  </section>)
}
