// _app.jsx
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"

import Amplify from "aws-amplify"
import config from "../aws-exports"
Amplify.configure({ ...config, srr: true })

import LandingLayout from "../components/layouts/LandingLayout"
import Navbar from "../components/navbars/LandingNav"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  const Layout = Component.Layout || LandingLayout

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}
