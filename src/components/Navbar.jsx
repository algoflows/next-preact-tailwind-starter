import React from "react"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="container py-4 px-14 flex items-center text-white h-10 bg-blue-600 max-w-full">
      <Link href="/">
        <a className="text-blue-500">Home</a>
      </Link>
      <Link href="/profile" prefetch>
        <a className="ml-5">Profile</a>
      </Link>
      <Link href="/protected" prefetch>
        <a className="ml-5">Protected</a>
      </Link>
    </div>
  )
}
