import { TEAM } from "../data/site.js";
import { Diamond, PageHero } from "../components/ui.jsx";

export default function Team() {
  return (
    <>
      <PageHero title="Organising Team" />
      <section className="pink">
        <div className="wrap teamgrid">
          {TEAM.map((m, i) => (
            <div className="member" key={i}>
              <Diamond src={m.photo} name={m.name} pos={m.pos} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
