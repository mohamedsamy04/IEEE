"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F9FA] py-8">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-[99%]">
        <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12">
            {/* Logo and Description */}
            <div className="md:col-span-5">
              <Image
                src="/Logo.svg"
                alt="IEEE Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-[#8B96A5] max-w-xs mb-4">
                The IEEE Kafrelsheikh Student Branch is the leading organization in Kafrelsheikh city that works to
                build, innovate and inspire the technical community
              </p>
              <div className="flex items-center space-x-4">
                <Link href="https://instagram.com" className="text-[#03458F] hover:text-[#03458F]/80 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link href="https://facebook.com" className="text-[#03458F] hover:text-[#03458F]/80 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="text-[#03458F] hover:text-[#03458F]/80 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com" className="text-[#03458F] hover:text-[#03458F]/80 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sitemap */}
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-6 text-[#03458F]">Sitmap</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <Link href="/" className="text-[#8B96A5] hover:text-[#03458F] transition-colors">
                  Home
                </Link>
                <Link href="/events" className="text-[#8B96A5] hover:text-[#03458F] transition-colors">
                  Events
                </Link>
                <Link href="/about" className="text-[#8B96A5] hover:text-[#03458F] transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-[#8B96A5] hover:text-[#03458F] transition-colors">
                  Contact
                </Link>
                <Link href="/team" className="text-[#8B96A5] hover:text-[#03458F] transition-colors">
                  Team
                </Link>
              </div>
            </div>

            {/* Join The Family */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold mb-2 text-[#03458F]">Join The Family</h3>
              <p className="text-[#8B96A5] mb-6">Sign-up for the latest news, offers, and much more.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 pl-12 pr-16 rounded-full bg-[#F8F9FA] border-none focus:outline-none focus:ring-2 focus:ring-[#03458F]"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#8B96A5]">
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center rounded-r-full bg-[#03458F] hover:bg-[#03458F]/90 text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#DEE2E7]">
            <div className="text-center text-[#8B96A5] text-sm">
              <p>
                2025 IEEE | All Rights Reserved - Developed by{" "}
                <Link href="https://www.facebook.com/share/19oJ1ucsB8/?mibextid=wwXIfr" className="text-[#03458F] hover:text-[#03458F]/80">
                  Mohamed Samy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

