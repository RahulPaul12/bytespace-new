import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo-black.png"
const FooterLayout = () => {
    return (
        <footer className="w-full border-t border-[#CED0D3]">
            <div className="container pt-18 pb-12">
                <div className="grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                    <div className="sm:max-w-md">
                        <Link href={""} className="inline-flex items-center gap-2" aria-label="ByteSpace home">
                            <Image className="h-9 w-auto" src={logo} alt="logo" width={200} height={36} />
                        </Link>
                        <p className="mt-4 text-sm font-normal text-black-shadow">Stay Up to date with our latest features and releases by joining our newsletter.</p>
                        <form className="mt-11 flex flex-col sm:flex-row gap-3">
                            <label className="flex-1">
                                <input type="email" required placeholder="Enter your email" className="field-input rounded-full w-full"/>
                            </label>
                            <button type="submit" className="primary-btn">Search</button>
                        </form>
                        <p className="mt-6 text-xs font-normal text-black-shadow max-w-85">
                          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </div>
                    <nav aria-label="Footer" className="footer-link">
                        <ul className="space-y-4">
                            <li><Link href={""} className="link">Featured Courses</Link></li>
                            <li><Link href={""} className="link">Featured Categories</Link></li>
                            <li><Link href={""} className="link">Business</Link></li>
                            <li><Link href={""} className="link">IT</Link></li>
                            <li><Link href={""} className="link">Design</Link></li>
                        </ul>
                        <ul className="space-y-4">
                            <li><Link href={""} className="link">Development</Link></li>
                            <li><Link href={""} className="link">Marketing</Link></li>
                            <li><Link href={""} className="link">Photography</Link></li>
                            <li><Link href={""} className="link">Finance</Link></li>
                            <li><Link href={""} className="link">Sport</Link></li>
                        </ul>
                        <ul className="space-y-4 col-span-2 sm:col-span-1">
                            <li><Link href={""} className="link">Become a Creator</Link></li>
                            <li><Link href={""} className="link">Affiliate Program</Link></li>
                            <li><Link href={""} className="link">Contact</Link></li>
                            <li><Link href={""} className="link">Help</Link></li>
                            <li><Link href={""} className="link">About</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="copyright-section">
                    <p>© 2023 ByteSpace. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link href={""} className="link">Privacy Policy</Link>
                        <Link href={""} className="link">Terms of Service</Link>
                        <Link href={""} className="link">Cookies Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterLayout