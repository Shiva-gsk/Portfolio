"use client"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import TypewriterEffect from "./components/TypeWriterEffect"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Instagram, Mail } from "lucide-react"
import Link from "next/link"
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      "#home", {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1}
    );
    
  });
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hey there, This is Shiva Kumar</span>
                <span className="block">
                  I&apos;m a{" "}
                  <TypewriterEffect
                    words={[
                      "Full Stack Developer",
                      "AI Enthusiast",
                      "Problem Solver",
                      "Tech Innovator",
                      "Continuous Learner",
                    ]}
                    speed={100}
                    delay={2000}
                  />
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Passionate about creating beautiful, functional, and intelligent web applications. Exploring the
                frontiers of AI and its integration into modern development.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
      </main>
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">I&apos;m always open to new opportunities and collaborations.</p>
          <div className="flex justify-center item-center gap-3 text-lg mt-2">
          <Link href={"https://www.instagram.com/shivag_sk/"} className="text-pink-400 hover:text-indigo-300"><Instagram/></Link>
          <a href="mailto:your.email@example.com" className="text-red-400 hover:text-indigo-300">
          <Mail/>
          </a>
                <Link href={"https://github.com/Shiva-gsk"} className="hover:text-indigo-300"><Github/></Link>

          </div>
          
        </div>
        <br />
        <div className="w-full bg-gray-800 text-center" >
                    Made with ❤️ by Shiva
        </div>
      </footer>
    </div>
  )
}

