"use client"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
}: {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl: string
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt={title}
      width={400}
      height={200}
      className="w-full h-48 object-contain object-center opacity-70 hover:opacity-[100%] transition-opacity duration-300"
    />  
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300"
        >
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
)

export default function Projects() {
  const [showMore, setShowMore] = useState(false)

  const initialProjects = [
    {
      title: "Digital Wallet Management System",
      description: "A secure digital wallet management system for managing transactions, balances, and user accounts.",
      imageUrl: "/Digital-Wallet-Management.png",
      githubUrl: "https://github.com/Shiva-gsk/DigiWallet-MCP",
      liveUrl: "https://digiwallet.shivagulapala.me/",
    },
    {
      title: "Text Summarization with T5",
      description: "Product reviews summazier made by Finetuning T5 model",
      imageUrl: "/text-summarizer.png",
      githubUrl: "https://github.com/Shiva-gsk/T5-summarizer",
      liveUrl: "https://huggingface.co/spaces/Shiva-gsk/Text-Summarizer-with-T5",
    },
     {
      title: "PokeVision",
      description: "A Web App for Pokemon lovers to capture images and fill their Pokedex leveraging AI.",
      imageUrl: "/PokeVision.png",
      githubUrl: "https://github.com/Shiva-gsk/PokeVision",
      liveUrl: "https://pokevision.shivagulapala.me/",
    },
    
  ]

  const extraProjects = [
    {
      title: "Url Shortner",
      description: "A tool for shortening URLs, making them more manageable and shareable.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      githubUrl: "https://github.com/Shiva-gsk/Url-shortner",
      liveUrl: "https://url-shortner-1to6.onrender.com",
    },
   
    {
      title: "Nim",
      description: "A two-player mathematical game of strategy with an AI player trained using Reinforcement Learning.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      githubUrl: "https://github.com/Shiva-gsk/Nim",
      liveUrl: "https://github.com/Shiva-gsk/Nim",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {showMore && extraProjects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            {showMore ? (
              <>
                Show Less <ChevronUp className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

