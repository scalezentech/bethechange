import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import OurMission from "./pages/our_mission/OurMission";
import NotFound from "./pages/NotFound";



function App() {

  return (
    <>
      <Header />

      <main className="min-h-screen">

        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-mission" element={<OurMission />} />

            <Route path="*" element={<NotFound />} />
        </Routes>


      </main>

      <Footer />
    </>
  );
}

export default App;