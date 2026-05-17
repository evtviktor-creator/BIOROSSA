// App.jsx
import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Download,
  ShoppingCart,
  MessageCircle,
  Send,
  ExternalLink,
  CheckCircle,
  Shield,
  Truck,
  FlaskConical,
  Award,
  Leaf,
  Star,
} from "lucide-react";

// --- DATA ---
const products = [
  {
    id: 1,
    name: "Ультра Омега Комплекс",
    subtitle: "Тюлений жир",
    description:
      "Премиальный Омега-3 из дикого тюленя Охотского моря. Холодный отжим, стекло.",
    image: "https://placehold.co/400x500/1a1a1a/f5f5f5?text=Тюлений+Жир+Премиум",
    tags: ["Омега-3", "ДГК/ЭПК/ДПК", "Сквален", "Витамины A, E, D3+K2"],
    flag: "Флагманский продукт",
  },
  {
    id: 2,
    name: "Морской коллаген",
    subtitle: "Гидролизат 1-го типа",
    description:
      "Для молодости кожи, крепости суставов и связок. Высокая биодоступность.",
    image: "https://placehold.co/400x500/1a1a1a/f5f5f5?text=Морской+Коллаген",
    tags: ["Кожа", "Суставы", "Anti-age"],
  },
  {
    id: 3,
    name: "Комплекс D3 + K2",
    subtitle: "+ Кальций, Магний, Цинк",
    description:
      "Сильный иммунитет, здоровые кости и идеальная работа сердца в одной формуле.",
    image: "https://placehold.co/400x500/1a1a1a/f5f5f5?text=D3K2+Комплекс",
    tags: ["Иммунитет", "Кости", "Сердце"],
  },
  {
    id: 4,
    name: "Магний B6",
    subtitle: "Антистресс формула",
    description:
      "Спокойствие, крепкий сон и мышечное восстановление. Премиальная форма магния.",
    image: "https://placehold.co/400x500/1a1a1a/f5f5f5?text=Магний+B6+Премиум",
    tags: ["Стресс", "Сон", "Спорт"],
  },
];

const advantages = [
  {
    icon: Shield,
    title: "Собственное производство",
    desc: "Полный цикл на территории РФ. Контроль качества на каждом этапе.",
  },
  {
    icon: Truck,
    title: "Сырьё с Камчатки",
    desc: "Дикий тюлень Охотского моря. Экологически чистый регион.",
  },
  {
    icon: FlaskConical,
    title: "Научный подход",
    desc: "Авторские технологии. Подтверждённые исследования на Tangaroa.su.",
  },
  {
    icon: Award,
    title: "Премиум упаковка",
    desc: "Янтарное стекло, алюминиевая крышка. Сохраняет активность компонентов.",
  },
];

// --- COMPONENTS ---
const Modal = ({ isOpen, onClose, type }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет fetch на info@biorosa.ru (или сервис-посредник)
    console.log("Lead sent:", form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-neutral-200"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 transition"
            >
              <X size={24} />
            </button>
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="mx-auto text-emerald-500 mb-4" />
                <h3 className="text-2xl font-light tracking-tight mb-2">Спасибо!</h3>
                <p className="text-neutral-500">
                  Презентация и прайс уже отправляются вам на почту.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-light tracking-tight mb-1">
                  {type === "price"
                    ? "Скачать презентацию и прайс"
                    : "Остались вопросы?"}
                </h3>
                <p className="text-neutral-500 text-sm mb-6">
                  Заполните форму, и мы пришлём материалы в ближайшее время.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Имя *"
                    required
                    className="w-full border-b border-neutral-200 py-3 px-1 outline-none focus:border-neutral-800 transition placeholder:text-neutral-400"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    required
                    className="w-full border-b border-neutral-200 py-3 px-1 outline-none focus:border-neutral-800 transition placeholder:text-neutral-400"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full border-b border-neutral-200 py-3 px-1 outline-none focus:border-neutral-800 transition placeholder:text-neutral-400"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Компания"
                    className="w-full border-b border-neutral-200 py-3 px-1 outline-none focus:border-neutral-800 transition placeholder:text-neutral-400"
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 rounded-xl font-medium tracking-wide hover:bg-neutral-800 transition mt-4"
                  >
                    Отправить
                  </motion.button>
                </form>
                <p className="text-xs text-neutral-400 text-center mt-4">
                  Отправляя форму, вы соглашаетесь с политикой
                  конфиденциальности.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StickyBar = () => (
  <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md border border-neutral-200 px-4 py-2 rounded-full shadow-lg flex gap-2 md:hidden">
    <a
      href="https://wa.me/79000000000"
      target="_blank"
      className="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
    >
      <MessageCircle size={20} />
    </a>
    <a
      href="https://t.me/biorossaru"
      target="_blank"
      className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
    >
      <Send size={20} />
    </a>
    <button
      onClick={() => document.getElementById("cta-trigger")?.click()}
      className="px-4 bg-neutral-900 text-white rounded-full font-medium text-sm"
    >
      Прайс
    </button>
  </div>
);

// --- MAIN APP ---
export default function App() {
  const [modalType, setModalType] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation triggers
  const controls = useAnimation();

  return (
    <div className="font-sans bg-[#FDFBF7] text-neutral-800 selection:bg-amber-100 antialiased">
      <style>{`
        body { background: #FDFBF7; }
        .glass-card { background: rgba(255,255,255,0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.9); }
        .premium-shadow { box-shadow: 0 20px 50px -12px rgba(0,0,0,0.05); }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px white inset; }
      `}</style>

      {/* NAV */}
      <nav className="fixed w-full z-30 px-6 py-4 flex justify-between items-center mix-blend-difference text-white">
        <a href="/" className="text-2xl font-light tracking-[.25em] uppercase">
          BIOROSSA
        </a>
        <div className="hidden md:flex gap-8 text-sm tracking-wide font-light">
          <a href="#products" className="hover:text-amber-200 transition">
            Продукты
          </a>
          <a href="#about" className="hover:text-amber-200 transition">
            О бренде
          </a>
          <a href="#contact" className="hover:text-amber-200 transition">
            Контакты
          </a>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO (Block 1) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://placehold.co/1600x900/0a0a0a/eeeeee?text=BIOROSSA+Premium+Wellness"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-coast-5075-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-6"
          >
            Премиальная <br /> нутрицевтика из России
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Сырьё из Охотского моря. Собственное производство. Научный подход.
            Стекло.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              id="cta-trigger"
              onClick={() => setModalType("price")}
              className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-amber-50 transition flex items-center justify-center gap-2"
            >
              <Download size={18} /> Скачать презентацию и прайс
            </button>
            <a
              href="#products"
              className="border border-white/50 text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-white/10 transition"
            >
              Смотреть продукты
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS (Block 2) */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-medium tracking-widest text-sm">
            НАША ЛИНЕЙКА
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 mb-4">
            Продукты для вашего здоровья
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Каждая банка — это концентрат природной силы, подтверждённый
            исследованиями и упакованный в премиальное стекло.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-neutral-100 flex flex-col"
            >
              <div className="p-6">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-64 object-cover rounded-2xl mb-6 bg-neutral-50"
                />
                {p.flag && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                    {p.flag}
                  </span>
                )}
                <h3 className="text-xl font-medium mt-3">{p.name}</h3>
                <p className="text-sm text-amber-700 font-light">
                  {p.subtitle}
                </p>
                <p className="text-neutral-500 text-sm mt-3 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto p-6 pt-0">
                <button
                  onClick={() => setModalType("price")}
                  className="w-full border border-neutral-300 text-neutral-700 py-3 rounded-xl text-sm font-medium hover:bg-neutral-100 transition flex items-center justify-center gap-2"
                >
                  Подробнее / Запросить опт
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setModalType("quiz")}
            className="bg-transparent border-b border-neutral-400 text-neutral-600 hover:text-neutral-900 transition pb-1"
          >
            Не знаете, что выбрать? Пройти квиз →
          </button>
        </div>
      </section>

      {/* WHERE TO BUY (Block 3) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light mb-6">
              Где купить / Сотрудничество
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Мы работаем с аптеками, розничными сетями, маркетплейсами и
              дистрибьюторами. Предлагаем гибкие условия, быструю логистику и
              полный комплект документов.
            </p>
            <div className="space-y-4">
              {advantages.slice(0, 3).map((a) => (
                <div key={a.title} className="flex gap-4 items-start">
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <a.icon size={20} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium">{a.title}</h4>
                    <p className="text-sm text-neutral-500">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.ozon.ru/seller/biorosa/"
                target="_blank"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition flex items-center gap-2"
              >
                <ShoppingCart size={18} /> OZON
              </a>
              <a
                href="https://www.wildberries.ru/brands/biorosa"
                target="_blank"
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition flex items-center gap-2"
              >
                <ShoppingCart size={18} /> WILDBERRIES
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FDFBF7] rounded-3xl p-8 border border-neutral-200"
          >
            <h3 className="text-2xl font-light mb-4">Почему выбирают нас</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <span>Официальный бренд, зарегистрированный товарный знак</span>
              </div>
              <div className="flex items-center gap-3">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <span>Более 200 аптек-партнёров по РФ</span>
              </div>
              <div className="flex items-center gap-3">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <span>Сертификаты СГР на всю продукцию</span>
              </div>
              <div className="flex items-center gap-3">
                <Star size={18} className="text-amber-500 fill-amber-500" />
                <span>Доставка до склада партнёра</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / SCIENCE (Block 4) */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light">Наука и природа</h2>
          <p className="text-neutral-500 mt-4 max-w-3xl mx-auto">
            Наши разработки основаны на исследованиях морских биоресурсов.
            Совместно с{" "}
            <a
              href="https://tangaroa.su/content/nauchnaya-rabota"
              target="_blank"
              className="text-amber-700 underline"
            >
              научной базой Тангароа
            </a>{" "}
            мы создаём продукты нового поколения.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Собственная технология",
              desc: "Холодный отжим без ГМО и растворителей сохраняет молекулярную структуру Омега-3.",
            },
            {
              title: "Сырьё дикой природы",
              desc: "Тюлень Охотского моря, свободный от антибиотиков и искусственных кормов.",
            },
            {
              title: "Стекло и безопасность",
              desc: "Янтарное стекло защищает от УФ-лучей. Алюминий — без взаимодействия с продуктом.",
            },
          ].map((item) => (
            <div key={item.title} className="p-8 glass-card rounded-3xl">
              <Leaf size={32} className="mx-auto text-amber-700 mb-4" />
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-neutral-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://tangaroa.su/content/nauchnaya-rabota"
            target="_blank"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full hover:bg-neutral-800 transition"
          >
            <FlaskConical size={18} /> Ознакомиться с научными работами
          </a>
        </div>
      </section>

      {/* FOOTER CTA (Block 5) */}
      <section id="contact" className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-light mb-6"
          >
            Начните сотрудничество с BIOROSSA
          </motion.h2>
          <p className="text-neutral-400 mb-10">
            Оставьте заявку, и мы отправим презентацию, прайс-лист и условия
            партнёрства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/79000000000"
              target="_blank"
              className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="https://t.me/biorossaru"
              target="_blank"
              className="bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2"
            >
              <Send size={18} /> Telegram
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-neutral-300 text-sm">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} /> Москва, ул. Примерная, 10
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} /> info@biorosa.ru
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} /> 8 (800) 000-00-00
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL & STICKY */}
      <Modal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        type={modalType}
      />
      <StickyBar />

      {/* Hidden desktop sticky button alternative */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setModalType("price")}
          className="bg-neutral-900 text-white px-6 py-3 rounded-full shadow-xl font-medium flex items-center gap-2"
        >
          <Download size={18} /> Прайс-лист
        </motion.button>
      </div>
    </div>
  );
}