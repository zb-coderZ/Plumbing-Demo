import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Emergency Plumbing",
    desc: "Burst pipes, flooding, or major leaks? We respond within 60 minutes, day or night.",
    color: "bg-red-50 text-red-600",
    border: "hover:border-red-200",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=220&fit=crop&auto=format",
    before: {
      img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=500&h=260&fit=crop&auto=format",
      label: "Corroded pipes with critical water loss",
    },
    after: {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=260&fit=crop&auto=format",
      label: "Pipe sealed and water fully restored",
    },
    detail:
      "Our emergency crew arrives within 60 minutes with all the tools needed to stop the flow, seal the pipe, and restore your water supply safely — day or night, 365 days a year.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Pipe Repair & Installation",
    desc: "From small leaks to full pipe replacements — we handle all pipe work with precision.",
    color: "bg-blue-50 text-primary",
    border: "hover:border-blue-200",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=220&fit=crop&auto=format",
    before: {
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=260&fit=crop&auto=format",
      label: "Corroded pipe with an active leak",
    },
    after: {
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=260&fit=crop&auto=format",
      label: "New pipe fitted and pressure-tested",
    },
    detail:
      "From pinhole leaks to full re-piping projects, we use quality materials and precision techniques to ensure every joint is sealed, tested, and built to last for decades.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Drain Cleaning",
    desc: "Professional drain snaking and hydro-jetting to clear any blockage fast.",
    color: "bg-green-50 text-green-600",
    border: "hover:border-green-200",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=220&fit=crop&auto=format",
    before: {
      img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=260&fit=crop&auto=format",
      label: "Blocked drain causing backflow",
    },
    after: {
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=260&fit=crop&auto=format",
      label: "Drain fully cleared and flowing",
    },
    detail:
      "Our hydro-jetting and snaking services cut through grease, hair, roots, and debris to restore full flow. We also inspect with a camera so you know exactly what was cleared.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Water Heater Services",
    desc: "Installation, repair, and maintenance for tank and tankless water heaters.",
    color: "bg-orange-50 text-orange-600",
    border: "hover:border-orange-200",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=220&fit=crop&auto=format",
    before: {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=260&fit=crop&auto=format",
      label: "Aging unit with rust and sediment build-up",
    },
    after: {
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=260&fit=crop&auto=format",
      label: "Brand-new unit installed and operational",
    },
    detail:
      "Whether your heater is failing, inefficient, or needs a full replacement, we install and service both tank and tankless systems — including manufacturer warranty registration.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Bathroom & Kitchen",
    desc: "Complete fixture installations, remodels, and upgrades for any room.",
    color: "bg-purple-50 text-purple-600",
    border: "hover:border-purple-200",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=220&fit=crop&auto=format",
    before: {
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=260&fit=crop&auto=format",
      label: "Worn fixtures with dripping taps",
    },
    after: {
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=260&fit=crop&auto=format",
      label: "Fully upgraded modern bathroom",
    },
    detail:
      "From a single tap swap to a complete bathroom or kitchen remodel — we supply, fit, seal, and pressure-test everything in a single tidy visit with zero mess left behind.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Leak Detection",
    desc: "Advanced technology to pinpoint hidden leaks before they cause costly damage.",
    color: "bg-teal-50 text-teal-600",
    border: "hover:border-teal-200",
    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=220&fit=crop&auto=format",
    before: {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=260&fit=crop&auto=format",
      label: "Aging pipes showing signs of a hidden leak",
    },
    after: {
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=260&fit=crop&auto=format",
      label: "Leak pinpointed, repaired, and closed up",
    },
    detail:
      "Using acoustic sensors and thermal imaging we locate leaks hiding inside walls, under floors, or underground — with no unnecessary digging, cutting, or demolition.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceModal({ service, onClose }) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  {service.icon}
                </div>
                <h3 className="font-heading font-extrabold text-dark text-lg sm:text-xl">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0 ml-3"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Before / After Images */}
            <div className="grid grid-cols-2 gap-3 px-6">
              {/* Before */}
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src={service.before.img}
                  alt="Before"
                  className="w-full h-36 sm:h-44 object-cover"
                />
                <div className="bg-red-50 text-red-600 text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                  Before
                </div>
                <p className="text-xs text-gray-500 text-center px-3 py-2 leading-relaxed">
                  {service.before.label}
                </p>
              </div>

              {/* After */}
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src={service.after.img}
                  alt="After"
                  className="w-full h-36 sm:h-44 object-cover"
                />
                <div className="bg-green-50 text-green-600 text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                  After
                </div>
                <p className="text-xs text-gray-500 text-center px-3 py-2 leading-relaxed">
                  {service.after.label}
                </p>
              </div>
            </div>

            {/* Detail description */}
            <div className="px-6 pt-4 pb-2">
              <p className="text-gray-600 text-sm leading-relaxed">{service.detail}</p>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 pt-4">
              <Link
                to="/contact"
                onClick={onClose}
                className="block text-center bg-primary hover:bg-blue-800 text-white font-bold py-3 rounded-2xl transition-colors text-sm shadow-lg shadow-primary/20"
              >
                Get a Free Quote →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="services" className="py-20 bg-[#F3F4F6]">
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
              What We Do
            </span>
            <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-4">
              Complete Plumbing Solutions
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From routine maintenance to full emergency response — we've got
              every plumbing need covered.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={item}
                onClick={() => setSelected(s)}
                className={`group bg-white rounded-3xl overflow-hidden border-2 border-transparent ${s.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-7">
                  <div
                    className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="text-primary text-sm font-semibold inline-flex items-center gap-1.5">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal rendered outside the section so it can cover full screen */}
      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
}
