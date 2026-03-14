import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Licensed & Insured",
    desc: "Every technician is fully licensed, bonded, and insured. You get certified professionals every time.",
    highlight: "#0B3D91",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "24/7 Emergency Service",
    desc: "Plumbing crises don't work 9-to-5. Neither do we. Call anytime and we'll be there fast.",
    highlight: "#0B3D91",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75h-.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    title: "Upfront, Honest Pricing",
    desc: "We give you a clear quote before we start. No surprises, no hidden charges — ever.",
    highlight: "#0B3D91",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    title: "Satisfaction Guaranteed",
    desc: "We stand behind every job we do. If you're not 100% satisfied, we'll make it right.",
    highlight: "#0B3D91",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-64 bg-blue-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-bold text-sm uppercase tracking-widest">
            Why ZB Karalius
          </span>
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl mt-2 mb-4">
            The ZB Karalius Difference
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We're not just plumbers — we're your trusted home service partner,
            built on reliability and honesty.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                {r.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 bg-white/10 border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="font-heading font-extrabold text-white text-xl md:text-2xl">
              Ready to experience the difference?
            </div>
            <div className="text-blue-200 mt-1">
              Call us today and get a free, no-obligation quote.
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:+15550001234"
              className="bg-gold hover:bg-amber-400 text-dark font-bold px-6 py-3 rounded-2xl text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
