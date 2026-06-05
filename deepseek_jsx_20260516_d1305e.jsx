// src/components/QuizModal.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    question: 'Какая цель приёма БАД?',
    options: ['Кожа и волосы', 'Кости и суставы', 'Антистресс и сон', 'Сердце и сосуды', 'Общее оздоровление']
  }
];

const recommendationMap = {
  'Кожа и волосы': 0,     // коллаген
  'Кости и суставы': 1,  // D3K2
  'Антистресс и сон': 2, // магний B6
  'Сердце и сосуды': 4,  // тюлений жир
  'Общее оздоровление': 4
};

const QuizModal = ({ isOpen, onClose, products }) => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [recommended, setRecommended] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    const idx = recommendationMap[option];
    if (idx !== undefined) {
      setRecommended(products[idx]);
      setStep(1);
    }
  };

  const reset = () => {
    setStep(0);
    setSelected(null);
    setRecommended(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={reset}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-amber-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            {step === 0 && (
              <>
                <h3 className="text-3xl font-['Playfair_Display'] font-bold text-amber-400 mb-6">
                  {questions[0].question}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {questions[0].options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      className="text-left px-5 py-3 rounded-xl border border-gray-700 hover:border-amber-400 text-white transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 1 && recommended && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">Рекомендуем вам</h4>
                <img src={recommended.image} alt={recommended.name} className="h-32 mx-auto mb-4" />
                <p className="text-amber-400 text-xl font-semibold mb-2">{recommended.name}</p>
                <p className="text-gray-300 mb-6">{recommended.shortDesc}</p>
                <div className="flex gap-3 justify-center">
                  <a href={recommended.ozonLink} target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-lg">OZON</a>
                  <a href={recommended.wbLink} target="_blank" className="bg-fuchsia-600 text-white px-6 py-2 rounded-lg">WB</a>
                </div>
                <button onClick={reset} className="mt-6 text-amber-400 underline">Закрыть</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuizModal;