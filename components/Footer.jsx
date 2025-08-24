import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2747] text-white">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Me */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="mb-2">Hey everyone! 👋</p>
          <p className="mb-4">
            I am <span className="font-bold">Himanshu</span>, a professional digital marketing freelancer who helps e-commerce businesses grow their online sales and revenue.
          </p>
          <p className="mb-4">
            I specialize in creating marketing strategies that actually work – turning your website visitors into paying customers and maximizing your return on ad spend.
          </p>
          <p>Let's connect and grow your business together!</p>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-bold mb-4">Address</h2>
          <p>481 Chhatarpur Near Mata Chowk</p>
          <p>New Delhi 110074</p>
          <p className="mb-6">India</p>
          
          <div className="flex items-center mb-2">
            <MdCall className="mr-2 text-orange-400" />
            <span>8376849918</span>
          </div>
          <div className="flex items-center">
            <MdEmail className="mr-2 text-orange-400" />
            <span>Himanshusingh5t5t@gmail.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/team" className="hover:underline hover:text-orange-400">Team</Link>
            </li> */}
            <li>
              <Link href={`/terms-and-condition`} className="hover:underline hover:text-orange-400">Terms & Conditions</Link>
            </li>
            <li>
              <Link href={`/privacy-policy`} className="hover:underline hover:text-orange-400">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-orange-400">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-orange-400">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1BNYYPTHsy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/himanshu.scale/?igsh=Nml2MjlkMmJnOHJl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white text-pink-500 rounded">
              <FaInstagram />
            </a>
            <a href="https://x.com/himanshudm963?t=FpsZXW9b9j7IVjt7x3Ou0Q&s=09" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white text-blue-700 rounded">
              <FaXTwitter /> 
            </a>
            <a href="https://www.youtube.com/@himanshudm-g8k" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white text-red-600 rounded-full">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0c2038] text-center py-4 text-gray-400 text-sm">
        Copyright © Himanshu
      </div>
    </footer>
  );
}
