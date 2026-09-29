import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/auth-logo.png"
const AuthHeader = () => {
    return (
        <header className="text-white absolute w-full pb-12 pt-10">
            <nav className="container flex items-center justify-between">
                <Link href={""} className="flex items-center gap-2 font-bold text-lg">
                    <Image className="h-9 w-auto" src={logo} alt="logo" width={200} height={36} />
                </Link>
            </nav>
        </header>
    )
}

export default AuthHeader