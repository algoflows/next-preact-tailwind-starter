// _app.jsx
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"

import Amplify from "aws-amplify"
import config from "../aws-exports"
Amplify.configure({ ...config, srr: true })

import Navbar from "../components/Navbar"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
