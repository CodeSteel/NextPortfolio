import Sensor from "react-visibility-sensor";
import FadeIn from "react-fade-in";
import {useEffect, useState} from "react";
import useWindowDimensions from "@/app/hooks/useWindowSize";

export default function AboutSection(props: { onActive?: () => void; }) {
    const [visible, setVisible] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setVisible(width < 1000);
    }, [width])
    
    return (
        <section className="">
            <Sensor onChange={(vis: boolean) => {
                setVisible(true);
                if (vis)
                    props.onActive?.();
            }}>
            <FadeIn visible={visible}>
                <div className="flex space-x-0 lg:space-x-10 flex-col lg:flex-row w-full">
                    <div className="h-full flex flex-col space-y-4">
                        <img className="block lg:hidden rounded-2xl mx-auto mb-10" height="128px" width="128px"
                             alt="picture of me"
                             src="https://media.licdn.com/dms/image/v2/D4E03AQEK8Z3_JYebOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699736204343?e=1731542400&v=beta&t=SJzsmiaolXRGoKBnapRCZyoFGzlnD8zdz96fuXLY9N4"/>

                        <div
                            className="w-full rounded-lg p-6 border border-brand-50/[0.06] shadow-xl">
                            <h1 className="text-3xl font-bold">Hi there, I&apos;m <span
                                className="text-brand-500">Isaac</span>!</h1>
                            <p className="mt-5">A highly motivated full stack developer with expertise in web applications & game systems. Successfully tackled a diverse range of projects, from online gameplay experiences to responsive web applications and restful APIs. Started writing code at the age of 13, I’m self-taught and driven by a passion of writing clean code & making things happen.</p>
                        </div>

                        <div className="w-full h-[20%] rounded-lg p-4 border border-brand-50/[0.06] shadow-xl">
                            <strong className="text-brand-400">Top Skills: </strong>
                            C# • ASP.NET MVC • React • Typescript/Javascript • SQL • Lua • Python
                        </div>
                    </div>
                    <div className="mt-5 lg:m-auto flex flex-col space-y-5">
                        <img className="hidden lg:block rounded-2xl" height="560px" width="560px" alt="picture of me"
                             src="https://media.licdn.com/dms/image/v2/D4E03AQEK8Z3_JYebOg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699736204343?e=1731542400&v=beta&t=SJzsmiaolXRGoKBnapRCZyoFGzlnD8zdz96fuXLY9N4"/>
                        <hr/>

                        <div className="flex flex-col space-y-3">
                            <a target="_blank" className="duration-200 transition-all hover:scale-105"
                               href="https://www.linkedin.com/in/isaac-holloway-ab02b4202/">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-linkedin text-brand-500" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                    <p>@Isaac-Holloway</p>
                                </div>
                            </a>
                            <a target="_blank" className="duration-200 transition-all hover:scale-105"
                               href="https://github.com/codesteel/">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-github text-brand-500" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                                    <p>@CodeSteel</p>
                                </div>
                            </a>
                            <a target="_blank" className="duration-200 transition-all hover:scale-105"
                               href="https://www.youtube.com/@codesteel">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-youtube text-brand-500" viewBox="0 0 16 16">
                                        <path
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                    </svg>
                                    <p>@CodeSteel</p>
                                </div>
                            </a>
                            <a target="_blank" className="duration-200 transition-all hover:scale-105"
                               href="mailto:steelzkz@gmail.com">
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                         className="bi bi-envelope-fill text-brand-500" viewBox="0 0 16 16">
                                        <path
                                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                    </svg>
                                    <p>@steelzkz@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <hr/>

                        <a target="_blank" href="/isaac-holloway-resume.pdf" className="mx-auto h-[20%] bg-brand-500 hover:bg-brand-700 duration-200 transitiona-all hover:scale-105 rounded-lg p-4 border border-brand-50/[0.06] shadow-xl">
                            View Resume
                        </a>
                    </div>
                </div>

            </FadeIn>
            </Sensor>
        </section>
    )
}