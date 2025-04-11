// USERS
export const users = [
  {
    email: 'muhtarif.web.dev@gmail.com',
    fullName: 'Adam',
    password: '123',
    role: 'admin',
    isActive: true,
    _verified: true,
  },
]

// SPONSORS
export const sponsors = [
  {
    company: 'telesom',
    company_link: 'https://www.telesom.com',
    company_logo_remote: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Telesom_logo.png',
  },
  {
    company: 'somtel',
    company_link: 'https://somtelnetwork.net',
    company_logo_remote: 'https://somtelnetwork.net/images/logo.png',
  },
]

// LEADERBOARDS
export const leaderboard = [
  {
    name: 'Ayaan Ali',
    title: 'Full Stack Dev',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/men/1.jpg',
    rank: 1,
    socials: [
      { platform: 'GitHub', url: 'https://github.com/ayaanali' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/ayaanali' },
    ],
  },
  {
    name: 'Zahra Yusuf',
    title: 'Frontend Dev',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/women/2.jpg',
    rank: 2,
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/zahraY' },
      { platform: 'Website', url: 'https://zahra.dev' },
    ],
  },
  {
    name: 'Mohamed Noor',
    title: 'Backend Dev',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/men/3.jpg',
    rank: 3,
    socials: [{ platform: 'GitHub', url: 'https://github.com/mnoor' }],
  },
  {
    name: 'Layla Osman',
    title: 'Mobile Dev',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/women/4.jpg',
    rank: 4,
    socials: [
      { platform: 'Website', url: 'https://laylaos.dev' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/laylao' },
    ],
  },
  {
    name: 'Hamza Farah',
    title: 'Cloud Engineer',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/men/5.jpg',
    rank: 5,
    socials: [{ platform: 'Twitter', url: 'https://twitter.com/hamzaf' }],
  },
  {
    name: 'Fatima Abdi',
    title: 'ML Engineer',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/women/6.jpg',
    rank: 6,
    socials: [{ platform: 'GitHub', url: 'https://github.com/fatimaa' }],
  },
  {
    name: 'Khalid Barre',
    title: 'DevOps Specialist',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/men/7.jpg',
    rank: 7,
    socials: [{ platform: 'LinkedIn', url: 'https://linkedin.com/in/khalidb' }],
  },
  {
    name: 'Salma Aden',
    title: 'UI/UX Designer',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/women/8.jpg',
    rank: 8,
    socials: [{ platform: 'Website', url: 'https://salma.design' }],
  },
  {
    name: 'Yusuf Ahmed',
    title: 'Security Analyst',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/men/9.jpg',
    rank: 9,
    socials: [{ platform: 'Twitter', url: 'https://twitter.com/yusufah' }],
  },
  {
    name: 'Nimco Warsame',
    title: 'Game Developer',
    image: null,
    image_remote: 'https://randomuser.me/api/portraits/women/10.jpg',
    rank: 10,
    socials: [{ platform: 'GitHub', url: 'https://github.com/nimcow' }],
  },
]

// BLOG TAGS
export const blogTags = [
  { name: 'Article', slug: 'article' },
  { name: 'Tech News', slug: 'tech-news' },
  { name: 'AI', slug: 'ai' },
]

// VIDEO TAGS
export const videoTags = [
  { name: 'Short video', slug: 'short-video' },
  { name: 'Course', slug: 'course' },
  { name: 'Tutorial', slug: 'tutorial' },
]

// BLOGS
export const blogs = [
  {
    title: 'Mastering TypeScript in 2025',
    slug: 'mastering-typescript-2025',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                text: 'TypeScript continues to grow in popularity. In this article, we explore its power in modern web development.',
                type: 'text',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    author: 'Ayaan Ali',
    tags: [],
    cover_image: null,
    cover_image_remote: 'https://source.unsplash.com/random/800x600?typescript',
    status: 'published',
  },
  {
    title: 'Why You Should Learn NestJS',
    slug: 'why-learn-nestjs',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                text: 'NestJS provides a scalable architecture and is perfect for enterprise-level Node.js applications.',
                type: 'text',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    author: 'Zahra Yusuf',
    tags: [],
    cover_image: null,
    cover_image_remote: 'https://source.unsplash.com/random/800x600?nestjs',
    status: 'published',
  },
  {
    title: 'Building Beautiful UIs with Tailwind CSS',
    slug: 'building-beautiful-uis-tailwind',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                text: 'Tailwind CSS lets you rapidly build modern websites without ever leaving your HTML.',
                type: 'text',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    author: 'Layla Osman',
    tags: [],
    cover_image: null,
    cover_image_remote: 'https://source.unsplash.com/random/800x600?tailwind',
    status: 'published',
  },
  {
    title: 'The Future of AI in Web Development',
    slug: 'future-of-ai-in-webdev',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                text: 'AI is already changing how we build and test applications. Here’s what’s next.',
                type: 'text',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    author: 'Fatima Abdi',
    tags: [],
    cover_image: null,
    cover_image_remote: 'https://source.unsplash.com/random/800x600?ai',
    status: 'published',
  },
  {
    title: 'How to Stay Productive as a Developer',
    slug: 'dev-productivity-tips',
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                text: 'Learn proven strategies to stay focused and productive in your daily dev life.',
                type: 'text',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
          },
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    },
    author: 'Hamza Farah',
    tags: [],
    cover_image: null,
    cover_image_remote: 'https://source.unsplash.com/random/800x600?developer',
    status: 'published',
  },
]

// VIDEOS
export const videos = [
  {
    youtube_link: 'https://www.youtube.com/watch?v=RGOj5yH7evk', // Dev Ed - Git & GitHub
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=1WmNXEVia8I', // Fireship - Next.js in 100 seconds
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0', // Programming with Mosh - React Tutorial
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=RLtyhwFtXQA', // The Net Ninja - Node.js Crash Course
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=BwuLxPH8IDs', // Academind - What is TypeScript?
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=kqtD5dpn9C8', // Programming with Mosh - Python for Beginners
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=rfscVS0vtbw', // freeCodeCamp - Learn Python - Full Course for Beginners
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=A74TOX803D0', // freeCodeCamp - Java Programming for Beginners – Full Course
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=OKuiyX5k6zg', // Top 20 Python Projects for Beginners to Advanced
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=jTJvyKZDFsY', // 20 Programming Projects That Will Make You A God At Coding
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=3PHXvlpOkf4', // Traversy Media - JavaScript Crash Course
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', // freeCodeCamp - JavaScript Tutorial for Beginners
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=Z1Yd7upQsXY', // freeCodeCamp - Learn React JS - Full Course for Beginners
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=Oe421EPjeBE', // Fireship - Next.js in 100 Seconds
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc', // Kevin Powell - Learn CSS Grid
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=UB1O30fR-EE', // Traversy Media - HTML Crash Course
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=Q33KBiDriJY', // Dev Ed - Learn CSS in 20 Minutes
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=1PnVor36_40', // freeCodeCamp - Learn Flexbox in 15 Minutes
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=3qBXWUpoPHo', // freeCodeCamp - Learn SQL in 1 Hour
    instructor: '',
    tags: [],
  },
  {
    youtube_link: 'https://www.youtube.com/watch?v=2OHbjep_WjQ', // Dev Ed - Git & GitHub Crash Course
    instructor: '',
    tags: [],
  },
]

// EVENTSq
export const events = [
  {
    title: 'TeckTalkk Kickoff 2025',
    description:
      'Join us for the official TeckTalkk launch event full of workshops, talks, and networking!',
    image_remote: 'https://images.unsplash.com/photo-1581092160611-3c4c75d2d94b',
    host_name: 'Mohamed Salah',
    host_image: '', // media ID
    host_image_remote: 'https://randomuser.me/api/portraits/men/1.jpg',
    host_socials: [
      { platform: 'Twitter', url: 'https://twitter.com/mosalah' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/mosalah' },
    ],
    location: 'Mogadishu Tech Hub',
    location_icon: '',
    sponsors: [],
    start_time: '2025-05-05T10:00:00.000Z',
    period: '4 hours',
  },
  {
    title: 'AI & Future Careers',
    description: 'Discover how AI is reshaping industries and careers in this futuristic event.',
    image_remote: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    host_name: 'Amina Yusuf',
    host_image: '',
    host_image_remote: 'https://randomuser.me/api/portraits/women/2.jpg',
    host_socials: [{ platform: 'Website', url: 'https://aminayusuf.dev' }],
    location: 'Virtual - Zoom',
    location_icon: '',
    sponsors: [],
    start_time: '2025-06-12T14:30:00.000Z',
    period: '2.5 hours',
  },
  {
    title: 'Frontend Jam with React',
    description: 'A live coding jam session where we build cool UIs using React and Tailwind.',
    image_remote: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    host_name: 'Zubair Khan',
    host_image: '',
    host_image_remote: 'https://randomuser.me/api/portraits/men/3.jpg',
    host_socials: [{ platform: 'GitHub', url: 'https://github.com/zubairdev' }],
    location: 'TeckLab Auditorium',
    location_icon: '',
    sponsors: [],
    start_time: '2025-07-20T09:00:00.000Z',
    period: '6 hours',
  },
  {
    title: 'Freelancing 101 - From Zero to Hero',
    description: 'Get practical insights on freelancing, building your brand, and finding clients.',
    image_remote: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9',
    host_name: 'Fatima Noor',
    host_image: '',
    host_image_remote: 'https://randomuser.me/api/portraits/women/4.jpg',
    host_socials: [{ platform: 'Facebook', url: 'https://facebook.com/freelancefatima' }],
    location: 'Online - Discord',
    location_icon: '',
    sponsors: [],
    start_time: '2025-08-18T17:00:00.000Z',
    period: '3 hours',
  },
  {
    title: 'Tech Career Fair 2025',
    description:
      'Meet top companies, discover internships, and apply live during our biggest fair yet.',
    image_remote: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde72',
    host_name: 'Hassan Osman',
    host_image: '',
    host_image_remote: 'https://randomuser.me/api/portraits/men/5.jpg',
    host_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/hassan-osman' },
      { platform: 'Website', url: 'https://hassan.dev' },
    ],
    location: 'Innovation Center Hargeisa',
    location_icon: '',
    sponsors: [],
    start_time: '2025-09-09T11:00:00.000Z',
    period: '5 hours',
  },
]

// INSTRUCTORS
export const instructors = [
  {
    name: 'Ahmed Ali',
    title: 'Senior Software Engineer',
    bio: 'Ahmed has over 10 years of experience in full-stack development, with expertise in JavaScript and Python.',
    image_remote: 'https://randomuser.me/api/portraits/men/1.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmed-ali' },
      { platform: 'GitHub', url: 'https://github.com/ahmedali' },
    ],
  },
  {
    name: 'Fatima Ibrahim',
    title: 'UX/UI Designer',
    bio: 'Fatima specializes in creating user-friendly interfaces with a strong focus on accessibility and usability.',
    image_remote: 'https://randomuser.me/api/portraits/women/2.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/fatima-ibrahim' },
      { platform: 'Website', url: 'https://fatima-designs.com' },
    ],
  },
  {
    name: 'Mohamed Abdullahi',
    title: 'AI/ML Researcher',
    bio: 'Mohamed is a researcher with a PhD in Artificial Intelligence and focuses on reinforcement learning and robotics.',
    image_remote: 'https://randomuser.me/api/portraits/men/3.jpg',
    instructor_socials: [
      { platform: 'GitHub', url: 'https://github.com/mohamedabdullahi' },
      { platform: 'Twitter', url: 'https://twitter.com/mohamed_ai' },
    ],
  },
  {
    name: 'Zahra Yusuf',
    title: 'Data Scientist',
    bio: 'Zahra has a strong background in data analysis and machine learning, with a focus on predictive analytics.',
    image_remote: 'https://randomuser.me/api/portraits/women/4.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/zahra-yusuf' },
      { platform: 'GitHub', url: 'https://github.com/zahra-data' },
    ],
  },
  {
    name: 'Abdirahman Farah',
    title: 'Cloud Architect',
    bio: 'Abdirahman is an expert in cloud infrastructure, specializing in AWS, Azure, and DevOps practices.',
    image_remote: 'https://randomuser.me/api/portraits/men/5.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/abdirahman-farah' },
      { platform: 'GitHub', url: 'https://github.com/abdirahman-cloud' },
    ],
  },
  {
    name: 'Ladan Ali',
    title: 'Mobile App Developer',
    bio: 'Ladan has a passion for developing high-performance mobile applications with React Native and Flutter.',
    image_remote: 'https://randomuser.me/api/portraits/women/6.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/ladan-ali' },
      { platform: 'GitHub', url: 'https://github.com/ladanmobile' },
    ],
  },
  {
    name: 'Said Ahmed',
    title: 'Blockchain Developer',
    bio: 'Said is a blockchain enthusiast, focusing on decentralized apps (DApps) and smart contracts development.',
    image_remote: 'https://randomuser.me/api/portraits/men/7.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/said-ahmed' },
      { platform: 'Twitter', url: 'https://twitter.com/said_blockchain' },
    ],
  },
  {
    name: 'Hodan Abdi',
    title: 'Cybersecurity Expert',
    bio: 'Hodan is passionate about securing digital infrastructures, with expertise in ethical hacking and penetration testing.',
    image_remote: 'https://randomuser.me/api/portraits/women/8.jpg',
    instructor_socials: [
      { platform: 'GitHub', url: 'https://github.com/hodansec' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/hodan-abdi' },
    ],
  },
  {
    name: 'Ismail Omar',
    title: 'Game Developer',
    bio: 'Ismail is a game developer with experience in Unity and Unreal Engine, focusing on immersive 3D experiences.',
    image_remote: 'https://randomuser.me/api/portraits/men/9.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/ismail-omar' },
      { platform: 'GitHub', url: 'https://github.com/ismailgame' },
    ],
  },
  {
    name: 'Nimo Ali',
    title: 'Web Developer',
    bio: 'Nimo has a strong background in frontend development, working with React.js and Vue.js to create interactive web apps.',
    image_remote: 'https://randomuser.me/api/portraits/women/10.jpg',
    instructor_socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/nimo-ali' },
      { platform: 'GitHub', url: 'https://github.com/nimo-web' },
    ],
  },
]

// JOB POSTS
export const jobs = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Tech Innovations Ltd.',
    company_link: 'https://techinnovations.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/1.jpg',
    location: 'remote',
    job_type: 'full-time',
    salary: 120000,
    apply_link: 'https://techinnovations.com/careers/senior-software-engineer',
    posted_at: '2025-04-10T10:00:00Z',
    expires_at: '2025-05-10T10:00:00Z',
  },
  {
    title: 'UX/UI Designer',
    company_name: 'Design Studios',
    company_link: 'https://designstudios.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/women/2.jpg',
    location: 'hybrid',
    job_type: 'part-time',
    salary: 50000,
    apply_link: 'https://designstudios.com/careers/ux-ui-designer',
    posted_at: '2025-04-08T14:00:00Z',
    expires_at: '2025-05-08T14:00:00Z',
  },
  {
    title: 'Data Scientist',
    company_name: 'Data Solutions Inc.',
    company_link: 'https://datasolutions.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/3.jpg',
    location: 'onsite',
    job_type: 'full-time',
    salary: 110000,
    apply_link: 'https://datasolutions.com/careers/data-scientist',
    posted_at: '2025-04-07T09:00:00Z',
    expires_at: '2025-05-07T09:00:00Z',
  },
  {
    title: 'Mobile App Developer',
    company_name: 'MobileTech Co.',
    company_link: 'https://mobiletech.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/4.jpg',
    location: 'remote',
    job_type: 'contract',
    salary: 75000,
    apply_link: 'https://mobiletech.com/careers/mobile-app-developer',
    posted_at: '2025-04-06T16:00:00Z',
    expires_at: '2025-05-06T16:00:00Z',
  },
  {
    title: 'Blockchain Developer',
    company_name: 'Crypto Solutions',
    company_link: 'https://cryptosolutions.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/5.jpg',
    location: 'onsite',
    job_type: 'internship',
    salary: 30000,
    apply_link: 'https://cryptosolutions.com/careers/blockchain-developer',
    posted_at: '2025-04-05T11:00:00Z',
    expires_at: '2025-05-05T11:00:00Z',
  },
  {
    title: 'Cloud Architect',
    company_name: 'CloudTech Inc.',
    company_link: 'https://cloudtech.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/6.jpg',
    location: 'remote',
    job_type: 'full-time',
    salary: 130000,
    apply_link: 'https://cloudtech.com/careers/cloud-architect',
    posted_at: '2025-04-04T13:00:00Z',
    expires_at: '2025-05-04T13:00:00Z',
  },
  {
    title: 'AI/ML Researcher',
    company_name: 'AI Labs',
    company_link: 'https://ailabs.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/women/3.jpg',
    location: 'onsite',
    job_type: 'full-time',
    salary: 115000,
    apply_link: 'https://ailabs.com/careers/ai-ml-researcher',
    posted_at: '2025-04-03T12:00:00Z',
    expires_at: '2025-05-03T12:00:00Z',
  },
  {
    title: 'Game Developer',
    company_name: 'GameWorks Studio',
    company_link: 'https://gameworks.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/7.jpg',
    location: 'hybrid',
    job_type: 'contract',
    salary: 85000,
    apply_link: 'https://gameworks.com/careers/game-developer',
    posted_at: '2025-04-02T15:00:00Z',
    expires_at: '2025-05-02T15:00:00Z',
  },
  {
    title: 'Web Developer',
    company_name: 'WebWorks LLC',
    company_link: 'https://webworks.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/women/4.jpg',
    location: 'remote',
    job_type: 'part-time',
    salary: 60000,
    apply_link: 'https://webworks.com/careers/web-developer',
    posted_at: '2025-04-01T08:00:00Z',
    expires_at: '2025-05-01T08:00:00Z',
  },
  {
    title: 'Cybersecurity Expert',
    company_name: 'SecureTech',
    company_link: 'https://securetech.com',
    company_logo_remote: 'https://randomuser.me/api/portraits/men/8.jpg',
    location: 'onsite',
    job_type: 'full-time',
    salary: 125000,
    apply_link: 'https://securetech.com/careers/cybersecurity-expert',
    posted_at: '2025-03-31T10:00:00Z',
    expires_at: '2025-05-01T10:00:00Z',
  },
]
