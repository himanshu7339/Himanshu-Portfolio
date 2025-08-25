import Image from "next/image";
import Call from "@/Images/Call.png"
import Link from "next/link";
export default function CTA() {
  return (
    <section className="bg-[#0f2747] text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* Left Side Content */}
        <div className="md:w-2/3 text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Want More Sales for Your Online Store?
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 relative inline-block">
            Book a (30-minute) call and get
            <span className="block h-[2px] w-full bg-orange-500 absolute -bottom-1"></span>
          </h2>

          <ul className="list-disc list-inside space-y-2 text-lg mb-6">
            <li>A free review of your store</li>
            <li>Three things you can do today</li>
            <li>Your next 3-month plan</li>
            <li>No payment required</li>
          </ul>

<Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}>     <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition cursor-pointer">
            BOOK FREE CALL
          </button> </Link>
       

          <p className="text-lg mt-6">
            Let's connect and grow your business together!
          </p>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <Image 
            src={Call}
            alt="Call Illustration" 
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
