import Image from 'next/image'
import { TickIcon } from '@/components/icons/index'
import { AboutUsProps, mockAboutData } from '@/constants/data'

const AboutUs: React.FC<AboutUsProps> = ({ data = mockAboutData }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      {/* Strict container with max-width of 1400px, centered on the page */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16  md:">
          {/* Image Section - Stacks on top for mobile, left side for desktop */}
          <div className="relative order-1 hidden md:hidden lg:block lg:order-1 mx-auto w-full max-w-lg">
            <div className="relative aspect-[9/10] w-full">
              <div
                className="absolute top-0 left-0 bg-brand-light rounded-2xl w-[85%] h-[85%] transform transition-transform duration-500 ease-in-out group-hover:scale-105  bg-[#dadcfc]"
                aria-hidden="true"
              ></div>
              <div className="absolute top-[8%] left-[8%] w-[92%] h-[92%] overflow-hidden rounded-lg shadow-custom">
                <Image
                  src={data.image.src || '/placeholder.svg'}
                  alt={data.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section - Stacks below for mobile, right side for desktop */}
          <div className="flex flex-col order-2 lg:order-2">
            {/* Section heading with accent color */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#4E58EF] mb-3">{data.heading}</h3>

            {/* Main heading with responsive sizing */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight mb-4">
              {data.subheading}
            </h2>

            {/* Description paragraph with improved readability */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-sans">
              {data.description}
            </p>

            {/* Features grid - Responsive layout that adapts to screen size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {/* Primary features list */}
              <ul className="space-y-3">
                {data.primaryFeatures.map((feature) => (
                  <li key={feature.id} className="flex items-center group">
                    <TickIcon className="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Secondary features list */}
              <ul className="space-y-3 mt-4 sm:mt-0">
                {data.secondaryFeatures.map((feature) => (
                  <li key={feature.id} className="flex items-center group ">
                    <TickIcon className="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs
