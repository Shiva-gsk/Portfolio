"use client"
import type React from "react"
import { Code, Bot, Database } from "lucide-react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const SkillCard = ({
  icon: Icon,
  title,
  description,
}: { icon: React.ElementType; title: string; description: string }) => (
  <div className="skill-card flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
    <Icon className="w-12 h-12 text-indigo-500 mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

export default function Skills() {
   useGSAP(() => {
    gsap.fromTo(
      "#home", {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1}
    );
    document.fonts.ready.then(() => {
      const split1 = SplitText.create(".my-skills", {
      type: "lines, words, chars",
      // linesClass: "line",
    }
    
  );
    gsap.fromTo(
      split1.chars,
      {opacity: 0, y: 50},
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.05,
      }
    );


    });

    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 100},
      {
      opacity: 1,
      y: 0,
      // duration: 1.5,
      ease: "power3.inOut",
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      }
    );
    

  });
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="my-skills text-3xl font-extrabold text-gray-800 text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            icon={Code}
            title="Frontend Development"
            description="Proficient in React, Next.js, and modern CSS frameworks like Tailwind CSS."
          />
          <SkillCard
            icon={Database}
            title="Backend Development"
            description="Experienced with Node.js, Express, and database technologies like MongoDB and PostgreSQL."
          />
          <SkillCard
            icon={Bot}
            title="AI / ML"
            description="Proficient in developing intelligent and adaptive user experiences by leveraging advanced AI and machine learning algorithms."
          />
        </div>
      </div>
    </section>
  )
}

