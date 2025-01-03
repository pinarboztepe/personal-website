'use client'

import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Blog() {
    useEffect(() => {
        // Set initial states
        gsap.set([".blog-title, .blog-intro"], {
            y: 100,
            opacity: 0
        });

        gsap.set(".blog-article", {
            y: 60,
            opacity: 0
        });

        // Create animation timeline
        const tl = gsap.timeline({ defaults: { ease: "power4.out" }});

        tl.to(".blog-title", {
            duration: 1.2,
            y: 0,
            opacity: 1
        })
        .to(".blog-intro", {
            duration: 1,
            y: 0,
            opacity: 1
        }, "-=0.8")
        .to(".blog-article", {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.2 // Adds delay between each article animation
        }, "-=0.8");
    }, []);

    return (
        <main className="w-full p-6 py-10 bg-gray-200 dark:bg-zinc-800 overflow-hidden">
            <section className="text-center py-16 min-h-full"> 
                <h1 className="blog-title text-4xl font-bold mb-4 text-black dark:text-white">
                    Blog
                </h1>
                <p className="blog-intro text-lg text-gray-600 dark:text-gray-100 mb-8">
                    Welcome to my blog! Here you&apos;ll find my latest thoughts, ideas, and tutorials on web development, tech, and more.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="blog-article bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md dark:shadow-lg">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Mastering Next.js for Server-Side Rendering
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Next.js is taking over web development, especially server-side rendering (SSR). In this post, we&apos;ll dive into setting up a full SSR project and discuss the benefits of using Next.js for SEO and performance.
                    </p>
                    <Link href="https://medium.com/@markminj/understanding-ssr-in-next-js-and-its-benefits-e54ffed48294" target="_blank" rel="noopener noreferrer">
                        <span className="text-rose-400 hover:text-slate-400 inline-block mt-4">
                            Read more
                        </span>
                    </Link>
                </article>

                <article className="blog-article bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md dark:shadow-lg">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Building Responsive Layouts with Tailwind CSS
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Responsive design is crucial for modern web development. Tailwind CSS makes building responsive layouts a breeze. Learn how to use Tailwind&apos;s grid and flex utilities to create adaptive designs for any screen size.
                    </p>
                    <Link href="https://dev.to/hitesh_developer/mastering-responsive-design-with-tailwind-css-tips-and-tricks-1f39" target="_blank" rel="noopener noreferrer">
                        <span className="text-rose-400 hover:text-slate-400 inline-block mt-4">
                            Read more
                        </span>
                    </Link>
                </article>

                <article className="blog-article bg-white dark:bg-zinc-700 p-6 rounded-lg shadow-md dark:shadow-lg">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        Using TypeScript with React: A Beginner&apos;s Guide
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        TypeScript is quickly becoming the standard for large-scale React applications. In this post, we&apos;ll walk through integrating TypeScript into your React project to improve code quality and catch errors early. 
                    </p>
                    <Link href="https://medium.com/@chirag.dave/how-to-use-typescript-with-react-building-a-strong-foundation-72d87ba8e699" target="_blank" rel="noopener noreferrer">
                        <span className="text-rose-400 hover:text-slate-400 inline-block mt-4">
                            Read more
                        </span>
                    </Link>
                </article>    
            </section>
        </main>
    );
}