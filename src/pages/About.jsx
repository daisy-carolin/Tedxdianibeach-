import { PageHero } from "../components/ui.jsx";

export default function About() {
  return (
    <>
      <PageHero title="About Us" />
      <section className="dark">
        <div className="wrap narrow">
          <h2 className="red">What is TEDx?</h2>
          <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organised events that bring people together to share a TED-like experience.</p>
          <p>At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These events are branded TEDx, where x = independently organised TED event. The TED Conference provides general guidance for the TEDx program, but individual events are organised by local volunteers.</p>
          <p>The TEDx program started in 2009 and thousands of events are held every year around the world.</p>
        </div>
      </section>
      <section className="pink">
        <div className="wrap narrow">
          <h2 className="red">Our mission</h2>
          <p>Our mission is to create a high-impact, world-class TEDx experience that amplifies coastal Kenyan ideas and innovations, while fostering meaningful connections, collaboration and collective action within our team and community.</p>
          <p>Rooted in Diani Beach, we bring people together to explore the ideas, experiences and possibilities shaping the future of our coast and beyond.</p>
        </div>
      </section>
    </>
  );
}
