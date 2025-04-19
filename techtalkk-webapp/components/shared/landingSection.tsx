type LandingSectionProps = {
  title: string
  info: string
  className?: string
}

export default function LandingSection({ title, info, className }: LandingSectionProps) {
  return (
    <section
      aria-label="landing"
      className="uppercase text-center font-extrabold pt-44 pb-22 space-y-10"
    >
      <h3 className="text-xl md:text-2xl">{title}</h3>
      <h1 className="text-6xl sm:text-7xl md:text-8xl !text-center items-center relative">
        {info}
        <div
          className={`absolute bg-linear-to-r from-[#4C0BF7] to-[#3105a0] rounded-r-2xl ${className}`}
        ></div>
      </h1>
    </section>
  )
}
