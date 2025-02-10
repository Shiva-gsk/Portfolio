"use client"

import { useState, useCallback } from "react"
import type React from "react" // Added import for React

const NavItem = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative group cursor-pointer"
  >
    {text}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
  </a>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = useCallback((elementId: string) => {
    setIsOpen(false) // Close mobile menu if open
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const handleNavItemClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const sectionId = href.replace("#", "")
      scrollToSection(sectionId)
    },
    [scrollToSection],
  )

  return (
    <nav className="bg-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Shiva Kumar Gulapala</span>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavItem href="#home" text="Home" onClick={(e) => handleNavItemClick(e, "#home")} />
                <NavItem href="#skills" text="Skills" onClick={(e) => handleNavItemClick(e, "#skills")} />
                <NavItem href="#projects" text="Projects" onClick={(e) => handleNavItemClick(e, "#projects")} />
                <NavItem href="#contact" text="Contact" onClick={(e) => handleNavItemClick(e, "#contact")} />
              </div>
            </div>
          </div>
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {(
        <div className={`md:hidden transition-all  ${
      isOpen ? "opacity-100 scale-y-100 max-h-full block duration-500 ease-in-out transform" : "max-h-0 opacity-0 scale-y-0"
    } origin-top`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transform transition duration-500 ">
            <NavItem href="#home" text="Home" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavItemClick(e, "#home")} />
            <NavItem href="#skills" text="Skills" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavItemClick(e, "#skills")} />
            <NavItem href="#projects" text="Projects" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavItemClick(e, "#projects")} />
            <NavItem href="#contact" text="Contact" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavItemClick(e, "#contact")} />
          </div>
        </div>
      )}
    </nav>
  )
}

