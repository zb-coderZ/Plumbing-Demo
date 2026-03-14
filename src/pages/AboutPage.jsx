import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

const team = [
  { initials: 'MT', name: 'Mike Thompson', role: 'Owner & Master Plumber', exp: '22 years', color: 'bg-primary' },
  { initials: 'JR', name: 'Jake Rivera', role: 'Senior Technician', exp: '14 years', color: 'bg-violet-600' },
  { initials: 'CS', name: 'Chris Sullivan', role: 'Emergency Specialist', exp: '9 years', color: 'bg-teal-600' },
  { initials: 'DK', name: 'Dana Kim', role: 'Commercial Lead', exp: '11 years', color: 'bg-rose-600' },
]

const values = [
  { icon: '🛡️', title: 'Integrity First', desc: 'We give honest assessments and upfront quotes every single time.' },
  { icon: '⚡', title: 'Fast & Reliable', desc: 'We respect your time. On-time arrivals are guaranteed.' },
  { icon: '🎓', title: 'Continuous Training', desc: 'Our team trains monthly on the latest techniques and codes.' },
  { icon: '🤝', title: 'Community Rooted', desc: "We've been neighbors in this city for over 20 years." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Who We Are</span>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-3 mb-4">
              About ZB Karalius
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              A family-owned plumbing company that's been serving this city since 2004 — built on trust, skill, and genuine care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-heading font-extrabold text-dark text-3xl mt-2 mb-5 leading-tight">
              20 Years. 5,000+ Jobs.<br />One Standard of Excellence.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              ZB Karalius was founded in 2004 by master plumber Mike Thompson with one van and a promise: to treat every customer like a neighbor. That promise hasn't changed — even as we've grown to a team of 15 licensed plumbers serving over 50 neighborhoods.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Today, we're proud to be the city's most reviewed plumbing company on Google, with a 4.9-star average across 340+ reviews. We don't just fix pipes — we build relationships.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">License #PL-38291</span>
              <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">Fully Insured</span>
              <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">NPA Member</span>
              <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">BBB Accredited</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { v: '20+', l: 'Years in Business', c: 'bg-primary text-white' },
              { v: '5k+', l: 'Jobs Completed', c: 'bg-gold text-dark' },
              { v: '4.9★', l: 'Google Rating', c: 'bg-[#F3F4F6] text-dark' },
              { v: '15', l: 'Licensed Plumbers', c: 'bg-[#F3F4F6] text-dark' },
            ].map(s => (
              <div key={s.l} className={`${s.c} rounded-3xl p-7 text-center`}>
                <div className="font-heading font-extrabold text-3xl">{s.v}</div>
                <div className={`mt-1 text-sm ${s.c.includes('text-white') ? 'text-blue-200' : 'text-gray-500'}`}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-dark text-3xl">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-heading font-bold text-dark mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-dark text-3xl">Meet the Team</h2>
            <p className="text-gray-500 mt-2">Licensed professionals you can trust in your home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#F3F4F6] rounded-3xl p-7 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`w-20 h-20 ${m.color} rounded-full flex items-center justify-center text-white font-heading font-extrabold text-2xl mx-auto mb-4 shadow-lg`}>
                  {m.initials}
                </div>
                <div className="font-heading font-bold text-dark">{m.name}</div>
                <div className="text-primary text-sm font-medium mt-0.5">{m.role}</div>
                <div className="text-gray-400 text-xs mt-1">{m.exp} experience</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading font-extrabold text-white text-3xl mb-3">Ready to work with us?</h2>
          <p className="text-blue-200 mb-6">Get a free, no-obligation quote today.</p>
          <Link to="/contact" className="inline-block bg-gold hover:bg-amber-400 text-dark font-bold px-8 py-3.5 rounded-2xl text-sm shadow-lg transition-all">
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
