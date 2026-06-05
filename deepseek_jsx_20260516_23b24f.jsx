// src/components/Hero.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import ModalForm from './ModalForm';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Премиальные БАДы <br />
          <span className="text-amber-400">для здоровья «под ключ»</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-lg"
        >
          {[
            'Собственное производство в РФ',
            'Зарегистрированный товарный знак BIOROSSA®',
            'Контроль качества и СГР',
            'Более 10 000 довольных клиентов'
          ].map((item, idx) => (
            <span key={idx} className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-amber-400/30">
              ✓ {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Скачать презентацию и прайс
          </button>
          <a
            href="https://www.ozon.ru/seller/biorosa/"
            target="_blank"
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Купить на OZON
          </a>
          <a
            href="https://ipsumvitamin.ru/?ysclid=moeib367l7287191372"
            target="_blank"
            className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Купить на Wildberries
          </a>
        </motion.div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;