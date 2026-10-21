import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/content.js'
import { Head } from './Sections.jsx'
export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (<section id="faq" className="sec"><div className="wrap narrow"><Head label="FAQ" title="Frequently Asked Questions" sub="Find answers to common questions about the household and proposed employment arrangements." />
    {faqs.map(([q, a], i) => { const o = open === i; return (
      <div key={q} className={'acc reveal' + (o ? ' open' : '')}>
        <h3><button id={'q' + i} aria-expanded={o} aria-controls={'a' + i} onClick={() => setOpen(o ? -1 : i)}>{q}{o ? <Minus size={18}/> : <Plus size={18}/>}</button></h3>
        <div id={'a' + i} role="region" aria-labelledby={'q' + i} className="panel"><div><p>{a}</p></div></div></div>) })}</div></section>)
}
