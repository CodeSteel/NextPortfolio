import clsx from "clsx";

export default function Navlink(props: { text: string; onClick?: () => void; selected?: boolean }) {
  return (
    <button
      onClick={() => props.onClick?.()}
      className={clsx("px-4 py-2 border border-brand-50/[0.2] rounded-lg font-bold text-sm",
      {
        "bg-brand-500 border-transparent text-brand-950": props.selected
      })}
    >
      {props.text}
    </button>
  );
}
