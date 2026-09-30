import CardComponent from "@/components/ui/CardComponent"
import PaginationComponent from "@/components/ui/PaginationComponent"
import { courses } from "@/data/course"
const Course = () => {
    return (
    <>
        <section className="bg-grid pt-40 pb-12 sm:pb-18 mb-9">
            <div className="container">
                <h1 className="section-heading">Find Your Next Course</h1>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <label className="flex items-center gap-3 bg-white text-black-shadow rounded-full h-13 px-5 w-full sm:w-105">
                      <i className="icon-search text-gray text-2xl"></i>
                      <input type="search" placeholder="Search" className="w-full outline-none text-sm placeholder:text-neutral-400 bg-transparent"/>
                    </label>
                    <button className="primary-btn"> Courses <i className="icon-chevron-right rotate-90"></i></button>
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
            <div className="my-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                <button className="category-btn bg-secondary!">Featured</button>
                <button className="category-btn">Music</button>
                <button className="category-btn">Drawing &amp; Painting</button>
                <button className="category-btn">Marketing</button>
                <button className="category-btn">Animation</button>
                <button className="category-btn">Social Media</button>
                <button className="category-btn">UI/UX Design</button>
                <button className="category-btn">Creative Marketing</button>
                <button className="category-btn">Cooking</button>
            </div>
            <div className="pt-4 sm:pt-10">
                <div className=" grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <CardComponent key={course.slug} {...course} />
                    ))}
                </div>
                <PaginationComponent/>
            </div>
        </section>
    </>
    )
}

export default Course