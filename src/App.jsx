import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Venues from "./components/Venues";
import Foods from "./components/Foods";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import GoogleLanding from "./components/GoogleLanding";

export default function App() {
  return (
    <>
      <ScrollToTop />
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<GoogleLanding />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about-bells-n-brides" element={<About />} />
          <Route path="/wedding-planning-services-bangalore" element={<Services />} />
          <Route path="/portfolio-wedding-planners-bangalore" element={<Portfolio />} />
          <Route path="/wedding-venues-in-bangalore" element={<Venues />} />
          <Route path="/wedding-caterers-bangalore" element={<Foods />} />
          <Route path="/contact-bells-n-brides" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
