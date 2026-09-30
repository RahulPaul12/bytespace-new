import { CardProps } from "@/types/course"
import Image from "next/image"
import Link from "next/link"

const CardComponent = ({ slug, title, author, image, price, rating, level, lessons, duration, comments }: CardProps) => {
    return (
        <Link href={`/course/${slug}`} className="border border-[#CED0D3] rounded-3xl p-4">
            <div className="relative h-49 rounded-xl overflow-hidden mb-5">
                <Image className="w-full h-full object-cover" src={image} alt={title} width={400} height={400}/>
                <div className="absolute inset-x-3 bottom-5 mx-auto w-fit flex flex-wrap items-center gap-3">
                    <span className="card-content">{lessons}</span>
                    <span className="card-content">{duration}</span>
                    <span className="card-content">{comments}</span>
                </div>
            </div>
            <div>
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-xl line-clamp-1">{title}</h3>
                        <p className="card-desc">by <span className="text-primary">{author}</span></p>
                    </div>
                    <span className="card-rating">{rating} <i className="icon-star text-[#CED0D3] text-2xl"></i></span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <span className="card-tag">
                      <i className="icon-level text-xl"></i>{level}
                    </span>
                    <div className="flex -space-x-2">
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-1.png" alt="user" width={400} height={400}/>
                        </span>
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-2.png" alt="user" width={400} height={400}/>
                        </span>
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-3.png" alt="user" width={400} height={400}/>
                        </span>
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-4.png" alt="user" width={400} height={400}/>
                        </span>
                        <span className="card-user-text">26+</span>
                    </div>
                </div>
                <h6 className="card-price">{price}<span>/lifetime</span></h6>
            </div>
        </Link>
    )
}
export default CardComponent