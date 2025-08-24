export default function Steps() {
  const steps = [
    {
      number: "1",
      title: "I Check Your Business",
      text: "I look at what you're doing now (for free)",
    },
    {
      number: "2",
      title: "I Make a Plan",
      text: "I created a simple plan just for your store",
    },
    {
      number: "3",
      title: "We Make It Work",
      text: "I help you get customers and sales",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Here's How I Help You Make More Sales
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              {/* Number Circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl font-bold mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
