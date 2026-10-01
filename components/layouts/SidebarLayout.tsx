import Image from "next/image"
import Link from "next/link"

const SidebarLayout = ({sidebarOpen, onClose}:any) => {
    return (
    <aside className={`drawer ${sidebarOpen? 'active':''}`}>
        <div className="max-w-96 w-full drawer-content">
            <div className="flex items-center justify-between p-5 mb-6">
                 <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image src="/images/logo-black.png" alt="Logo" width={132} height={32}/>
                    </Link>
                 </div>
                 <button onClick={onClose} aria-label="Close menu" className="text-2xl">✕</button>
            </div>
            <nav className="flex flex-col gap-3 px-5 items-center">
                <Link href="/" className="navlink text-black-shadow! active">Home</Link>
                <Link href="/course" className="navlink text-black-shadow!">Course</Link>
                <Link href="/creator" className="navlink text-black-shadow!">Creator</Link>
                <Link href="/login" className="navlink text-black-shadow!">Sign In</Link>
                <Link href="/registration" className="navlink text-black-shadow!">Join Us</Link>
            </nav>
        </div>
    </aside> 
    )
}

export default SidebarLayout