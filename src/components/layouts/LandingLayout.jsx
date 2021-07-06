import Navbar from "../navbars/LandingNav"

export default function LandingLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
