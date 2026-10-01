import { Lesson } from "@/types/lesson"

const ModuleCard = ({number, title, description} : Lesson) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-18 h-18 rounded-3xl bg-secondary flex items-center justify-center shrink-0">
                <i className="icon-video text-[40px]"></i>
            </div>
            <div>
                <p className="text-base font-medium text-black-shadow">Module {number}: {title}</p>
                <p className="text-base font-normal text-[#4F4F4F]">{description}</p>
            </div>
        </div> 
    )
}

export default ModuleCard