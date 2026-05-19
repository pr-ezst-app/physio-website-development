import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/b22d383e-0b3f-4b16-87ef-9310e64c2076/files/9c577e6b-99db-45d8-9e36-ae65274024a5.jpg";

const SERVICES = [
  { icon: "Stethoscope", title: "Терапия", desc: "Первичный осмотр, диагностика, лечение острых и хронических заболеваний.", price: "от 1 500 ₽" },
  { icon: "Heart", title: "Кардиология", desc: "ЭКГ, УЗИ сердца, консультации и ведение сердечно-сосудистых заболеваний.", price: "от 2 200 ₽" },
  { icon: "Eye", title: "Офтальмология", desc: "Проверка зрения, подбор очков, лечение заболеваний глаз.", price: "от 1 800 ₽" },
  { icon: "Brain", title: "Неврология", desc: "Диагностика и лечение головной боли, остеохондроза, нарушений сна.", price: "от 2 000 ₽" },
  { icon: "Microscope", title: "Лабораторная диагностика", desc: "Анализы крови, мочи, биохимия, гормоны — результаты в день сдачи.", price: "от 300 ₽" },
  { icon: "Scan", title: "УЗИ-диагностика", desc: "УЗИ органов брюшной полости, щитовидной железы, малого таза.", price: "от 1 200 ₽" },
];

const DOCTORS = [
  { name: "Александра Морозова", spec: "Главный врач, терапевт", exp: "18 лет опыта", initials: "АМ" },
  { name: "Дмитрий Соколов", spec: "Кардиолог", exp: "12 лет опыта", initials: "ДС" },
  { name: "Елена Васильева", spec: "Невролог", exp: "15 лет опыта", initials: "ЕВ" },
  { name: "Михаил Захаров", spec: "Офтальмолог", exp: "10 лет опыта", initials: "МЗ" },
];

const TESTIMONIALS = [
  { name: "Ольга К.", text: "Очень внимательный персонал. Записалась онлайн за 5 минут, на приёме уделили достаточно времени. Рекомендую всем!", rating: 5 },
  { name: "Андрей Б.", text: "Прошёл полное обследование. Всё чётко, оборудование современное, врачи объясняют понятно. Отличная клиника.", rating: 5 },
  { name: "Наталья С.", text: "Наконец-то нашла клинику, где не приходится ждать часами. Запись онлайн работает отлично, результаты анализов — быстро.", rating: 5 },
];

const TIMES = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

const NAV_ITEMS = [
  { href: "#services", label: "Услуги" },
  { href: "#doctors", label: "Врачи" },
  { href: "#booking", label: "Запись" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
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
            <span className="font-display text-xl font-semibold text-[hsl(var(--primary))] tracking-wide">МедЦентр</span>
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
              Записаться
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
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Клиника" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,50%,12%,0.88)] via-[hsl(215,50%,12%,0.65)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--teal))] animate-pulse" />
              <span className="font-body text-xs text-white/90 tracking-widest uppercase">Принимаем пациентов</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 animate-fade-in-up delay-100">
              Ваше здоровье —<br />
              <span className="italic text-[hsl(185,55%,68%)]">наш приоритет</span>
            </h1>

            <p className="font-body text-base text-white/75 leading-relaxed mb-10 animate-fade-in-up delay-200">
              Современная клиника с опытными врачами. Запишитесь на приём онлайн и получите профессиональную медицинскую помощь без очередей.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a href="#booking"
                className="font-body font-medium bg-[hsl(var(--teal))] text-white px-8 py-3.5 rounded-full hover:bg-[hsl(185,50%,36%)] transition-all hover:scale-105 text-center">
                Записаться онлайн
              </a>
              <a href="#services"
                className="font-body font-medium bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full hover:bg-white/25 transition-all text-center">
                Наши услуги
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-3 gap-4">
            {[
              { value: "15+", label: "лет работы" },
              { value: "50+", label: "специалистов" },
              { value: "98%", label: "довольных пациентов" },
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
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Что мы лечим</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Наши услуги</h2>
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
              <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Почему выбирают нас</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
                Медицина, которой<br /><span className="italic">можно доверять</span>
              </h2>
              <p className="font-body text-white/65 text-sm leading-relaxed">
                Мы создаём среду, где каждый пациент чувствует внимание и заботу. Современное оборудование, строгие стандарты качества и индивидуальный подход к каждому.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Clock", title: "Без очередей", desc: "Онлайн-запись точно ко времени" },
                { icon: "ShieldCheck", title: "Лицензировано", desc: "Все лицензии и сертификаты" },
                { icon: "CreditCard", title: "Прозрачные цены", desc: "Без скрытых платежей" },
                { icon: "PhoneCall", title: "Поддержка 24/7", desc: "Горячая линия всегда доступна" },
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
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Команда</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Наши врачи</h2>
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
                  Записаться
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
              <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Онлайн-запись</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))] mb-6">
                Запишитесь<br /><span className="italic">на приём</span>
              </h2>
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
                Заполните форму — мы подтвердим запись по телефону. Запись доступна за 24 часа до приёма.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Выберите услугу и удобное время" },
                  { step: "2", text: "Укажите контактные данные" },
                  { step: "3", text: "Получите подтверждение звонком" },
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
                  <h3 className="font-display text-2xl font-semibold text-[hsl(var(--primary))] mb-2">Заявка принята!</h3>
                  <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">
                    Мы свяжемся с вами в ближайшее время для подтверждения.
                  </p>
                  <button onClick={() => { setSubmitted(false); setName(""); setPhone(""); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); }}
                    className="mt-6 font-body text-sm text-[hsl(var(--teal))] hover:underline">
                    Записаться ещё раз
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Услуга *</label>
                    <select
                      value={selectedService}
                      onChange={e => setSelectedService(e.target.value)}
                      className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                      required>
                      <option value="">Выберите услугу</option>
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Дата *</label>
                      <input
                        type="date"
                        min={today}
                        value={selectedDate}
                        onChange={e => setSelectedDate(e.target.value)}
                        className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                        required />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Время *</label>
                      <select
                        value={selectedTime}
                        onChange={e => setSelectedTime(e.target.value)}
                        className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                        required>
                        <option value="">Выберите</option>
                        {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Ваше имя *</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                      required />
                  </div>

                  <div>
                    <label className="font-body text-xs font-medium text-[hsl(var(--foreground))] block mb-1.5">Телефон *</label>
                    <input
                      type="tel"
                      placeholder="+7 (900) 000-00-00"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full font-body text-sm border border-[hsl(var(--border))] rounded-xl px-4 py-3 bg-white placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))] transition-all"
                      required />
                  </div>

                  <button type="submit"
                    className="w-full font-body font-medium bg-[hsl(var(--primary))] text-white py-3.5 rounded-xl hover:bg-[hsl(var(--teal))] transition-all hover:scale-[1.01] mt-2">
                    Записаться на приём
                  </button>
                  <p className="font-body text-xs text-[hsl(var(--muted-foreground))] text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
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
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Отзывы пациентов</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Нам доверяют</h2>
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
            <p className="font-body text-xs text-[hsl(var(--teal))] tracking-widest uppercase mb-3">Как нас найти</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[hsl(var(--primary))]">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Ленина, 42, офис 101", "Москва, 125009"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 000-00-00", "+7 (800) 000-00-00 (бесплатно)"] },
              { icon: "Clock", title: "Часы работы", lines: ["Пн–Пт: 8:00 – 20:00", "Сб–Вс: 9:00 – 17:00"] },
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
              <p className="font-body text-sm text-[hsl(var(--muted-foreground))]">Карта — скоро здесь</p>
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
            <span className="font-display text-lg text-white">МедЦентр</span>
          </div>
          <p className="font-body text-xs text-white/40">© 2024 МедЦентр. Все права защищены.</p>
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