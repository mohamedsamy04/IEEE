"use client"

import { type ReactNode, useState, useEffect } from "react"
import SplashScreen from "./components/SplashScreen"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body>{showSplash ? <SplashScreen /> : children}</body>
    </html>
  )
}