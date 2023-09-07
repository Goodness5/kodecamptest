import React from "react"
import Form from "./components/form"
import Image from "next/image"

export default function Home() {
  return (
    <div className="sm:flex-row flex flex-col bg-[#F9F9F9]">
      <div className="w-[70%] ml-8">
        <Form />
      </div>
      <div className="w-full">
        <div className="relative h-screen">
          <Image src='/bgimage.svg' alt="bg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}
