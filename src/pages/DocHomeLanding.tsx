import React, { useState } from 'react';
import ScheduleModal from '../components/ScheduleModal';

const DocHomeLanding: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full glass shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="serif text-primary font-bold text-2xl tracking-tight">DocHome</div>
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Our Doctors', 'Pricing', 'FAQ'].map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden lg:inline text-sm font-bold text-secondary">+1-800-DOCHOME</span>
          <button onClick={() => setIsModalOpen(true)} className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">Book Now</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-container/10 text-on-primary-container px-4 py-1.5 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-on-primary-container"></span>
              </span>
              Doctors available in Mumbai now
            </div>
            <h1 className="text-6xl md:text-7xl serif text-primary leading-[1.1] font-medium">
              Clinical Grace at Your <em className="italic text-secondary not-italic font-serif">Door.</em>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Experience professional medical care in the comfort of your home. 
              Our certified doctors bring the hospital to you, ensuring trust and warmth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold shadow-premium hover:shadow-lg transition-all">Schedule Home Visit</button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-colors"
              >
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary-container/5 -rotate-3 rounded-[2rem] transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Doctor at home" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl serif text-primary text-center mb-20 font-medium">How DocHome Works</h2>
          <div className="relative flex flex-col md:flex-row justify-between gap-12">
            {[
              { num: '01', title: 'Book a Visit', desc: 'Select symptoms and preferred time via app or website.' },
              { num: '02', title: 'Doctor Arrives', desc: 'A certified practitioner arrives within 60 minutes.' },
              { num: '03', title: 'Get Care', desc: 'Receive treatment and digital prescriptions instantly.' }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 text-center relative z-10">
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full shadow-premium serif font-black text-primary text-3xl flex items-center justify-center mx-auto mb-8">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-on-surface-variant text-sm px-4">{step.desc}</p>
                {idx < 2 && <div className="hidden md:block absolute top-10 left-[60%] w-full border-t-2 border-dashed border-outline-variant/30 -z-10"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl serif text-primary mb-16 font-medium">Our Medical Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "medical_services",  title: "General Illness",  desc: "Care for fever, infections, respiratory issues, and seasonal allergies." },
            { icon: "vaccines",          title: "Vaccinations",     desc: "Flu shots, pediatric immunizations, and travel vaccines at home." },
            { icon: "monitor_heart",     title: "Health Checkup",   desc: "Comprehensive screening, vitals, and lab sample collection." },
            { icon: "child_care",        title: "Pediatric Care",   desc: "Specialized care for children in a comfortable home setting." },
            { icon: "elderly",           title: "Elder Care",       desc: "Geriatric support, chronic disease management, and mobility assistance." },
            { icon: "healing",           title: "Wound & IV Care",  desc: "Post-surgical dressing, IV fluids, and professional wound management." },
          ].map((service, idx) => (
            <div key={idx} className="group p-8 bg-surface-container-lowest rounded-2xl shadow-sm hover:bg-primary-container transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-on-primary-container group-hover:text-white mb-6">{service.icon}</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 group-hover:text-white/80 transition-colors">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-on-primary-container font-bold text-sm group-hover:text-white transition-colors">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
       <section id="our-doctors" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl serif text-primary mb-4 font-medium">Meet Our Practitioners</h2>
            <p className="text-on-surface-variant">Qualified, background-verified, and highly experienced.</p>
          </div>
          <button className="text-primary font-bold hover:underline mb-2">View all 150+ Doctors</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Sarah James",    specialty: "Family Physician",    exp: "MBBS, MD • 12 Years Exp.", rating: "4.9 (120+)", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
            { name: "Dr. Michael Chen",   specialty: "Pediatrician",        exp: "MBBS, DCH • 8 Years Exp.",  rating: "5.0 (85+)", featured: true, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
            { name: "Dr. Elena Rodriguez",specialty: "Geriatric Specialist", exp: "MBBS, MD • 15 Years Exp.", rating: "4.8 (200+)", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400" },
          ].map((doc, idx) => (
            <div key={idx} className={`bg-surface-container-lowest p-8 rounded-[2rem] shadow-premium transition-all ${doc.featured ? 'border-2 border-primary-container/10' : 'hover:-translate-y-2'}`}>
              <img src={doc.img} alt={doc.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="text-center space-y-2 mb-6">
                <h3 className="text-xl font-bold">{doc.name}</h3>
                <p className="text-on-primary-container font-semibold text-sm">{doc.specialty}</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 fill-1 text-lg">star</span>
                  <span className="text-sm font-bold">{doc.rating}</span>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(true)} className={`w-full py-3 rounded-xl font-bold transition-colors ${doc.featured ? 'bg-primary text-white hover:opacity-90' : 'border border-outline-variant hover:bg-surface-container'}`}>Book Consultation</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl serif text-primary text-center mb-16 font-medium">Voices of Trust</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { initials: "AM", name: "Anita Mishra", context: "Emergency Relief", avatar_bg: "bg-primary", quote: "At midnight, when my fever spiked and no clinic was open, DocHome was a lifesaver." },
              { initials: "RK", name: "Rohan Kapoor", context: "Child Care Parent", avatar_bg: "bg-secondary", quote: "Taking a crying 2-year-old to a hospital is a nightmare. This service is a blessing." },
              { initials: "VS", name: "Vidya Sharma", context: "Senior Citizen Care", avatar_bg: "bg-primary-container", quote: "Managing my father's health is much easier with home checkups." },
            ].map((t, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                <p className="text-on-surface italic mb-8 serif text-lg leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`${t.avatar_bg} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm`}>{t.initials}</div>
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-on-surface-variant">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl serif text-primary text-center mb-16 font-medium">Simple, Transparent Care</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {[
            { name: "Basic Visit", price: "₹499", period: "/visit", features: ["One-time consultation", "Digital Prescription"], button: "border border-primary text-primary" },
            { name: "Care Plus", price: "₹899", period: "/month", features: ["2 Consultations per month", "Priority Scheduling"], featured: true, button: "bg-on-primary-container text-primary-container" },
            { name: "Family Plan", price: "₹2,199", period: "/month", features: ["Up to 5 family members", "Monthly Health Checks"], button: "border border-primary text-primary" }
          ].map((plan, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] ${plan.featured ? 'bg-primary-container text-white scale-105 shadow-2xl z-10' : 'bg-surface-container-low'}`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black">{plan.price}</span>
                <span className="text-sm opacity-80">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-on-primary-container text-lg">check_circle</span>{f}
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsModalOpen(true)} className={`w-full py-3 rounded-xl font-bold hover:opacity-90 transition-all ${plan.button}`}>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl serif text-primary mb-12 font-medium">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is the typical arrival time?", a: "Within 45–90 minutes for urgent requests." },
                { q: "Are your doctors certified?", a: "Yes, MCI certified with 5+ years experience." },
                { q: "Which cities are you in?", a: "Mumbai, Delhi NCR, Bangalore, and Pune." }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-surface-container-lowest rounded-xl p-6 shadow-sm cursor-pointer">
                  <summary className="list-none flex justify-between items-center font-bold">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-32 p-10 bg-surface-container-highest rounded-3xl text-center space-y-6">
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <button onClick={() => setIsModalOpen(true)} className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all">Chat With Us Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <div className="serif text-[#0A3D62] font-black text-2xl">DocHome</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p>© 2026 DocHome. All rights reserved.</p>
        </div>
      </footer>

      {/* Booking Modal */}
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default DocHomeLanding;
