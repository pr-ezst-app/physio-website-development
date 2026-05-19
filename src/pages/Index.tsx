import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/b22d383e-0b3f-4b16-87ef-9310e64c2076/files/9c577e6b-99db-45d8-9e36-ae65274024a5.jpg";

const SERVICES = [
  { icon: "Stethoscope", title: "General Practice", desc: "Primary care, diagnostics, and treatment of acute and chronic conditions.", price: "from $50" },
  { icon: "Heart", title: "Cardiology", desc: "ECG, heart ultrasound, consultations and management of cardiovascular disease.", price: "from $80" },
  { icon: "Eye", title: "Ophthalmology", desc: "Vision checks, glasses fitting, and treatment of eye conditions.", price: "from $60" },
  { icon: "Brain", title: "Neurology", desc: "Diagnosis and treatment of headaches, spine conditions, and sleep disorders.", price: "from $70" },
  { icon: "Microscope", title: "Lab Diagnostics", desc: "Blood, urine, biochemistry and hormone tests — results same day.", price: "from $15" },
  { icon: "Scan", title: "Ultrasound", desc: "Abdominal, thyroid, and pelvic ultrasound imaging.", price: "from $40" },
];

const DOCTORS = [
  { name: "Alexandra Morrison", spec: "Chief Physician, GP", exp: "18 years of experience", initials: "AM" },
  { name: "Daniel Scott", spec: "Cardiologist", exp: "12 years of experience", initials: "DS" },
  { name: "Elena Vasquez", spec: "Neurologist", exp: "15 years of experience", initials: "EV" },
  { name: "Michael Zane", spec: "Ophthalmologist", exp: "10 years of experience", initials: "MZ" },
];

const TESTIMONIALS = [
  { name: "Olivia K.", text: "Very attentive staff. I booked online in 5 minutes and the doctor took all the time I needed. Highly recommend!", rating: 5 },
  { name: "Andrew B.", text: "Had a full check-up here. Everything was smooth, modern equipment, and the doctors explain things clearly. Great clinic.", rating: 5 },
  { name: "Natalie S.", text: "Finally found a clinic where you don't wait for hours. Online booking works perfectly and test results come back fast.", rating: 5 },
];

const TIMES = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#booking", label: "Booking" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contacts", label: "Contacts" },
];

export default function Index() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && selectedService && selectedDate && selectedTime) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--warm-white))]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
              <Icon name="Plus" size={14} className="text-white" />
            </div>
            <span className="font-display text-xl font-semibold text-[hsl(var(--primary))] tracking-wide">MedCenter</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href}
                className="nav-link font-body text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--teal))] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#booking"
              className="font-body text-sm font-medium bg-[hsl(var(--primary))] text-white px-5 py-2 rounded-full hover:bg-[hsl(var(--teal))] transition-colors">
              Book Now
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-[hsl(var(--primary))]" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[hsl(var(--border))] px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="font-body text-sm text-[hsl(var(--foreground))] hover:text-[hsl(var(--teal))] transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium bg-[hsl(var(--primary))] text-white px-5 py-2 rounded-full text-center hover:bg-[hsl(var(--teal))] transition-colors">
              Book Now
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,50%,12%,0.88)] via-[hsl(215,50%,12%,0.65)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--teal))] animate-pulse" />
              <span className="font-body text-xs text-white/90 tracking-widest uppercase">Now accepting patients</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 animate-fade-in-up delay-100">
              Your health is<br />
              <span className="italic text-[hsl(185,55%,68%)]">our priority</span>
            </h1>

            <p className="font-body text-base text-white/75 leading-relaxed mb-10 animate-fade-in-up delay-200">
              A modern clinic with experienced doctors. Book an appointment online and receive professional medical care — no waiting in line.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a href="#booking"
                className="font-body font-medium bg-[hsl(var(--teal))] text-white px-8 py-3.5 rounded-full hover:bg-[hsl(185,50%,36%)] transition-all hover:scale-105 text-center">
                Book Online
              </a>
              <a href="#services"
                className="font-body font-medium bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full hover:bg-white/25 transition-all text-center">
                Our Services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-3 gap-4">
            {[
              { value: "15+", label: "years in practice" },
              { value: "50+", label: "specialists" },
              { value: "98%", label: "satisfied patients" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl font-semibold text-white">{s.value}</div>
                <div className="font-body text-xs text-white/65 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">What we treat</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card bg-[hsl(var(--warm-white))] border border-[hsl(var(--border))] rounded-2xl p-7 group">
                <div className="w-12 h-12 rounded-xl bg-[hsl(215,50%,20%,0.07)] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--teal))] transition-colors">
                  <Icon name={s.icon} size={22} className="text-[hsl(var(--primary))] group-hover:text-white transition-colors" fallback="Activity" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[hsl(var(--primary))] mb-2">{s.title}</h3>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">{s.desc}</p>
                <div className="font-body text-sm font-medium text-[hsl(var(--teal))]">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-[hsl(var(--primary))]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Why choose us</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
                Medicine you can<br /><span className="italic">truly trust</span>
              </h2>
              <p className="font-body text-white/65 text-sm leading-relaxed">
                We create an environment where every patient feels seen and cared for. Modern equipment, rigorous quality standards, and a personal approach to every visit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Clock", title: "No waiting", desc: "Online booking right on time" },
                { icon: "ShieldCheck", title: "Licensed", desc: "All licenses and certifications" },
                { icon: "CreditCard", title: "Clear pricing", desc: "No hidden fees" },
                { icon: "PhoneCall", title: "24/7 support", desc: "Hotline always available" },
              ].map((f, i) => (
                <div key={i} className="bg-white/8 border border-white/12 rounded-xl p-5">
                  <Icon name={f.icon} size={20} className="text-[hsl(var(--teal))] mb-3" fallback="Check" />
                  <div className="font-body text-sm font-medium text-white mb-1">{f.title}</div>
                  <div className="font-body text-xs text-white/55">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Our team</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Our Doctors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((d, i) => (
              <div key={i} className="service-card bg-[hsl(var(--warm-white))] border border-[hsl(var(--border))] rounded-2xl p-6 text-center group">
                <div className="w-20 h-20 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(var(--teal))] transition-colors">
                  <span className="font-display text-xl font-semibold text-white">{d.initials}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[hsl(var(--primary))] mb-1">{d.name}</h3>
                <p className="font-body text-xs text-[hsl(var(--teal))] mb-2">{d.spec}</p>
                <p className="font-body text-xs text-[hsl(var(--muted-foreground))]">{d.exp}</p>
                <a href="#booking" className="mt-4 inline-block font-body text-xs font-medium text-[hsl(var(--primary))] border border-[hsl(var(--primary))] px-4 py-1.5 rounded-full hover:bg-[hsl(var(--primary))] hover:text-white transition-all">
                  Book Appointment
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-[hsl(var(--secondary))]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Online booking</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))] mb-6">
                Book your<br /><span className="italic">appointment</span>
              </h2>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
                Fill in the form and we'll confirm your appointment by phone. Bookings available up to 24 hours in advance.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Choose a service and a convenient time" },
                  { step: "2", text: "Enter your contact details" },
                  { step: "3", text: "Receive a confirmation call" },
                ].map(s => (
                  <div key={s.step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                      <span className="font-body text-xs font-semibold text-white">{s.step}</span>
                    </div>
                    <span className="font-body text-sm text-[hsl(var(--foreground))]">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[hsl(var(--border))] p-8">
              {submitted ? (
                <div className="text-center py-8 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--teal))] flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[hsl(var(--primary))] mb-2">Request received!</h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">
                    We'll get in touch shortly to confirm your appointment.
                  </p>
                  <button onClick={() => { setSubmitted(false); setName(""); setPhone(""); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); }}
                    className="mt-6 font-body text-sm text-[hsl(var(--teal))] hover:underline">
                    Book again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Service *</label>
                    <select
                      value={selectedService}
                      onChange={e => setSelectedService(e.target.value)}
                      className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                      required>
                      <option value="">Select a service</option>
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Date *</label>
                      <input
                        type="date"
                        min={today}
                        value={selectedDate}
                        onChange={e => setSelectedDate(e.target.value)}
                        className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                        required />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Time *</label>
                      <select
                        value={selectedTime}
                        onChange={e => setSelectedTime(e.target.value)}
                        className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                        required>
                        <option value="">Select</option>
                        {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Your name *</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                      required />
                  </div>

                  <div>
                    <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                      required />
                  </div>

                  <button type="submit"
                    className="w-full font-body font-medium bg-[hsl(var(--primary))] text-white py-3.5 rounded-xl hover:bg-[hsl(var(--teal))] transition-all hover:scale-[1.01] mt-2">
                    Book Appointment
                  </button>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))] text-center">
                    By clicking the button you agree to the processing of your personal data
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Patient reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Trusted by patients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="service-card bg-[hsl(var(--warm-white))] border border-[hsl(var(--border))] rounded-2xl p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-[hsl(var(--gold))] text-sm">★</span>
                  ))}
                </div>
                <p className="font-body text-sm text-[hsl(var(--foreground))] leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                    <Icon name="User" size={16} className="text-white" fallback="User" />
                  </div>
                  <span className="font-body text-sm font-medium text-[hsl(var(--primary))]">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[hsl(var(--secondary))]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Find us</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Contact Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "MapPin", title: "Address", lines: ["42 Main Street, Suite 101", "New York, NY 10001"] },
              { icon: "Phone", title: "Phone", lines: ["+1 (555) 000-0000", "+1 (800) 000-0000 (toll free)"] },
              { icon: "Clock", title: "Working Hours", lines: ["Mon–Fri: 8:00 AM – 8:00 PM", "Sat–Sun: 9:00 AM – 5:00 PM"] },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[hsl(var(--border))] p-7 flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} size={20} className="text-white" fallback="MapPin" />
                </div>
                <div>
                  <h3 className="font-body text-sm font-semibold text-[hsl(var(--primary))] mb-1">{c.title}</h3>
                  {c.lines.map((l, j) => (
                    <p key={j} className="font-body text-sm text-[hsl(var(--muted-foreground))]">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--muted))] h-64 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={36} className="text-[hsl(var(--muted-foreground))] mx-auto mb-2" fallback="Map" />
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">Map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--primary))] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Icon name="Plus" size={12} className="text-white" />
            </div>
            <span className="font-display text-lg text-white">MedCenter</span>
          </div>
          <p className="font-body text-xs text-white/40">© 2024 MedCenter. All rights reserved.</p>
          <div className="flex gap-6">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} className="font-body text-xs text-white/50 hover:text-white transition-colors">{item.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
