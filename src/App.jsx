
import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";

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
import GoogleTranslate from "./components/common/language/GoogleTranslate";
import ApplyCSR from "./pages/csr/ApplyForCSR";
import LearnAboutCSR from "./pages/csr/LearnAboutCSR";

function App() {
    const [preloaderVisible, setPreloaderVisible] = useState(() => {
        return (
            typeof document !== "undefined" &&
            document.documentElement.dataset.preloaderComplete !== "true"
        );
    });

    const [animationsEnabled, setAnimationsEnabled] = useState(() => {
        return (
            typeof document !== "undefined" &&
            document.documentElement.dataset.preloaderComplete === "true"
        );
    });

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

            {/* Keep the site mounted and visible behind the preloader. */}
            <div data-site-content>
                <GoogleTranslate />
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

                        <Route path="/apply-csr" element={<ApplyCSR />} />
                        <Route path="/learn-about-csr" element={<LearnAboutCSR />} />


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
