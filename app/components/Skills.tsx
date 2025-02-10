import type React from "react"
import { Code, Palette, Database } from "lucide-react"

const SkillCard = ({
  icon: Icon,
  title,
  description,
}: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
    <Icon className="w-12 h-12 text-indigo-500 mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">My Skills</h2>
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
            icon={Palette}
            title="UI/UX Design"
            description="Skilled in creating intuitive and visually appealing user interfaces with tools like Figma."
          />
        </div>
      </div>
    </section>
  )
}

