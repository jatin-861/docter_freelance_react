import React, { useState, useEffect } from 'react';
import ScheduleModal from '../components/ScheduleModal';
import ChatWidget from '../components/ChatWidget';
import EmailModal from '../components/EmailModal';

const DocHomeLanding: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen medical-gradient overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12 py-6 ${
        scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-emerald-600 transition-all duration-500 group-hover:rotate-[360deg]">
              <span className="material-symbols-outlined text-2xl">home_health</span>
            </div>
            <span className="text-2xl font-black tracking-tighter serif text-slate-900">DocHome</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {['Services', 'Our Doctors', 'Pricing', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="px-5 py-2.5 rounded-full text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-all"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="ml-4 bg-emerald-500 text-white px-7 py-2.5 rounded-full text-sm font-black shadow-lg hover:bg-emerald-600 hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-slate-200/50 pl-2 pr-4 py-2 rounded-full shadow-sm animate-slide-in-left">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">Active in Mumbai & Delhi</span>
            </div>
            
            <h1 className="text-7xl md:text-8.5xl serif text-slate-900 leading-[1] font-medium tracking-tight animate-slide-up">
              Medical <span className="italic font-serif text-emerald-600">Care</span> <br /> 
              at Your Front <span className="glass-underline">Door.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light animate-slide-up delay-300">
              Experience the future of healthcare. Professional practitioners dispatched to your home with hospital-grade precision and genuine warmth.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4 animate-slide-up delay-500">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="btn-primary group/btn overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Schedule Home Visit</span>
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary group/btn overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-slate-900/[0.03] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">View Pricing</span>
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-slate-200/50 animate-fade-in delay-700">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium leading-tight">
                <span className="font-bold text-slate-900">4.9/5 Rating</span> <br /> 
                from over 12,000+ patients
              </p>
            </div>
          </div>

          <div className="relative animate-zoom-in">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-slate-900/5 rotate-3 rounded-[3rem] transition-transform group-hover:rotate-0 duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-[1.02] border-[12px] border-white">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" alt="Doctor Standing" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-1000" />
              </div>

              {/* Stats Overlay Cards */}
              <div className="absolute -right-8 bottom-12 glass p-5 rounded-2xl border-white/50 animate-zoom-in delay-700 group/stat">
                <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/stat:rotate-12 transition-transform">
                    <span className="material-symbols-outlined">speed</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rapid Response</h4>
                    <p className="text-lg font-black text-slate-900 tracking-tight">&lt; 45 Mins</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-12 glass p-5 rounded-2xl border-white/50 animate-zoom-in delay-500 group/stat">
                <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/stat:-rotate-12 transition-transform">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified Team</h4>
                    <p className="text-lg font-black text-slate-900 tracking-tight">100% Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white/50 border-y border-slate-200/50 py-12">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Trusted by medical leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all">
            {['HealthLine', 'MediCare', 'WellSpan', 'Aetna', 'BlueCross'].map(brand => (
              <span key={brand} className="serif text-2xl font-black tracking-tight cursor-default hover:text-slate-900 transition-colors">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl serif text-slate-900 font-medium leading-tight">Simplified Healthcare</h2>
            <p className="text-slate-500 text-lg font-light">Getting professional medical attention has never been this seamless.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10"></div>
            
            {[
              { num: '01', title: 'On-Demand Booking', desc: 'Detail your symptoms via our secured portal in minutes.', icon: 'touch_app' },
              { num: '02', title: 'Doctor Dispatch', desc: 'A verified practitioner matches with you and departs immediately.', icon: 'hail' },
              { num: '03', title: 'In-Home Care', desc: 'Receive treatment, vitals check, and digital scripts at home.', icon: 'home_health' }
            ].map((step, idx) => (
              <div key={idx} className="group text-center space-y-8 relative">
                <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-sm group-hover:bg-slate-900 group-hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <span className="material-symbols-outlined text-4xl text-slate-900 group-hover:text-white transition-colors">
                    {step.icon}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
                </div>
                <div className="absolute -top-4 -right-4 serif text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl serif text-slate-900 font-medium">Full-Spectrum Care</h2>
            <p className="text-slate-600 max-w-md font-light">Comprehensive medical solutions brought directly to your living space via nosso world-class dispatch system.</p>
          </div>
          <button className="text-emerald-600 font-bold hover:gap-3 transition-all flex items-center gap-2 group">
            View all capabilities 
            <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: "clinical_notes", title: "General Illness", desc: "Expert care for fevers, infections, respiratory issues, and seasonal flare-ups." },
            { icon: "vaccines", title: "Vaccinations", desc: "Flu shots, pediatric immunizations, and travel vaccines administered by pros." },
            { icon: "monitor_heart", title: "Diagnostics", desc: "Vitals monitoring, blood sample collection, and ECGs performed on-site." },
            { icon: "child_care", title: "Pediatrics", desc: "Specialized care for children in an environment where they feel safest." },
            { icon: "elderly", title: "Elder Care", desc: "Chronic disease management and geriatric support for your loved ones." },
            { icon: "healing", title: "Advanced Nursing", desc: "IV infusions, wound management, and post-operative recovery support." },
          ].map((service, idx) => (
            <div key={idx} className="group p-10 glass rounded-3xl hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-emerald-600 transition-all duration-300 mb-8">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm border-b-2 border-slate-200 group-hover:border-emerald-600 transition-all pb-1">
                Clinical Details
              </a>
            </div>
          ))}
        </div>
      </section>



      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-5xl serif text-slate-900 font-medium tracking-tight">Investment in Health</h2>
          <p className="text-slate-500 font-light text-lg">World-class transparency for world-class medical attention.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Single Visit", 
              price: "₹499", 
              period: "/session", 
              features: ["Doctor Consultation", "Digital Prescription", "60-min Response"], 
              theme: "liquid-glass" 
            },
            { 
              name: "Care+ Monthly", 
              price: "₹1,299", 
              period: "/month", 
              features: ["2 Visits included", "Priority response", "Free Lab Pickups", "Family Portal"], 
              featured: true, 
              theme: "liquid-glass-emerald" 
            },
            { 
              name: "Family Suite", 
              price: "₹3,499", 
              period: "/month", 
              features: ["Up to 5 members", "Monthly Health Audit", "VIP Priority", "24/7 Concierge"], 
              theme: "liquid-glass" 
            }
          ].map((plan, idx) => (
            <div key={idx} className={`relative p-10 rounded-[3rem] transition-all duration-700 hover:scale-[1.02] overflow-hidden group border border-white/20 ${
              plan.featured 
                ? 'liquid-glass-emerald text-white z-10 glow-emerald' 
                : 'liquid-glass text-slate-900'
            }`}>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none"></div>
              
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1 rounded-full text-[10px] font-bold uppercase tracking-[2px] shadow-lg">
                  Most Recommended
                </div>
              )}
              <h3 className={`text-xl font-bold mb-8 uppercase tracking-[0.2em] ${plan.featured ? 'text-white' : 'text-emerald-600'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black leading-none tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-white/60' : 'text-slate-400'}`}>{plan.period}</span>
              </div>
              <ul className="space-y-6 mb-12">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-center gap-4 text-sm font-medium ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                    <span className={`material-symbols-outlined ${plan.featured ? 'text-emerald-300' : 'text-emerald-500'}`}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => alert(`Starting setup for ${plan.name}...`)} 
                className={`w-full py-4 rounded-2xl font-bold transition-all shadow-xl group/btn overflow-hidden relative ${
                  plan.featured 
                    ? 'bg-white text-slate-900 hover:shadow-emerald-500/40' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <div className="absolute inset-0 bg-emerald-400/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Choose {plan.name}</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 md:px-12 glass rounded-[4rem] mx-6 mb-32 overflow-hidden relative border-white/50 bg-white/10 backdrop-blur-2xl">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">Concierge Help</div>
                <h2 className="text-6xl serif text-slate-900 font-medium leading-none">Commonly <br /> Asked.</h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed">Can't find an answer? Our medical coordinators are available 24/7.</p>
              </div>
              
              <div className="p-12 glass rounded-[3rem] space-y-10 border-white relative overflow-hidden bg-white/60">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
                <h3 className="text-3xl font-bold leading-tight text-slate-900 relative z-10">Need immediate <br /> clinical support?</h3>
                <div className="flex flex-col gap-5 relative z-10">
                  <button 
                    onClick={() => setIsEmailOpen(true)}
                    className="flex items-center justify-center gap-4 w-full bg-white text-slate-900 border border-slate-100 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                    Email Support
                  </button>
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className="flex items-center justify-center gap-4 w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl relative group/assist overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover/assist:translate-y-0 transition-transform duration-500"></div>
                    <span className="material-symbols-outlined text-lg relative z-10">chat</span>
                    <span className="relative z-10 text-white group-hover/assist:text-white">Live Assistance</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 pt-4">
              {[
                { q: "What is your emergency arrival SLA?", a: "For critical care situations, we aim for a 30-45 minute response time in metropolitan areas across Mumbai and Delhi." },
                { q: "Are your medications genuine?", a: "Every medication we carry is source-verified and stored in temperature-controlled transport units." },
                { q: "Can I choose my specific doctor?", a: "Our Care+ and Family plans provide you with a dedicated primary practitioner for long-term clinical continuity." },
                { q: "Do you handle insurance?", a: "We generate comprehensive clinical audit logs and invoices compatible with all major global health insurers." }
              ].map((faq, idx) => (
                <details key={idx} className="group overflow-hidden rounded-[2.5rem] border border-white/50 glass hover:bg-white/80 transition-all duration-500">
                  <summary className="list-none p-8 md:p-10 flex justify-between items-center font-bold text-xl text-slate-900 cursor-pointer">
                    <span className="max-w-[80%]">{faq.q}</span>
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center group-open:bg-emerald-600 group-open:rotate-180 transition-all duration-500 shadow-lg">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </summary>
                  <div className="px-10 pb-10 pt-0 text-slate-500 text-lg leading-relaxed max-w-2xl font-light">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">medical_services</span>
                </div>
                <div className="serif text-slate-900 font-bold text-2xl tracking-tighter">DocHome</div>
              </div>
              <p className="text-slate-400 max-w-xs leading-relaxed font-medium">Bringing the gold standard of hospital-grade clinical attention directly to your home.</p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-semibold">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-semibold">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Medical FAQ</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200/50 text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">
            <p>© 2026 DocHome. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900 transition-colors">Facebook</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Interaction Button */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-10 right-10 z-50 bg-slate-900 text-white w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-emerald-500 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-[2rem]"></div>
        <span className="material-symbols-outlined text-3xl z-10 relative">chat_bubble</span>
      </button>

      {/* Modals */}
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <EmailModal isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default DocHomeLanding;
