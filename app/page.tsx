"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import Navbar from "@/app/components/Navbar";
import {useState} from "react";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSectoin";
import Footer from "@/app/components/Footer";
import {scroller} from "react-scroll";

export default function Home() {
  const [getSection, setSection] = useState("home");

  return (
      <main id="mainHome">
          <Navbar selectedPage={getSection}/>

          <div className="flex flex-col h-screen">
              <div className="flex flex-col">
                  <HeroSection onActive={() => setSection("home")}/>
              </div>

              <a
                  className="z-10 w-full h-[100px] bg-brand-500 m-0 p-0 mt-auto mb-[-30px] md:mb-[-25px] lg:mb-[5px] flex shadow-2xl ">
                  <h1 className="text-5xl font-black m-auto">About</h1>
              </a>
          </div>

          <div className="flex flex-col min-h-screen">
              <div id="about" className="flex flex-col px-10 md:px-24 lg:px-56 pt-40 h-full mb-14">
                  <AboutSection onActive={() => setSection("about")}/>
              </div>

              <a
                  onClick={() => scroller.scrollTo('projects', {
                      smooth: true,
                      duration: 500
                  })}
                  className="z-10 w-full h-[100px] bg-brand-500 m-0 p-0 mt-auto mb-[-30px] md:mb-[-25px] lg:mb-[5px] flex shadow-2xl cursor-pointer">
                  <h1 className="text-5xl font-black m-auto">Projects</h1>
              </a>
          </div>

          <div className="flex flex-col min-h-screen w-full">
              <div id="projects" className="flex flex-col px-24 lg:px-48 pt-40 h-full mb-14 w-full">
                  <ProjectsSection onActive={() => setSection("projects")}/>
              </div>

              <a
                  onClick={() => scroller.scrollTo('contact', {
                      smooth: true,
                      duration: 500
                  })}
                  className="z-10 w-full h-[100px] bg-brand-500 m-0 p-0 mt-auto mb-[-30px] md:mb-[-25px] lg:mb-[5px] flex shadow-2xl cursor-pointer">
                  <h1 className="text-5xl font-black m-auto">Contact</h1>
              </a>
          </div>

          <div className="flex flex-col h-screen">
              {/*<div id="contact" className="flex flex-col px-56 pt-40 h-full mb-14">*/}
              <div id="contact" className="flex flex-col px-0 pt-40 h-full mb-14 w-full">
                  <ContactSection onActive={() => setSection("contact")}/>
              </div>
          </div>
          
          <Footer />
      </main>
  );
}
