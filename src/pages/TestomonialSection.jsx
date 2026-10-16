import AwardHighlights from "../components/common/AwardHighlights";
import ParticipantFeedbackVideos from "../components/common/ParticipantFeedbackVideos";
import VoiceOfChange from "../components/common/VoiceOfChange";
import sep6Video from "../assets/images/initiatives/6sep2026/v1.mp4"
import sep6Thumbnail from "../assets/images/initiatives/6sep2026/C3.jpeg"
import entrepreneurVideo from "../assets/images/initiatives/27sep2026/reel.mp4"
import entrepreneurThumbnail from "../assets/images/initiatives/27sep2026/s (1).jpeg"

export default function TestimonialsSection() {
    return (
        <>
            <header className="bg-[#fafafa] px-4 pt-10 text-center sm:pt-14">
                <h2 className="text-3xl font-bold text-[#243244] sm:text-4xl">
                    Voices of Change
                </h2>

                <p className="mt-3 text-sm text-[#626262] sm:text-base">
                    A teacher sharing heartfelt experiences from our Mumbai event
                </p>
            </header>

            <VoiceOfChange
                videoId="OfwKuFeXf6I"
                videoTitle="Teacher sharing her experience"
                eyebrow="TEACHER TESTIMONIAL"
                title="Real Stories. Real Impact."
                description={[
                    "At our Mumbai event, educators shared how Be The Change Foundation’s initiatives have inspired, empowered, and supported them in their teaching journey.",
                    "These voices reflect the real impact of our work on the ground — strengthening education and celebrating dedicated teachers.",
                ]}
            />

            <AwardHighlights
                videoId="rNix8s-cFCY"
                title="Maharashtra State Level Teachers"
                organization="Be The Change Foundation"
                description="Watch the highlights of Maharashtra State Level Teachers Award 2026 organized by Be The Change Foundation. The event celebrated excellence across social, administrative, educational, beauty and art sectors."
                highlights={[
                    "State Level Award Ceremony",
                    "Honouring Excellence",
                    "Inspirational Success Stories",
                ]}
                orientation="horizontal"
                videoPosition="left"
            />

            <ParticipantFeedbackVideos
                title="Participant Feedback Videos"
                videos={[
                    {
                        id: "feedback-1",
                        videoId: "Isq7zSbkZoI",
                        title: "Participant feedback 1",
                    },
                    {
                        id: "feedback-2",
                        videoId: "zhaLHyyP5GA",
                        title: "Participant feedback 2",
                    },
                    {
                        id: "feedback-3",
                        videoId: "y3Q-oheJFMM",
                        title: "Participant feedback 3",
                    },


                ]}
            />


            <AwardHighlights
                videoType="file"
                videoSrc={sep6Video}
                thumbnail={sep6Thumbnail}
                videoTitle="Maharashtra Gungaurav Award 2026"
                title="Maharashtra Gungaurav Award 2026"
                orientation="vertical"
                description="Highlights from the Maharashtra Gungaurav Award 2026."
            />


            <ParticipantFeedbackVideos
                title="Participant Feedback Videos"
                videos={[
                    {
                        id: "feedback-1",
                        videoId: "xwPiYJRF4zM",
                        title: "Participant feedback 1",
                    },
                    {
                        id: "feedback-2",
                        videoId: "ZYr26eyev3M",
                        title: "Participant feedback 2",
                    },
                    {
                        id: "feedback-3",
                        videoId: "zitvgltwvV8",
                        title: "Participant feedback 3",
                    },
                    {
                        id: "feedback-4",
                        videoId: "pe4aIc1Zcuk",
                        title: "Participant feedback 4",
                    },
                    {
                        id: "feedback-5",
                        videoId: "jsYuXlg3YcY",
                        title: "Participant feedback 5",
                    },
                    {
                        id: "feedback-6",
                        videoId: "xcm9NqIC8KE",
                        title: "Participant feedback 6",
                    },
                    {
                        id: "feedback-7",
                        videoId: "lc2Y-Z4X7XA",
                        title: "Participant feedback 7",
                    },
                    {
                        id: "feedback-8",
                        videoId: "9wmfUZ1HEsc",
                        title: "Participant feedback 8",
                    },
                    {
                        id: "feedback-9",
                        videoId: "ragaCbEhIUg",
                        title: "Participant feedback 9",
                    },
                    {
                        id: "feedback-10",
                        videoId: "tCr3VQKhgJ0",
                        title: "Participant feedback 10",
                    },
                    {
                        id: "feedback-11",
                        videoId: "46HODPguHA0",
                        title: "Participant feedback 11",
                    },
                    {
                        id: "feedback-12",
                        videoId: "gTaiJBKoFwE",
                        title: "Participant feedback 12",
                    },
                    {
                        id: "feedback-13",
                        videoId: "dSsgFsWF-XI",
                        title: "Participant feedback 13",
                    },



                ]}
            />

            <AwardHighlights
                videoType="youtube"
                videoId="rNix8s-cFCY"
                videoTitle="Soundarya Kala Award 2026"
                organization="Be The Change Foundation"
                title="Soundarya Kala Award 2026"
                description="Watch the highlights of Soundarya Kala Award 2026 organized by Be The Change Foundation. The event celebrated excellence across social, administrative, educational, beauty and art sectors."
                highlights={[
                    "State Level Award Ceremony",
                    "Honouring Excellence",
                    "Inspirational Success Stories",
                ]}
                orientation="horizontal"
                videoPosition="left"
            />

            <ParticipantFeedbackVideos
                title="Participant Feedback Videos"
                videos={[
                    {
                        id: "feedback-1",
                        videoId: "u-L9Mu1flIo",
                        title: "Participant feedback 1",
                    },
                    {
                        id: "feedback-2",
                        videoId: "a0MlM3c_KCU",
                        title: "Participant feedback 2",
                    },
                    {
                        id: "feedback-3",
                        videoId: "z9_LvIroqkk",
                        title: "Participant feedback 3",
                    },
                    {
                        id: "feedback-4",
                        videoId: "ahUIxFQlFlY",
                        title: "Participant feedback 4",
                    },
                    {
                        id: "feedback-5",
                        videoId: "En3N1U0YTb0",
                        title: "Participant feedback 5",
                    },
                    {
                        id: "feedback-6",
                        videoId: "FVkV1E39leo",
                        title: "Participant feedback 6",
                    }

                ]}
            />



            <AwardHighlights
                videoType="file"
                videoSrc={entrepreneurVideo}
                thumbnail={entrepreneurThumbnail}
                videoTitle="National Entrepreneur Awards 2026"
                organization="Be The Change Foundation"
                title="National Entrepreneur Awards 2026"
                description="Watch the highlights of National Entrepreneur Awards 2026 organized by Be The Change Foundation. The event celebrated excellence across entrepreneurship, startup, MSME, agriculture, technology, social, healthcare and education sectors."
                highlights={[
                    "Celebrating Entrepreneurial Excellence",
                    "Recognizing Innovation and Leadership",
                    "Inspiring Success Stories",
                ]}
                orientation="vertical"
                videoPosition="left"
            />

            <ParticipantFeedbackVideos
                title="Participant Feedback Videos"
                videos={[
                    {
                        id: "feedback-1",
                        videoId: "shaIQUx1ZoI",
                        title: "Participant feedback 1",
                    },
                    {
                        id: "feedback-2",
                        videoId: "Fg-4QykLbKg",
                        title: "Participant feedback 2",
                    },
                    {
                        id: "feedback-3",
                        videoId: "lBSHIv6g7XE",
                        title: "Participant feedback 3",
                    },
                    {
                        id: "feedback-4",
                        videoId: "bVSxEMtL1o4",
                        title: "Participant feedback 4",
                    },


                ]}
            />

        </>
    );
}