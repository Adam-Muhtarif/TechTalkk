import { Button } from '@/components/ui/button'

import JobCard from '@/components/jobs/jobCard'
import LandingSection from '@/components/shared/landingSection'
import UnderConstructionMessage from '@/components/shared/underConstructionMessage'

export default function Jobs() {
  return <UnderConstructionMessage />

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-30 overflow-x-hidden">
      <LandingSection
        title="find the perfect"
        info="job for you !"
        className="h-3 w-[16.5rem] top-[3.5rem] right-[19rem]"
      />

      {/* Filter */}
      <section
        aria-label="filter jobs"
        className="w-full my-4 p-4 grid grid-cols-2 md:grid-cols-4 gap-2 lg:block lg:text-right lg:space-x-2"
      >
        <Button className="uppercase py-5 px-8">freelance</Button>
        <Button className="uppercase py-5 px-8">remote</Button>
        <Button className="uppercase py-5 px-8">part-time</Button>
        <Button className="uppercase py-5 px-8">full-time</Button>
      </section>

      {/* Cards */}
      <section
        aria-label="job cards"
        className="w-full mb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      >
        <JobCard
          companyLogo="/images/blogs/article6.png"
          companyLink="telesom.com"
          companyName="telesom"
          title="junior full stack developer"
          postedAt="posted April 9, 2025"
          expiresAt="April 9, 2025"
          location="remote"
          jobType="full-time"
          salary={150}
          applyLink="https://telesom.com"
        />
        <JobCard
          companyLogo="/images/blogs/article6.png"
          companyLink="telesom.com"
          companyName="telesom"
          title="junior full stack developer"
          postedAt="posted April 9, 2025"
          expiresAt="April 9, 2025"
          location="remote"
          jobType="full-time"
          salary={150}
          applyLink="https://telesom.com"
        />
        <JobCard
          companyLogo="/images/blogs/article6.png"
          companyLink="telesom.com"
          companyName="telesom"
          title="junior full stack developer"
          postedAt="posted April 9, 2025"
          expiresAt="April 9, 2025"
          location="remote"
          jobType="full-time"
          salary={150}
          applyLink="https://telesom.com"
        />
        <JobCard
          companyLogo="/images/blogs/article6.png"
          companyLink="telesom.com"
          companyName="telesom"
          title="junior full stack developer"
          postedAt="posted April 9, 2025"
          expiresAt="April 9, 2025"
          location="remote"
          jobType="full-time"
          salary={150}
          applyLink="https://telesom.com"
        />
        <JobCard
          companyLogo="/images/blogs/article6.png"
          companyLink="telesom.com"
          companyName="telesom"
          title="junior full stack developer"
          postedAt="posted April 9, 2025"
          expiresAt="April 9, 2025"
          location="remote"
          jobType="full-time"
          salary={150}
          applyLink="https://telesom.com"
        />
      </section>
    </main>
  )
}
