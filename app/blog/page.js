// pages/blog.js

import React from 'react';
import Link from 'next/link';

const blogs = [
    {
        title: "Blog Post 1",
        description: "This is a short description of blog post 1.",
        slug: "first-blog",
        author: "Author 1",
        image: "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Blog Post 2",
        description: "This is a short description of blog post 2.",
        slug: "second-blog",
        author: "Author 2",
        image: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Blog Post 2",
        description: "This is a short description of blog post 2.",
        slug: "third-blog",
        author: "Author 2",
        image: "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Blog Post 2",
        description: "This is a short description of blog post 2.",
        slug: "blog-post-2",
        author: "Author 2",
        image: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Blog Post 2",
        description: "This is a short description of blog post 2.",
        slug: "blog-post-2",
        author: "Author 2",
        image: "https://images.pexels.com/photos/226232/pexels-photo-226232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // Add more blog objects as needed
];

const Blog = () => {
    return (
        <div className=" py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center  mb-8 dark:text-gray-200">Our Blog</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {blogs.map((blog, index) => (
                        <div key={index} className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  dark:bg-gray-900">
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">{blog.title}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-200">{blog.description}</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">By {blog.author}</p>
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
