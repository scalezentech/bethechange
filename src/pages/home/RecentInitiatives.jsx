import RecentInitiative from "../../components/common/RecentInitiative";
import FeaturedSpeaker from "../../components/common/FeaturedSpeaker"
import { FaPrayingHands } from "react-icons/fa";
import RecentShowcaseInitiative from "../../components/common/RecentShowcaseInitiative";
import CSRSection from "./CSRSection"

export default function RecentInitiatives() {

  const recentInitiative1 = [
    "National Ideal Teachers Award 2026 Ceremony Concludes with Great Enthusiasm The National Ideal Teachers Award 2026 ceremony, organized by Be The Change Foundation, was held with great enthusiasm and grandeur on Sunday, 18th January 2026, at Aarambh Hall, Mumbai. This national-level event, organized to honor teachers for their remarkable contributions in the field of education, witnessed the presence of a large number of dignitaries, educationists, and teachers from various sectors.",
    "During the ceremony, talented, dedicated, and socially committed teachers from different states across the country were felicitated for their outstanding academic work as well as their valuable social contributions. It was highlighted on this occasion that through holistic student development, innovative teaching methodologies, and initiatives undertaken for social welfare, these teachers have made a significant contribution to the education sector.",
    "The organizers stated that the objective of this initiative by Be The Change Foundation was to recognize and encourage the efforts of teachers and to emphasize the importance of education in society. The dignitaries present praised the initiative and expressed confidence that such programs would enhance the respect and recognition of teachers and further strengthen the education sector."
  ];

  const RecentInitiative2 = [
    "🚩 A Divine Journey of Faith, Devotion & Spiritual Bliss! Be The Change Foundation proudly organized the Sant Changdev Maharaj Padyatra Dindi Sohala from Kopargaon to Puntamba on Saturday, 8th August 2026.",
    "Around 100–200 devotees participated enthusiastically in this sacred pilgrimage. Beginning at 5:00 AM and continuing until 5:00 PM, the journey was a beautiful celebration of faith, devotion, service, unity and spiritual happiness. 🌸🙏",
    "Throughout the journey, villagers and devotees along the route warmly welcomed the participants and arranged breakfast, drinking water and meals. Their selfless service and hospitality filled the entire Dindi with love, positive energy and devotion. ❤️🙏 This was not merely a walking pilgrimage—it was a journey of faith, a celebration of devotion and an unforgettable spiritual experience.",
    "This was not merely a walking pilgrimage—it was a journey of faith, a celebration of devotion and an unforgettable spiritual experience.experience the divine moments, devotion, joy and togetherness of the Sant Changdev Maharaj Dindi Sohala 2026 through this video."
  ]
  return (
    <main>
      <RecentInitiative
        title="National Teachers Award 2026"
        location="Mumbai"
        date="18 January 2026"
        videoId="hBHP0z8Hx9k"
        description={recentInitiative1}
        link="https://nationalteacheraward.com/"
        linkText="Learn More"
      // videoPosition="left"
      />


      <FeaturedSpeaker
        name="Hon. Sumit Rewri Sir"
        designation="Founder & CEO, Physics Wallah OnlyIAS"
        description={[
          "We were privileged to welcome Hon. Sumit Rewri Sir as a distinguished keynote speaker at the National Teacher Award 2026, organised by Be The Change Foundation.",
          "His inspiring address beautifully highlighted the invaluable role of teachers in nation-building, the importance of quality education, visionary leadership, innovation, and the transformative power of technology in making education accessible to every learner.",
        ]}
        date="14 June 2026"
        location="Mumbai, Maharashtra"
        videoId="xpxOr4_DAsc"
        videoPosition="left"
      />

      <FeaturedSpeaker
        name="Hon. Vishal Shende Sir"
        designation="Assistant Charity Commissioner, Ahilyanagar"
        description={[
          "Hon. Vishal Shende Sir shared inspiring thoughts on the importance of teachers, the future of education, leadership, and innovation at the State Teacher Award 2026 in Shirdi.",
          
        ]}
        date="25 October 2026"
        location="Shirdi, Maharashtra"
        videoId="Viz5z0LYcTE"
        videoPosition="right"
      />

      <FeaturedSpeaker
        name="Hon. Shri Kishor Ramchandra Nirmal"
        designation="Founder Director, Prabhat Dairy Limited; Founder Director, Kisan Connect Safe Food Private Limited"
        description={[
          "This special occasion celebrated entrepreneurs whose dedication, innovation, employment creation and commitment to society contribute to meaningful progress.",
          "Join us in celebrating their achievements and enjoy this memorable speech from the awards ceremony.",
        ]}
        date="27 September 2026"
        location="Shirdi, Maharashtra"
        videoId="StibVWcQjeY"
        videoPosition="left"
      />

      <RecentInitiative
        title="Palkhi Dindi 2026 | Kopargaon to Puntamba | A Journey of Faith & Devotion "
        Icon={FaPrayingHands}
        location="Kopargaon to Puntamba"
        date="8 August 2026"
        videoId="Bw-Cax55BzM"
        description={RecentInitiative2}
        link="https://youtube.com/shorts/Bw-Cax55BzM"
        linkText="Watch Full Video"
        videoPosition="right"
      />

       <CSRSection />


      <RecentShowcaseInitiative />
    </main>
  );
}