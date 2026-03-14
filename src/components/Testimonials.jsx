import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah Mitchell",
    role: "Homeowner",
    color: "bg-violet-500",
    rating: 5,
    review:
      "ZB Karalius came out within an hour when our pipe burst at midnight. The technician was professional, explained everything clearly, and the price was exactly what they quoted. Absolutely outstanding service — I won't call anyone else.",
    service: "Emergency Pipe Repair",
  },
  {
    initials: "JD",
    name: "James Davidson",
    role: "Property Manager",
    color: "bg-blue-500",
    rating: 5,
    review:
      "I manage 12 rental properties and ZB Karalius handles all of our plumbing. Reliable, fair pricing, and they always show up when they say they will. My go-to team for everything from drain clogs to full pipe replacements.",
    service: "Commercial Plumbing",
  },
  {
    initials: "AL",
    name: "Angela Lewis",
    role: "Homeowner",
    color: "bg-rose-500",
    rating: 5,
    review:
      "Had a water heater installed last month. The technician arrived on time, finished in 2 hours, and cleaned up perfectly. The price was 20% less than two other quotes I got. Incredibly friendly and knowledgeable team.",
    service: "Water Heater Installation",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-widest">
            Customer Stories
          </span>
          <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Don't take our word for it — hear from hundreds of satisfied
            customers across the city.
          </p>
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 mt-6 bg-[#F3F4F6] px-5 py-3 rounded-2xl">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-dark text-sm">4.9 / 5</span>
            <span className="text-gray-500 text-sm">based on 340+ reviews</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-4 ml-1 opacity-60"
            />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F3F4F6] hover:bg-white border-2 border-transparent hover:border-blue-100 rounded-3xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4.5 h-4.5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "{t.review}"
              </p>

              {/* Service badge */}
              <span className="text-xs text-primary bg-blue-50 font-semibold px-3 py-1 rounded-full self-start">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-300 ml-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
