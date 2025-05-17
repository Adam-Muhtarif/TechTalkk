"use client"

import { Palette, Laptop, Smartphone, Code, Server, Video } from "lucide-react"
import { useEffect, useRef } from "react"

export default function LogoTicker() {
    const tickerRef = useRef<HTMLDivElement>(null)

    // Categories with their icons
    const categories = [
        { name: "Digital Marketing", icon: null },
        { name: "Graphic Design", icon: <Palette className="h-4 w-4 mr-2" /> },
        { name: "Web Design", icon: <Laptop className="h-4 w-4 mr-2" /> },
        { name: "UX/UI Design", icon: <Smartphone className="h-4 w-4 mr-2" /> },
        { name: "Frontend Devs.", icon: <Code className="h-4 w-4 mr-2" /> },
        { name: "Backend Devs.", icon: <Server className="h-4 w-4 mr-2" /> },
        { name: "Video Production", icon: <Video className="h-4 w-4 mr-2" /> },
    ]

    useEffect(() => {
        // Calculate the animation duration based on the content width
        const ticker = tickerRef.current
        if (!ticker) return

        // Get the width of a single set of items
        const firstSetWidth = ticker.scrollWidth / 2

        // Set the animation duration based on width (faster for wider content)
        const duration = firstSetWidth / 50 // Adjust the divisor to change speed

        // Apply the calculated duration to the animation
        ticker.style.animationDuration = `${duration}s`
    }, [])

    return (
        <div className="w-full max-w-7xl mx-auto overflow-hidden mt-12">
            <div className="ticker-wrapper before:content-[''] after:content-[''] before:z-10 after:z-10 before:absolute after:absolute before:h-full after:h-full before:w-[20px] after:w-[20px] before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,white,rgba(255,255,255,0))] after:bg-[linear-gradient(to_left,white,rgba(255,255,255,0))]">
                <div className="ticker" ref={tickerRef}>
                    {/* First set of categories */}
                    {categories.map((category, index) => (
                        <div
                            key={`first-${index}`}
                            className="ticker-item inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium"
                        >
                            {category.icon}
                            {category.name}
                        </div>
                    ))}

                    {/* Duplicate set for seamless looping */}
                    {categories.map((category, index) => (
                        <div
                            key={`second-${index}`}
                            className="ticker-item inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium"
                        >
                            {category.icon}
                            {category.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for the infinite animation */}
            <style jsx global>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .ticker {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker linear infinite;
        }

        .ticker-item {
          margin-right: 1rem;
          flex-shrink: 0;
        }

        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .ticker-wrapper:hover .ticker {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    )
}
