import React from "react";
import Image from "next/image";
import HimanshuImage from "@/Images/IMG_0115.webp";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-white text-black px-4 pt-16 pb-0 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-12">
        {/* Left Side: Image */}
        <div className="w-full lg:w-2/5 flex justify-center items-start">
          <Image
            src={HimanshuImage}
            alt="Himanshu Workspace"
            className="rounded-lg shadow-xl w-full max-w-sm object-cover object-center"
            style={{ minHeight: "260px", minWidth: "320px", background: "#f7f7f7" }}
          />
        </div>

        {/* Right Side: Main Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-2">About us</h2>
          <p className="text-base leading-relaxed mb-4">
            Hi, I'm Himanshu - Your Digital Marketing Partner! I'm a passionate digital marketing freelancer who believes every e-commerce business deserves to reach its full potential online.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">My Story</h3>
          <p className="text-base mb-3">
            Like many business owners, I began my journey facing the same challenges you may be experiencing today: how to stand out in a crowded market, attract quality traffic, and convert visitors into loyal customers.
          </p>
          <p className="text-base mb-3">
            Over the past few years, I've worked with over 50 e-commerce businesses, helping them solve their biggest marketing challenges and achieve real, measurable growth. From small startups to established brands, I've seen what works and what doesn't in the digital world.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">What I Believe In</h3>
          <ul className="mb-3 text-base list-disc list-inside">
            <li><span className="font-bold text-orange-600">Results over vanity metrics</span> - I care about your sales, not just likes and followers</li>
            <li><span className="font-bold text-orange-600">Simple strategies that work</span> - No complicated jargon, just clear plans you can understand</li>
            <li><span className="font-bold text-orange-600">Your success is my success</span> - When your business grows, we both win</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">My Approach</h3>
          <p className="text-base mb-3">
            I don't believe in one-size-fits-all solutions. Every business is unique, and your marketing strategy should be too. That's why I take time to understand your specific challenges, goals, and audience before creating a customized plan.
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-1">What I Offer</h3>
          <ul className="mb-3 text-base list-disc list-inside">
            <li><span className="font-bold">Digital Marketing Strategy</span> - Complete roadmaps for growth</li>
            <li><span className="font-bold">Paid Advertising</span> - Facebook, Instagram, Google Ads that actually convert</li>
            <li><span className="font-bold">Social Media Marketing</span> - Build a community that buys from you</li>
            <li><span className="font-bold">E-commerce Optimization</span> - Turn more visitors into customers</li>
            <li><span className="font-bold">Analytics & Reporting</span> - Clear data on what’s working</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">Why Work with Me?</h3>
          <ul className="mb-3 text-base list-disc list-inside">
            <li><span className="font-bold">Proven Results:</span> My clients typically see 3-5x growth in revenue</li>
            <li><span className="font-bold">E-commerce Focus:</span> I only work with online stores – I know your business</li>
            <li><span className="font-bold">Transparent Communication:</span> You'll always know what I'm doing and what results you're getting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
