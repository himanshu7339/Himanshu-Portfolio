import Image from "next/image";
import HimanshuImage from "@/Images/HimanshuImage.png"; // update path
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0c2d48] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-20">
        
        {/* Left Side */}
        <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Is Your Online Store Not{" "}
  Making{" "}
  <br className="block md:hidden" />
  Enough Sales?
  <span className="hidden md:inline"> <br /> </span>
</h1>
          <p className="text-lg text-gray-300 max-w-md">
            Your competitors are making more money while you’re struggling with
            the same old methods.
          </p>
          <div>
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}> <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition cursor-pointer">
              GET FREE CALL
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src={HimanshuImage}
            alt="Himanshu"
            className="rounded-lg shadow-lg w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
