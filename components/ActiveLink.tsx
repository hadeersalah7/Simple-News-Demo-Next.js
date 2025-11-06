"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const ActiveLink = ({ href, title }: { href: string, title: string }) => {
    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? "active" : ""}>{title}</Link>
    )
}

export default ActiveLink