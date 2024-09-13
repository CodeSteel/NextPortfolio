"use client";

import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 h-full py-5 w-full px-5 items-center text-white backdrop-blur-lg lg:z-50 border-b border-brand-50/[0.06] supports-backdrop-blur:bg-white/95 shadow-lg flex justify-between">
      <div className="mx-auto lg:ml-52 rowdies-bold">
        <h1 className="text-lg text-brand-500 hidden lg:block">Software Engineer</h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl">Isaac&apos;s Portfolio</h1>
      </div>

      <div className="hidden lg:flex md:mr-36 lg:mr-52 space-x-5">
        <Navlink onClick={() => {}} text="Home" selected />
        <Navlink onClick={() => {}} text="About" />
        <Navlink onClick={() => {}} text="Projects" />
        <Navlink onClick={() => {}} text="Resume" />
        <Navlink onClick={() => {}} text="Links" />
      </div>
    </nav>
  );
}
