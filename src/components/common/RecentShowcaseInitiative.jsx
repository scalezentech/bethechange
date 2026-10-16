import RecentInitiativeShowcase from "./RecentInitiativeShowcase"

import image1 from "../../assets/images/initiatives/IN1/1.webp";
import image2 from "../../assets/images/initiatives/IN1/2.webp";
import image3 from "../../assets/images/initiatives/IN1/3.webp";
import image4 from "../../assets/images/initiatives/IN1/4.webp";
import image5 from "../../assets/images/initiatives/IN1/5.webp";
import image6 from "../../assets/images/initiatives/IN1/6.webp";
import image7 from "../../assets/images/initiatives/IN1/7.webp";
import image8 from "../../assets/images/initiatives/IN1/8.webp";
import image9 from "../../assets/images/initiatives/IN1/9.webp";
import image10 from "../../assets/images/initiatives/IN1/10.webp";
import image11 from "../../assets/images/initiatives/IN1/11.webp";
import image12 from "../../assets/images/initiatives/IN1/12.webp";
import image13 from "../../assets/images/initiatives/IN1/13.webp";
import image14 from "../../assets/images/initiatives/IN1/14.webp";
import image15 from "../../assets/images/initiatives/IN1/15.webp";
import image16 from "../../assets/images/initiatives/IN1/16.webp";
import image17 from "../../assets/images/initiatives/IN1/17.webp";
import image18 from "../../assets/images/initiatives/IN1/18.webp";
const RecentShowcaseInitiative = () => {
    return (
        <>

            <RecentInitiativeShowcase
                title="Sunrise Pre-Primary School Khandala, Shrirampur"
                images={[
                    image1, image2, image3, image4, image5, image6,
                    image7, image8, image9, image10, image11, image12,
                    image13, image14, image15, image16, image17, image18,
                ]}
                description={[
                    "Sunrise Pre-Primary School, initiated by Be The Change Foundation, provides a welcoming environment focused on inclusive education and early childhood development.",
                    "We strive to nurture young minds, encourage curiosity, and build a strong educational foundation for children in Khandala.",
                ]}
                primaryButtonText="School Website"
                primaryButtonLink="https://bethechange.org.in/"
                secondaryButtonText="Admission Enquiry"
                secondaryButtonLink="https://bethechange.org.in/contact-us.html"
                contentPosition="right"
            />
        </>
    )
}

export default RecentShowcaseInitiative
