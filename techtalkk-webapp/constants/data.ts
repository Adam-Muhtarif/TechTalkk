export const NavLinks = [
  { name: "Home", href: "/#home" },
  { name: "Community", href: "/#community" },
  { name: "Skills", href: "/#skills" },
  { name: "About Us", href: "/#about-us" },
];

export const FooterLinks = [
  { title: "Home", href: "/#home" },
  { title: "MeetUps", href: "/#meetups" },
  { title: "Courses", href: "/#courses" },
  { title: "Challenges", href: "/#challenges" },
  { title: "Career", href: "/#career" },
  { title: "About", href: "/#about-us" },
];

export const SocialLinks = [
  { name: "YouTube", href: "#", icon: "YtIcon" },
  { name: "Discord", href: "#", icon: "DcIcon" },
  { name: "Instagram", href: "#", icon: "IgIcon" },
  { name: "Facebook", href: "#", icon: "FbIcon" },
];

export const features = [
  { label: "Learn", group: 1 },
  { label: "Connect", group: 1 },
  { label: "Grow", group: 1 },
  { label: "Explore", group: 1 },
  { label: "Interactive Sessions", group: 2 },
  { label: "Community Building", group: 2 },
  { label: "Skill Enhancement", group: 2 },
  { label: "Expert Talks", group: 2 },
];

export type Feature = {
  id: string;
  title: string;
};

export interface AboutUsProps {
  data?: AboutContent;
}

export type AboutContent = {
  heading: string;
  subheading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  primaryFeatures: Feature[];
  secondaryFeatures: Feature[];
};

export const mockAboutData: AboutContent = {
  heading: "About Us",
  subheading: "Our mission is to empower developers by providing a platform",
  description:
    "At TeckTalkk, our mission is to empower developers by providing a platform where they can learn, share, and grow together. We believe in the power of community and collaboration to drive innovation and success in the tech industry. Our team of experts is dedicated to creating a space where developers of all skill levels can connect, exchange ideas, and advance their careers.",
  image: {
    src: "/images/home/image-02.png",
    alt: "Team collaboration at TeckTalkk",
  },
  primaryFeatures: [
    { id: "learn", title: "Learn" },
    { id: "connect", title: "Connect" },
    { id: "grow", title: "Grow" },
    { id: "explore", title: "Explore" },
  ],
  secondaryFeatures: [
    { id: "interactive", title: "Interactive Sessions" },
    { id: "community", title: "Community Building" },
    { id: "skill", title: "Skill Enhancement" },
    { id: "expert", title: "Expert Talks" },
  ],
};

export type BentoGridItem = {
  id: string;
  title: string;
  description?: string;
  image: string;
  className?: string;
  size: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  textPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  textColor?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  overlayDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl";
};

export const aiBentoGridItems: BentoGridItem[] = [
  {
    id: "ai-robot",
    title: "The Rise of AI Robots",
    description:
      "AI-powered robots are revolutionizing industries, from healthcare to automation, enhancing efficiency and precision like never before.",
    image: "/images/ai-robot.png",
    size: {
      mobile: "h-[250px]",
      tablet: "h-[300px]",
      desktop: "col-span-6 h-[300px]",
    },
    overlayColor: "blue-900",
    overlayDirection: "to-r",
    overlayOpacity: 70,
  },
  {
    id: "bots-dominate",
    title: "BOTS NOW DOMINATE THE WEB, AND THAT'S A PROBLEM...",
    description:
      "With automated bots taking over online platforms, misinformation, spam, and cybersecurity threats are rising rapidly.",
    image: "/images/control-room.png",
    size: {
      mobile: "h-[250px]",
      tablet: "h-[300px]",
      desktop: "col-span-6 h-[300px]",
    },
    textPosition: "bottom-left",
    overlayColor: "red-900",
    overlayDirection: "to-r",
    overlayOpacity: 80,
  },
  {
    id: "deepseek",
    title: "DEEPSEEK AND THE HIGH-STAKES GLOBAL AI RACE",
    description:
      "DeepSeek is at the forefront of the AI revolution, competing in a high-stakes race to develop the most powerful AI models.",
    image: "/images/llms-apps.png",
    size: {
      mobile: "h-[200px]",
      tablet: "h-[250px]",
      desktop: "col-span-12 h-[250px]",
    },
    textPosition: "bottom-left",
    overlayColor: "blue-900",
    overlayDirection: "to-r",
    overlayOpacity: 70,
  },
  {
    id: "coding-assistant",
    title: "AI CODING ASSISTANT REFUSES TO WRITE CODE, TELLS USER TO LEARN PROGRAMMING INSTEAD.",
    description:
      "An AI assistant is pushing back against lazy developers, encouraging them to understand fundamental programming concepts first.",
    image: "/images/coding.png",
    size: {
      mobile: "h-[250px]",
      tablet: "h-[300px]",
      desktop: "col-span-4 h-[300px]",
    },
    textPosition: "bottom-left",
    overlayColor: "gray-900",
    overlayDirection: "to-t",
    overlayOpacity: 80,
  },
  {
    id: "database",
    title: "The Power of Big Data",
    description:
      "Data-driven decision-making is reshaping businesses, unlocking insights that drive innovation and efficiency.",
    image: "/images/data-scientist.png",
    size: {
      mobile: "h-[250px]",
      tablet: "h-[300px]",
      desktop: "col-span-4 h-[300px]",
    },
    overlayColor: "indigo-900",
    overlayDirection: "to-t",
    overlayOpacity: 80,
  },
  {
    id: "drone",
    title: "The Future of Drone Technology",
    description:
      "Drones are transforming industries from delivery to surveillance, offering new possibilities in automation and logistics.",
    image: "/images/drone.png",
    size: {
      mobile: "h-[250px]",
      tablet: "h-[300px]",
      desktop: "col-span-4 h-[300px]",
    },
    overlayColor: "orange-900",
    overlayDirection: "to-t",
    overlayOpacity: 80,
  },
];
