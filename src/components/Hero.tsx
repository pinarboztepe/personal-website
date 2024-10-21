import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="home" className=" bg-gray-100 py-16 pt-48">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 className="text-4xl font-bold text-black mb-4">Pinar Boztepe</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Full-Stack Developer</h2>
                    <p className="text-xl text-gray-600">Coding is my kaleidoscope, revealing the depths of human expression in every pixel.</p>
                </div>
                { /*Right side: Image */ }
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <Image src="/images/pinar_profile.jpeg" alt="Pinar Boztepe Picture" width={300} height={300} className="rounded-2xl shadow-lg shadow-black p-1 bg-gray" />
                </div>
            </div>
        </section>
    )
}