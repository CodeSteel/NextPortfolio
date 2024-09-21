import Project from "@/app/components/Project";
import Sensor from "react-visibility-sensor";
import FadeIn from "react-fade-in";
import {useEffect, useState} from "react";
import useWindowDimensions from "@/app/hooks/useWindowSize";

export default function ProjectsSection(props: { onActive?: () => void; })
{
    const [visible, setVisible] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        setVisible(width < 1000);
    }, [width])
    
    return (
        <section className="mb-24">
            <Sensor onChange={(visible: boolean) => {
                setVisible(true);
                if (visible)
                    props.onActive?.();
            }}>
                <FadeIn visible={visible}>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
                        <Project
                            title="MinimalTasks" href="https://github.com/CodeSteel/MinimalTasks"
                            caption="A minimalistic industry-ready task management web-application made with ASP.NET & React."
                            tech="ASP.NET MVC - C# - React - TailwindCSS - MySQL"
                            img="https://i.imgur.com/msFc5yi.png" />
                        
                        <Project 
                            title="MeChat" href="https://github.com/CodeSteel/MeChat" 
                            caption="An ASP.NET real-time chat web application."
                            tech="ASP.NET MVC - C# - TailwindCSS - PostgreSQL"
                            img="https://i.imgur.com/Xssz9o8.png" />

                        <Project
                            title="UBlog" href="https://github.com/CodeSteel/UBlogASPNetApp"
                            caption="A blogging web-app developed with ASP.NET."
                            tech="ASP.NET MVC - C# - Bootstrap - MySQL"
                            img="https://i.imgur.com/8RdKLVS.png" />
                        
                        <Project
                            title="ExpressJS Authenitcation" href="https://github.com/CodeSteel/ExpressJS-Login-Application"
                            caption="Login/Register/And Password Reset into one Repository."
                            tech="ExpressJS - MySQL - CSS"
                            img="https://user-images.githubusercontent.com/48765827/181691725-3783bdf6-0423-4318-9f7a-e56d8b3d9f12.png" />

                        <Project
                            title="World of Warcraft Gameplay Features" href="https://github.com/CodeSteel/WoW-GameplayFeatures"
                            caption="World of Warcraft core gameplay features written in C# using Unity & FishNet."
                            tech="Unity - C# - Fishnet"
                            img="https://i.imgur.com/5kWvChk.png" />

                        <Project
                            title="Networked 2D Inventory" href="https://github.com/CodeSteel/Networked-2D-Inventory"
                            caption="A fully networked & optimized 2 dimensional inventory system."
                            tech="Unity - C# - Fishnet"
                            img="https://i.imgur.com/fhnsllV.png" />
                    </div>
                </FadeIn>
            </Sensor>
        </section>
    )
}