import { X } from "lucide-react"; // red cross icon

export default function Problem() {
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
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-left md:text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Do These Sound Familiar?
        </h2>

        {/* Problems List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Problem 1 */}
          <div className="flex items-start md:justify-center text-left">
            <X className="text-red-600 w-6 h-6 mt-1 mr-2" />
            <p className="text-lg font-medium text-gray-800">
              <span className="underline decoration-orange-500 decoration-2 underline-offset-4">
                People look at your products
              </span>{" "}
              but don’t buy
            </p>
          </div>

          {/* Problem 2 */}
          <div className="flex items-start md:justify-center text-left">
            <X className="text-red-600 w-6 h-6 mt-1 mr-2" />
            <p className="text-lg font-medium text-gray-800">
              <span className="underline decoration-orange-500 decoration-2 underline-offset-4">
                Competitors attract
              </span>{" "}
              your customers
            </p>
          </div>

          {/* Problem 3 */}
          <div className="flex items-start md:justify-center text-left">
            <X className="text-red-600 w-6 h-6 mt-1 mr-2" />
            <p className="text-lg font-medium text-gray-800">
              Ad spend isn’t leading{" "}
              <span className="underline decoration-orange-500 decoration-2 underline-offset-4">
                to real sales
              </span>
            </p>
          </div>

          {/* Problem 4 */}
          <div className="flex items-start md:justify-center text-left">
            <X className="text-red-600 w-6 h-6 mt-1 mr-2" />
            <p className="text-lg font-medium text-gray-800">
              You want to grow but{" "}
              <span className="underline decoration-orange-500 decoration-2 underline-offset-4">
                don’t know where to start
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
