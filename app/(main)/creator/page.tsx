import CardComponent from "@/components/ui/CardComponent"
import { courses } from "@/data/course"
import Image from "next/image"
const Creator = () => {
    return (
        <main>
        <section className="bg-grid pt-30 sm:pt-40 pb-12 sm:pb-18 mb-9">
            <div className="container">
                <div className="flex flex-wrap items-center gap-6">
                    <div className="w-24 h-24 shrink-0 rounded-2xl">
                        <Image className="w-full h-full rounded-2xl object-cover" src={"/images/user/creator-1.png"} alt="user" width={100} height={100}/>
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="font-semibold text-2xl md:text-[36px] text-[#F5F5F6]">PurePearl Studio</h1>
                        <span className="bg-secondary text-#242528] text-base font-medium rounded-full px-4 py-1.5">Creator</span>
                        </div>
                        <p className="mt-1 text-lg font-normal text-[#F5F5F6]">Passionate UI/UX, Web designer</p>
                    </div>
                </div>
                <div className="mt-10 max-w-4xl text-sm font-normal leading-7 text-[#F5F5F6]">
                  <p>Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!</p>
                  <p>Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
                </div>
               <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                 <div className="flex flex-wrap gap-3">
                   <span className="bg-white text-neutral-900 text-lg font-medium rounded-full px-5 py-2.5"><b className="font-medium text-brand text-primary">3</b> Products</span>
                   <span className="bg-white text-neutral-900 text-lg font-medium rounded-full px-5 py-2.5"><b className="font-medium text-brand text-primary">12</b> Followers</span>
                 </div>
                 <button className="primary-btn">Follow</button>
               </div>
            </div>
        </section>
        <section className="container pt-9 pb-18">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                    <button className="filter-btn">
                        <i className="icon-filter text-2xl"></i> Filter
                    </button>
                    <button className="filter-btn">
                        <i className="icon-level text-2xl"></i> Level
                    </button>
                    <button className="filter-btn">
                        <i className="icon-category text-2xl"></i> Category
                    </button>
                </div>
                <button className="filter-btn">
                    <i className="icon-relevant text-2xl"></i> Most relevant
                </button>
            </div>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                <button className="category-btn">Featured</button>
                <button className="category-btn">Music</button>
                <button className="category-btn">Drawing &amp; Painting</button>
                <button className="category-btn">Marketing</button>
                <button className="category-btn">Animation</button>
                <button className="category-btn">Social Media</button>
                <button className="category-btn">UI/UX Design</button>
                <button className="category-btn">Creative Marketing</button>
                <button className="category-btn">Cooking</button>
            </div>
            <div className="pt-4 sm:pt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <CardComponent key={course.slug} {...course} />
                ))}
            </div>
        </section>
        </main>
    )
}

export default Creator