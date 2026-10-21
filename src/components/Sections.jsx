import { ArrowRight, Home, ShieldCheck, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react'
import { Logo } from './Navbar.jsx'
import { household, facts, duties, terms, values, accom, nav, contact } from '../data/content.js'
const go = id => e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
export const Btn = ({ to, children, kind = 'p' }) => <a href={'#' + to} onClick={go(to)} className={'btn btn-' + kind}>{children} <ArrowRight size={16}/></a>
export const Head = ({ label, title, sub, light }) => (<div className={'head reveal' + (light ? ' light' : '')}><p className="label">{label}</p><h2>{title}</h2>{sub && <p className="sub">{sub}</p>}</div>)
export const Ph = ({ kind = 'living', note = 'Illustrative placeholder — replace with an authorised photograph', style }) => (
  <div className="ph" style={style} role="img" aria-label={'Illustrative residential artwork: ' + kind}>
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="400" height="300" fill="none"/><g fill="none" stroke="#246B55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".8"><path d="M60 150 200 60l140 90"/><path d="M85 135v110h230V135"/><rect x="170" y="175" width="60" height="70" rx="4"/><rect x="105" y="165" width="45" height="40" rx="3"/><rect x="250" y="165" width="45" height="40" rx="3"/><path d="M30 245h340"/><path d="M335 245v-30M335 215c-14-4-18-18-12-30 12 4 16 18 12 30z"/></g></svg>
    <small>{note}</small></div>)
export const Hero = () => (
  <section id="home" className="hero"><div className="wrap hero-in">
    <div className="reveal"><p className="label">PRIVATE HOUSEHOLD PROFILE</p><h1>A Well-Managed Home, Built on Trust, Respect &amp; Comfort.</h1>
      <p className="lead">Discover the values, living environment, and household arrangements associated with Frank J. Whiston House, presented with an emphasis on professionalism, comfort, and clear communication.</p>
      <div className="row"><Btn to="household">Explore Our Household</Btn><Btn to="gallery" kind="s">View the Gallery</Btn></div></div>
    <div className="hero-img reveal"><Ph /><div className="frame" aria-hidden="true"/><div className="float"><span className="ic"><Home size={20}/></span><b>Comfort • Respect • Professionalism</b></div></div>
  </div></section>)
export const About = () => (
  <section id="about" className="sec white"><div className="wrap two">
    <div className="reveal"><Ph kind="interior" /></div>
    <div className="reveal"><p className="label">ABOUT THE EMPLOYER</p><h2>About Frank J. Whiston</h2>
      <p>Frank J. Whiston House is presented as a private household profile, providing an overview of the home environment, household priorities, and proposed domestic employment arrangements.</p>
      <p>The information presented here is intended to communicate expectations clearly, with an emphasis on professionalism, mutual respect, responsible household management, and privacy.</p>
      <div className="chips">{[[ShieldCheck,'Professionalism'],[Home,'Respect'],[CheckCircle2,'Organisation']].map(([I, t]) => <span key={t}><i className="ic"><I size={18}/></i>{t}</span>)}</div>
      <Btn to="contact" kind="s">Get in touch</Btn></div>
  </div></section>)
export const Household = () => (
  <section id="household" className="sec"><div className="wrap"><Head label="OUR HOUSEHOLD" title="A Comfortable and Organised Home" sub="A welcoming household depends on thoughtful routines, clear expectations, and respect for everyone who shares the space." />
    <div className="grid3">{household.map(([I, t, d]) => <article key={t} className="card reveal"><span className="ic"><I size={22}/></span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>)
export const Employment = () => (
  <section id="employment" className="sec beige"><div className="wrap"><Head label="EMPLOYMENT" title="Housekeeping Employment Information" sub="An overview of the proposed role, household responsibilities, working arrangements, and employment terms. All details should be confirmed in the final written agreement." />
    <div className="grid3">{facts.map(([I, t, d]) => <article key={t} className="card reveal"><span className="ic"><I size={22}/></span><p className="label sm">{t}</p><p>{d}</p></article>)}</div>
    <div className="two top">
      <div className="card reveal"><h3 className="serif">Proposed Household Responsibilities</h3><ul className="check">{duties.map(d => <li key={d}><CheckCircle2 size={18}/>{d}</li>)}</ul><p className="note">Only responsibilities confirmed by the employer should apply.</p></div>
      <div className="card reveal"><h3 className="serif">Employment Terms &amp; Clarifications</h3><ul className="terms">{terms.map(d => <li key={d}><span>{d}</span><em>To be confirmed</em></li>)}</ul><p className="note">This website does not confirm the authenticity of the offer, the employer’s identity, or eligibility for a visa.</p></div></div>
    <div className="center"><Btn to="contact">Ask About Employment Details</Btn></div></div></section>)
export const Accommodation = () => (
  <section id="accommodation" className="sec white"><div className="wrap two">
    <div className="reveal"><Ph kind="bedroom" /></div>
    <div><Head label="LIVING ARRANGEMENTS" title="Accommodation & Living Arrangements" sub="Accommodation arrangements should be clearly agreed before employment begins. Where a private room is provided, the relevant terms should explain the facilities available, privacy arrangements, shared spaces, and applicable household expectations." />
      {accom.map(([I, t, d]) => <article key={t} className="card row-card reveal"><span className="ic"><I size={22}/></span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>)
export const Values = () => (
  <section id="values" className="sec navy"><div className="wrap"><Head light label="OUR VALUES" title="The Values That Guide Our Household" sub="Clear expectations and respectful communication help create a positive household environment." />
    <div className="grid4">{values.map(([I, t, d]) => <article key={t} className="vcard reveal"><span className="ic dark"><I size={22}/></span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>)
export const Location = () => (
  <section id="location" className="sec"><div className="wrap two">
    <div className="reveal"><p className="label">LOCATION</p><h2>Find Out More About Our Location</h2><p>General location: Milton Keynes, United Kingdom — <b>to be confirmed</b>. The precise residential address is not published on this website. [Area description to be added only if verified.]</p></div>
    <div className="pin reveal" aria-hidden="true"><MapPin size={64} strokeWidth={1.4}/></div></div></section>)
export const FinalCTA = () => (
  <section className="sec navy cta"><div className="wrap center reveal"><h2>Clear Communication Starts Here.</h2><p className="sub">For enquiries about household information or proposed employment arrangements, please get in touch through a verified communication channel.</p><Btn to="contact">Contact Us</Btn></div></section>)
export const Footer = () => (
  <footer className="foot"><div className="wrap fgrid">
    <div><div className="brand"><Logo light /><span>FRANK J. WHISTON HOUSE</span></div><p>A private household profile presenting household information, values, and proposed domestic employment arrangements.</p></div>
    <div><h4>Quick links</h4>{nav.map(([id, l]) => <a key={id} href={'#' + id} onClick={go(id)}>{l}</a>)}</div>
    <div><h4>Information</h4><a href="#privacy" onClick={go('privacy')}>Privacy Policy</a><a href="#privacy" onClick={go('privacy')}>Cookie Policy</a><a href="#terms" onClick={go('terms')}>Website Terms</a>
      <p className="small"><Mail size={14}/> {contact.email}<br/><Phone size={14}/> {contact.phone}</p></div></div>
    <div className="wrap legal"><details id="privacy"><summary>Privacy &amp; Cookie notice</summary><p>Enquiries submitted through the form (name, email, optional phone, subject, message) are sent to the configured form provider and used only to reply. Do not send passport numbers, bank details or other sensitive data. This site sets no tracking cookies. <b>[Replace with a policy reviewed for your actual processing, controller details and provider.]</b></p></details>
      <details id="terms"><summary>Website Terms</summary><p>This website is informational only. It does not constitute a job offer, verify any offer or identity, or guarantee employment or a visa. Never pay fees to unverified parties. <b>[Replace with reviewed terms.]</b></p></details></div>
    <div className="wrap copy">Copyright © 2026 Frank J. Whiston House. All rights reserved.</div></footer>)
