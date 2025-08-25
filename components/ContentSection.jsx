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
            Specialized Help for Store Owners
          </h1>
          <p className="mb-6 text-lg font-semibold">
            I’ve teamed up with more than 50 Shopify and ecommerce stores to help them raise their monthly sales.
          </p>

          <ul className="mb-8 space-y-3 text-left">
            <li>✓ My support helps stores sell 3× more, on average</li>
            <li>✓ Honest advice: Strategies built only for your shop</li>
            <li>✓ Growth focus: Every marketing rupee gets you closer to your goals</li>
          </ul>

          <div className="flex justify-start">

            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}>  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded cursor-pointer">
              Chat About Your Store
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
