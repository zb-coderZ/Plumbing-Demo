import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "5,000+", label: "Jobs Completed" },
  { value: "50+", label: "Service Areas" },
  { value: "100%", label: "Satisfaction Rate" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Stats visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pb-6"
          >
            {/* Main card */}
            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  EST. 2004
                </div>
                <div className="font-heading font-extrabold text-3xl mb-2">
                  ZB Karalius
                </div>
                <div className="text-blue-200 text-sm mb-8">
                  Serving the city for over 20 years
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/10 border border-white/20 rounded-2xl p-4"
                    >
                      <div className="font-heading font-extrabold text-gold text-2xl">
                        {s.value}
                      </div>
                      <div className="text-blue-200 text-xs mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 right-0 md:-right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold text-dark text-sm">
                  License #PL-38291
                </div>
                <div className="text-gray-400 text-xs">
                  State Certified & Insured
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-5 leading-tight">
              Your Trusted Local <br />
              <span className="text-primary">Plumbing Experts</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Founded in 2004, ZB Karalius has grown from a one-man operation to a
              team of 15 licensed plumbers serving homeowners and businesses
              across the region. We built our reputation one satisfied customer
              at a time — with honest pricing, quality work, and genuine care.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Every technician on our team is fully licensed,
              background-checked, and continuously trained on the latest
              plumbing techniques and technology. When we show up at your door,
              you can trust us completely.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "State-licensed & fully insured professionals",
                "Serving 50+ neighborhoods across the metro area",
                "Member of the National Plumbing Association",
                "Guaranteed workmanship on every job",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20 text-sm"
            >
              Learn More About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
