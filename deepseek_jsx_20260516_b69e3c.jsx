// src/components/WhereToBuy.jsx
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
  { text: 'Отличное качество! Принимаю коллаген, кожа стала заметно лучше.', author: 'Анна, OZON' },
  { text: 'Магний B6 реально помогает при стрессе. Вкуса нет, легко глотать.', author: 'Ирина, Wildberries' },
  { text: 'Покупаю Омегу для мамы, довольна. Быстрая доставка.', author: 'Ольга, OZON' },
];

const WhereToBuy = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-5xl font-bold text-amber-400 mb-4">
            Где купить
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Удобные способы получения: прямо со склада в РФ. Партнёры в каждом регионе.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-8 border border-amber-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Почему заказывают у нас</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3"><span className="text-amber-400">✓</span> Отгрузка от 10 штук (опт)</li>
              <li className="flex gap-3"><span className="text-amber-400">✓</span> Оригинальная продукция с СГР</li>
              <li className="flex gap-3"><span className="text-amber-400">✓</span> Доставка по РФ от 2 дней</li>
              <li className="flex gap-3"><span className="text-amber-400">✓</span> Персональный менеджер</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-64 bg-gray-900 rounded-3xl border border-amber-500/20 flex items-center justify-center text-gray-500"
          >
            [ стилизованная карта или инфографика доставки ]
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Отзывы на Wildberries и OZON</h3>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{ 768: { slidesPerView: 2.2 }}}
            className="pb-8"
          >
            {reviews.map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-900 border border-amber-500/10 p-6 rounded-2xl h-full">
                  <p className="text-gray-200 italic mb-4">«{r.text}»</p>
                  <span className="text-amber-400 text-sm font-semibold">{r.author}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;