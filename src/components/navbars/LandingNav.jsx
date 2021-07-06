import React from "react"
import Link from "next/link"

export default function Navbar() {
  const id = "jkljdfl2j42"
  const username = "seanknowles"

  return (
    <div className="container py-4 px-14 flex items-center text-white h-10 bg-blue-600 max-w-full">
      <h3>LANDING</h3>
      <Link href="/">
        <a className="ml-5 text-blue-700">Home</a>
      </Link>
      <Link href="/profile">
        <a className="ml-5">Profile</a>
      </Link>
      <Link href="/protected">
        <a className="ml-5">Protected</a>
      </Link>
      <Link href="/protected-client-route">
        <a className="ml-5">ProtectedClient</a>
      </Link>
      <Link href="/user/profile/[id]" as={`/user/profile/${username}`}>
        <a className="ml-5">Profile</a>
      </Link>
    </div>
  )
}
