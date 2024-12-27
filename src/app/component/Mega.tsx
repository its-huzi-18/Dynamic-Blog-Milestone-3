import React from 'react'
import BlogCard from './BlogCard';

function Mega() {
const posts = [
  {
    id: '1',
    title: 'HTML Block of Web Development',
    description: 'Explore the fundamentals of HTML, the backbone of every web page.',
    date: '2024-11-28',
    imageUrl: '/images/blog1.webp'
  },
  {
    id: '2',
    title: 'Creative Web Developer Workspace',
    description: 'Step into a creative workspace designed for front-end web development and design innovation.',
    date: '2024-11-30',
    imageUrl: '/images/blog2.webp'
  },
  {
    id: '3',
    title: 'Modern Web Development Setup',
    description: 'A look at modern setups boosting productivity for web developers.',
    date: '2024-12-05',
    imageUrl: '/images/blog3.webp'
  },
  {
    id: '4',
    title: 'CSS Mastery for Developers',
    description: 'Master CSS techniques to style and layout web pages effectively.',
    date: '2024-12-08',
    imageUrl: '/images/blog4.webp'
  },
  {
    id: '5',
    title: 'JavaScript Essentials',
    description: 'Understand the core concepts of JavaScript for dynamic web interactions.',
    date: '2024-12-12',
    imageUrl: '/images/blog5.webp'
  },
  {
    id: '6',
    title: 'Building Responsive Websites',
    description: 'Learn how to create websites that adapt to different screen sizes and devices.',
    date: '2024-12-15',
    imageUrl: '/images/blog6.webp'
  },
  {
    id: '7',
    title: 'React for Beginners',
    description: 'Get started with React and build modern web applications with ease.',
    date: '2024-12-20',
    imageUrl: '/images/blog7.png'
  },
  {
    id: '8',
    title: 'Node.js Backend Development',
    description: 'Dive into backend development using Node.js and build server-side applications.',
    date: '2024-12-23',
    imageUrl: '/images/blog8.png'
  },
  {
    id: '9',
    title: 'Version Control with Git',
    description: 'Learn version control and collaborate on projects using Git.',
    date: '2024-12-27',
    imageUrl: '/images/blog9.webp'
  },
  {
    id: '10',
    title: 'Web Design Principles',
    description: 'Understand the principles of effective and engaging web design.',
    date: '2024-12-30',
    imageUrl: '/images/blog10.png'
  },
  {
    id: '11',
    title: 'Full-Stack Development Overview',
    description: 'Explore both front-end and back-end development in full-stack applications.',
    date: '2025-01-02',
    imageUrl: '/images/blog11.png'
  },
  {
    id: '12',
    title: 'Tailwind CSS Crash Course',
    description: 'Quickly build modern UIs using Tailwind CSS utility-first framework.',
    date: '2025-01-05',
    imageUrl: '/images/blog12.png'
  },
  {
    id: '13',
    title: 'SEO for Web Developers',
    description: 'Optimize websites to rank higher on search engines and increase visibility.',
    date: '2025-01-10',
    imageUrl: '/images/blog13.png'
  },
  {
    id: '14',
    title: 'Deploying Web Projects',
    description: 'Learn how to deploy web applications on various platforms.',
    date: '2025-01-15',
    imageUrl: '/images/blog14.png'
  },
  {
    id: '15',
    title: 'API Integration in Web Apps',
    description: 'Discover how to integrate third-party APIs into your web applications.',
    date: '2025-01-20',
    imageUrl: '/images/blog15.png'
  }
];

  return (
    <div className='my-8'>
<h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'> {" "}
  Exploring the World of AI and Texhnology
</h1>
<div className='overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>{posts.map((post,index)=>(
  <div className='fade-in' key={post.id}>
 <div className='blog-card'>
<BlogCard key={post.id} post = {post}  isDarkBackground={index % 2 === 0}/>
 </div> 
  </div>
))}

</div>
    </div>
  )
}

export default Mega