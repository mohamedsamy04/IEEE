"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function RecruitmentForm() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <div className="mb-8 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contact%20Box-67ZoBwMAmtP4U1m6G0SJP8kSgZtRlK.svg"
          alt="Recruiting Header"
          width={400}
          height={200}
          className="mx-auto mb-4"
          priority
        />
        <p className="text-sm text-gray-600">Fill in this form and someone from our team will contact you soon!</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name*</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number*</Label>
            <Input id="mobile" placeholder="Enter your mobile number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="national-id">National ID*</Label>
            <Input id="national-id" placeholder="Enter your national ID" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age*</Label>
            <Input id="age" type="number" placeholder="Enter your age" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City*</Label>
            <Select>
              <SelectTrigger id="city">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cairo">Cairo</SelectItem>
                <SelectItem value="alexandria">Alexandria</SelectItem>
                <SelectItem value="giza">Giza</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address*</Label>
          <Input id="address" placeholder="Enter your address" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="faculty">Faculty*</Label>
            <Input id="faculty" placeholder="Enter your faculty" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department*</Label>
            <Input id="department" placeholder="Enter your department" required />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Level*</Label>
          <RadioGroup defaultValue="level1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="level1" id="level1" />
              <Label htmlFor="level1">Level 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="level2" id="level2" />
              <Label htmlFor="level2">Level 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="level3" id="level3" />
              <Label htmlFor="level3">Level 3</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="level4" id="level4" />
              <Label htmlFor="level4">Level 4</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Were you an IEEE before?*</Label>
          <RadioGroup defaultValue="no">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Which Track are you applying for?*</Label>
          <RadioGroup defaultValue="track1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="track1" id="track1" />
              <Label htmlFor="track1">Track One Track</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="track2" id="track2" />
              <Label htmlFor="track2">Track Two Track</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="track3" id="track3" />
              <Label htmlFor="track3">Programming Track</Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" className="w-full bg-[#0A3C8F]">
          Send
        </Button>
      </form>
    </div>
  )
}

