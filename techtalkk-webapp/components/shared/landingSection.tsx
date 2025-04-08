type LandingSectionProps = {
  title: string
  info: string
}

export default function LandingSection(prop: LandingSectionProps) {
  return (
    <section aria-label="landing" className="uppercase text-center font-extrabold py-22 space-y-10">
      <h3 className=" text-2xl">{prop.info}</h3>
      <h1 className="text-8xl flex justify-center items-center relative">
        {prop.title}
        <div className="absolute top-1/2 bg-linear-to-r from-[#4C0BF7] to-[#3105a0] h-3 w-[14rem] rounded-r-2xl"></div>
      </h1>
    </section>
  )
}
