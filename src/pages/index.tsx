import Nav from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="items-center w-full h-full justify-center">
      <Head>
        <title>Home - Woodetect</title>
      </Head>
      <Nav />
      <div className="flex flex-col items-center w-full mt-12">
        <h1 className="text-3xl underline text-gray-700 dark:text-gray-100 pb-7">
          Welcome to Woodetect !
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-100 max-w-3xl text-center">
          Our team is creating a product that aims at reducing damage to
          tree-based ecosystems. <br /> Using sound sensors and AI-powered audio
          processing, we aim to detect any threats the environment is facing.
        </p>
        <div className="mt-20 bottom-0 flex flex-col items-center flex-shrink-0">
          <p className="text-md italic">Listen to the forest</p>
        </div>
      </div>
    </div>
  );
}
