
import FocusedAreas from "./components/common/FocusedAreas";
import GovernmentRecognition from "./components/common/GovernmentRecognition";
import OtherWebsites from "./components/common/OtherWebsites";
import VideoHighlights from "./components/common/VideoHighlights";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import EnvironmentalInitiatives from "./pages/EnvironmentalInitiatives";
import HomePage from "./pages/HomePage";
import LeadershipPage from "./pages/LeadershipPage";
import Newsletter from "./pages/Newsletter";
import NewsPaperSection from "./pages/NewsPaperSection";
import PollutionInitiatives from "./pages/PollutionInitiatives";
import RecentCauses from "./pages/RecentCauses";
import RecentInitiatives from "./pages/RecentInitiatives";
import ReviewPage from "./pages/ReviewPage";
import TestimonialsSection from "./pages/TestomonialSection";


function App() {

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <HomePage />

        <RecentInitiatives />

        <VideoHighlights />

        <TestimonialsSection />

        <NewsPaperSection />

        <FocusedAreas />

        <GovernmentRecognition />

        <EnvironmentalInitiatives />

        <RecentCauses />

        <PollutionInitiatives />
        <Newsletter />

        <LeadershipPage />
        
        <ReviewPage />

        <OtherWebsites />
        
        <Footer />

      </main>
    </>
  );
}

export default App;