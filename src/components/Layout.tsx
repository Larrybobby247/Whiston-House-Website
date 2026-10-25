import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type PropsWithChildren } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { roles } from "../data";

const nav = [{ name: "Home", path: "/" }, ...Object.values(roles).map(({ name, path }) => ({ name, path }))];

export function HouseMark({ light = false }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className="house-mark" aria-hidden="true">
      <motion.path
        d="M7 23.5 24 9l17 14.5M12 20v19h24V20M20 39V27h8v12"
        fill="none"
        stroke={light ? "#faf6f3" : "currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </svg>
  );
}

export function Layout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="topline">
        <span>Private household opportunities</span>
        <span>United Kingdom · 2–3 year contracts</span>
      </div>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Whiston House home">
          <HouseMark />
          <span><strong>Whiston</strong><small>HOUSE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === "/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <a href="#apply" className="header-apply">Apply now <ArrowUpRight size={17} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }}>
            <nav aria-label="Mobile navigation">
              {nav.map((item, index) => (
                <motion.div key={item.path} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                  <NavLink to={item.path} end={item.path === "/"}>{item.name}<ArrowUpRight /></NavLink>
                </motion.div>
              ))}
              <a href="#apply" onClick={() => setOpen(false)} className="mobile-apply">Start your application</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand footer-brand"><HouseMark light /><span><strong>Whiston</strong><small>HOUSE</small></span></Link>
            <p>Kindness, honesty and dedication — valued as part of a family household team.</p>
          </div>
          <div className="footer-nav">
            <p className="footer-label">Opportunities</p>
            {Object.values(roles).map((role) => <Link key={role.key} to={role.path}>{role.name}<ArrowUpRight size={16} /></Link>)}
          </div>
          <div className="footer-cta">
            <p className="footer-label">Ready when you are</p>
            <h2>I look forward<br />to working with you.</h2>
            <a href="#apply">Complete the application form <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Whiston House</span><span>Private household recruitment</span></div>
      </footer>
    </div>
  );
}
