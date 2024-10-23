import React from "react";
import Image from "next/image";

export default function ContactMe() {
    return (
        <section id="contact" className="bg-gray-200 dark:bg-zinc-800 py-16">
            <hr className="border-t border-black dark:border-white" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 mt-16">
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                    <h1 className="text-4xl font-bold text-black dark:text-white mb-4 mt-16">Contact Me</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Let&apos;s chat!</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-100">I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me!</p>
                    <p className="text-xl text-gray-600 mt-4">
                        <a href="mailto:pcodecre8@gmail.com" className="text-rose-400 hover:text-slate-400 hover:underline">pcodecre8@gmail.com</a>
                    </p>
                </div>
                { /*Right side: Image */ }
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <Image src="/images/contact.png" alt="Contact Me Picture" width={400} height={400} className="rounded-2xl shadow-lg shadow-black p-1 bg-gray mt-16" />
                </div>
            </div>
        </section>
    )
}