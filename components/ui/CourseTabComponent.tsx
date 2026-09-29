"use client";

import { useState } from "react";
import AboutTab from "./AboutTab";
import LessonsTab from "./LessonTab";
import ReviewTab from "./ReviewTab";

const tabs = ["About", "Lessons", "Reviews"];

export default function CourseTabs() {
  const [active, setActive] = useState("About");

  return (
    <>
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`category-btn ${active === tab ? "bg-secondary text-black-shadow!" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {active === "About" && <AboutTab/>}
        {active === "Lessons" && <LessonsTab/>}
        {active === "Reviews" && <ReviewTab/>}
      </div>
    </>
  );
}