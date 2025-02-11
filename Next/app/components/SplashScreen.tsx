"use client"

import Image from "next/image"

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-[#1E3C5F] p-4">
      <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
        <Image src="/Logo-1.svg" alt="IEEE Logo" width={300} height={100} className="w-4/5 max-w-[300px]" priority />
        <Image
          src="/Loader.svg"
          alt="Loader"
          width={101}
          height={81}
          className="w-10 h-8 sm:w-16 sm:h-12 md:w-20 md:h-16 lg:w-[100.87px] lg:h-[80.76px]"
          priority
        />
      </div>
    </div>
  )
}

