import Image from 'next/image'
import React from 'react'
import LogoTicker from './logoTicker';
import SectionInfo from '../components/SectionInfo';
import Rocket from "./Rocket.svg"

export default function CurriculmSection() {
    return (
        <section className='overflow-hidden py-16 px-4 font-archivo relative'>
            {/* container */}
            <div className='w-full relative max-w-7xl mx-auto'>
                {/* background pattern */}
                <Image src="/images/eventsSection/Background.png" width={907} height={645} alt='background' className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0' />
                <SectionInfo title="Learn. Build. Scale." sectionName='Full-Stack Curriculum' icon={<Rocket />} description='🚀 Master Full Stack Development: Build, deploy, and scale web apps with hands-on projects and expert guidance.
                ' />

                {/* cards */}
                <CardSection />
            </div>
            <LogoTicker />
        </section>
    )
}

interface FeatureCardProps {
    title: string;
    titleIcon: string;
    iconBgColor: string;
    titleBgColor: string;
    titleTextColor: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonArrow: string;
    bgColor: string;
}

const FeatureCard = ({
    title,
    titleIcon,
    titleBgColor,
    iconBgColor,
    titleTextColor,
    heading,
    description,
    buttonText,
    buttonArrow,
    bgColor
}: FeatureCardProps) => (

    <div className={`flex flex-col p-4.5 justify-between rounded-[29px] min-w-[202px] max-w-[202px] max-h-[270px] min-h-[270px] ${bgColor} z-10`}>
        <div className={`flex items-center gap-1 rounded-full overflow-clip max-w-fit ${titleBgColor}`}>
            <div className={`rounded-full p-3 ${iconBgColor}`}>
                <Image src={titleIcon} width={11} height={11} alt={`${title} icon`} />
            </div>
            <p className={`text-xs mr-1.5 ${titleTextColor}`}>{title}</p>
        </div>
        <h1 className='text-2xl'>{heading}</h1>
        <p className='text-xs text-black/50'>{description}</p>
        <div className='bg-white w-full py-3.5 px-11e rounded-full'>
            {/* button */}
            <div className='flex gap-0.5 items-center justify-center hover:cursor-pointer group'>
                <p className='font-bold text-xs text-[#5B5C60]'>See</p>
                <p className={`font-bold text-xs ${titleTextColor}`}>{buttonText}</p>
                <Image src={buttonArrow} alt='arrow' width={13} height={17} className='group-hover:translate-x-1 transition-transform' />
            </div>
        </div>
    </div>

);

const CardSection = () => {
    const cardsData = [
        {
            title: 'Community',
            titleIcon: '/images/curriculm-section/community.png',
            titleBgColor: 'bg-[#0097DC]/42',
            iconBgColor: 'bg-[#0097DC]',
            titleTextColor: 'text-[#0097DC]',
            heading: 'Grow with the Community',
            description: 'Engage, share ideas, and build with peers in a supportive space.',
            buttonText: 'Community',
            buttonArrow: '/images/curriculm-section/CommunityArrow.png',
            bgColor: 'bg-[#B3E4CB]/50'
        },
        {
            title: 'Sessions',
            titleIcon: '/images/curriculm-section/sessions.png',
            titleBgColor: 'bg-[#F36C42]/42', // Example different color
            iconBgColor: 'bg-[#F36C42]',
            titleTextColor: 'text-[#F36C42]',
            heading: 'Live Coding Sessions',
            description: 'Join interactive sessions with experts...',
            buttonText: 'Sessions',
            buttonArrow: '/images/curriculm-section/CommunityArrow.png',
            bgColor: 'bg-[#FFD700]/50' // Example different background
        },
        // Challenges Card
        {
            title: 'Challenges',
            titleIcon: '/images/curriculm-section/challenges.png',
            titleBgColor: 'bg-[#FF6B6B]/42',
            iconBgColor: 'bg-[#FF6B6B]',
            titleTextColor: 'text-[#FF6B6B]',
            heading: 'Challenges & Problems',
            description: 'Challenge yourself with RCC and real-world problems to sharpen your skills and level up.',
            buttonText: 'Challenges',
            buttonArrow: '/images/curriculm-section/CommunityArrow.png',
            bgColor: 'bg-[#FFB6C1]/50'
        },
        // Mentor Card
        {
            title: 'Mentor',
            titleIcon: '/images/curriculm-section/mentor.png',
            titleBgColor: 'bg-[#B331EB]/42',
            iconBgColor: 'bg-[#B331EB]',
            titleTextColor: 'text-[#9F7AEA]',
            heading: 'Get a Mentor',
            description: 'Connect with experienced mentors for personalized guidance to accelerate your growth and reach your goals.',
            buttonText: 'Mentor',
            buttonArrow: '/images/curriculm-section/CommunityArrow.png',
            bgColor: 'bg-[#E9D8FD]/50'
        }
    ];

    return (
        <div className='flex justify-center flex-wrap gap-2.5 tems-center mt-12 font-inter'>
            {cardsData.map((card, index) => (
                <FeatureCard
                    key={index}
                    {...card}
                />
            ))}
        </div>
    );
};
