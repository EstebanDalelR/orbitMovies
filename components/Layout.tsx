import Link from 'next/link'
import Head from 'next/head'
const Layout = ({
  children,
  title = 'This is the default title',
}) => {
  return (
    <div className="h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className="w-full h-12 flex items-center justify-between shadow z-20 border-b border-gray-300 px-4">
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>
      <div className="w-full h-full bg-gray-200 flex">
        <div className="h-full w-1/12 bg-white z-10 px-2 py-3 border-r border-gray-300">
          h
        </div>
        <div className="h-full w-11/12">
          {children}
        </div>
      </div>

      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}
export default Layout