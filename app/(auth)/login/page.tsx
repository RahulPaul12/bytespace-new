import Image from "next/image"
import Link from "next/link"
import authimage from "@/public/images/auth-img.png"
const LoginPage = () => {
    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-grid">
            <div className="container lg:py-30 py-40">
                <div className="flex justify-center gap-x-16 gap-y-6">
                    <div className="lg:basis-1/2 lg:block hidden">
                        <h6 className="auth-left-title">Sign in with ease</h6>
                        <p className="auth-left-desc">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
                        <Image className="mt-20" src={authimage} alt="Picture of the author" width={550} height={585}/>
                    </div>
                    <div className="form-div">
                        <p className="form-title">Sign In</p>
                        <h2 className="form-header">Welcome Back</h2>
                        <form className="my-8 space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="field-label">Email</label>
                                <input id="email" type="email" placeholder="designer@example.com" className="field-input"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="field-label">Password</label>
                                <input id="password" type="password" placeholder="********" className="field-input"/>
                            </div>
                            <button type="submit" className="primary-btn block w-full sm:w-fit sm:ml-auto">Sign In</button>
                        </form>
                        <div className="py-10 flex items-center gap-3">
                            <div className="h-px flex-1 bg-[#D1D1D1]" />
                            <span className="text-lg text-[#888888]">or</span>
                            <div className="h-px flex-1 bg-[#D1D1D1]" />
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <Link href={""} className="social-login">
                                <i className="icon-round-fb text-[40px]"></i>
                            </Link>
                            <Link href={""} className="social-login">
                                <i className="icon-google text-[40px]"></i>
                            </Link>
                        </div>
                        <p className="form-link">New user? <Link href="/registration" className="text-primary">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage