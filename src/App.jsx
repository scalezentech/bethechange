
import VideoHighlights from "./components/common/VideoHighlights";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
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

      </main>
    </>
  );
}

export default App;