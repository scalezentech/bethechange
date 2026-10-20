import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import OurMission from "./pages/our_mission/OurMission";
import NotFound from "./pages/NotFound";
import OurVision from "./pages/our_vision/OurVision";
import AreaOfWork from "./pages/areas_of_work/AreaOfWork";
import AreaDetailPage from "./pages/areas_of_work/AreaDetailPage";
import OurPrograms from "./pages/OurPrograms";
import ContactUs from "./pages/contact_us/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";



function App() {

  return (
    <>
      <Header />

      <main className="min-h-screen">

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/area-of-work" element={<AreaOfWork />} />
          <Route path="/area-of-work/:slug" element={<AreaDetailPage />} />
          <Route path="/our-programs" element={<OurPrograms />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          <Route path="*" element={<NotFound />} />
        </Routes>


      </main>

      <Footer />
    </>
  );
}

export default App;