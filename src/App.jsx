
import FocusedAreas from "./components/common/FocusedAreas";
import GovernmentRecognition from "./components/common/GovernmentRecognition";
import VideoHighlights from "./components/common/VideoHighlights";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import NewsPaperSection from "./pages/NewsPaperSection";
import RecentInitiatives from "./pages/RecentInitiatives";
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

      </main>
    </>
  );
}

export default App;