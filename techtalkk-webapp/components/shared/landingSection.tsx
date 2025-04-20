type LandingSectionProps = {
  title: string
  info: string
  className?: string
}

export default function LandingSection(props: LandingSectionProps) {
  return (
    <section
      aria-label="landing"
      className="uppercase text-center font-extrabold pt-44 pb-22 space-y-10"
    >
      <h3 className="text-xl md:text-2xl">{props.title}</h3>
      <div className="relative w-full">
      <h1 className="text-6xl sm:text-7xl md:text-8xl !text-center items-center">
        {props.info}
      </h1>
      <div
          className={`absolute hidden sm:block left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2  bg-linear-to-r from-[#4C0BF7] to-[#3105a0] ${props.className}`}
      ></div>
      </div>
    </section>
  )
}