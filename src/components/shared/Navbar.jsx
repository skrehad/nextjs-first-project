import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-6">
          <li>
            <Link className="text-white hover:text-gray-200" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-200" href="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
