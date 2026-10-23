import RecentInitiativeShowcase from "../../components/common/RecentInitiativeShowcase";
import aboutChildsBg from "../../assets/images/about/about-left1.png"
const OurMission = () => {
    return (
        <main>
            <RecentInitiativeShowcase
                initiativeTitle="Our mission is simple"
                title="Making the world a better place, one step at a time"
                images={[
                    aboutChildsBg
                ]}
                description={[
                    "Be the change foundation operates with the aim of empowering the society. BTCF looking for social development, which means freedom, freedom from hunger, poverty, servitude, bondage, caste discrimination, ignorance, illiteracy, suicide, corruption and injustice and inflation. BTCF can be a powerful way to bring about change. Be the change foundation mandate is to promote the public interest and serve the public good.",
                    "Our vision is empowerment of society through incorporating better innovative practices, modern technology and values. Our dream is to make the world better place and to catalyse a lasting, irreversible change for the good. BTC is a not for profit foundation which focuses on real-time and result oriented efforts. The BTCF team comprises of 100 highly qualified and experienced professionals who are committed to educational development and social transformation. It aims to provide the extra mile benefit to under privileged section."
                ]}
                primaryButtonText="Who We Are?"
                primaryButtonLink="/about-us"
                secondaryButtonText="Donate for Nature"
                secondaryButtonLink="https://razorpay.me/@bethechangefoundation5072"
                contentPosition="right"
            />
        </main>
    );
};

export default OurMission;