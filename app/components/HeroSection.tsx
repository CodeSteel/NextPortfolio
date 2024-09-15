import "./HeroSectionStyle.css";
import Sensor from "react-visibility-sensor";
import IconLink from "@/app/components/IconLink";
import Github from "@/app/utils/svgs";
import {scroller} from "react-scroll";

export default function HeroSection(props: { onActive?: () => void; }) {
    
  return (
      <section>
          <Sensor onChange={(visible: boolean) => {
              if (visible)
                props.onActive?.();
          }}>
              <div className="text-center flex flex-col pt-[30vh] lg:pt-[20vh]">
                  <span className="top-typography"></span>
                  
                  <div className="flex flex-col space-y-4 rowdies-bold z-10">
                      <h1 className="text-3xl md:text-6xl lg:text-8xl">Full Stack Developer</h1>
                      <h2 className="text-xl md:text-4xl text-brand-500">
                          ASP.NET • React • Typescript
                      </h2>
                  </div>

                  <div className="flex mx-auto mt-28 space-x-5">
                        <IconLink href="https://www.linkedin.com/in/isaac-holloway-ab02b4202/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                               className="bi bi-linkedin" viewBox="0 0 16 16">
                              <path
                                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                          </svg>
                        </IconLink>
                        <IconLink href="https://github.com/codesteel/">
                            <Github width="32" height="32" />
                        </IconLink>
                        <IconLink href="mailto:steelzkz@gmail.com">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                               className="bi bi-envelope-fill" viewBox="0 0 16 16">
                              <path
                                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                          </svg>
                        </IconLink>
                        <IconLink href="https://www.youtube.com/@codesteel">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                               className="bi bi-youtube" viewBox="0 0 16 16">
                              <path
                                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                          </svg>
                        </IconLink>
                  </div>

                  <a onClick={() => scroller.scrollTo('about', {
                      smooth: true,
                      duration: 500
                  })} id="scroll-down" className="move-up-down h-fi cursor-pointer">
                    <span className="drop-shadow-2xl material-symbols-outlined">
                      arrow_drop_down
                    </span>
                      <p className="rowdies-bold text-lg text-true-gray-600">scroll</p>
                  </a>
              </div>
          </Sensor>
      </section>
  );
}
