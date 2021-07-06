import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import UserLayout from "../../../../components/layouts/UserLayout"

export default function Profile() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)
  return (
    <div>
      <h1>Profile Page {id}</h1>
    </div>
  )
}

Profile.Layout = UserLayout
