import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-class</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="my-6 text-xl font-bold text-black">
          Welcome to E class
        </h1>
        <form className="flex flex-col mt-24 gap-6 w-4/12 m-auto bg-slate-100 p-7">
          <h1 className="font-semibold">YOUR UNISTUDENT CREDENTIALS</h1>
          <input
            id="inp"
            placeholder="Email"
            className="shadow appearance-none border rounded w-5/12 m-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
          <input
            id="pas"
            placeholder="Password"
            className="m-auto shadow appearance-none border rounded w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
          <button className="w-15 m-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded">
            Log In
          </button>
        </form>
      </main>

      <footer className="text-center fixed bottom-2 w-full">
        <span>E-class Login Page</span>
      </footer>
    </div>
  );
}
