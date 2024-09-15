import Github from "@/app/utils/svgs";

export default function Project(props: { title: string, href: string, img: string, caption: string, tech: string })
{
    return (
        <a target="_blank" href={props.href} className="my-auto flex flex-col space-y-2 transition-all duration-300 hover:scale-105">
            <img className="rounded-lg" src={props.img} alt={props.img} width="100%" />
            <div className="flex items-center">
                <h1 className="text-nowrap font-bold">{props.title}</h1>
                <span className="bg-true-gray-700 h-[2px] w-full mx-3 shadow"/>
                <Github width="25" height="25" />
            </div>
            <p className="text-brand-300">{props.tech}</p>
            <p className="text-sm">{props.caption}</p>
        </a>
    )
}