import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";

const allServices = [
  {
    category: "Emergency",
    color: "bg-red-50 border-red-100",
    accent: "text-red-600",
    items: [
      {
        title: "Burst Pipe Repair",
        desc: "Immediate response to burst pipes to prevent flooding and structural damage.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "24/7 Emergency Callouts",
        desc: "Technicians dispatched within 60 minutes, any time of day or night.",
        img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Water Damage Mitigation",
        desc: "Emergency water shutoff and containment to minimize property damage.",
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=260&fit=crop&auto=format",
      },
    ],
  },
  {
    category: "Residential",
    color: "bg-blue-50 border-blue-100",
    accent: "text-primary",
    items: [
      {
        title: "Bathroom Plumbing",
        desc: "Toilets, showers, baths, and vanity fixtures — installation and repair.",
        img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Kitchen Plumbing",
        desc: "Sinks, dishwashers, garbage disposals, and full kitchen remodels.",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Water Heater Services",
        desc: "Tank and tankless water heater installation, repair, and maintenance.",
        img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Drain Cleaning",
        desc: "Professional hydro-jetting and snaking to clear any blockage.",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Leak Detection & Repair",
        desc: "Advanced technology to locate and repair hidden leaks.",
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Pipe Replacement",
        desc: "Full repiping services for old or corroded plumbing systems.",
        img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=260&fit=crop&auto=format",
      },
    ],
  },
  {
    category: "Commercial",
    color: "bg-green-50 border-green-100",
    accent: "text-green-600",
    items: [
      {
        title: "Commercial Drain Services",
        desc: "High-capacity drain cleaning for restaurants, offices, and retail.",
        img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Backflow Prevention",
        desc: "Installation and testing of backflow prevention devices.",
        img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&h=260&fit=crop&auto=format",
      },
      {
        title: "Plumbing Inspections",
        desc: "Full-building inspections and compliance reports.",
        img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=260&fit=crop&auto=format",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* Page Hero */}
      <section className="pt-28 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-3 mb-4">
              Our Full Range of Services
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
              From emergency response to complete bathroom remodels — we cover
              every plumbing need with professionalism and speed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-amber-400 text-dark font-bold px-7 py-3.5 rounded-2xl text-sm shadow-lg transition-all"
            >
              Get a Free Quote →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service categories */}
      <div className="bg-[#F3F4F6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          {allServices.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h2
                className={`font-heading font-extrabold text-2xl mb-6 ${cat.accent}`}
              >
                {cat.category} Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((item) => (
                  <div
                    key={item.title}
                    className={`${cat.color} border-2 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-dark text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Standard services */}
      <Services />

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading font-extrabold text-white text-3xl mb-3">
            Don't see your service listed?
          </h2>
          <p className="text-blue-200 mb-6">
            Contact us — if it's plumbing, we can handle it.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-amber-400 text-dark font-bold px-8 py-3.5 rounded-2xl text-sm shadow-lg transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
