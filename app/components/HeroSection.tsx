import "./HeroSectionStyle.css";

export default function HeroSection() {
  return (
      <main className="text-center flex flex-col pt-[30vh] lg:pt-[20vh]">
          <span className="top-typography"></span> 
          <div className="flex flex-col space-y-4 rowdies-bold z-10">
              <h1 className="text-3xl md:text-6xl lg:text-8xl">Full Stack Developer</h1>
              <h2 className="text-xl md:text-4xl text-brand-500">
                  ASP.NET • React • Typescript
              </h2>
          </div>

          <div id="scroll-down" className="move-up-down h-fi">
            <span className="drop-shadow-2xl material-symbols-outlined">
              arrow_drop_down
            </span>
              <p className="rowdies-bold text-lg text-true-gray-600">scroll</p>
          </div>
          <span className="bottom-typography"></span>
      </main>
  );
}
