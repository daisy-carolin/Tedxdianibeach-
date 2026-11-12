import { TEAM } from "../data/site.js";
import { Diamond, PageHero } from "../components/ui.jsx";

export default function Team() {
  const featuredTeam = TEAM.slice(0, 2);
  const remainingTeam = TEAM.slice(2);

  const renderMember = (member) => (
    <article className="member" key={member.name}>
      <Diamond src={member.photo} name={member.name} pos={member.pos} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      {member.bio && <p className="member-bio">{member.bio}</p>}
    </article>
  );

  return (
    <>
      <PageHero title="Organising Team" />
      <section className="pink">
        <div className="wrap">
          <div className="teamgrid teamgrid-featured">
            {featuredTeam.map(renderMember)}
          </div>
          <div className="teamgrid teamgrid-others">
            {remainingTeam.map(renderMember)}
          </div>
        </div>
      </section>
    </>
  );
}
