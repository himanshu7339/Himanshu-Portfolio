"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_SCRIPT;

const handleInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
  });

  useEffect(() => {
    const utm_source = searchParams.get("utm_source") || sessionStorage.getItem("utm_source") || "";
    const utm_medium = searchParams.get("utm_medium") || sessionStorage.getItem("utm_medium") || "";
    const utm_campaign = searchParams.get("utm_campaign") || sessionStorage.getItem("utm_campaign") || "";
    const utm_term = searchParams.get("utm_term") || sessionStorage.getItem("utm_term") || "";

    setUtmData({ utm_source, utm_medium, utm_campaign, utm_term });
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Submitted Successfully.");
        form.reset();
        router.push("/thankyou");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white min-h-screen py-16 px-8 flex items-start justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 w-full">
          <h1 className="text-5xl font-bold text-center mb-12">Inquiry</h1>
          <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="utm_source" value={utmData.utm_source} />
            <input type="hidden" name="utm_medium" value={utmData.utm_medium} />
            <input type="hidden" name="utm_campaign" value={utmData.utm_campaign} />
            <input type="hidden" name="utm_term" value={utmData.utm_term} />
            <div>
              <label className="block font-medium mb-1">Your Name *</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                name="phone-number"
                type="text"
                onInput={handleInput}
                maxLength={10}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Your Email *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Country *</label>
              <input
                name="country"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">What service you need? *</label>
              <input
                name="What-service-you-need"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Describe Your Business (Short) *</label>
              <textarea
                name="describe-your-business"
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-orange-500"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 font-semibold rounded cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/3 w-full flex flex-col mt-10 md:mt-0 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <div className="text-base flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <span>481 Chhatarpur Near Mata Chowk New Delhi 110074</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span>8376849918</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
              <span>Himanshusingh5t5t@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
