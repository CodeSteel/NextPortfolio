import clsx from "clsx";

export default function Navlink(props: { text: string; onClick?: () => void; href?: string; selected?: boolean }) {
  function goTo(href: string)
  {
      window.location.href = href;
  }
    
    return (
    <button
      onClick={() => props.onClick != null ? props.onClick() : goTo(props.href ?? "/")}
      className={clsx("px-4 py-2 border border-brand-50/[0.2] transition-colors duration-200 rounded-lg font-bold text-sm",
      {
        "bg-brand-500 border-transparent": props.selected, 
        "hover:border-brand-50/[0.6]": !props.selected
      })}
    >
      {props.text}
    </button>
  );
}
