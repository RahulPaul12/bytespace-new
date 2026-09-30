import CourseTabs from "@/components/ui/CourseTabComponent"
import Image from "next/image"
import Link from "next/link"

const CourseDetails = () => {
    return (
        <>
        <section className="bg-grid pt-40 pb-12 sm:pb-18 mb-9">
            <div className="container">
                <div className="flex items-start justify-between gap-4">
                    <div className="text-[#F5F5F6]">
                        <h1 className="section-heading text-left">Build Digital Asset: A Comprehensive Guide</h1>
                        <h6 className="font-semibold text-xl">Unlock the Power of Digital Creation with Expert Guidance</h6>
                        <p className="card-desc text-[#F5F5F6] mt-6">by <span className="text-secondary">purepearl studio</span></p>
                    </div>
                    <button className="primary-btn py-2">
                        <i className="icon-share"></i>Share
                    </button>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                    <span className="course-content-tag"><i className="text-primary text-xl icon-level"></i>Intermediate</span>
                    <span className="course-content-tag"><i className="text-primary text-xl icon-star"></i> 4.6 (172 reviews)</span>
                    <span className="course-content-tag"><i className="text-primary text-xl icon-user"></i> 199 Students</span>
                </div>
                <div className="relative mt-15">
                    <div className="lg:mr-120">
                        <div className="relative h-116 rounded-2xl overflow-hidden grid place-items-center">
                            <Image className="absolute object-cover w-full h-full" src="/images/video.jpg" alt="thumbnail" width={800} height={500}/>
                            <button aria-label="Play video" className="relative w-26 h-26 rounded-3xl bg-neutral-600/70 backdrop-blur grid place-items-center">
                                <i className="icon-play text-white text-[72px]"></i>
                            </button>
                        </div>
                    </div>
                    <aside className="relative z-10 mt-6 lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:w-103">
                        <div className="bg-white rounded-3xl border border-[#CED0D3] p-8 lg:p-10">
                            <h2 className="font-semibold text-xl">112 Lessons (24 hours)</h2>
                            <ol className="mt-6 space-y-3">
                                <li className="grid grid-cols-[2rem_1fr_auto] items-start gap-x-3">
                                  <span className="text-base text-black-shadow">01</span>
                                  <span className="text-base leading-6 text-black-shadow font-medium max-w-50">Introduction to Digital Assets</span>
                                  <span className="text-base font-normal text-primary">12 mins</span>
                                </li>
                            
                                <li className="grid grid-cols-[2rem_1fr_auto] items-start gap-x-3">
                                  <span className="text-base text-black-shadow">02</span>
                                  <span className="text-base leading-6  font-medium max-w-50">Design Principles for Impacts</span>
                                  <span className="text-base font-normal text-primary">21 mins</span>
                                </li>
                            
                                <li className="grid grid-cols-[2rem_1fr_auto] items-start gap-x-3">
                                  <span className="text-base text-black-shadow">03</span>
                                  <span className="text-base leading-6  font-medium max-w-50">Advanced Techniques in Digital Creation</span>
                                  <span className="text-base font-normal text-primary">16 mins</span>
                                </li>
                            </ol>
                            <p className="mt-3 text-base font-normal text-[#4B4C53]">99 more videos</p>
                            <p className="mt-6 text-base font-normal text-[#4B4C53]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
                            <h6 className="mt-6 font-semibold text-[36px] text-brand text-primary">$25<span className="text-base font-body text-[#4B4C53] font-normal">/lifetime</span></h6>
                            <button className="primary-btn mt-4 w-full">Enroll Now</button>
                            <h3 className="mt-6 font-semibold text-xl">This course include</h3>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-2.5 text-base font-normal text-[#4F4F4F]"><i className="text-primary icon-resources text-2xl"></i>Learning Resources</li>
                                <li className="flex items-center gap-2.5 text-base font-normal text-[#4F4F4F]"><i className="text-primary icon-video text-2xl"></i>Quality Lesson Videos</li>
                                <li className="flex items-center gap-2.5 text-base font-normal text-[#4F4F4F]"><i className="text-primary icon-certificate text-2xl"></i>Certificate of Completion</li>
                                <li className="flex items-center gap-2.5 text-base font-normal text-[#4F4F4F]"><i className="text-primary icon-marketing text-2xl"></i>Private Consultation</li>
                            </ul>
                            <hr className="my-6 border-[#D1D1D1]"/>
                            <div className="flex items-center gap-3">
                                <span className="w-13 h-13 rounded-full shrink-0">
                                    <Image src="/images/user/user-5.png" alt="user" width={400} height={400}/>
                                </span>
                                <div>
                                    <p className="text-lg font-medium">PurePearl Studio</p>
                                    <p className="text-base font-normal text-[#4B4C53]">Professional Creator</p>
                                </div>
                            </div>
                            <p className="mt-6 text-base font-normal text-[#4B4C53]">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
                            <Link href="#" className="mt-6 inline-block border border-[#CED0D3] rounded-full px-4 py-2 leading-tight text-base font-medium text-[#4B4C53]">See Full Profile</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
        <section className="container">
          <article className="min-w-0 py-8 lg:py-10 lg:pr-120 lg:min-h-130">
            <CourseTabs/>
          </article>
        </section>
        </>
    )
}

export default CourseDetails