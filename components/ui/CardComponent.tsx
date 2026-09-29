import Image from "next/image"
import Link from "next/link"

const CardComponent = () => {
    return (
        <article className="border border-[#CED0D3] rounded-xl p-3">
            <div className="relative h-49 rounded-xl overflow-hidden mb-5">
                <Image className="w-full h-full" src="/images/blog/blog-1.png" alt="blog-1" width={400} height={400}/>
                <div className="absolute inset-x-0 bottom-5 mx-auto w-fit flex items-center gap-3">
                    <span className="card-content">17 Lessons</span>
                    <span className="card-content">2 hours 16 mins</span>
                    <span className="card-content">59 Comments</span>
                </div>
            </div>
            <div>
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-xl">Learn Figma from Basic</h3>
                        <p className="card-desc">by <Link href="#" className="text-primary">purepearl studio</Link></p>
                    </div>
                    <span className="card-rating">4.5 <i className="icon-star text-[#CED0D3] text-2xl"></i></span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <span className="card-tag">
                      <i className="icon-level text-xl"></i>Beginner
                    </span>
                    <div className="flex -space-x-2">
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-1.png" alt="blog-1" width={400} height={400}/>
                        </span>
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-2.png" alt="blog-1" width={400} height={400}/>
                        </span>
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-3.png" alt="blog-1" width={400} height={400}/>
                        </span>
                        <span className="w-8 h-8 rounded-full">
                            <Image src="/images/user/user-4.png" alt="blog-1" width={400} height={400}/>
                        </span>
                        <span className="card-user-text">26+</span>
                    </div>
                </div>
                <h6 className="card-price">$25<span>/lifetime</span></h6>
            </div>
        </article>
    )
}
export default CardComponent