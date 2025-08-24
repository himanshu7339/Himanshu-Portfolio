import Link from "next/link";
export default function Pricing() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Shopify E-Commerce Store */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border border-gray-200 flex flex-col relative overflow-hidden">
              <h2 className="text-lg font-semibold mb-1">SHOPIFY E-COMMERCE STORE</h2>
              <h1 className="text-3xl text-gray-900 pb-4 mb-2 border-b border-gray-200 leading-none">
                ₹14,999<span className="text-xl font-normal text-gray-500">/ Project</span>
              </h1>
              <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}> <button className="flex items-center justify-center text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded mb-4 cursor-pointer">
                Order Now
              </button>  </Link>
              
              <ul className="mb-2 text-sm">
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Professional Shopify store design with a mobile-responsive theme
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Up to 10 products uploaded with SEO-optimized descriptions
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Payment gateway integration (Razorpay/PayU) and shipping setup
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Essential apps installation and social media integration
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>7-10 days delivery with post-launch support
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>FREE bonus: SSL setup, analytics integration & 30-day email support
                </li>
              </ul>
              <p className="text-xs font-semibold mt-2">
                One-time Payment: ₹14,999 · No Hidden Charges
              </p>
            </div>
          </div>

          {/* Complete Facebook Ads Service */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border border-gray-200 flex flex-col relative overflow-hidden">
              <h2 className="text-lg font-semibold mb-1">Complete Facebook Ads Service</h2>
              <h1 className="text-3xl text-gray-900 pb-4 mb-2 border-b border-gray-200 leading-none">
                ₹15,999<span className="text-xl font-normal text-gray-500">/ Month</span>
              </h1>
              <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}> <button className="flex items-center justify-center text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded mb-4 cursor-pointer">
                Order Now
              </button>  </Link>
              <ul className="mb-2 text-sm">
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Professional ad campaigns setup and daily optimization for maximum ROI
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Target audience research, compelling ad creatives, and copy creation
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Multi-platform advertising (Facebook, Instagram) with A/B testing strategies
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Weekly performance reports with detailed analytics and insights
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Dedicated account manager with WhatsApp support and monthly strategy calls
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Campaign monitoring, budget optimization, and conversion tracking setup
                </li>
              </ul>
              <p className="text-xs font-semibold mt-2">
                Monthly Investment: ₹15,999 · Ad Spend Separate
              </p>
            </div>
          </div>

          {/* Complete Google Ads Service */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border border-gray-200 flex flex-col relative overflow-hidden">
              <h2 className="text-lg font-semibold mb-1">Complete Google Ads Service</h2>
              <h1 className="text-3xl text-gray-900 pb-4 mb-2 border-b border-gray-200 leading-none">
                ₹15,999<span className="text-xl font-normal text-gray-500">/ Month</span>
              </h1>
                  <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}> <button className="flex items-center justify-center text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded mb-4 cursor-pointer">
                Order Now
              </button>  </Link>
              <ul className="mb-2 text-sm">
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Professional Google Ads campaigns set up with keyword research and daily optimization
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Search, Display, and Shopping ads creation with compelling ad copy
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Weekly performance reports with detailed ROI analysis and insights
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Conversion tracking and Google Analytics integration
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Dedicated account manager with WhatsApp support and monthly strategy calls
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Bid management, quality score improvement, and negative keyword optimization
                </li>
              </ul>
              <p className="text-xs font-semibold mt-2">
                Monthly Investment: ₹15,999 · Ad Spend Separate
              </p>
            </div>
          </div>

          {/* Complete Email Marketing Service */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border border-gray-200 flex flex-col relative overflow-hidden">
              <h2 className="text-lg font-semibold mb-1">Complete Email Marketing Service</h2>
              <h1 className="text-3xl text-gray-900 pb-4 mb-2 border-b border-gray-200 leading-none">
                ₹14,999<span className="text-xl font-normal text-gray-500">/ Month</span>
              </h1>
                <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}> <button className="flex items-center justify-center text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded mb-4 cursor-pointer">
                Order Now
              </button>  </Link>
              <ul className="mb-2 text-sm">
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Professional email campaigns setup with automated sequences and newsletter management
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Email list building strategies, lead magnets creation and opt-in forms setup
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Personalized email templates design with compelling subject lines and content
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Weekly campaign reports with open rates, click rates and conversion analytics
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>Dedicated support with WhatsApp assistance and monthly performance review calls
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-600 mr-2">✔</span>A/B testing, segmentation strategies and abandoned cart recovery campaigns
                </li>
              </ul>
              <p className="text-xs font-semibold mt-2">
                Monthly Investment: ₹14,999 · Platform Costs Separate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
