import React from "react"
import Link from "next/link"

export default function Navbar() {
  const id = "jkljdfl2j42"
  const username = "seanknowles"

  return (
    <div className="container py-4 px-14 flex items-center text-white h-10 bg-blue-600 max-w-full">
      <h3>APP - AUTHED LAYOUT</h3>
      <Link href="/">
        <a className="ml-5 text-blue-500">Home</a>
      </Link>
      <Link href="/profile">
        <a className="ml-5">Login</a>
      </Link>
      <Link href="/protected">
        <a className="ml-5">Protected</a>
      </Link>
      <Link href="/protected-client-route">
        <a className="ml-5">ProtectedClient</a>
      </Link>
      <Link href="/contractor/profile/[id]/" as={`contractor/profile/${id}/`}>
        <a>Profile</a>
      </Link>
    </div>
  )
}
