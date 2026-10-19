import VideoHighlights from "../../components/common/VideoHighlights"
import HomePage from "./HomePage"
import NewsPaperSection from "./NewsPaperSection"
import RecentInitiatives from "./RecentInitiatives"
import TestimonialsSection from "./TestomonialSection"
import FocusedAreas from "../../components/common/FocusedAreas"
import GovernmentRecognition from "../../components/common/GovernmentRecognition"
import EnvironmentalInitiatives from "./EnvironmentalInitiatives"
import RecentCauses from "./RecentCauses"
import PollutionInitiatives from "./PollutionInitiatives"
import NewsLetter from "./Newsletter"
import LeadershipPage from "./LeadershipPage"
import ReviewPage from "./ReviewPage"
import OtherWebsites from "../../components/common/OtherWebsites"

const Home = () => {
  return (
    <>
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
        <NewsLetter />
        <LeadershipPage />
        <ReviewPage />
        <OtherWebsites />
    </>
  )
}

export default Home
