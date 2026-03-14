import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5k+", label: "Jobs Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "24/7", label: "Always Available" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden flex items-center pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Available 24/7 — Emergency Service
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
            >
              Reliable Plumbing
              <br />
              <span className="text-gold">Services in</span>
              <br />
              Your City
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Fast, affordable, and licensed plumbers at your doorstep. We solve
              your plumbing problems the right way — the first time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-amber-400 text-dark font-bold px-7 py-4 rounded-2xl text-sm shadow-xl shadow-gold/30 transition-all duration-200 hover:-translate-y-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Request Service
              </Link>
              <a
                href="tel:+15550001234"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-bold px-7 py-4 rounded-2xl text-sm hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-blue-200 text-sm"
            >
              {[
                "Licensed & Insured",
                "No Hidden Fees",
                "100% Satisfaction",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-gold flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-9 h-9 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl">
                    Expert Plumbing
                  </div>
                  <div className="text-blue-200 text-sm">
                    Your local professionals
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-2xl p-4 text-center"
                  >
                    <div className="font-heading font-extrabold text-2xl text-gold">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-xs mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live alert card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse block" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  Technicians Available Now
                </div>
                <div className="text-blue-200 text-xs">
                  3 plumbers in your area
                </div>
              </div>
              <div className="ml-auto text-green-400 text-xs font-bold bg-green-500/20 px-2.5 py-1 rounded-full">
                LIVE
              </div>
            </div>

            {/* Rating card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["JD", "SM", "PK", "AL"].map((init, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center text-xs font-bold text-white ${["bg-blue-400", "bg-indigo-400", "bg-violet-400", "bg-blue-500"][i]}`}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-blue-200 text-xs mt-0.5">
                  Trusted by 2,000+ customers
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z"
            fill="#F3F4F6"
          />
        </svg>
      </div>
    </section>
  );
}
