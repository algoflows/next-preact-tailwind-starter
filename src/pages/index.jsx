import Head from "next/head"
import Image from "next/image"
import { useQuery } from "react-query"
import axios from "axios"

export default function Home() {
  // const { isLoading, error, data } = useQuery("todos", () =>
  //   axios(`https://jsonplaceholder.typicode.com/todos/`)
  // )

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* {isLoading && <h3>loading...</h3>}
        {error && <h3 className="text-red-700">Woh Error</h3>} */}
        <h1 className="text-blue-300">Testing the application</h1>
      </main>
    </div>
  )
}
