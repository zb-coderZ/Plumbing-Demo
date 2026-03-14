import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="pt-28 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-3 mb-4">
              Contact ZB Karalius
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Whether it's a quick question or a full service request — we're
              here to help. We respond within the hour.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}
