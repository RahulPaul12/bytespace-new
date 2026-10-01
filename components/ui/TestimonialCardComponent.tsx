import { Testimonial } from "@/types/testimonial"
import Image from "next/image"

const TestimonialCardComponent = ({name, role, avatar, text}:Testimonial) => {
    return (
        <figure className="testimonial-card">
            <div className="testimonial-img">
                <Image src={avatar} alt="review-1" width={80} height={80}/>
            </div>
            <figcaption className="mt-6">
                <h6 className="font-semibold text-xl">{name}</h6>
                <p className="text-lg font-normal text-primary">{role}</p>
            </figcaption>
            <blockquote className="testimonial-text">{`"${text}"`}</blockquote>
        </figure>
    )
}

export default TestimonialCardComponent