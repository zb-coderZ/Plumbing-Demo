import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Emergency Plumbing",
  "Pipe Repair / Installation",
  "Drain Cleaning",
  "Water Heater Services",
  "Bathroom / Kitchen Plumbing",
  "Leak Detection",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-4">
            Request a Free Quote
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tell us about your plumbing issue and we'll get back to you within
            the hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-9 h-9 text-green-600"
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
                <h3 className="font-heading font-bold text-dark text-xl mb-2">
                  Request Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  We'll contact you within the hour. For emergencies, call us
                  directly.
                </p>
                <a
                  href="tel:+15550001234"
                  className="inline-block mt-5 bg-primary text-white font-bold px-6 py-3 rounded-2xl text-sm"
                >
                  📞 (555) 000-1234
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F3F4F6] rounded-3xl p-7 md:p-9 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Service Needed *
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Describe Your Issue
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's happening and we'll come prepared..."
                    className="bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-primary/20 text-sm hover:-translate-y-0.5"
                >
                  Request Free Quote →
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our privacy policy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                ),
                label: "Phone",
                value: "(555) 000-1234",
                href: "tel:+15550001234",
                sub: "24/7 Emergency Line",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                ),
                label: "Email",
                value: "hello@zbkaralius.com",
                href: "mailto:hello@zbkaralius.com",
                sub: "We reply within 1 hour",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                ),
                label: "Location",
                value: "123 Main Street, Suite 100",
                href: "#",
                sub: "Your City, State 10001",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="bg-[#F3F4F6] hover:bg-blue-50 border border-transparent hover:border-blue-100 rounded-2xl p-4 flex items-center gap-4 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                    {item.label}
                  </div>
                  <div className="font-semibold text-dark text-sm">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              </a>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 flex-1 min-h-48">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
