import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import '@fortawesome/fontawesome-svg-core/styles.css';
// import ThemeProvider from "@/components/ThemeProvider";
// import ThemeToggle from "@/components/ThemeToggle";
// import Blog from "./blog/page";

export default function Home() {
  return (
    // <ThemeProvider>
      
      <main className="relative">
        {/* <ThemeToggle /> */}
        <Hero />
        <Projects />
        <AboutMe />
        <ContactMe />
        {/* <Blog /> */}
      </main>
      // </ThemeProvider>
        );
      }


