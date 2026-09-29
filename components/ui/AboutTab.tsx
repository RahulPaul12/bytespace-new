import Image from "next/image"

const AboutTab = () => {
    return (
        <div className="mt-10">
            <h2 className="font-semibold text-xl">Description</h2>
            <div className="mt-6 space-y-6 text-base font-normal leading-7 text-[#4B4C53]">
              <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with fundamental concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
              <p>In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
              <p>As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your learning, allowing you to apply these principles in practical scenarios.</p>
            </div>
            <div className="mt-6 space-y-6">
                <h2 className="font-semibold text-xl">Sneak Peak</h2>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                    <div className="aspect-4/3 rounded-xl relative">
                        <Image src={"/images/sneakpick/image1.png"} alt="Course Image" fill className="object-cover"/>
                    </div>
                    <div className="aspect-4/3 rounded-xl relative"><Image src={"/images/sneakpick/image2.png"} alt="Course Image" fill className="object-cover"/></div>
                    <div className="aspect-4/3 rounded-xl relative"><Image src={"/images/sneakpick/image3.png"} alt="Course Image" fill className="object-cover"/></div>
                    <div className="aspect-4/3 rounded-xl relative"><Image src={"/images/sneakpick/image4.png"} alt="Course Image" fill className="object-cover"/></div>
                </div>
            </div>
            <div className="mt-6 space-y-6">
                <h2 className="font-semibold text-xl">Key Points</h2>
                <ul className="mt-6 space-y-3 text-base font-normal text-[#4B4C53]">
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Foundational Concepts</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Design Principles Mastery</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Advanced Techniques in Digital Creation</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Project Showcase and Critique</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Optimizing for Various Platforms</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Digital Asset Management Best Practices</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Monetization Strategies</li>
                    <li className="flex items-center gap-2"><i className="icon-check-circle text-primary text-xl"></i>Capstone Project: Building Your Portfolio</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutTab