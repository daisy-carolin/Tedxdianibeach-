import { PARTNERS, SITE } from "../data/site.js";
import { PageHero, PartnerLogos } from "../components/ui.jsx";

export default function Sponsors() {
  return (
    <>
      <PageHero title="Sponsors" />
      <section className="light">
        <div className="wrap narrow">
          <h2 className="red">Become a TEDxDianiBeach partner</h2>
          <p>TEDxDianiBeach thrives on partnerships with organisations that believe in the power of local ideas. There are many ways to engage, from being an in-kind partner to providing funding. Talk to us about tailoring a bespoke package.</p>
          <div className="mailbox">
            <b>Let’s explore a partnership</b>
            <span>Get in touch to discuss ways your organisation can support ideas and community on Kenya’s coast.</span>
            <a href={`mailto:${SITE.partnerEmail}`}>{SITE.partnerEmail}</a>
          </div>
        </div>
      </section>
      <section className="light">
        <div className="wrap narrow center">
          <h2 className="red">Our partners</h2>
          <PartnerLogos items={PARTNERS} />
        </div>
      </section>
    </>
  );
}
