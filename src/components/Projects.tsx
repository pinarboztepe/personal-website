'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Projects() {
    useEffect(() => {
        gsap.set([".project-title", ".project-card"], {
            y: 60,
            opacity: 0
        });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" }});

        tl.to(".project-title", {
            duration: 1,
            y: 0,
            opacity: 1
        })
        .to(".project-card", {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.2
        }, "-=0.5");
    }, []);

    return (
        <section id="projects" className="py-16 bg-gray-200 dark:bg-zinc-800">
            <h1 className="project-title text-4xl font-bold text-center text-black dark:text-white mb-16 mt-16">
                Projects
            </h1>
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Vempo Project */}
                    <article className="project-card bg-white dark:bg-zinc-700 rounded-xl shadow-lg overflow-hidden">
                        <div className="relative h-[300px] overflow-hidden"> {/* Height adjusted */}
                            <Image 
                                src="/images/vempo.png" 
                                alt="Vempo image" 
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105 grayscale hover:filter-none" 
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                Vempo
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                This pioneering platform seamlessly fuses music and visual artistry, providing a transformative canvas where sound and sight converge. Immerse yourself in the creative process as you craft and personalize dynamic, synchronized shapes that dance harmoniously with your uploaded music.
                            </p>
                            <div className="flex gap-3">
                                <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-600 text-gray-700 dark:text-gray-300 rounded-full">
                                    Music Visualization
                                </span>
                                <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-600 text-gray-700 dark:text-gray-300 rounded-full">
                                    Interactive Art
                                </span>
                            </div>
                        </div>
                    </article>

                    {/* Spare Pals Project */}
                    <article className="project-card bg-white dark:bg-zinc-700 rounded-xl shadow-lg overflow-hidden">
                        <Link href="https://spare-pals-657ebfd3b407.herokuapp.com/" target="_blank" className="block relative h-[300px] overflow-hidden"> {/* Height adjusted */}
                            <Image 
                                src="/images/spare_pals.png" 
                                alt="Spare Pals image" 
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105 grayscale hover:filter-none" 
                                style={{ objectFit: 'cover' }}
                            />
                        </Link>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                Spare Pals
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                Spare Pals offers a unique service catering to various needs, whether for leisurely activities, daily outings, or even hospital visits. The platform provides a seamless booking system where users can check availability and select specific dates and hours needed.
                            </p>
                            <div className="flex gap-3">
                                <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-600 text-gray-700 dark:text-gray-300 rounded-full">
                                    Social Platform
                                </span>
                                <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-zinc-600 text-gray-700 dark:text-gray-300 rounded-full">
                                    Booking System
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}