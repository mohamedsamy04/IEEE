"use client"

import { useState } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

type FormData = {
  name: string
  email: string
  mobileNumber: string
  nationalId: string
  age: number
  city: string
  address: string
  faculty: string
  department: string
  level: string
  wasIEEEBefore: string
  previousSeason: string
  track: string
}

export default function RecruitmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: "onBlur",
  })

  const wasIEEEBefore = watch("wasIEEEBefore")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/submit-recruitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitMessage("Form submitted successfully!")
      } else {
        setSubmitMessage("Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitMessage("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6 pt-32">
        <div className="max-w-[600px] mx-auto bg-white rounded-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-[#0A3C8F] font-bold mb-1">SEASON 2025 - MEMBERS RECRUITMENT</h1>
            <p className="text-gray-500 text-sm mb-4">
              Fill in this form and someone from our team will contact you soon!
            </p>
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-o3R6mbthj8GTLXlqfBxJOnqhNTMo4i.svg"
                alt="Recruiting"
                width={500}
                height={200}
                className="w-full rounded-xl"
                priority
              />
            </div>
            <div className="text-left space-y-1 mb-6">
              <p className="text-sm text-gray-600">
                IEEE is a technical and professional Engineers Organization founded in 1884 and has been given rise to
                global community of over 400,000 members from academia, industry, and government sectors.
              </p>
              <p className="text-sm text-gray-600">
                IEEE KFS is an abbreviation for IEEE Kafrelsheikh University Student Branch; it is one of 10 branches
                across Egyptian Universities.
              </p>
              <p className="text-sm text-gray-600 italic">Note: All answers in English Only*</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Name*</label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="e.g Mohamed Ahmed"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Email*</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                  })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="example@gmail.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Mobile Number*</label>
                <input
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: { value: /^01[0125][0-9]{8}$/, message: "Invalid Egyptian mobile number" },
                  })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="01xxxxxxxxx"
                />
                {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber.message}</p>}
              </div>
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">National ID*</label>
                <input
                  {...register("nationalId", {
                    required: "National ID is required",
                    pattern: { value: /^[0-9]{14}$/, message: "National ID must be 14 digits" },
                  })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="e.g 30101011234567"
                />
                {errors.nationalId && <p className="text-red-500 text-xs mt-1">{errors.nationalId.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Age*</label>
                <input
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 16, message: "You must be at least 16 years old" },
                    max: { value: 100, message: "Age must be less than 100" },
                    valueAsNumber: true,
                  })}
                  type="number"
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="e.g 20"
                />
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
              </div>
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">City*</label>
                <select
                  {...register("city", { required: "City is required" })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                >
                  <option value="">Select a City</option>
                  <option value="cairo">Cairo</option>
                  <option value="alexandria">Alexandria</option>
                  <option value="giza">Giza</option>
                </select>
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Address*</label>
              <input
                {...register("address", { required: "Address is required" })}
                className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                placeholder="e.g 123 Main St"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Faculty*</label>
                <input
                  {...register("faculty", { required: "Faculty is required" })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="e.g Computer Science"
                />
                {errors.faculty && <p className="text-red-500 text-xs mt-1">{errors.faculty.message}</p>}
              </div>
              <div>
                <label className="block text-[#0A3C8F] text-sm font-medium mb-1">Department*</label>
                <input
                  {...register("department", { required: "Department is required" })}
                  className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                  placeholder="e.g Computer Systems"
                />
                {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-[#0A3C8F] text-sm font-medium mb-2">Level*</label>
              <div className="space-y-2">
                {["Level 1", "Level 2", "Level 3", "Level 4"].map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      {...register("level", { required: "Level is required" })}
                      type="radio"
                      value={level}
                      className="w-4 h-4 text-[#0A3C8F] border-gray-300 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
              {errors.level && <p className="text-red-500 text-xs mt-1">{errors.level.message}</p>}
            </div>

            <div>
              <label className="block text-[#0A3C8F] text-sm font-medium mb-2">Were you an IEEE before?*</label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      {...register("wasIEEEBefore", { required: "This field is required" })}
                      type="radio"
                      value={option}
                      className="w-4 h-4 text-[#0A3C8F] border-gray-300 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.wasIEEEBefore && <p className="text-red-500 text-xs mt-1">{errors.wasIEEEBefore.message}</p>}
            </div>

            <div>
              <label className="block text-[#0A3C8F] text-sm font-medium mb-1">
                {wasIEEEBefore === "Yes" ? "Which season?" : "Type N/A"}*
              </label>
              <input
                {...register("previousSeason", {
                  required: "This field is required",
                  validate: (value) =>
                    (wasIEEEBefore === "Yes" && value !== "N/A") ||
                    (wasIEEEBefore === "No" && value === "N/A") ||
                    "Please enter a valid season or N/A",
                })}
                className="w-full px-4 py-2 bg-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-[#0A3C8F] focus:outline-none"
                placeholder={wasIEEEBefore === "Yes" ? "e.g 2024" : "N/A"}
              />
              {errors.previousSeason && <p className="text-red-500 text-xs mt-1">{errors.previousSeason.message}</p>}
            </div>

            <div>
              <label className="block text-[#0A3C8F] text-sm font-medium mb-2">
                Which Track are you applying for?*
              </label>
              <div className="space-y-2">
                {["Front-End Track", "Back-End (.NET) Track", "Programming Track"].map((track) => (
                  <label key={track} className="flex items-center">
                    <input
                      {...register("track", { required: "Track is required" })}
                      type="radio"
                      value={track}
                      className="w-4 h-4 text-[#0A3C8F] border-gray-300 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-700">{track}</span>
                  </label>
                ))}
              </div>
              {errors.track && <p className="text-red-500 text-xs mt-1">{errors.track.message}</p>}
            </div>

            {submitMessage && (
              <div
                className={`text-center p-2 rounded-xl ${
                  submitMessage.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#03468F] text-white py-3 rounded-xl mt-6 hover:bg-[#023671] transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

