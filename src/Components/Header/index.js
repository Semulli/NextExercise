import Link from "next/link";

const Header = () => {

    return (
        <header>
            < h1>Welcome to Album and User list</h1>
            <nav>
                <Link href="/">Home</Link>
                |
                <Link href="/users">Users</Link>
            </nav>
        </header>
    )
}

export default Header;