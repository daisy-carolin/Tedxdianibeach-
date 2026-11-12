import { EVENT, SPEAKERS } from "../data/site.js";
import { Diamond, PageHero } from "../components/ui.jsx";

export default function Speakers() {
  return (
    <>
      <PageHero title="TEDxDianiBeach Program" sub={EVENT.dateLabel} />
      <section className="pink">
        <div className="wrap narrow center">
          <p><strong>Theme:</strong> {EVENT.title}</p>
        </div>
        <div className="wrap spklist">
          {SPEAKERS.map((s, i) => (
            <article className="spkcard" key={i}>
              <Diamond src={s.photo} name={s.name} pos={s.pos} />
              <div className="spkbio">
                <h3>{s.name}</h3>
                {s.talk && <h4>{s.talk}</h4>}
                {s.bio && <p>{s.bio}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
