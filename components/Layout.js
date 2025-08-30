import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href="/"><a className="text-xl font-bold text-purple-600">Rupya Digital</a></Link>
          <nav className="space-x-6 hidden md:block">
            <Link href="/services"><a className="hover:text-purple-600">Services</a></Link>
            <Link href="/case-studies"><a className="hover:text-purple-600">Case Studies</a></Link>
            <Link href="/pricing"><a className="hover:text-purple-600">Pricing</a></Link>
            <Link href="/blog"><a className="hover:text-purple-600">Blog</a></Link>
            <Link href="/contact"><a className="hover:text-purple-600">Contact</a></Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Rupya Digital. All rights reserved.</p>
      </footer>
    </div>
  )
}