// src/components/ModalForm.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import InputMask from 'react-input-mask';

const ModalForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Здесь должна быть реальная отправка на info@biorosa.ru
    // Пример через fetch к вашему бэкенду или EmailJS
    console.log('Отправляем:', { name, phone, email });
    setSubmitted(true);
    // В реальном проекте:
    // await fetch('/api/send-presentation', { method:'POST', body: JSON.stringify({name,phone,email}) });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-amber-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            {!submitted ? (
              <>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-amber-400 mb-4">
                  Получите прайс-лист и презентацию
                </h3>
                <p className="text-gray-300 mb-6">Оставьте контакты — мы отправим материалы на почту</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-amber-400 outline-none"
                  />
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-amber-400 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-amber-400 outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-colors"
                  >
                    Отправить
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Спасибо!</h3>
                <p className="text-gray-300">Материалы уже летят к вам на почту</p>
                <button onClick={onClose} className="mt-6 text-amber-400 underline">Закрыть</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;