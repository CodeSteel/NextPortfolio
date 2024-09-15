"use client";

import Navlink from "./Navlink";
import {animateScroll, scroller} from "react-scroll";

export default function Navbar(props: { selectedPage: string }) {
  return (
    <nav className="sticky top-0 z-40 h-full py-5 w-full px-5 items-center text-white backdrop-blur-lg lg:z-50 border-b border-brand-50/[0.06] supports-backdrop-blur:bg-white/95 shadow-lg flex justify-between">
      <div className="mx-auto lg:ml-52 rowdies-bold">
        <h1 className="text-lg text-brand-500 hidden lg:block">Software Engineer</h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl">Isaac&apos;s Portfolio</h1>
      </div>

      <div className="hidden xl:flex md:mr-36 lg:mr-52 space-x-5">
        <Navlink onClick={() => {animateScroll.scrollToTop({
            smooth: true,
            duration: 500
        })}} text="Home" selected={(props.selectedPage == "home")} />
        <Navlink onClick={() => {scroller.scrollTo('about', {
            smooth: true,
            duration: 500
        })}} text="About" selected={(props.selectedPage == "about")} />
        <Navlink onClick={() => {scroller.scrollTo('projects', {
            smooth: true,
            duration: 300
        })}} text="Projects" selected={(props.selectedPage == "projects")} />
        <Navlink onClick={() => {scroller.scrollTo('contact', {
            smooth: true,
            duration: 500
        })}} text="Contact" selected={(props.selectedPage == "contact")} />
      </div>
    </nav>
  );
}
