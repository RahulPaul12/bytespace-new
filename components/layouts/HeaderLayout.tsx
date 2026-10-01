'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"
import { usePathname } from "next/navigation"
import { useState } from "react"
import SidebarLayout from "./SidebarLayout"
const HeaderLayout = () => {
    const pathname = usePathname()
    const [sidebarOpen, setSidebaropen] = useState(false)
    const openSidebar = () => setSidebaropen(true)
    const closeSidebar = () => setSidebaropen(false)
    return (
        <>
        <header className="header">
            <nav className="container flex items-center justify-between">
                <Link href={"/"} className="flex items-center gap-2 font-bold text-lg">
                    <Image className="h-9 w-auto" src={logo} alt="logo" width={200} height={36} />
                </Link>
                <div className="hidden md:flex gap-6">
                    <Link href={"/"} className={`navlink ${pathname === '/' ? 'active' : ''}`}> Home</Link>
                    <Link href={"/course"} className={`navlink ${pathname === '/course' ? 'active' : ''}`}>Courses</Link>
                    <Link href={"/creator"} className={`navlink ${pathname === '/creator' ? 'active' : ''}`}>Creators</Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/login" className="hidden sm:block navlink">Sign In</Link>
                    <Link href="/registration" className="hidden sm:block navlink">Join Us</Link>
                    <Link href="/cart" aria-label="Cart">
                        <i className="icon-cart text-2xl"></i>
                    </Link>
                    <button onClick={openSidebar} aria-label="menu" className="block md:hidden">
                        <i className="icon-menu"></i>
                    </button>
                </div>
            </nav>
        </header>
        <SidebarLayout sidebarOpen={sidebarOpen} onClose={closeSidebar}/>
        </>
    )
}
export default HeaderLayout