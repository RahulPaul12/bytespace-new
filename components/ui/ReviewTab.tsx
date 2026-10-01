import Image from "next/image"
import { reviews } from "@/data/review"
import ReviewCard from "./ReviewCard"
const ReviewTab = () => {
    return (
        <section className="mt-10">
            <h2 className="font-semibold text-xl">What Learners Are Saying</h2>
            <div className="mt-6 space-y-6 text-base font-normal leading-7 text-[#4B4C53]">
              <p>Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
            </div>
            <div className="mt-6 bg-white border border-[#CED0D3] rounded-2xl p-10">
                <div className="flex flex-wrap justify-center gap-6 items-center">
                    <div className="bg-secondary rounded-lg w-32.25 h-35 shrink-0 flex flex-col items-center justify-center">
                        <span className="text-xs text-neutral-800">Ratings</span>
                        <span className="font-head font-semibold text-4xl">4.7</span>
                    </div>
                    <div className="flex-1 space-y-2 max-w-xl">
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[95%] rounded-full bg-secondary"></div></div>
                            <div className="text-[#4B4C53] flex gap-1 text-2xl">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                        </div>
                            <span className="w-8 text-right text-base font-normal text-[#4B4C53]">720</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[40%] rounded-full bg-secondary"></div></div>
                            <div className="text-[#4B4C53] flex gap-1 text-2xl">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                        </div>
                            <span className="w-8 text-right text-base font-normal text-[#4B4C53]">120</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[10%] rounded-full bg-secondary"></div></div>
                            <div className="text-[#4B4C53] flex gap-1 text-2xl">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                        </div>
                            <span className="w-8 text-right text-base font-normal text-[#4B4C53]">21</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[5%] rounded-full bg-secondary"></div></div>
                            <div className="text-[#4B4C53] flex gap-1 text-2xl">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                        </div>
                            <span className="w-8 text-right text-base font-normal text-[#4B4C53]">12</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-1.5 rounded-full bg-neutral-200"><div className="h-full w-[6%] rounded-full bg-secondary"></div></div>
                            <div className="text-[#4B4C53] flex gap-1 text-2xl">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                        </div>
                            <span className="w-8 text-right text-base font-normal text-[#4B4C53]">16</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="font-semibold text-xl">Individual Reviews:</h2>
                <div className="mt-6 flex flex-wrap gap-4">
                    <button className="bg-secondary rating-tab-btn">All rating</button>
                    <button className="rating-tab-btn"><i className="text-2xl icon-star"></i> 5</button>
                    <button className="rating-tab-btn"><i className="text-2xl icon-star"></i> 4</button>
                    <button className="rating-tab-btn"><i className="text-2xl icon-star"></i> 3</button>
                    <button className="rating-tab-btn"><i className="text-2xl icon-star"></i> 2</button>
                    <button className="rating-tab-btn"><i className="text-2xl icon-star"></i> 1</button>
                </div>
                <div className="mt-6 space-y-6">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewTab