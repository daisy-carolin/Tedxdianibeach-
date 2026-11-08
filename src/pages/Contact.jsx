import { useState } from "react";
import { SITE } from "../data/site.js";
import { PageHero } from "../components/ui.jsx";

export default function Contact() {
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = e.target;
    const body = `Name: ${f.fullname.value}\nEmail: ${f.email.value}\n\n${f.msg.value}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("TEDxDianiBeach enquiry")}&body=${encodeURIComponent(body)}`;
    setDone(true); f.reset();
  };
  return (
    <>
      <PageHero title="Contact Us" />
      <section className="light">
        <div className="wrap narrow">
          <p><b>Location:</b> {SITE.location}<br /><b>Phone:</b> {SITE.phone}<br /><b>Email:</b> {SITE.email}</p>
          <form onSubmit={submit}>
            <label>Full name<input name="fullname" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Message<textarea name="msg" required /></label>
            <button className="btn" type="submit">Send message</button>
            <p className="ok" role="status">{done ? "Thank you. Your email app should open so you can send this to us." : ""}</p>
          </form>
          <p className="note">Speaker applications, volunteering and ticket waiting-list requests also come through this form.</p>
        </div>
      </section>
    </>
  );
}
