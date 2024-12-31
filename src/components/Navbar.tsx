import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Streamify</h1>
                <div>
                    <Link href="/" className="mr-4">
                        Home
                    </Link>
                    <a href="/auth/login">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar