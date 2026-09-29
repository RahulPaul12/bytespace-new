import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"
const HeaderLayout = () => {
    return (
        <header className="text-white absolute w-full pb-12 pt-10">
            <nav className="container flex items-center justify-between">
                <Link href={""} className="flex items-center gap-2 font-bold text-lg">
                    <Image className="h-9 w-auto" src={logo} alt="logo" width={200} height={36} />
                </Link>
                <div className="hidden md:flex gap-6">
                    <Link href={""} className="navlink">Home</Link>
                    <Link href={"/course"} className="navlink">Courses</Link>
                    <Link href={"creator"} className="navlink">Creators</Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/login" className="hidden sm:block navlink">Sign In</Link>
                    <Link href="/registration" className="hidden sm:block navlink">Join Us</Link>
                    <Link href="/cart" aria-label="Cart">
                        <i className="icon-cart text-2xl"></i>
                    </Link>
                    <Link href="/menu" aria-label="menu" className="block sm:hidden">
                        <i className="icon-menu"></i>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default HeaderLayout