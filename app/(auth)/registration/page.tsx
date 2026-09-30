import Image from "next/image"
import Link from "next/link"
import authimage from "@/public/images/auth-img.png"
const LoginPage = () => {
    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-grid">
            <div className="container lg:py-30 py-40">
                <div className="flex justify-center gap-x-16 gap-y-6">
                    <div className="lg:basis-1/2 lg:block hidden">
                        <h6 className="auth-left-title">Sign up and come in</h6>
                        <p className="auth-left-desc">The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost</p>
                        <Image className="mt-15" src={authimage} alt="Picture of the author" width={550} height={585}/>
                    </div>
                    <div className="form-div">
                        <p className="form-title">Create an Accountn</p>
                        <h2 className="form-header">Welcome to ByteSpace</h2>
                        <form className="my-8 space-y-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="field-label">Full Name</label>
                                <input id="name" type="text" placeholder="Jamie Davis" className="field-input"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="field-label">Email</label>
                                <input id="email" type="email" placeholder="designer@example.com" className="field-input"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="field-label">Password</label>
                                <input id="password" type="password" placeholder="********" className="field-input"/>
                            </div>
                            <button type="submit" className="primary-btn block w-full sm:w-fit sm:ml-auto">Continue</button>
                        </form>
                        <p className="form-link">Already have an account? <Link href="/login" className="text-primary">Login</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage