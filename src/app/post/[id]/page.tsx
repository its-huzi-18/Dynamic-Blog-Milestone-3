'use client'
import React from 'react'
import CommentSection from '@/app/component/CommentSection';
import AuthorCard from '@/app/component/Author';
import Image from 'next/image';

const posts = [
    {
      id: '1',
      title: 'HTML Block of Web Development',
      description: 'HTML, or HyperText Markup Language, is the cornerstone of web development. It is used to structure content on the web, providing a framework for how elements such as headings, paragraphs, images, links, and forms are displayed. As the foundation of every web page, understanding HTML is essential for any developer. In this article, we dive deep into the core elements of HTML, including tags, attributes, and semantic elements, and explore how they work together to create a well-structured webpage. From basic text formatting to embedding multimedia content, mastering HTML will allow you to build pages that are both functional and accessible. Whether you’re a beginner or looking to refine your skills, this article will guide you through the key concepts of HTML, making sure you understand how to leverage it effectively in your web development projects.',
      imageUrl: '/images/blog1.webp'
    },
    {
      id: '2',
      title: 'Creative Web Developer Workspace',
      description: 'A creative workspace is essential for any web developer, as it fosters productivity, inspiration, and efficient workflows. From the physical environment to the software tools you use, every aspect of your workspace contributes to your ability to focus and create. In this article, we explore how to design an ideal workspace for front-end developers. We discuss the importance of ergonomics, lighting, and organization to ensure your space supports your creativity. Additionally, we review software tools and technologies that are critical for web development, such as code editors, version control systems, and web browsers. Whether you work in an office or remotely, setting up a workspace that boosts your productivity is key to staying on top of projects and deadlines. With the right tools and environment, you can create a workspace that inspires innovation and helps you produce high-quality work.',
      imageUrl: '/images/blog2.webp'
    },
    {
      id: '3',
      title: 'Modern Web Development Setup',
      description: 'The world of web development is constantly evolving, and so are the tools and setups that developers use to build websites and applications. In this post, we take a look at the modern web development setup that can boost productivity and streamline your development process. We’ll explore the essential hardware and software you need for a fast and efficient workflow. From choosing the right computer and monitor setup to selecting the best code editor and browser tools, a well-optimized environment can make all the difference. Additionally, we discuss how modern web development frameworks, such as React, Angular, and Vue.js, play a role in simplifying the development process. Whether you’re a seasoned developer or just starting out, understanding and setting up a modern development environment is crucial for staying competitive and productive in today’s fast-paced tech world.',
      imageUrl: '/images/blog3.webp'
    },
    {
      id: '4',
      title: 'CSS Mastery for Developers',
      description: 'CSS (Cascading Style Sheets) is the language used to style and lay out web pages. Mastering CSS is a crucial skill for web developers, as it allows you to create visually appealing and user-friendly interfaces. In this article, we explore the key techniques and best practices for mastering CSS. From basic layout concepts like flexbox and grid to more advanced topics such as animations and responsive design, we cover everything you need to know. We’ll also discuss how to optimize your CSS for performance and maintainability, ensuring that your stylesheets are both efficient and scalable. Whether you’re designing a simple website or a complex web application, mastering CSS will give you the power to create stunning designs that are also functional and user-friendly.',
      imageUrl: '/images/blog4.webp'
    },
    {
      id: '5',
      title: 'JavaScript Essentials',
      description: 'JavaScript is the programming language that powers dynamic behavior on the web, allowing developers to create interactive and responsive web applications. In this post, we dive into the essential concepts of JavaScript that every developer must understand. From basic syntax, variables, and functions to advanced topics like asynchronous programming, closures, and the event loop, this article covers it all. Understanding JavaScript fundamentals is key to building applications that not only function correctly but also provide an engaging user experience. We’ll explore how JavaScript interacts with the Document Object Model (DOM) to manipulate web page content dynamically. Whether you’re just starting out with JavaScript or looking to brush up on key concepts, this article will provide you with the foundational knowledge you need to write effective and efficient code for modern web applications.',
      imageUrl: '/images/blog5.webp'
    },
    {
      id: '6',
      title: 'Building Responsive Websites',
      description: 'Responsive web design is an approach that ensures a website looks great and functions well across a wide range of devices, from desktops to smartphones. In this post, we discuss the best practices and techniques for building responsive websites. We cover key concepts such as fluid layouts, media queries, and flexible images, which allow websites to adapt to different screen sizes. With the increasing use of mobile devices, it’s more important than ever for web developers to prioritize responsive design in their projects. This article also explores popular CSS frameworks, such as Bootstrap and Tailwind CSS, which provide built-in responsive design tools to streamline development. Whether you’re working on a new website or retrofitting an existing one, mastering responsive web design will ensure your site provides a seamless experience for all users, no matter what device they’re using.',
      imageUrl: '/images/blog6.webp'
    },
    {
      id: '7',
      title: 'React for Beginners',
      description: 'React is one of the most popular JavaScript libraries for building user interfaces, and it’s an essential tool for modern web development. In this article, we break down the basics of React, making it accessible for beginners. We’ll start with the fundamental concepts of components, props, and state, and then dive into more advanced topics like hooks and context. React’s component-based architecture makes it easy to create reusable UI elements, improving code maintainability and scalability. We’ll also discuss the concept of virtual DOM and how it optimizes performance by minimizing direct manipulation of the actual DOM. Whether you’re new to web development or have experience with other JavaScript frameworks, learning React will equip you with the skills to build dynamic, responsive, and maintainable web applications.',
      imageUrl: '/images/blog7.png'
    },
    {
      id: '8',
      title: 'Node.js Backend Development',
      description: 'Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling full-stack development using a single language. In this post, we explore the fundamentals of backend development with Node.js. We’ll discuss key concepts like setting up a server, handling HTTP requests, and working with databases. Node.js is built on Chrome’s V8 JavaScript engine, making it fast and efficient for building scalable server-side applications. We also cover essential Node.js tools and libraries, such as Express.js, that simplify the development process and provide additional functionality. Whether you’re building a REST API, a real-time application, or a microservice architecture, Node.js provides the power and flexibility to handle complex backend tasks. If you’re looking to expand your development skills, learning Node.js is a great step toward becoming a full-stack developer.',
      imageUrl: '/images/blog8.png'
    },
    {
      id: '9',
      title: 'Version Control with Git',
      description: 'Version control is an essential practice for any software development project, and Git is one of the most widely used version control systems. In this post, we explain the fundamentals of Git and how it can help you manage your codebase. We’ll cover key Git concepts, such as commits, branches, and merges, and show you how to track changes in your code and collaborate with other developers. We’ll also discuss the advantages of using Git in a team setting, where it’s critical to avoid conflicts and ensure smooth collaboration. Additionally, we’ll introduce GitHub, a popular Git hosting platform that provides powerful collaboration tools, issue tracking, and project management features. Whether you’re working solo or as part of a team, mastering Git will help you maintain a clean and organized codebase while improving your workflow.',
      imageUrl: '/images/blog9.webp'
    },
    {
      id: '10',
      title: 'Web Design Principles',
      description: 'Web design is not just about making websites look good – it’s about creating effective, user-friendly, and accessible digital experiences. In this article, we cover the core principles of web design that every developer and designer should know. From layout and color theory to typography and usability, we’ll explore how to create aesthetically pleasing and functional websites. We’ll also discuss the importance of responsive design and how it ensures your website looks great on all devices. Usability testing and accessibility are key factors in creating a positive user experience, and we’ll explain how to implement them in your designs. Whether you’re designing for desktop, mobile, or both, understanding and applying these fundamental design principles will help you create websites that not only look good but also meet the needs of your users.',
      imageUrl: '/images/blog10.png'
    },
    {
      id: '11',
      title: 'Full-Stack Development Overview',
      description: `Full-stack development refers to the development of both the front-end and back-end of web applications, creating a complete, end-to-end solution. In this post, we provide a comprehensive overview of full-stack development, explaining the roles of both front-end and back-end developers. Front-end development focuses on the user interface and experience, using languages like HTML, CSS, and JavaScript, while back-end development handles the server, database, and application logic, typically using languages like Node.js, Python, or Ruby. We discuss the importance of understanding both sides of development and how full-stack developers are well-equipped to handle all aspects of a project. We also look at the tools, technologies, and frameworks that streamline full-stack development, such as React, Angular, and Express. Whether you're looking to become a full-stack developer or collaborate with one, this post will provide you with the knowledge you need to understand the broader picture of web application development.',
      imageUrl: '/images/blog11.png`
    },
    {
      id: '12',
      title: 'Tailwind CSS Crash Course',
      description: `Tailwind CSS is a utility-first CSS framework that has gained immense popularity among developers for its flexibility and ease of use. In this crash course, we introduce you to the core concepts of Tailwind CSS, showing you how to quickly build modern, responsive UIs without writing custom CSS. We’ll cover how to use Tailwind’s pre-defined utility classes to style elements, create layouts, and manage responsiveness. One of the key advantages of Tailwind is its ability to speed up development by reducing the need to write custom styles, allowing you to focus on functionality and design. We’ll also explore how to customize Tailwind to fit your project’s specific needs, such as adding your own colors, breakpoints, or fonts. Whether you're new to CSS frameworks or looking for a better way to build your web applications, this course will give you the tools to create professional-quality UIs faster than ever before.`,
      imageUrl: '/images/blog12.png'
    },
    {
      id: '13',
      title: 'SEO for Web Developers',
      description: 'Search Engine Optimization (SEO) is the process of optimizing websites to rank higher on search engine results pages, making them more visible to users. For web developers, understanding the fundamentals of SEO is crucial, as it directly impacts the visibility and success of websites. In this post, we explore the key principles of SEO, including keyword research, on-page optimization, and technical SEO. We also discuss how factors like page load speed, mobile-friendliness, and URL structure play a critical role in improving a site’s SEO performance. Additionally, we cover how to integrate SEO best practices into your web development workflow, from optimizing images and content to structuring HTML correctly with appropriate tags and metadata. By the end of this post, you’ll have the knowledge to implement effective SEO strategies that not only improve your site’s search ranking but also provide a better user experience.',
      imageUrl: '/images/blog13.png'
    },
    {
      id: '14',
      title: 'Deploying Web Projects',
      description: 'Deploying a web project refers to the process of taking a website or web application from development to live on the internet. This post covers the key steps involved in deploying web projects, from setting up hosting environments to managing domain names and configuring servers. We discuss the different hosting options available, such as shared hosting, cloud hosting, and platforms like Netlify and Heroku, which simplify the deployment process. The article also covers essential deployment considerations, such as version control, continuous integration, and managing environment variables. Whether you’re deploying a simple static website or a complex full-stack application, we’ll guide you through the necessary tools and best practices. Additionally, we explore how to test your deployment, monitor its performance, and troubleshoot common issues that may arise. By the end of this post, you’ll be equipped with the knowledge to confidently deploy your own web projects.',
      imageUrl: '/images/blog14.png'
    },
    {
      id: '15',
      title: 'API Integration in Web Apps',
      description: 'Integrating APIs (Application Programming Interfaces) into web applications allows developers to extend the functionality of their websites by connecting to external services. This post provides an in-depth look at how to integrate third-party APIs into your web applications. We cover the basics of working with APIs, such as making HTTP requests, handling responses, and using data from external services. We’ll also discuss how to authenticate with APIs using tokens and OAuth and manage rate limits and errors to ensure smooth integration. With API integration, you can add powerful features to your web apps, such as user authentication, payment gateways, and data from external sources like weather or social media platforms. Whether you’re working with RESTful APIs or GraphQL, this post will give you the skills and knowledge to incorporate APIs into your projects effectively.',
      imageUrl: '/images/blog15.png'
    }
  ];
  
  

function Post({params}:{params:{id:string}}) {
  const {id} = params;
  const post = posts.find((p)=>p.id ===id);

if (!post) {
  return (
    <h2 className='text-2xl font-bold text-center mt-10'>Post Not found </h2>
  )
}



const renderingParagraphs = (description:string) =>{
  return description.split('/n').map((para,index) => {
return  <p key={index} className='mt-4 text-justify'>{para.trim()}</p>
  });
};
  return (
     <div className=" max-w-3xl mx-auto p-5">
      <h1 className="mb-6 md:text-4xl text-3xl font-bold text-slate-600 text-center animate-color-change">
        {post.title}
      </h1>
      {post.imageUrl && (
        <Image 
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={600}
          quality={100}
          className="shadow-md shadow-slate-500 object-fill w-[900px] h-[350px] rounded-md mt-4"
        />
      )}
      <div className="mt-6  text-lg text-slate-700">
        {renderingParagraphs(post.description)}
      </div>
      <div className="mt-6">
        <CommentSection postId={post.id} />
      </div>
      <div className="mt-6">
        <AuthorCard />
      </div>
    </div>
  )
}

export default Post;