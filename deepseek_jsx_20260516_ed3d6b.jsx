// src/components/Reliability.jsx
import { motion } from 'framer-motion';

const Reliability = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Playfair_Display'] text-5xl font-bold text-amber-400 mb-12"
        >
          BIOROSSA® – ваш надёжный партнёр
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Собственное производство', desc: 'Завод на территории РФ, полный цикл изготовления' },
            { title: 'Свидетельство о гос. регистрации', desc: 'Продукция прошла экспертизу Роспотребнадзора' },
            { title: 'Товарный знак BIOROSSA®', desc: 'В процессе регистрации. Защита от подделок' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gray-900 rounded-3xl p-8 border border-amber-500/20"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-amber-400/10 rounded-full flex items-center justify-center text-2xl">🔒</div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reliability;