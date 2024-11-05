'use client';
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function AboutMe() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative py-16 h-screen bg-gray-200 dark:bg-zinc-800">
      <div className="h-full w-full flex items-center justify-center pb-16">
        {theme === "dark" ? (
          <Image
            src="/images/AboutMeDark_n.png"
            alt="Pinar picture"
            layout="fill"
            objectFit="cover"
            className="rounded-none min-h-screen opacity-40 absolute inset-0 z-0"
          />
        ) : (
          <Image
            src="/images/AboutMeDark_n.png"
            alt="Pinar picture"
            layout="fill"
            objectFit="cover"
            className="rounded-none min-h-screen opacity-40 absolute inset-0 z-0"
          />
        )}
        <div className="relative max-w-3xl px-6 text-center mb-16">
          <h1 className="text-5xl text-black dark:text-white font-bold mb-16">
            About Me
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-100">
            I&apos;m Pinar, a passionate full-stack developer based in London
            with a knack for blending creativity and technology. When I&apos;m
            not coding, you can find me indulging in my love for art—painting
            and sculpting my thoughts into reality. As a drummer, I bring rhythm
            and energy into my life, and I stay active with various sports to
            keep my mind and body in sync. Always exploring new challenges and
            pushing the boundaries of what&apos;s possible!
          </p>
        </div>
      </div>
    </section>
  );
}