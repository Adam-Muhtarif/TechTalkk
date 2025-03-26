import React from 'react'
import { cardsData } from '@/components/ui/about-us/Ui-data/data'

type Card = {
    title: string
    description: string
    icon: unknown
  }
  

  export default function Cards() {
    return (
      <section className="bg-[#E5E8FA] mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-[40px] sm:text-[30px] text-center max-w-5xl mx-auto text-[var(--primary-color)] font-bold">
            Our Core Values: Empowering Innovation <br className="hidden sm:block" /> Through
            Collaboration, Growth, and Respect
          </h2>

          {/* Cards container */}
          <div className="flex flex-col sm:flex-row gap-8 mt-16 justify-center items-stretch">
            {cardsData.map((card: Card) => (
              <Card {...card} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  function Card({ ...card }) {
    return (
      <div className="flex flex-col items-center bg-white rounded-2xl p-8 sm:w-[calc(33.33%-32px)] flex-1 max-w-[363px]">
        <card.icon size={48} strokeWidth={1.25} />
        <h3 className="text-2xl font-bold text-center mt-2 mb-6 text-[var(--primary-color)]">
          {card.title}
        </h3>
        <p className="text-center flex-1">{card.description}</p>
      </div>
    )
  }