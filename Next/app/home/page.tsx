import Image from "next/image"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-20">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#03468F] leading-tight">
                Develop Today
                <br />
                Create Tomorrow
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#03468FD4]">Welcome To IEEE Kafrelsheikh SB</h2>
              <p className="text-gray-600 max-w-lg">
                The IEEE Kafrelsheikh Student Branch Is The Leading Organization In Kafrelsheikh City That Works To
                Build, Innovate And Inspire The Technical Community
              </p>
              <button className="bg-[#03468F] text-white px-8 py-3 rounded-[8px] hover:bg-[#003380] transition-colors">
                  KNOW MORE
                </button>

            </div>

            {/* Right Column - Sphere Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/J61WggWK5m-17 1.svg"
                alt="Network Sphere"
                fill
                className="object-contain spin-animation"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}