// pages/blog.js
import React from 'react';
import Link from 'next/link';
import matter from "gray-matter"
import fs from "fs"


const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map(file=> {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data 

})


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
