import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, Clock3, HeartHandshake, Home as HomeIcon, ShieldPlus, UtensilsCrossed, WalletCards } from "lucide-react";
import { Link } from "react-router";
import { ApplicationForm } from "../components/ApplicationForm";
import { FAQ } from "../components/FAQ";
import { Gallery } from "../components/Gallery";
import { Process } from "../components/Process";
import { Reveal } from "../components/Reveal";
import { homeFaqs, roles, salary, sharedBenefits, sharedLeave } from "../data";

export default function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="home-hero">
        <svg className="hero-line" viewBox="0 0 900 700" aria-hidden="true"><motion.path d="M-45 580C169 480 94 191 354 173c237-16 170 304 466 164" fill="none" stroke="#dec9b8" strokeWidth="1.5" initial={reduceMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: "easeOut" }} /></svg>
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>Whiston House · Private household recruitment</motion.p>
          <h1 aria-label="A home runs on people who care.">
            {["A home runs on", "people who care."].map((line, index) => <span className="hero-title-line" key={line}>{line.split(" ").map((word, wordIndex) => <motion.span key={word} initial={reduceMotion ? false : { opacity: 0, y: 35, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .72, delay: .18 + index * .14 + wordIndex * .045, ease: [0.16, 1, 0.3, 1] }}>{word}&nbsp;</motion.span>)}</span>)}
          </h1>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65, duration: .6 }}>Kind, reliable and experienced people are invited to join a busy family household as a <strong>nanny</strong>, <strong>housekeeper</strong> or <strong>driver</strong>.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .78 }}>
            <a href="#opportunities" className="primary-button">Explore the roles <ArrowRight /></a>
            <a href="#apply" className="text-link">Go to the application <ArrowUpRight /></a>
          </motion.div>
        </div>
        <motion.div className="hero-media" initial={reduceMotion ? false : { clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1, delay: .25, ease: [0.16, 1, 0.3, 1] }}>
          <motion.img src="/images/IMG-20261024-WAO009.jpg" alt="A family enjoying time together in their kitchen" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.25, delay: .25 }} />
          <div className="hero-photo-note"><HeartHandshake /><span>Respect, care and a place<br />on the household team.</span></div>
        </motion.div>
        <a href="#welcome" className="scroll-cue" aria-label="Scroll to welcome section"><span>Discover</span><ArrowDown /></a>
      </section>

      <section className="about-home section-pad" aria-labelledby="about-home-title">
        <Reveal className="about-home-copy">
          <p className="eyebrow">About the home</p>
          <h2 id="about-home-title">Frank Whiston House.</h2>
          <p>Frank Whiston House is a private family household built around trust, care and dependable daily routines. The home welcomes kind, honest and experienced people who take pride in supporting children, shared spaces and family journeys.</p>
          <p>Each position is part of one respectful household team, with clear working hours, comfortable accommodation and time set aside to rest.</p>
          <div className="about-home-points" aria-label="Household values">
            <span>Respect</span>
            <span>Care</span>
            <span>Trust</span>
          </div>
        </Reveal>
        <div className="about-home-media" aria-label="Life at Frank Whiston House">
          <Reveal className="about-photo about-photo-main">
            <img src="/images/IMG-20261024-WA0011.jpg" alt="A family walking towards their home" loading="lazy" />
          </Reveal>
          <Reveal className="about-photo about-photo-small" delay={.12}>
            <img src="/images/file_00000000a058824684f59b72aefc6af4.png" alt="A well-kept family living room" loading="lazy" />
          </Reveal>
          <Reveal className="about-home-note" delay={.2}>
            <span>A warm, organised home where everyone is treated with dignity.</span>
          </Reveal>
        </div>
      </section>

      <section className="welcome-section section-pad" id="welcome">
        <Reveal className="welcome-lead"><p className="eyebrow">A valued part of the family</p><h2>You have nothing<br />to worry about.</h2></Reveal>
        <Reveal className="welcome-copy" delay={.1}>
          <p>I want to assure you that you will be treated with respect and care while working with my family. I am confident that you will have a positive experience and will not regret accepting this opportunity.</p>
          <p>I hope I can count on your honesty, dedication and commitment as a valued member of my family household team.</p>
          <span className="signature">Thank you, and I look forward to working with you.</span>
        </Reveal>
      </section>

      <section className="roles-section section-pad" id="opportunities">
        <Reveal className="roles-heading"><p className="eyebrow">Three ways to make a difference</p><h2>Find your place<br /><em>at Whiston House.</em></h2><p>Each role has its own rhythm and responsibilities. Every position includes the same salary, paid leave and core household benefits.</p></Reveal>
        <div className="role-list">
          {Object.values(roles).map((role, index) => (
            <Reveal key={role.key} className={`role-card role-card-${index + 1}`}>
              <Link to={role.path}>
                <div className="role-image"><img src={role.image} alt={`${role.name} opportunity`} loading="lazy" /><span className="role-index">0{index + 1}</span></div>
                <div className="role-content">
                  <div><p className="eyebrow">Private household role</p><h3>{role.name}</h3></div>
                  <p>{role.short}</p>
                  <div className="role-meta"><span><Clock3 size={17} />{role.hours}</span><span><WalletCards size={17} />{salary}</span></div>
                  <span className="role-link">View the complete role <ArrowUpRight /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="terms-section section-pad">
        <Reveal className="salary-panel">
          <p className="eyebrow light">Salary · All categories</p>
          <div className="salary-figure"><span>£</span><strong>2,000</strong><small>every month</small></div>
          <p>Plus <strong>£50 pocket money every weekend.</strong></p>
          <span className="salary-note">Taking time to find the best for my family.</span>
        </Reveal>
        <div className="terms-details">
          <Reveal><p className="eyebrow">Leave entitlements · With full pay</p><div className="leave-grid">{sharedLeave.map((item, index) => <div key={item}><CalendarDays /><strong>{index === 0 ? "Vacation" : "Sick leave"}</strong><span>3 weeks</span><small>With full pay</small></div>)}</div></Reveal>
          <Reveal delay={.08}><p className="eyebrow">Benefits across every role</p><div className="benefit-list">{sharedBenefits.map((benefit, index) => { const icons = [HomeIcon, UtensilsCrossed, ShieldPlus]; const Icon = icons[index]; return <div key={benefit}><Icon /><span>{benefit}</span><Check size={18} /></div>; })}</div></Reveal>
          <Reveal delay={.12} className="contract-note"><strong>2–3 year employment contract</strong><p>Once documentation has commenced and the application is approved, the employment agreement will be finalized. You may choose to renew at the end of the contract period.</p></Reveal>
        </div>
      </section>

      <Gallery />
      <Process />
      <FAQ items={homeFaqs} title="The essentials, at a glance." />
      <ApplicationForm />
    </>
  );
}
