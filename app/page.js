import React from 'react'
import { Button } from "@/components/ui/button";

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

        <section className='py-12 bg-gray-100 dark:bg-gray-900'>
          <div class=" container px-4 mx-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-gray-200">Pricing Plans</h2>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-200">Choose a plan that fits your needs.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <div class="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 dark:bg-gray-800">
                  <h3 class="text-2xl font-semibold text-gray-900  dark:text-gray-200">Basic</h3>
                  <p class="mt-4 text-gray-600  dark:text-gray-200">$10/month</p>
                  <ul class="mt-6 space-y-4">
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 1</span>
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 2</span>
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 3</span>
                    </li>
                  </ul>
                  <button class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700  dark:text-gray-200">Choose Plan</button>
                </div>

                <div class="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 dark:bg-gray-800">
                  <h3 class="text-2xl font-semibold text-gray-900  dark:text-gray-200">Standard</h3>
                  <p class="mt-4 text-gray-600  dark:text-gray-200">$20/month</p>
                  <ul class="mt-6 space-y-4">
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 1</span>
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 2</span>
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 3</span>
                    </li>

                  </ul>
                  <button class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Choose Plan</button>
                </div>

                <div class="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 dark:bg-gray-800">
                  <h3 class="text-2xl font-semibold text-gray-900  dark:text-gray-200">Premium</h3>
                  <p class="mt-4 text-gray-600  dark:text-gray-200">$30/month</p>
                  <ul class="mt-6 space-y-4">
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 1</span>
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 2</span>
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500  dark:text-gray-200">✔</span>
                      <span class="ml-3 text-gray-700  dark:text-gray-200">Feature 3</span>
                    </li>

                  </ul>
                  <button class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Choose Plan</button>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default page 