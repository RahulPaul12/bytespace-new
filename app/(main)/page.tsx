
import Image from "next/image";
import { courses } from "@/data/course"
import CardComponent from "@/components/ui/CardComponent";
import Link from "next/link";
import LogoSliderComponent from "@/components/ui/LogoSliderComponent";
import { categories } from "@/data/category";
import { testimonial } from "@/data/testimonial";
import TestimonialCardComponent from "@/components/ui/TestimonialCardComponent";
export default function Home() {
    return (
        <main>
            <section className="bg-grid pt-40 relative">
                <Image className="absolute inset-0 z-0 w-full h-full object-none md:object-cover" src={"/images/bg/hero-bg.png"} width={1300} height={1000} alt="hero"/>
                <div className="container relative">
                    <h1 className="font-semibold text-3xl md:text-[72px] text-center text-white max-w-233.75 mx-auto leading-[1.15]">Get Access to Hundreds Courses Available</h1>
                    <p className="text-lg font-normal mt-8 text-[#E5E6E8] text-center">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <label className="flex items-center gap-3 bg-white text-black-shadow rounded-full h-13 px-5 w-full sm:w-105">
                          <i className="icon-search text-gray text-2xl"></i>
                          <input type="search" placeholder="Search" className="w-full outline-none text-sm placeholder:text-neutral-400 bg-transparent"/>
                        </label>
                        <button className="primary-btn"> Search</button>
                    </div>
                </div>
                <div className="relative z-10 mx-auto w-full max-w-285 h-100 md:h-135 overflow-hidden">
                    <Image src="/images/hero-man.png" alt="Learner with headphones" className="absolute bottom-0 left-1/2 -translate-x-1/2 md:h-135.25 h-105 w-auto object-cover z-10" width={1200} height={1200}/>
                    <Image src="/images/bg/hero-circ.png" alt="Learner with headphones" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-auto w-[160%] max-w-none sm:w-full" width={1200} height={1200}/>
                    <div className="hidden sm:block absolute left-2 sm:left-[16%] top-10 sm:top-40 bg-white rounded-2xl p-3 sm:p-4 z-20">
                        <p className="text-sm sm:text-base font-medium text-black-shadow">UI/UX Design</p>
                        <p className="text-xs text-gray">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
                    </div>
                    <div className="absolute right-2 sm:right-[4%] md:right-[20%] top-2 sm:top-24 md:top-40 bg-white rounded-2xl p-3 sm:p-4 w-32 sm:w-48 md:w-63.75 z-20">
                        <p className="text-xs sm:text-sm font-medium text-black-shadow">Learning Progress</p>
                        <h6 className="font-semibold text-2xl sm:text-[48px] text-black-shadow">55%</h6>
                        <div className="h-2 rounded-full bg-[#F6F6F6]"><div className="h-full w-[55%] rounded-full bg-secondary"></div></div>
                    </div>
                    <div className="absolute left-2 sm:left-[4%] md:left-[10%] bottom-4 sm:bottom-12 md:bottom-20 bg-white rounded-2xl p-3 sm:p-4 z-20">
                        <p className="text-xs sm:text-base font-medium text-black-shadow">Happy Students</p>
                        <p className="text-xs text-black-shadow">4.5 <span className="text-gray">(240)</span> <span className="text-secondary"><i className="icon-star text-base"></i></span></p>
                        <div className="mt-2 flex items-center -space-x-2">
                            <span className="hidden sm:block w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-1.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="hidden sm:block w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-2.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="hidden sm:block w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-3.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-4.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-1.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-2.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="w-10.5 h-10.5 rounded-full">
                                <Image src="/images/user/user-3.png" alt="user" width={400} height={400}/>
                            </span>
                            <span className="card-user-text w-10.5 h-10.5">2k+</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20 mb-9 bg-[#F5F5F6]">
                <div className="container ">
                    <LogoSliderComponent/>
                </div>
            </section>

            <section className="container py-9">
                <div className="text-center mb-10.5 max-w-220 mx-auto w-full">
                    <h2 className="max-w-145 mx-auto w-full mb-4 text-[44px] font-semibold text-[#040819]">Discover Your Passion, Build Your Skills</h2>
                    <p className="hero-section-desc text-gray">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
                </div>
                <div className="mb-9 flex gap-x-4 gap-y-5 overflow-x-auto pb-2 sm:mx-auto sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:max-w-6xl">
                    {categories.map((category)=> (
                        <button key={category.id} className="category-btn">{category.name}</button>
                    ))}
                    <button className="shrink-0 px-3 py-2 text-xs text-primary">+ More</button>
                </div>
                <div className="pt-4 sm:py-9 grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <CardComponent key={course.slug} {...course} />
                ))}
            </div>
            </section>

            <section className="container mt-9 mb-15">
                <div className="text-center mb-16 max-w-220 mx-auto w-full">
                    <h2 className="mb-4 text-[36px] font-semibold text-[#040819]">Explore Diverse Learning Paths at Bytespace</h2>
                    <p className="hero-section-desc text-gray">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                    <div className="learning-card">
                        <div className="learning-card-icon">
                            <i className="icon-design text-4xl"></i>
                        </div>
                        <span className="learning-card-desc">Design</span>
                    </div>
                    <div className="learning-card">
                        <div className="learning-card-icon">
                            <i className="icon-devlop text-4xl"></i>
                        </div>
                        <span className="learning-card-desc">Development</span>
                    </div>
                    <div className="learning-card">
                        <div className="learning-card-icon">
                            <i className="icon-monitor text-4xl"></i>
                        </div>
                        <span className="learning-card-desc">IT & Software</span>
                    </div>
                    <div className="learning-card">
                        <div className="learning-card-icon">
                            <i className="icon-business text-4xl"></i>
                        </div>
                        <span className="learning-card-desc">Business</span>
                    </div>
                    <div className="learning-card">
                        <div className="learning-card-icon">
                            <i className="icon-marketing text-4xl"></i>
                        </div>
                        <span className="learning-card-desc">Marketing</span>
                    </div>
                    <div className="learning-card">
                        <div className="learning-card-icon">
                            <i className="icon-photography text-4xl"></i>
                        </div>
                        <span className="learning-card-desc">Photography</span>
                    </div>
                </div>
            </section>

            <section className="pt-15">
                <div className="relative overflow-hidden bg-[#F7F9F2]">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-24 left-[25%] w-105 h-105 rounded-full bg-secondary/60 blur-[150px]"></div>
                        <div className="absolute -bottom-28 -left-24 w-90 h-90 rounded-full bg-secondary/50 blur-[80px]"></div>
                        <div className="absolute -bottom-28 -right-24 w-90 h-90 rounded-full bg-primary/25 blur-[100px]"></div>
                        <div className="absolute bottom-1/2 -left-24 w-90 h-90 rounded-full bg-primary/25 blur-[100px]"></div>
                        <div className="absolute -top-28 -right-24 w-90 h-90 rounded-full bg-primary/10 blur-[100px]"></div>
                    </div>
                    <div className="relative px-5 pb-14 sm:pb-18 pt-16 sm:pt-30 container">
                        <div className="grid gap-5 lg:grid-cols-2 lg:gap-18 items-center justify-items-center mb-10">
                            <div className="lg:order-1 order-2">
                                <h2 className="home-section-header text-center lg:text-left">Your Path to Professional Growth Starts Here!</h2>
                                <p className="review-desc mt-10 text-center! lg:text-left! mx-auto">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
                                <dl className="mt-10 flex justify-center lg:justify-start gap-10 sm:gap-14">
                                    <div><dt className="sr-only">Students</dt><dd className="font-head font-medium text-2xl sm:text-3xl text-primary">12K</dd><p className="text-lg font-normal text-[#4B4C53]">Students</p></div>
                                    <div><dt className="sr-only">Courses</dt><dd className="font-head font-medium text-2xl sm:text-3xl text-primary">70+</dd><p className="text-lg font-normal text-[#4B4C53]">Courses</p></div>
                                    <div><dt className="sr-only">Creators</dt><dd className="font-head font-medium text-2xl sm:text-3xl text-primary">16</dd><p className="text-lg font-normal text-[#4B4C53]">Creators</p></div>
                                </dl>
                            </div>
                            <div className="lg:ml-auto lg:order-2 order-1">
                                <Image src={"/images/growth-1.png"} alt="Growth" width={1000} height={1000} className="w-full h-full object-cover"/>
                            </div>
                        </div>
                        <div className="grid gap-5 lg:grid-cols-2 lg:gap-18 items-center justify-items-center">
                            <div className="lg:mr-auto">
                                <Image src={"/images/growth-2.png"} alt="Growth" width={1000} height={1000} className="w-full h-full object-cover"/>
                            </div>
                            <div>
                                <h2 className="max-w-100 home-section-header">Create & Manage Courses Easily.</h2>
                                <p className="home-section-desc mt-10"><span className="font-bold">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
                                <ul className="mt-10 space-y-3 text-lg font-medium">
                                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Share Your Expertise</li>
                                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Monetize Your Passion</li>
                                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Flexibility and Autonomy</li>
                                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Build a Community</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-grid">
                <Image className="absolute inset-0 z-0 w-full h-full object-none sm:object-fill" src={"/images/bg/cta-bg.png"} width={1300} height={1000} alt="hero"/>
                <div className="relative z-10 px-5 py-21 text-center">
                    <h2 className="home-section-header max-w-2xl mx-auto text-[#F5F5F6]">Unlock Your Potential as a Creator with ByteSpace</h2>
                    <p className="max-w-230 mx-auto w-full mt-6 sm:mt-10 home-section-desc text-[#D1D1D1]">
                      Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                    </p>
                    <Link href="/registration" className="mt-8 sm:mt-10 primary-btn w-fit mx-auto"> Join as Creator</Link>
                </div>
            </section>

            <section>
                <div className="relative overflow-hidden bg-[#F7F9F2]">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                        <div className="testimonial-gradient-1"></div>
                        <div className="testimonial-gradient-2"></div>
                        <div className="testimonial-gradient-3"></div>
                    </div>
                    <div className="relative px-5 py-14 sm:py-18 container">
                        <div className="grid gap-5 lg:grid-cols-2 lg:gap-16 lg:items-end max-lg:justify-items-center">
                            <h2 className="home-section-header max-w-xl text-center lg:text-left"> Discover What Our Community Is Saying</h2>
                            <p className="testimonial-desc home-section-desc"> At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
                        </div>
                        <div className="mt-10 sm:mt-18 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
                            {testimonial.map((t)=> (
                                <TestimonialCardComponent key={t.id} {...t} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
