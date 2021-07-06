import Navbar from "../navbars/AppNav"

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
