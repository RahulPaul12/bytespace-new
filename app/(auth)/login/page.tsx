import Image from "next/image"
import Link from "next/link"

const LoginPage = () => {
    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-grid">
            <div className="container lg:py-30 py-20">
                <div className="flex gap-x-16 gap-y-6">
                    <div className="lg:basis-1/2 hidden">
                        <h6 className="text-xl font-semibold text-[#F5F5F6] mb-4">Sign in with ease</h6>
                        <p className="text-lg text-[#F5F5F6] font-normal">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
                        <Image src="/profile.png" alt="Picture of the author" width={500} height={500}/>
                    </div>
                    <div className="max-w-145 w-full bg-white rounded-3xl px-12 lg:px-15 pt-16 pb-10">
                        <p className="text-lg font-normal text-primary">Sign In</p>
                        <h2 className="font-semibold text-[44px]">Welcome Back</h2>
                        <form className="my-8 space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="field-label">Email</label>
                                <input id="email" type="email" placeholder="designer@example.com" className="field-input"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="field-label">Password</label>
                                <input id="password" type="password" placeholder="********" className="field-input"/>
                            </div>
                            <button type="submit" className="primary-btn block w-fit ml-auto">Sign In</button>
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
                        <p className="text-center pt-10 text-base font-normal text-[#888888]">New user? <Link href={""} className="text-primary">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage