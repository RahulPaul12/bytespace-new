
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-dvh flex items-center justify-center">
            <Link href="/login">Click to login</Link>
        </div>
    );
}
