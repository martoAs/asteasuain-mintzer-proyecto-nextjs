import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#222831] text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          <Link className="hover:text-gray-200" href="/">
            Home
          </Link>
        </nav>
        <p className="text-sm">© 2024 Wall Of Sound. All rights reserved.</p>
      </div>
    </footer>
  )
}

