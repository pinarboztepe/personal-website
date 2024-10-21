"use client";
import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Header />
        <Hero />
        <Projects />
        <AboutMe />
        <ContactMe />

        {/* <div>
          <h1>Hello, Portfolio!</h1>
        </div> */}
      {/* <Card image={"test"} title={"merhaba dunya"} /> */}
      </main>
      
      <Footer />
    </>
  );
}
