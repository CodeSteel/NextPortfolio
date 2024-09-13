import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <main>
          <div className="flex flex-col h-screen">
              <div className="flex flex-col">
                  <HeroSection/>
              </div>

              <span className="z-10 w-full h-[100px] bg-brand-900 m-0 p-0 mt-auto mb-[-30px] md:mb-[-25px] lg:mb-[5px] flex ">
                  <h1 className="text-5xl font-black m-auto">About</h1>
              </span>
          </div>

          <div className="flex flex-col h-screen">
              <div className="flex flex-col px-56 pt-40">
              </div>
          </div>
      </main>
  );
}
