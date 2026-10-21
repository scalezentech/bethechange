import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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

import GlobalAnimations from "./components/animations/GlobalAnimations";
import Preloader from "./components/common/Preloader";
import ScrollTop from "./components/common/ScrollTop";

function App() {
  // The loader runs once per application mount.
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  const handleRevealStart = useCallback(() => {
    setAnimationsEnabled(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setPreloaderVisible(false);
  }, []);

  return (
    <>
      {preloaderVisible && (
        <Preloader
          onRevealStart={handleRevealStart}
          onComplete={handleLoaderComplete}
        />
      )}

      <div
        data-site-content
        style={preloaderVisible ? { opacity: 0 } : undefined}
      >
        {/* Resets scroll on route change, before animations measure positions */}
        <ScrollTop />

        {animationsEnabled && <GlobalAnimations />}

        <Header />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/area-of-work" element={<AreaOfWork />} />
            <Route
              path="/area-of-work/:slug"
              element={<AreaDetailPage />}
            />
            <Route path="/our-programs" element={<OurPrograms />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;