import { GALLERY } from "../data/site.js";
import { PageHero, PhotoGallery } from "../components/ui.jsx";

const IMPACT = [
  "A platform for ideas and perspectives from Kenya's coast",
  "A welcoming space for conversation and connection",
  "An invitation to turn inspiration into positive action",
];

export default function PastEvents() {
  return (
    <>
      <PageHero title="Our Community" />
      <section className="pink">
        <div className="wrap">
          <PhotoGallery items={GALLERY} className="pastgrid" />
        </div>
      </section>
      <section className="dark">
        <div className="wrap narrow">
          <h2 className="red">Ideas bring us together</h2>
          <p>TEDxDianiBeach is shaped by the people who share ideas, ask questions and make space for new perspectives. Our community brings together voices from Diani, Kwale County and beyond.</p>
        </div>
      </section>
      <section className="dark impact">
        <div className="wrap narrow">
          <h2 className="red">Beyond the stage</h2>
          <p>Every gathering is an opportunity to listen, connect and carry a good idea into everyday life.</p>
          <ul className="checks">{IMPACT.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
