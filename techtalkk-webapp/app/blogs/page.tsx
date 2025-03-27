"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "AI's Impact on Web Development",
    category: "AI",
    date: "March 26, 2025",
    image: "/images/blogs/article1.png",
    description: "Artificial Intelligence is revolutionizing the way websites are built and maintained. From automated code generation to intelligent design suggestions, AI-powered tools enhance developer productivity and streamline workflows. This article explores how AI is transforming the web development landscape, including real-world applications, tools like GitHub Copilot, and the future of AI-driven web design."
  },
  {
    id: 2,
    title: "Next.js vs React: What’s Best in 2025?",
    category: "Web Development",
    date: "March 25, 2025",
    image: "/images/blogs/article2.png",
    description: "Next.js and React remain two of the most popular frameworks for building modern web applications. But which one is the better choice in 2025? This article dives into their key differences, performance optimizations, server-side rendering, static site generation, and when to choose one over the other. Get insights into how each framework fits various project requirements."
  },
  {
    id: 3,
    title: "Web3 & Decentralization: The Future?",
    category: "Cloud Computing",
    date: "March 24, 2025",
    image: "/images/blogs/article3.png",
    description: "Web3 technologies are poised to redefine the internet as we know it. With blockchain-powered applications, decentralized finance, and smart contracts, Web3 promises more control and security for users. In this article, we explore how decentralization is shaping the future of the web and whether businesses and developers should start preparing for this transformation."
  },
  {
    id: 4,
    title: "Understanding TypeScript for React Developers",
    category: "Web Development",
    date: "March 23, 2025",
    image: "/images/blogs/article4.png",
    description: "TypeScript has become a must-learn language for React developers. This guide walks you through the fundamentals of TypeScript, its advantages over JavaScript, how it improves code maintainability, and how to integrate it seamlessly into your React projects. We also provide best practices for error handling, interfaces, and type safety in modern applications."
  },
  {
    id: 5,
    title: "Best UI Libraries for React in 2025",
    category: "Design",
    date: "March 22, 2025",
    image: "/images/blogs/article5.png",
    description: "UI component libraries help developers build beautiful, consistent interfaces faster. In this article, we review the best UI libraries for React in 2025, including Material UI, Tailwind UI, Chakra UI, and Ant Design. We compare their features, customization options, and performance to help you choose the best library for your next project."
  },
  {
    id: 6,
    title: "Is Tailwind CSS the Future?",
    category: "Design",
    date: "March 21, 2025",
    image: "/images/blogs/article6.png",
    description: "Tailwind CSS has gained massive popularity due to its utility-first approach. This article explores its benefits, such as faster development times, improved design consistency, and reduced CSS bloat. We also discuss its limitations, common misconceptions, and how it compares to traditional CSS frameworks like Bootstrap."
  },
  {
    id: 7,
    title: "The Power of Server Components in Next.js 14",
    category: "Web Development",
    date: "March 20, 2025",
    image: "/images/blogs/article7.png",
    description: "Next.js 14 introduces server components, allowing developers to build more efficient applications with improved performance and reduced client-side JavaScript. This article explains how server components work, their advantages over client components, and how to implement them effectively in real-world projects."
  },
  {
    id: 8,
    title: "Top JavaScript Frameworks for 2025",
    category: "Web Development",
    date: "March 19, 2025",
    image: "/images/blogs/article8.png",
    description: "JavaScript frameworks continue to evolve, making development more streamlined and efficient. In this guide, we highlight the top JavaScript frameworks of 2025, including React, Vue, Svelte, and Astro. Learn about their pros, cons, and which one best suits your project requirements."
  },
  {
    id: 9,
    title: "The Rise of AI-Powered Code Assistants",
    category: "AI",
    date: "March 18, 2025",
    image: "/images/blogs/article9.png",
    description: "AI-powered code assistants like GitHub Copilot and Tabnine are transforming how developers write code. This article explores their capabilities, how they improve productivity, and whether they will replace traditional coding methods. We also discuss ethical concerns and how AI is shaping the future of software development."
  },
  {
    id: 10,
    title: "How to Secure Your Next.js App",
    category: "Web Development",
    date: "March 17, 2025",
    image: "/images/blogs/article1.png",
    description: "Security is a top priority when building web applications. This article provides a comprehensive guide to securing Next.js applications, covering authentication, authorization, API security, data encryption, and best practices for preventing security vulnerabilities."
  },
  {
    id: 11,
    title: "The Evolution of Cloud Computing",
    category: "Cloud Computing",
    date: "March 16, 2025",
    image: "/images/blogs/article2.png",
    description: "Cloud computing has evolved significantly over the past decade. From traditional cloud services to serverless architectures and edge computing, this article explores the major shifts in cloud technology and what the future holds for businesses and developers."
  },
  {
    id: 12,
    title: "Mastering CSS Grid for Layouts",
    category: "Design",
    date: "March 15, 2025",
    image: "/images/blogs/article3.png",
    description: "CSS Grid is one of the most powerful layout tools in web design. In this guide, we cover the fundamentals of CSS Grid, advanced layout techniques, and real-world examples to help you master modern web design."
  },
  {
    id: 13,
    title: "JavaScript ES2025 Features You Need to Know",
    category: "Web Development",
    date: "March 14, 2025",
    image: "/images/blogs/article4.png",
    description: "JavaScript continues to evolve with new ES2025 features. This article highlights the most exciting additions, including new syntax, improved performance, and how they can enhance modern web development."
  },
  {
    id: 14,
    title: "How to Optimize Your Website Performance",
    category: "Web Development",
    date: "March 13, 2025",
    image: "/images/blogs/article5.png",
    description: "Website performance is crucial for user experience and SEO. Learn essential optimization techniques, such as code splitting, lazy loading, caching strategies, and image optimization, to make your website faster and more efficient."
  },
  {
    id: 15,
    title: "Best Practices for UX in 2025",
    category: "Design",
    date: "March 12, 2025",
    image: "/images/blogs/article6.png",
    description: "User experience (UX) design is constantly evolving. This article covers the best UX practices for 2025, including accessibility, user-centered design principles, and emerging trends in interface design."
  }
];


const categories = ["All", "AI", "Web Development", "Design", "Cloud Computing"];

export default function Page() {

  const [visibleBlogs, setVisibleBlogs] = useState(blogs.slice(0, 9));
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs by category
  const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);
  const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
   
  return (
  

    <>
    {/* hero secto */}
    <div className="bg-[#F7F7F7] flex flex-col justify-center items-center">
    <div className="relative w-full h-[80vh] flex items-center justify-center ">
      {/* Background Image */}
   
      
<Image
  src="/images/blogs/hero.png"
  alt="Hero Section"
  layout="fill"
  className="absolute w-full h-full"  
 
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between container mx-auto lg:px-30 text-white gap-10">
        {/* Left Section: Title & Links */}
        <div className="hero-content text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Blogs
          </h1>
          <p className="text-lg">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/blogs" className="text-gray-300 hover:text-white">
              Blogs
            </Link>
          </p>
        </div>

        {/* Right Section: Hero Image */}
        <div className="hidden lg:block">
          <Image
  src="/images/blogs/hero2.png"
  alt="Hero Image"
  width={650}
  height={300}
  className="object-contain w-[650px] h-[300px] "
/>
        </div>
      </div>
    </div>
    <div className="container lg:p-5 p-2 mt-10">
      <div className="lg:px-20 ">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
          Recommended
        </h1>

        {/* Recommended Card */}
        <div className="bg-white rounded-lg gap-10 p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
        
         <div className="md:h-[300px] md:w-1/2">
          <Image
  src={randomBlog.image}
  alt={randomBlog.title}
  className="object-cover rounded-lg w-full h-full"
  width={700}  
  height={400} 
/>
          </div>
          <div className="md:w-1/2 flex flex-col   gap-5">
          <Link href="" key={randomBlog.id}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {randomBlog.title}
            </h1>
            <h4 className="text-lg text-gray-600 mt-2">
              {randomBlog.category}
            </h4>
            <p className="text-2xl md:text-2xl l mt-4 ">
             
              {randomBlog.description.substring(0,100)}...
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
      {/* blogs */}
    <div  className="container lg:p-5 p-2 mt-10">
      <div className="lg:px-20 ">
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
          Latest Article
        </h1>
        </div>
        <div className="flex flex-wrap gap-4 px-10  mb-8 flex md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded font-semibold transition ${selectedCategory === category ? "bg-[#4C0BF7] text-white" : "bg-[#F2EEFF] text-[#4C0BF7] hover:bg-[#4F8CEA] hover:text-white"}` } 
              style={{borderRadius: "19px"}}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 ">
          {filteredBlogs.slice(0, visibleBlogs.length).map((blog) => (
                <Link href="" key={blog.id}>
            <div  className="bg-white rounded-lg overflow-hidden shadow-lg p-5">
          
                <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-[250px]  shadow-sm rounded" />
              
              <div className="p-5">
                <p className="text-gray-500 text-sm mb-2">
                   <button
                 key={blog.category}
                 className={`px-4 py-1.5 rounded font-semibold transition bg-[#F2EEFF] text-[#4C0BF7] "}` } 
                style={{borderRadius: "19px"}}
              
            >
              {blog.category}
            </button>
            </p>
              
                  
            
          
              
             <div> <p className="text-[#F1B729] text-sm mb-2 flex items-end gap-1"> 
                <Image
               src="/images/blogs/Calendar.png"
                  alt="calendar"
                  width={20}  
                 height={20} 
                  />

              {blog.date}</p></div>
        
                <h2 className="text-xl md:text-2xl text-gray-900 font-bold ">{blog.title}</h2>
                <p className="text-gray-600 mt-2 ">{blog.description.substring(0, 70)}...</p>
              </div>
            </div>
            </Link>
          ))
          
          }
        </div>
        {visibleBlogs.length < filteredBlogs.length && (
          <div className="text-center mt-6">
            <button
              onClick={() => setVisibleBlogs(filteredBlogs.slice(0, visibleBlogs.length + 3))}
              className="bg-[#4C0BF7] text-white text-xl px-16 py-3 font-bold  hover:bg-[#4F8CEA] transition"
              style={{borderRadius:"15px"}}
            >
             View All Blogs
            </button>
          </div>
        )}


    </div>

   
    </div>
    </>
      
  );
}





