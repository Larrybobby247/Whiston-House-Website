import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, Clock3, HeartHandshake, Home as HomeIcon, ShieldPlus, UtensilsCrossed, WalletCards } from "lucide-react";
import { Navigate, Link } from "react-router";
import { ApplicationForm } from "../components/ApplicationForm";
import { FAQ } from "../components/FAQ";
import { Process } from "../components/Process";
import { Reveal } from "../components/Reveal";
import { roleFaqs, roles, salary, sharedBenefits, sharedLeave, type RoleKey } from "../data";

export default function RolePage({ roleKey }: { roleKey: RoleKey }) {
  const role = roles[roleKey];
  const reduceMotion = useReducedMotion();
  if (!role) return <Navigate to="/" replace />;
  return (
    <>
      <section className="role-hero">
        <div className="role-hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
            <Link to="/#opportunities" className="back-link">All opportunities <ArrowUpRight size={15} /></Link>
            <p className="eyebrow">Now welcoming applications</p>
            <h1>{role.name}<span>.</span></h1>
            <p className="role-hero-short">{role.short}</p>
            <a href="#apply" className="primary-button">Apply as {role.name.toLowerCase()} <ArrowRight /></a>
          </motion.div>
          <motion.div className="role-hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
            <span><WalletCards />{salary}</span><span><Clock3 />{role.hours}</span>
          </motion.div>
        </div>
        <motion.div className="role-hero-image" initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }}>
          <motion.img src={role.image} alt={`${role.name} at work`} initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }} />
          <span className="role-image-label">Whiston House · {role.name}</span>
        </motion.div>
        <a href="#role-details" className="scroll-cue role-scroll"><span>The role</span><ArrowDown /></a>
      </section>

      <section className="role-intro section-pad" id="role-details">
        <Reveal className="role-intro-title"><p className="eyebrow">The opportunity</p><h2>{role.detailTitle}</h2><div className="hand-drawn-line"><svg viewBox="0 0 240 18"><motion.path d="M2 13c70-15 138 6 236-8" fill="none" stroke="#bc773f" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: .8 }} /></svg></div></Reveal>
        <Reveal className="role-intro-copy" delay={.08}>{role.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p>{role.detail}</p></Reveal>
      </section>

      <section className="duties-section section-pad">
        <Reveal className="duties-heading"><p className="eyebrow light">Duties & responsibilities</p><h2>What you’ll<br /><em>take care of.</em></h2><p>Honesty, dedication and commitment are at the heart of this position in my household team.</p></Reveal>
        <div className="duties-list">
          {role.duties.map((duty, index) => <Reveal key={duty} className="duty-item" delay={index * .035}><span>0{index + 1}</span><p>{duty}</p><Check /></Reveal>)}
        </div>
      </section>

      <section className="role-terms section-pad">
        <Reveal className="role-terms-heading"><p className="eyebrow">Hours, salary & benefits</p><h2>Everything clear,<br /><em>from the beginning.</em></h2></Reveal>
        <div className="role-terms-grid">
          <Reveal className="hours-panel"><Clock3 /><p className="eyebrow">Working hours</p><h3>{role.hours.split(" · ")[0]}</h3><span>Sunday: Off day</span></Reveal>
          <Reveal className="pay-panel" delay={.05}><WalletCards /><p className="eyebrow">Salary</p><h3>£2,000 <small>/ month</small></h3><span>+ £50 pocket money every weekend</span></Reveal>
          <Reveal className="leave-panel" delay={.1}><CalendarDays /><p className="eyebrow">Paid leave</p>{sharedLeave.map((item) => <span key={item}><Check size={16} />{item}</span>)}</Reveal>
        </div>
        <Reveal className="role-benefits">
          <p className="eyebrow">Your benefits</p>
          <div>{sharedBenefits.map((benefit, index) => { const icons = [HomeIcon, UtensilsCrossed, ShieldPlus]; const Icon = icons[index]; return <span key={benefit}><Icon />{benefit}</span>; })}</div>
          <p><HeartHandshake /> You will be well cared for and treated with respect while working with my family.</p>
        </Reveal>
      </section>

      <section className="next-role section-pad">
        <Reveal><p className="eyebrow">Explore the household team</p><h2>Another role may be<br />right for someone you know.</h2></Reveal>
        <div>{Object.values(roles).filter((item) => item.key !== roleKey).map((item) => <Link key={item.key} to={item.path}><span>{item.name}</span><ArrowUpRight /></Link>)}</div>
      </section>

      <Process />
      <FAQ items={roleFaqs[roleKey]} title={`About the ${role.name.toLowerCase()} role.`} intro={`Focused answers about the ${role.name.toLowerCase()} position, its routine and employment terms.`} />
      <ApplicationForm selectedRole={roleKey} />
    </>
  );
}
