import React from 'react'
import Image from "next/image";
import Laptop from "@/Images/Laptop.svg";
import Link from 'next/link';


const Help = () => {
  return (
    <section className="bg-white text-black body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0">
          <h2 className="title-font sm:text-4xl text-3xl mb-6 font-bold">
            But When You Get Help
          </h2>

          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>More people will buy from your store</li>
            <li>Your ads will actually make you money</li>
            <li>You&apos;ll get more sales every month</li>
            <li>Your business will become stronger</li>
          </ul>

         <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`} >  <button className="cursor-pointer mt-10 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded">
            LET&apos;S MAKE THIS YOUR REALITY
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center"
            alt="Funnel Graphic"
            src={Laptop}
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

export default Help