import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
const Layout = ({
  children,
  title = 'Orbit Movies',
}) => {
  return (
    <div className="h-full min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="w-full h-12 flex items-center justify-between shadow z-20 border-b border-gray-300 px-4">
          <Image src="/orbit-group-logo.svg" width={50} height={50} />
          <div className="w-2/3 md:w-2/5 flex justify-around">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <a href="https://www.themoviedb.org/">The Movie DB</a>
          </div>
        </nav>
      </header>
      <div className="w-full h-full bg-gray-100 p-4 min-h-screen">
        {children}
      </div>

      <footer>
        <a
          className="w-full flex justify-center py-2 text-white bg-gray-800"
          href="estebandalelr.co">
          Created by Esteban Dalel R
          </a>
      </footer>
    </div>
  )
}
export default Layout