"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/home" className="flex-shrink-0">
            <Image
              src="/Logo (2).svg"
              alt="IEEE Logo"
              width={88}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-[#03468F1F] text-[#03468F] rounded-[8px]"
                    : "text-[#03468F] hover:text-[#03468F]/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-[#03468F]" /> : <Menu className="h-6 w-6 text-[#03468F]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-2 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-[#03468F1F] text-[#03468F] rounded-[8px]"
                      : "text-[#03468F] hover:text-[#03468F]/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
