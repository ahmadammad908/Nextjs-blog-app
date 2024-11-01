"use client";
import React, { useState } from "react";

const About = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="flex flex-col justify-between">
                    <main style={{ minHeight: "calc(100vh - 84px - 188px)" }}>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                    About
                                </h1>
                            </div>
                            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                                <div className="flex flex-col items-center space-x-2 pt-8">
                                    <img
                                        alt="avatar"
                                        src="https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/456031128_1752819882140580_2321018509068907918_n.jpg?ccb=11-4&oh=01_Q5AaIE8R6gg9v-fRb5yEaBq5WmevosP3aYC1UfN3m-MqaLi6&oe=67323CA9&_nc_sid=5e03e0&_nc_cat=102"
                                        width="192"
                                        height="192"
                                        decoding="async"
                                        data-nimg="1"
                                        className={`h-48 w-48 rounded-full object-cover ${imageLoaded ? "opacity-100" : "opacity-0 blur-sm"}`}
                                        loading="lazy"
                                        onLoad={() => setImageLoaded(true)}
                                        style={{ color: "transparent" }}
                                    />
                                    <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                                        Ahmad Ammad 🖥️
                                    </h3>
                                    <div className="font-bold text-gray-700 dark:text-gray-300" style={{ fontFamily: "sans-serif" }}>
                                        Lead Frontend Developer
                                    </div>
                                    <div className="flex space-x-3 pt-6">
                                        {/* Social icons, keeping colors consistent in both themes */}
                                        <a className="text-sm transition dark:text-gray-100" target="_blank" rel="noopener noreferrer" href="https://github.com/ahmadammad908">
                                            <span className="sr-only">GitHub</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                style={{ color: "#374151" }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current  hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400 h-8 w-8"
                                            >
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                            </svg>
                                        </a>
                                        <a className="text-sm transition dark:text-gray-300" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ahmad-ammad-a86938239">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style={{ color: "#374151" }}
                                                class="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-sm transition dark:text-gray-300" target="_blank" rel="noopener noreferrer" href="mailto: ahmadammad.me789@gmail.com">
                                            <span className="sr-only">Gmail</span>
                                            <svg
                                                class="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="100"
                                                style={{ color: "#374151" }}
                                                height="100"
                                                viewBox="0 0 50 50"
                                            >
                                                <path d="M 5.5 7 C 3.0385965 7 1 9.0385965 1 11.5 L 1 38.5 C 1 40.961404 3.0385965 43 5.5 43 L 44.5 43 C 46.961404 43 49 40.961404 49 38.5 L 49 11.5 C 49 11.486654 48.996213 11.474258 48.996094 11.460938 C 48.996537 11.440306 49 11.421244 49 11.400391 L 48.990234 11.400391 C 48.934958 8.9848435 46.92738 7 44.5 7 L 5.5 7 z M 8.171875 9 L 41.865234 9 L 25 20.779297 L 8.171875 9 z M 4.8398438 9.1074219 L 25 23.220703 L 45.189453 9.1171875 C 46.192029 9.4257198 46.96467 10.363517 46.994141 11.4375 C 46.975926 11.681812 46.765817 12.080784 46.462891 12.412109 C 46.146099 12.7586 45.833984 12.976563 45.833984 12.976562 L 45.828125 12.980469 L 24.998047 27.775391 L 4.171875 13.080078 L 4.1660156 13.076172 C 4.1660156 13.076172 3.8539008 12.860163 3.5371094 12.513672 C 3.2203595 12.167182 3 11.739744 3 11.5 C 3 10.389458 3.8030909 9.4120336 4.8398438 9.1074219 z M 47 14.597656 L 47 38.5 C 47 39.838596 45.838596 41 44.5 41 L 44 41 L 44 16.732422 L 46.966797 14.625 L 46.974609 14.617188 C 46.974952 14.616953 46.998058 14.599 47 14.597656 z M 3 14.699219 C 3.0016742 14.700381 3.0230849 14.716556 3.0234375 14.716797 L 3.0273438 14.720703 L 3.0332031 14.724609 L 6 16.818359 L 6 41 L 5.5 41 C 4.1614035 41 3 39.838596 3 38.5 L 3 14.699219 z M 42 18.152344 L 42 41 L 8 41 L 8 18.228516 L 25.001953 30.224609 L 42 18.152344 z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="prose max-w-none pb-8 pt-8 xl:col-span-2 text-gray-800 dark:text-gray-300">
                                    <p className="font-bold">
                                        I'm a software engineer specializing in the development of
                                        user interfaces using the React JavaScript library.I use React to build high-performance, scalable, and dynamic web applications. I have a deep understanding of the React framework and its components, as well as a strong knowledge of JavaScript, HTML, and CSS. I am responsible for implementing UI designs, creating reusable components, writing tests, fixing bugs, and optimizing the application's performance. I work closely with other members of the development team, including back-end developers and designers, to ensure a seamless and cohesive user experience.
                                    </p>
                                    <h3 id="technologies-and-skills-" className="mt-[20px] font-bold dark:text-gray-100">
                                        Technologies and Skills 🚀
                                    </h3>
                                    <p className="mt-[20px] font-bold">
                                        I am proficient in various technologies, including:
                                    </p>
                                    <ul className="dark:text-gray-100 ">
                                        <li className="ml-[20px] mt-[20px] dark:text-gray-100"><strong className="dark:text-gray-100">JavaScript</strong></li>
                                        <li className="ml-[20px] mt-[20px]"><strong className="dark:text-gray-100">HTML</strong></li>
                                        <li className="ml-[20px] mt-[20px]"><strong className="dark:text-gray-100">CSS</strong></li>
                                        <li className="ml-[20px] mt-[20px]"><strong className="dark:text-gray-100">ReactJS</strong></li>
                                        <li className="ml-[20px] mt-[20px]"><strong className="dark:text-gray-100">Firebase</strong></li>
                                    </ul>
                                    <h3 id="problem-solving-and-continuous-learning-" className="mt-[20px] font-bold dark:text-gray-100">
                                        Problem-Solving and Continuous Learning 🤔💻
                                    </h3>
                                    <p className="mt-[20px] font-bold text-gray-800 dark:text-gray-300">
                                        With a passion for staying up to date with the latest industry trends...
                                        With a passion for staying up to date with the latest industry trends and continuously improving my skills, I possess a strong analytical and problem-solving mindset that enables me to tackle complex challenges and deliver innovative solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
};

export default About;
