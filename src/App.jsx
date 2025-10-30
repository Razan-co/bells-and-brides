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
        {/* ✅ When visiting "/", redirect to /landing */}

        {/* ✅ Landing page inside Layout (so Header appears) */}
        <Route element={<Layout />}>
          <Route path="/" element={<GoogleLanding />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
