import { ReviewProps } from "@/types/reviews"
import Image from "next/image"

const ReviewCard = ({ name, role, avatar, rating, time, text }: ReviewProps) => {
    return (
        <article className="review-card">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Image src={avatar} alt={name} width={52} height={52} className="rounded-full object-cover"/>
                    <div>
                        <p className="reviewer-name">{name}</p>
                        <p className="reviewer-desc">{role}</p>
                    </div>
                </div>
                <span className="review-time">{time}</span>
            </div>
            <div className="mt-6 flex gap-1 text-2xl">
                {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className={`icon-star ${i < rating ? "" : "text-[#CED0D3]!"}`}></i>
                 ))}
            </div>
            <p className="review-text">{`"${text}"`}</p>
        </article>
    )
}

export default ReviewCard