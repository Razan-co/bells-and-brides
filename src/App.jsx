import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Venues from "./components/Venues";
import Foods from "./components/Foods";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="venues" element={<Venues />} />
          <Route path="foods" element={<Foods />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
