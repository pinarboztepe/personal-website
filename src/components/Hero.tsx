// import React from "react";
// import Image from "next/image";
// import gsap from "gsap";

// export default function Hero() {
//     return (
//         <section id="home" className=" bg-gray-200 dark:bg-zinc-800 py-16 pt-48">
//             <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
//                 <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
//                     <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Pinar Boztepe</h1>
//                     <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Full-Stack Developer</h2>
//                     <p className="text-xl text-gray-600 dark:text-gray-100">Coding is my kaleidoscope, revealing the depths of human expression in every pixel.</p>
//                 </div>
//                 { /*Right side: Image */ }
//                 <div className="lg:w-1/2 flex justify-center lg:justify-end">
//                     <Image src="/images/pinar_profile.jpeg" alt="Pinar Boztepe Picture" width={300} height={300} className="rounded-2xl shadow-lg shadow-black p-1 bg-gray" />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default function Hero() {
//     useEffect(() => {
//         // Title animation
//         gsap.from(".hero-title", {
//             duration: 1.5,
//             scale: 0.5,
//             opacity: 0,
//             ease: "power4.out"
//         });

//         // Subtitle and motto animations with stagger
//         gsap.from([".hero-subtitle", ".hero-motto"], {
//             duration: 1.2,
//             y: 50,
//             opacity: 0,
//             stagger: 0.2,
//             ease: "power3.out"
//         });

//         // Image and shapes animation
//         gsap.from(".profile-container", {
//             duration: 1.5,
//             scale: 0.8,
//             opacity: 0,
//             delay: 0.5,
//             ease: "power2.out"
//         });

//         // Shapes animation
//         gsap.from(".shape", {
//             duration: 1,
//             scale: 0,
//             opacity: 0,
//             stagger: 0.2,
//             delay: 1,
//             ease: "back.out(1.7)"
//         });
//     }, []);

//     return (
//         <section id="home" className="bg-gray-200 dark:bg-zinc-800 py-16 pt-48">
//             <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
//                 <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
//                     <h1 className="hero-title text-4xl font-bold text-black dark:text-white mb-4">
//                         Pinar Boztepe
//                     </h1>
//                     <h2 className="hero-subtitle text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
//                         Full-Stack Developer
//                     </h2>
//                     <p className="hero-motto text-xl text-gray-600 dark:text-gray-100">
//                         Coding is my kaleidoscope, revealing the depths of human expression in every pixel.
//                     </p>
//                 </div>
//                 <div className="lg:w-1/2 flex justify-center lg:justify-end">
//                     <div className="profile-container relative">
//                         {/* Decorative shapes */}
//                         <div className="shape absolute -z-10 w-32 h-32 border-4 border-purple-400 rounded-full -top-6 -left-6 opacity-30 dark:opacity-20"></div>
//                         <div className="shape absolute -z-10 w-24 h-24 bg-blue-400 rounded-lg -bottom-4 -right-4 opacity-20 dark:opacity-10"></div>
//                         <div className="shape absolute -z-10 w-16 h-16 bg-pink-400 rotate-45 -top-4 right-12 opacity-20 dark:opacity-10"></div>
                        
//                         <Image 
//                             src="/images/pinar_profile.jpeg" 
//                             alt="Pinar Boztepe Picture" 
//                             width={300} 
//                             height={300} 
//                             className="rounded-2xl shadow-lg shadow-black p-1 bg-gray" 
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
    useEffect(() => {
        // Initial state - everything starts from bottom
        gsap.set([".hero-title, .hero-subtitle, .hero-motto"], {
            y: 100,
            opacity: 0
        });

        gsap.set(".hero-image", {
            y: 60,
            opacity: 0
        });

        // Dramatic entrance sequence
        const tl = gsap.timeline({ defaults: { ease: "power4.out" }});

        tl.to(".hero-title", {
            duration: 1.2,
            y: 0,
            opacity: 1
        })
        .to(".hero-subtitle", {
            duration: 1,
            y: 0,
            opacity: 1
        }, "-=0.8")  // Start before previous animation ends
        .to(".hero-motto", {
            duration: 1,
            y: 0,
            opacity: 1
        }, "-=0.8")
        .to(".hero-image", {
            duration: 1.2,
            y: 0,
            opacity: 1
        }, "-=0.8");

    }, []);

    return (
        <section id="home" className="bg-gray-200 dark:bg-zinc-800 py-16 pt-48 overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 className="hero-title text-4xl font-bold text-black dark:text-white mb-4">
                        Pinar Boztepe
                    </h1>
                    <h2 className="hero-subtitle text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                        Full-Stack Developer
                    </h2>
                    <p className="hero-motto text-xl text-gray-600 dark:text-gray-100">
                        Coding is my kaleidoscope, revealing the depths of human expression in every pixel.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <Image 
                        src="/images/pinar_profile.jpeg" 
                        alt="Pinar Boztepe Picture" 
                        width={300} 
                        height={300} 
                        className="hero-image rounded-2xl shadow-lg shadow-black p-1 bg-gray" 
                    />
                </div>
            </div>
        </section>
    );
}