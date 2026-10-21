import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { nav } from '../data/content.js'
export const Logo = ({ light }) => (
  <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="12" fill={light ? '#fff' : '#17263C'}/><text x="24" y="31" textAnchor="middle" fontFamily="Playfair Display,Georgia,serif" fontSize="20" fontWeight="700" fill={light ? '#17263C' : '#fff'}>FW</text><path d="M12 37h24" stroke="#35D99A" strokeWidth="2.5" strokeLinecap="round"/></svg>)
export default function Navbar() {
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false), [active, setActive] = useState('home')
  useEffect(() => {
    const f = () => { setSolid(scrollY > 20); let cur = 'home'; nav.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 140) cur = id }); setActive(cur) }
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <header className={'nav' + (solid || open ? ' solid' : '')}>
      <div className="wrap nav-in">
        <a href="#home" className="brand" onClick={e => { e.preventDefault(); go('home') }}><Logo /><span>FRANK J. WHISTON HOUSE</span></a>
        <nav aria-label="Primary" id="menu" className={'links' + (open ? ' open' : '')}>
          {nav.map(([id, l]) => <a key={id} href={'#' + id} className={active === id ? 'act' : ''} aria-current={active === id ? 'true' : undefined} onClick={e => { e.preventDefault(); go(id) }}>{l}</a>)}
          <a href="#contact" className="btn btn-p sm" onClick={e => { e.preventDefault(); go('contact') }}>Contact Employer <ArrowRight size={16}/></a>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>)
}
