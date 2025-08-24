import Image from "next/image";
import Boy from "@/Images/boy.png";

export default function WhatHappens() {
  return (
    <section className="bg-[#0f2d4a] text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0">
          <h2 className="title-font sm:text-4xl text-3xl mb-6 font-bold">
            What Happens If You Do Nothing?
          </h2>

          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>Other stores will keep beating you</li>
            <li>You&apos;ll have the same problems next year</li>
            <li>You&apos;ll lose more customers</li>
            <li>Your business won&apos;t grow</li>
          </ul>

          <h3 className="mt-8 text-2xl font-bold">
            Don&apos;t let this be your story
          </h3>
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full"
            alt="stressed person"
            src={Boy}
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
