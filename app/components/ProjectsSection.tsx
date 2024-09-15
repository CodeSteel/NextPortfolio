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
                            title="MeChat" href="https://github.com/CodeSteel/MeChat" 
                            caption="An ASP.NET real-time chat web application"
                            tech="ASPNET MVC - C# - TailwindCSS - PostgreSQL"
                            img="https://private-user-images.githubusercontent.com/48765827/365882980-3417a6f1-9c8b-4d40-b532-1909c446689a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYyNTkyMTAsIm5iZiI6MTcyNjI1ODkxMCwicGF0aCI6Ii80ODc2NTgyNy8zNjU4ODI5ODAtMzQxN2E2ZjEtOWM4Yi00ZDQwLWI1MzItMTkwOWM0NDY2ODlhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTEzVDIwMjE1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ2MTc0MDVlM2I2OGFjNmE5Zjg3MDliMWQ2MzEyOWVjN2ZkOTA5NThiNjI4MDY5YWVlODNhOWUxOTI4ODUwNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.igKStsJ4FRTzDT4Ol75x4AuL0N9cLJaW6ZKipcXHS58" />

                        <Project
                            title="UBlog" href="https://github.com/CodeSteel/UBlogASPNetApp"
                            caption="A blogging web-app developed with ASP.NET."
                            tech="ASPNET MVC - C# - Bootstrap - MySQL"
                            img="https://private-user-images.githubusercontent.com/48765827/362517515-6ffd9bb7-f1d2-4a34-905d-294083e71880.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYzNTgyMTksIm5iZiI6MTcyNjM1NzkxOSwicGF0aCI6Ii80ODc2NTgyNy8zNjI1MTc1MTUtNmZmZDliYjctZjFkMi00YTM0LTkwNWQtMjk0MDgzZTcxODgwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE0VDIzNTE1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFiMWVhMjVmOTgyZDA4ODBjYTYxMjRiODFmNDA0NWU2NjUwZDhlNjZjNjAzMzVlMjEzYmE1YzFiYTUxZWE0ZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._ZucGe3SAHKTBIL02EzUQqFuzkriNK5bc64dF_bf4_U" />
                        
                        <Project
                            title="ExpressJS Authenitcation" href="https://github.com/CodeSteel/ExpressJS-Login-Application"
                            caption="Login/Register/And Password Reset into one Repository."
                            tech="ExpressJS - MySQL - CSS"
                            img="https://user-images.githubusercontent.com/48765827/181691725-3783bdf6-0423-4318-9f7a-e56d8b3d9f12.png" />

                        <Project
                            title="World of Warcraft Gameplay Features" href="https://github.com/CodeSteel/WoW-GameplayFeatures"
                            caption="World of Warcraft core gameplay features written in C# using Unity & FishNet."
                            tech="Unity - C# - Fishnet"
                            img="https://private-user-images.githubusercontent.com/48765827/322287918-f0349ae3-42df-4fb5-9f6d-b68fac53c867.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYzNTg0OTIsIm5iZiI6MTcyNjM1ODE5MiwicGF0aCI6Ii80ODc2NTgyNy8zMjIyODc5MTgtZjAzNDlhZTMtNDJkZi00ZmI1LTlmNmQtYjY4ZmFjNTNjODY3LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE0VDIzNTYzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNiYTI4ZThjYTE4MTRiMTk0ODc3OGM0YmE0MTNlMTBkNDc5NmZiN2UxOGFiZDUxMGFhYTgxMDQ5ZGFkNWM4ZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.HJ-juVtyBgu0-BNGlvVwYj73jtBXgNM03c8ORkMsiyo" />

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