import { SPEAKERS } from "../data/site.js";
import { Diamond, PageHero } from "../components/ui.jsx";

export default function Speakers() {
  return (
    <>
      <PageHero title="Speakers" />
      <section className="pink">
        <div className="wrap narrow center">
          <p>Meet the voices of TEDxDianiBeach. More speakers and talk titles will be added as they are confirmed.</p>
        </div>
        <div className="wrap spklist">
          {SPEAKERS.map((s, i) => (
            <article className="spkcard" key={i}>
              <Diamond src={s.photo} name={s.name} pos={s.pos} />
              <div className="spkbio">
                <h3>{s.name}</h3>
                {s.talk && <h4>{s.talk}</h4>}
                <p>{s.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
