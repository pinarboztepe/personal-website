import React from "react";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="about" className="bg-gray-100 py-16">
            <hr className="border-t border-black mb-8" />
            <div className="container mx-auto px-6">
                <h1 className="text-4xl text-black font-bold text-center mb-16 mt-16">About Me</h1>
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex justify-center">
                        <Image src="/images/pinar_b.jpeg" alt="Pinar picture" width={300} height={300} className="rounded-2xl shadow-lg shadow-black p-1 bg-gray" />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-xl text-gray-600">I'm Pinar, a passionate full-stack developer based in London with a knack for blending creativity and technology. When I'm not coding, you can find me indulging in my love for art—painting and sculpting my thoughts into reality. As a drummer, I bring rhythm and energy into my life, and I stay active with various sports to keep my mind and body in sync. Always exploring new challenges and pushing the boundaries of what's possible!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}