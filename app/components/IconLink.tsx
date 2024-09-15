export default function IconLink(props: { href: string, children: JSX.Element }) {
    return (
        <a target="_blank" className="hover:text-brand-600 hover:scale-125 duration-200 transition-all" href={props.href}>
        {props.children}
        </a>
    )
}