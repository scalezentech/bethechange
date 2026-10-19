import Reviews from "../../components/common/Reviews"

import bharatDate from "../../assets/images/testimonialsReviewer/author.png"
import sanjayAdit from "../../assets/images/testimonialsReviewer/author1.png"

const ReviewPage = () => {

    const foundationReviews = [
        {
            image: bharatDate,
            name: "Mr. Bharat Date",
            role: "Assistant Police Inspector of Kopargaon",
            text: "It was an honor for me to be the chief guest at the Career Guidance Seminar organized by Be The Change Foundation in Kopargaon City. I was impressed by the Foundation's commitment to empowering the youth and providing them with valuable guidance for their future. The seminar was well-organized, informative, and highly beneficial for the students who attended. Be The Change Foundation's dedication towards helping young individuals make informed career choices is truly praiseworthy. I applaud their efforts in bridging the gap between education and employment opportunities."
        },
        {
            image: sanjayAdit,
            name: "Mr. Sanjay Adik",
            role: "Police Patil of Khanapur Village",
            text: "I am extremely grateful to Be The Change Foundation for their remarkable tree plantation initiative in Khanapur Village. Witnessing the planting of 50 trees was truly inspiring. The foundation's dedication towards environmental conservation and creating a sustainable future is commendable. Their efforts have not only beautified our village but also contributed to improving air quality and preserving our natural resources. I wholeheartedly support their cause and encourage everyone to join hands with Be The Change Foundation in their mission for a greener tomorrow."
        },
    ];

    return (
        <>
            <Reviews reviews={foundationReviews} />
        </>
    )
}

export default ReviewPage
