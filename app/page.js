

import React from 'react'
import matter from "gray-matter"
import fs from "fs"
import Email from "../app/email/page"



const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const { data } = matter(fileContent)
  return data

})

const page = () => {
  return (
    <>
      <main>
        <section className='container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center'>
          <div className='w-full text-center lg:text-left lg:w-1/2 lg:-mt-8'>
            <h1 className='text-3xl leading-sung text-gray-800 dark:text-gray-200 md:text-4xl'>
              A <span className='font-semibold'>free repository</span> for community <br className='hidden lg:block' />
              components using <span className='font-semibold underline decoration-primary'>Tailwind CSS</span>
            </h1>
            <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
              Open Source Tailwind Ui Components and templates to <br className='hidden lg:block' /> bootstrap your new
              apps , projects or landing sities
            </p>
            <div className='mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3
          focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20
          '>
            </div>
          </div>
          <div className='w-full mt-4 lg:mt-0 lg:w-1/2'>
            <img src='https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg' alt='tailwind css components' className='w-full h-full max-w-md mx-auto' />

          </div>



        </section>


        {
          blogs.map((blog, index) => (
            <>
              <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-20 mx-auto" key={index}>
                  <div class="-my-8 divide-y-2 divide-gray-100">
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="font-semibold title-font text-2xl dark:text-gray-300">{blog.title}</span>
                        <span class="text-sm dark:text-gray-300">{blog.date}</span>
                      </div>
                      <div class="md:flex-grow">
                        <h2 class="text-2xl font-bold  title-font mb-2 dark:text-gray-200">{blog.solution}</h2>
                        <p class="leading-relaxed dark:text-gray-200">{blog.description}</p>
                        <a class="text-indigo-500 inline-flex items-center mt-4" href={`/blogpost/${blog.slug}`}>Learn More
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


            </>
          ))
        }
       <Email/>
      </main>

    </>
  )
}

export default page 