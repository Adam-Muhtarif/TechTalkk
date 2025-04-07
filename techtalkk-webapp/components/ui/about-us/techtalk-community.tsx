import Image from 'next/image'

export default function TechtalkCommunity() {
  return (
    <section className="max-w-7xl mx-auto mt-24 relative px-4 sm:px-6 lg:px-8">
      {/* blured image */}
      <Image
        src="/images/about-us/about-us-Ellipse.png"
        width={150}
        height={150}
        alt="about-us"
        className="absolute -top-44 -left-24 hidden"
      />
      {/* container */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* text */}
        <div className="flex flex-col gap-3 max-w-2xl lg:mt-6 justify-between">
          {/* header */}
          <h2 className="text-center text-3xl lg:text-5xl lg:max-w-xl sm:text-start text-[var(--primary-color)] font-bold">
            About TechTalk Community
          </h2>
          {/* paragarph */}
          <div className="text-center">
            <p className="mt-6 lg:text-xl sm:text-lg sm:text-start">
              TechTalk is an online community where technology enthusiasts, developers, and learners
              come together to share knowledge, discuss industry trends, and work on collaborative
              projects. 
            </p>
            <p className="mt-4 lg:text-xl md:text-lg sm:text-start">
              The community is driven by the passion for innovation and a shared goal of creating
              impactful solutions in the tech world.
            </p>
          </div>
        </div>
        {/* rectangular */}
        <div className="relative sm:mt-16 self-center">
          {/* Blue top-loft rounded rectangle */}
          <div className="w-[224px] h-[212px] lg:w-[448px] lg:h-[424px] rounded-tl-[200px] bg-[url(/images/about-us/rectangular-picture.png)] bg-cover bg-center bg-no-repeat z-10 md:w-[350px] sm:h-[330px] sm:rounded-tl-[150px] shadow-custom"></div>
          {/* under rectangle */}
          <div className="w-[120px] h-[125px] lg:w-[327px] lg:h-[318px] sm:w-[250px] sm:h-[240px] rounded-4xl absolute -top-6 -right-10 bg-[#DADCFC] -z-10 sm:-top-10 sm:-right-10"></div>
        </div>
      </div>
    </section>
  )
}
