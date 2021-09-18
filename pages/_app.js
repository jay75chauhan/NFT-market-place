import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Head>
        <title>NFT Market</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/5589/5589514.png"
        />
      </Head>
      <nav className=" p-6 shadow-md">
        <div className="flex items-center space-x-4 border-b-2 border-gray-400 pb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5589/5589514.png"
            width="70"
          />
          <p className="text-2xl  sm:text-4xl font-bold ">NFT Marketplace</p>
        </div>

        <div className="flex mt-4 space-x-3 ">
          <Link href="/">
            <a className=" text-xs font-medium sm:text-base text-pink-500  p-3 shadow rounded-full hover:bg-gray-100 hover:shadow-xl ">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className=" text-xs font-medium sm:text-base text-pink-500  p-3 shadow rounded-full hover:bg-gray-100 hover:shadow-xl">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className=" text-xs font-medium sm:text-base text-pink-500  p-3 shadow rounded-full hover:bg-gray-100 hover:shadow-xl">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className=" text-xs font-medium sm:text-base text-pink-500  p-3 shadow rounded-full hover:bg-gray-100 hover:shadow-xl">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
