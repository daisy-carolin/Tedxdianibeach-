import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { NAV, SITE } from "../data/site.js";

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" aria-label={`${SITE.name} home`}><img src="./logo.png" alt={SITE.name} /></Link>
        <nav className="desk" aria-label="Main">
          {NAV.map(([l, to]) => <NavLink key={to} to={to} end={to === "/"}>{l}</NavLink>)}
        </nav>
        <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </header>
      <div className={"scrim" + (open ? " on" : "")} onClick={() => setOpen(false)} />
      <aside className={"drawer" + (open ? " on" : "")} aria-hidden={!open}>
        <div className="drawer-top">
          <img src="./logo.png" alt={SITE.name} />
          <button className="x" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        </div>
        {NAV.map(([l, to]) => <NavLink key={to} to={to} end={to === "/"}>{l}</NavLink>)}
      </aside>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap fgrid">
        <div>
          <h4>About Us</h4>
          <p>Our mission is to create a high-impact, world-class TEDx experience that amplifies coastal Kenyan ideas and innovations, while fostering meaningful connections.</p>
          <h4>Contact Us</h4>
          <p><b>Location:</b> {SITE.location}<br /><b>Phone:</b> {SITE.phone}<br /><b>Email:</b> {SITE.email}</p>
          <div className="soc">
            <a href={`mailto:${SITE.email}`} aria-label="Email TEDxDianiBeach" className="email-link">Email us</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link><Link to="/sponsors">Sponsors</Link>
          <Link to="/speakers">Speakers</Link><Link to="/team">Our Team</Link><Link to="/past-events">Our Community</Link>
          <h4>Resources</h4>
          <Link to="/">Upcoming Event</Link><Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="wrap legal">
        <p>This independent TEDx event is operated under license from TED.</p>
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Layout() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <button className={"totop" + (show ? " on" : "")} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </>
  );
}
