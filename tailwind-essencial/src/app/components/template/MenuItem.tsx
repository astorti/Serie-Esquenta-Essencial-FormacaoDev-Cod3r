import Link from "next/link"

export interface MenuItemProps {
    label: string
    href: string
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link
            href={props.href}
            className={`flex py-1.5 hover:underline ${props.className ?? ''}`}>
            <span className="text-sm text-zinc-400">{props.label}</span>
        </Link>
    )
}