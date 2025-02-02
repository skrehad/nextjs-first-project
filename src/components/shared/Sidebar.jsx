"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <ul className="p-6 space-y-4">
        <li>
          <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile" className="block p-2 hover:bg-gray-700 rounded">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/setting" className="block p-2 hover:bg-gray-700 rounded">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
