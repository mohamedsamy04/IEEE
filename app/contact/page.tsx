import Image from "next/image"
import { Clock, Globe } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function RecruitmentCards() {
  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-6 space-y-4 mt-24 sm:mt-24 bg-[#F8FAFC]">
        <h1 className="text-[#0A3C8F] text-xl sm:text-2xl font-bold">All Forms</h1>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {/* Heads Recruitment Card */}
          <Link href="/recruitment/heads" className="block">
            <div className="bg-white rounded-[24px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-3 sm:p-4">
                <div className="relative mb-2">
                  <Image
                    src="/Mask group.svg"
                    alt="Heads Recruitment"
                    width={500}
                    height={300}
                    className="w-full rounded-2xl"
                    priority
                  />
                  <div className="absolute bottom-[-25px] sm:bottom-[-30px] right-4 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full border-2 border-white flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="/Group 30.svg"
                      alt="Menu"
                      width={60}
                      height={60}
                      className="text-[#03468F] w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </div>
                </div>
                <h2 className="text-[#0A3C8F] text-sm sm:text-[15px] font-semibold mb-2 mt-4 sm:mt-2">
                  SEASON 2025 - HEADS RECRUIRTMENT
                </h2>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[#6B7280]">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-xs">Board</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[#6B7280]">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-xs">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Committees Card */}
          <Link href="/recruitment/committees" className="block">
            <div className="bg-white rounded-[24px] shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-3 sm:p-4">
                <div className="relative mb-2">
                  <Image
                    src="/318364464_532860932189975_8755687081539552439_n 1.svg"
                    alt="Available Committees"
                    width={500}
                    height={300}
                    className="w-full rounded-2xl"
                    priority
                  />
                  <div className="absolute bottom-[-25px] sm:bottom-[-30px] right-4 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full border-2 border-white flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="/Group 30.svg"
                      alt="Menu"
                      width={60}
                      height={60}
                      className="text-[#03468F] w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </div>
                </div>
                <h2 className="text-[#0A3C8F] text-sm sm:text-[15px] font-semibold mb-2 mt-4 sm:mt-2">
                  SEASON 2025 - MEMBERS RECRUITMENT
                </h2>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[#6B7280]">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-xs">Committees</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[#6B7280]">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-xs">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}