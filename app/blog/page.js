// pages/blog.js

import React from 'react';
import Link from 'next/link';

const blogs = [
    {
        title: "PHP",
        description: "PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.",
        slug: "first-blog",
        image: "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Next Js",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation",
        slug: "second-blog",
        image: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Ruby",
        description: "Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro ",
        slug: "third-blog",
        image: "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
        title: "Django",
        description: "Django is a free and open-source, Python-based web framework that runs on a web server. It follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit",
        slug: "fourth-blog",
        image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "C++",
        description: "C++ (or “C-plus-plus”) is a generic programming language for building software. It's an object-oriented language. In other words, it emphasizes using data fields with unique attributes (a.k.a. objects) rather than logic or functions. A common example of an object is a user account on a website.",
        slug: "fifth-blog",
        image: "https://images.pexels.com/photos/226232/pexels-photo-226232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // Add more blog objects as needed
];

const Blog = () => {
    return (
        <div className=" py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center  mb-8 dark:text-gray-200">Our Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {blogs.map((blog, index) => (
                        <div key={index} className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  dark:bg-gray-900">
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">{blog.title}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-200">{blog.description}</p>
                                <Link class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 mt-[20px]" href={`/blogpost/${blog.slug}`}>Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
