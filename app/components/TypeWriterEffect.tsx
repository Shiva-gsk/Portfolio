"use client"

import { useState, useEffect } from "react"

const TypewriterEffect = ({
  words,
  speed = 100,
  delay = 1500,
}: { words: string[]; speed?: number; delay?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentWord = words[currentWordIndex]

        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay])

  return (
    <span className="text-indigo-600">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default TypewriterEffect

