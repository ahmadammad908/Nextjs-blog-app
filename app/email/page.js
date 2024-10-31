'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Page = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const isValidEmail = (email) => {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email format
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            setMessage('');
            return;
        }

        const serviceId = 'service_omyscys';
        const templateId = 'template_gqjdfpp';
        const publicKey = 'bYaTHHUui2VrIJoaQ';
    
        const templateParams = {
            from_email: email,
        };
    
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                setMessage('Your email was successfully subscribed!');
                setError('');
                setEmail(''); // Clear the email input after successful submission
            })
            .catch((error) => {
                console.log("Error sending email", error);
                setError('Failed to subscribe. Please try again.');
                setMessage('');
            });
    };
    
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold dark:text-gray-200">
                            Subscribe to my Tech Blogs
                        </h1>
                        <p className="mb-8 leading-relaxed dark:text-gray-200">
                            Read articles from tech blogs directly inside your inbox. Subscribe to the tech blogs, and don't miss out.
                        </p>
                        
                        <form className="flex w-full justify-center items-end" onSubmit={handleSubmit}>
                            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                                <label htmlFor="hero-field" className="leading-7 text-sm dark:text-gray-200">
                                    Enter Your Email address
                                </label>
                                <input
                                    type="email"
                                    id="hero-field"
                                    name="hero-field"
                                    className="w-full dark:bg-gray-950 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
                                Subscribe
                            </button>
                        </form>

                        {/* Display success or error message */}
                        {message && <p className="mt-4 text-green-500">{message}</p>}
                        {error && <p className="mt-4 text-red-500">{error}</p>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
