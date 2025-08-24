import Image from "next/image";
import HimanshuImage from "@/Images/IMG_0115.webp";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="bg-[#0d2b4d] text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">
            I Help Online Store Owners Like You
          </h1>
          <p className="mb-6 text-lg font-semibold">
            I know how hard it is to grow an online business.
          </p>
          <p className="mb-6 leading-relaxed">
            I've helped 50+ online stores in the past 3 years get more sales.
          </p>

          <ul className="mb-8 space-y-3 text-left">
            <li>✓ I Get Results - My clients make 3-5x more money</li>
            <li>✓ I Only Work with Online Stores - I know your business</li>
            <li>✓ I Care About Your Profit - Every dollar should make you money</li>
          </ul>

          <div className="flex justify-start">

            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}>  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded cursor-pointer">
              BOOK FREE CALL
            </button> </Link>
            
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="Himanshu"
            src={HimanshuImage}
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
