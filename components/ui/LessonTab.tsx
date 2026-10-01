import { modules } from "@/data/lesson"
import ModuleCard from "./ModuleCard"
const LessonTab = () => {
    return (
        <div className="mt-10">
            <h2 className="font-semibold text-xl">Explore the Modules</h2>
            <div className="mt-6 space-y-6 text-base font-normal leading-7 text-[#4B4C53]">
              <p>Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
            </div>
            <div className="mt-6 space-y-6">
                <h2 className="font-semibold text-xl">Lesson List</h2>
                <div className="mt-6 flex flex-col gap-6">
                    {modules.map((module)=> (
                        <ModuleCard key={module.id} {...module}/>
                    ))}                                
                </div>
            </div>
            <div className="mt-6 space-y-6">
                <h2 className="font-semibold text-xl">Lesson Content</h2>
                <p className="text-base font-normal leading-7 text-[#4B4C53]">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
            </div>
            <div className="mt-6 space-y-6">
                <h2 className="font-semibold text-xl">Lesson Progress Tracking</h2>
                <p className="text-base font-normal leading-7 text-[#4B4C53]">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
            </div>
            <div className="mt-6 bg-white border border-[#CED0D3] rounded-2xl p-4">
                <p className="text-sm font-medium text-black-shadow mb-2">Learning Progress</p>
                <h6 className="font-semibold text-[36px]">55%</h6>
                <div className="h-2 w-full bg-[#E5E6E8] rounded-3xl relative">
                    <div className="rounded-3xl bg-secondary w-[55%] h-full absolute"></div>
                </div>
            </div>
        </div>
    )
}

export default LessonTab