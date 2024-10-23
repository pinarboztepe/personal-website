import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-200 dark:bg-zinc-800">
            <hr className="border-t border-black dark:border-white mb-8" />
            <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-16 mt-16">Projects</h1>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center space-x-8 px-6">

                <div className="flex flex-col items-center mb-8">
                    {/* Link href="URL" */}
                    <Image src="/images/vempo.png" alt="Vempo image" width={300} height={200} className="rounded-lg shadow-lg transition-transform transform hover:scale-105 shadow-black p-1 bg-gray grayscale hover:filter-none" />
                    <h2 className="text-xl text-gray-800 dark:text-gray-200 font-semibold mt-4">Vempo</h2>
                    <p className="text-center text-gray-600 dark:text-gray-100 mt-2">This pioneering platform seamlessly fuses music and visual artistry, providing a transformative canvas where sound and sight converge. Immerse yourself in the creative process as you craft and personalize dynamic, synchronized shapes that dance harmoniously with your uploaded music. Each beat and note brings your visual creations to life, allowing your artistic vision to flourish in an enchanting symphony of color and motion. Explore the limitless possibilities of this innovative tool, where every composition becomes a unique masterpiece, reflecting your personal expression and artistic flair.</p>
                </div>
                <div className="flex flex-col items-center mb-8">
                    <Link href="https://spare-pals-657ebfd3b407.herokuapp.com/" target="_blank">
                        <Image src="/images/spare_pals.png" alt="Spare Pals image" width={300} height={200} className="rounded-lg shadow-lg transition-transform transform hover:scale-105 shadow-black p-1 bg-gray grayscale hover:filter-none" />
                    </Link>
                    <h2 className="text-xl text-gray-800 dark:text-gray-200 font-semibold mt-4">Spare Pals</h2>
                    <p className="text-center text-gray-600 dark:text-gray-100 mt-2">Spare Pals offers a unique service catering to various needs, whether for leisurely activities, daily outings, or even hospital visits. Simply visit the website to access a seamless booking system: check the availability of Pals, select the specific dates and hours needed. Additionally, you have the option to create an account for your own Pals to be hired by others, expanding the network of available companions. Seamlessly blending technology and human connection, Spare Pals transforms into a stage where stories unfold and memories are etched into the fabric of time. Every interaction involves payment, as users hire like-minded individuals on an hourly basis. It&apos;s a symphony of shared experiences, with each interaction painting a masterpiece of profound connection and lasting resonance.</p>
                </div>
            </div>
        </section>
    )
}