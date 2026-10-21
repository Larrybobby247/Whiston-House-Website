import { useState } from 'react'
import { Mail, MapPin, Phone, User, Loader2 } from 'lucide-react'
import { contact } from '../data/content.js'
import { Head } from './Sections.jsx'
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', phone: '', subject: '', message: '', ack: false, website: '' })
  const [err, setErr] = useState({}), [state, setState] = useState('idle'), [msg, setMsg] = useState('')
  const set = k => e => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })
  const validate = () => { const x = {}
    if (!v.name.trim()) x.name = 'Please enter your full name.'
    if (!v.email.trim()) x.email = 'Please enter your email address.'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) x.email = 'Please enter a valid email address.'
    if (v.phone && !/^[+\d\s()-]{7,20}$/.test(v.phone)) x.phone = 'Please enter a valid telephone number.'
    if (!v.subject.trim()) x.subject = 'Please enter a subject.'
    if (v.message.trim().length < 10) x.message = 'Please write at least 10 characters.'
    if (!v.ack) x.ack = 'Please acknowledge the privacy notice.'
    return x }
  const submit = async e => {
    e.preventDefault(); const x = validate(); setErr(x); if (Object.keys(x).length) return
    if (v.website) return // honeypot: bots fill this hidden field
    if (!ENDPOINT) { setState('error'); setMsg('This form is not connected yet. Set VITE_FORM_ENDPOINT to a form provider (e.g. Formspree) — see README. Your message was not sent.'); return }
    setState('loading')
    try { const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: v.name, email: v.email, phone: v.phone, subject: v.subject, message: v.message }) })
      if (!r.ok) throw new Error(); setState('success'); setMsg('Thank you — your enquiry has been sent.') }
    catch { setState('error'); setMsg('Delivery failed. Please try again later or use a verified contact channel.') }
  }
  const F = ({ k, label, type = 'text', req = true, area }) => { const P = area ? 'textarea' : 'input'; return (
    <div className="fld"><label htmlFor={k}>{label}{req ? <span aria-hidden="true"> *</span> : ' (optional)'}</label>
      <P id={k} type={area ? undefined : type} rows={area ? 5 : undefined} value={v[k]} onChange={set(k)} aria-required={req} aria-invalid={!!err[k]} aria-describedby={err[k] ? k + '-e' : undefined} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : k === 'phone' ? 'tel' : 'off'} />
      {err[k] && <small id={k + '-e'} className="err">{err[k]}</small>}</div>) }
  return (<section id="contact" className="sec white"><div className="wrap"><Head label="CONTACT" title="Contact Frank J. Whiston House" sub="For questions concerning the household or proposed employment arrangements, please use the verified contact details or submit an enquiry below." />
    <div className="two top">
      <aside className="cpanel reveal"><h3>Verified contact details</h3><p>Placeholders below must be replaced with independently verified details.</p>
        <ul><li><User size={18}/>{contact.rep}</li><li><Mail size={18}/>{contact.email}</li><li><Phone size={18}/>{contact.phone}</li><li><MapPin size={18}/>{contact.location}</li><li>Hours: {contact.hours}</li></ul></aside>
      <form className="card form reveal" onSubmit={submit} noValidate>
        <F k="name" label="Full name" /><F k="email" label="Email address" type="email" /><F k="phone" label="Telephone number" type="tel" req={false} /><F k="subject" label="Enquiry subject" /><F k="message" label="Message" area />
        <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} /></label></div>
        <label className="ack"><input type="checkbox" checked={v.ack} onChange={set('ack')} aria-invalid={!!err.ack} /> I acknowledge the privacy notice and will not include passport or bank details. *</label>
        {err.ack && <small className="err">{err.ack}</small>}
        <button className="btn btn-p" disabled={state === 'loading'}>{state === 'loading' ? <><Loader2 className="spin" size={16}/> Sending…</> : 'Send Enquiry'}</button>
        <p role="status" aria-live="polite" className={'status ' + state}>{msg}</p></form></div></div></section>)
}
