import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import '@fortawesome/fontawesome-svg-core/styles.css';
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Merhaba from "@/components/Merhaba";

export default function Home() {
  return (
    <ThemeProvider>
      
      <main className="relative">
      <Merhaba />  
        <Header />
        <ThemeToggle />
        <Hero />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
