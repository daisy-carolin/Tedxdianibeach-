import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Speakers from "./pages/Speakers.jsx";
import Team from "./pages/Team.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import PastEvents from "./pages/PastEvents.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="team" element={<Team />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="past-events" element={<PastEvents />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
