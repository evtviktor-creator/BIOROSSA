// src/components/ProductSection.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { biorossaProducts, partnerProduct } from '../data/products';
import QuizModal from './QuizModal';

const ProductCard = ({ product, isPartner }) => (
  <div className="bg-gray-900 rounded-3xl border border-amber-500/20 p-6 flex flex-col items-center text-center h-full shadow-xl">
    <img src={product.image} alt={product.name} className="h-48 object-contain mb-6 drop-shadow-lg" />
    <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">{product.tag}</span>
    <h4 className="text-2xl font-['Playfair_Display'] font-bold text-white mb-3">{product.name}</h4>
    <p className="text-gray-300 text-sm flex-1">{product.shortDesc}</p>
    <div className="mt-6 flex gap-3 w-full">
      <a href={product.ozonLink} target="_blank" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold transition">OZON</a>
      <a href={product.wbLink} target="_blank" className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-500 text-white py-2 rounded-lg text-sm font-semibold transition">WB</a>
    </div>
  </div>
);

const ProductSection = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-amber-400 mb-4">
            Продукты BIOROSSA®
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Собственное производство в России. Премиальное качество, подтверждённое сертификатами.
          </p>
        </motion.div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: true }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full pb-14"
        >
          {biorossaProducts.map(p => (
            <SwiperSlide key={p.id} className="max-w-sm p-4">
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setQuizOpen(true)}
            className="bg-amber-500/10 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-10 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm"
          >
            Подобрать продукт за 30 секунд (мини-квиз)
          </button>
        </motion.div>

        {/* Партнерский продукт */}
        <div className="mt-28">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-amber-400 text-center mb-12"
          >
            Партнёрский продукт премиум-класса
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <ProductCard product={partnerProduct} isPartner />
          </div>
        </div>
      </div>

      <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} products={[...biorossaProducts, partnerProduct]} />
    </section>
  );
};

export default ProductSection;