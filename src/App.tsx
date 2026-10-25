import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import RolePage from "./pages/RolePage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -72 } });
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Whiston House · Private Household Opportunities",
      "/nanny": "Nanny Opportunity · Whiston House",
      "/housekeeper": "Housekeeper Opportunity · Whiston House",
      "/driver": "Driver Opportunity · Whiston House",
    };
    document.title = titles[location.pathname] || titles["/"];
    const timer = window.setTimeout(() => {
      if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: "instant" });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25, ease: "easeOut" }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/nanny" element={<RolePage roleKey="nanny" />} />
            <Route path="/housekeeper" element={<RolePage roleKey="housekeeper" />} />
            <Route path="/driver" element={<RolePage roleKey="driver" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
