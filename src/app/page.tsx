import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Projects />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
