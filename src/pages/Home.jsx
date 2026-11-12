import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { EVENT, GALLERY, PARTNERS, SITE } from "../data/site.js";
import { PartnerLogos, PhotoGallery } from "../components/ui.jsx";
import { useCountdown } from "../useCountdown.js";

export default function Home() {
  const navigate = useNavigate();
  const countdown = useCountdown(EVENT.start, EVENT.end);

  useEffect(() => {
    if (countdown === "Thank you for joining us") {
      navigate("/past-events", { replace: true });
    }
  }, [countdown, navigate]);

  return (
    <>
      <section className="hero">
        <div className="hero-ph">
          <p className="kick">{EVENT.dateLabel} · Diani Sea Resort</p>
          <h1>{EVENT.title}</h1>
          <p className="count">{countdown}</p>
          <div className="cta">
            <Link className="btn" to="/contact">Ask about tickets · {EVENT.price}</Link>
            <Link className="btn ghost" to="/about">Discover TEDxDianiBeach</Link>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap narrow">
          <h2 className="red">About TEDxDianiBeach</h2>
          <p>TEDxDianiBeach is one of 2500+ local TED affiliates across the globe. We are a volunteer-led organisation bringing the people of Diani, Kwale County and beyond together around ideas worth spreading.</p>
          <p>Our events combine live speakers and TED Talks video to spark deep discussion and connection, all rooted in the spirit and stories of Kenya’s coast.</p>
          <Link className="btn" to="/about">Read our story</Link>
        </div>
      </section>

      <section className="dark tagline">
        <div className="wrap narrow">
          <h2>Ideas begin with people. Meet the <em>voices and team behind TEDxDianiBeach.</em></h2>
        </div>
        <PhotoGallery items={GALLERY} className="gallery" />
      </section>

      <section className="pink">
        <div className="wrap upgrid">
          <img className="poster" src={EVENT.poster} alt={`${SITE.name} poster: ${EVENT.title}, ${EVENT.dateLabel}, Diani Sea Resort`} />
          <div>
            <h2 className="upcoming">Upcoming Event</h2>
            <article className="ecard">
              <h3>{EVENT.title}</h3>
              <p className="meta">{countdown}</p>
              <dl className="details">
                <div><dt>Date</dt><dd>{EVENT.dateLabel}</dd></div>
                <div><dt>Time</dt><dd>{EVENT.time}</dd></div>
                <div><dt>Venue</dt><dd>{EVENT.venue}</dd></div>
                <div><dt>Entry</dt><dd>{EVENT.price}</dd></div>
                <div><dt>Pay via</dt><dd>{EVENT.payMethod}: {EVENT.payNumber}</dd></div>
              </dl>
              <p>{EVENT.blurb}</p>
              {SITE.ticketUrl
                ? <a className="btn" href={SITE.ticketUrl} target="_blank" rel="noreferrer">Get tickets</a>
                : <Link className="btn" to="/contact">Ask about tickets</Link>}
            </article>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="wrap narrow center">
          <h2 className="red">Our partners</h2>
          <PartnerLogos items={PARTNERS} />
          <p><Link to="/sponsors">Become a partner →</Link></p>
        </div>
      </section>

      <section className="redpanel">
        <div className="wrap narrow">
          <h2>Discover TEDxDianiBeach: the power of ideas by the sea</h2>
          <p>Join us for an immersive experience at our upcoming event, where we’ll explore, celebrate and redefine what lies ahead.</p>
          <h3>Why TEDxDianiBeach?</h3>
          <p>Our main stage goes beyond simply listening to talks. It’s a catalyst for connection, collaboration and action, grounded in the culture and community of the Kenyan coast.</p>
          <Link className="btn light" to="/speakers">Meet the speakers</Link>
        </div>
      </section>
    </>
  );
}
