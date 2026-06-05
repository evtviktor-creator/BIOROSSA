// src/components/StickyContact.jsx
const StickyContact = () => {
  return (
    <div className="md:hidden fixed bottom-4 left-0 right-0 z-40 px-4">
      <div className="bg-gray-900/90 backdrop-blur-lg border border-amber-500/30 rounded-2xl p-3 flex justify-around items-center shadow-2xl">
        <a href="https://wa.me/79001234567" target="_blank" className="flex flex-col items-center text-green-400">
          <span className="text-xl">💬</span>
          <span className="text-xs">WhatsApp</span>
        </a>
        <a href="https://t.me/biorosa_bot" target="_blank" className="flex flex-col items-center text-blue-400">
          <span className="text-xl">✈️</span>
          <span className="text-xs">Telegram</span>
        </a>
        <a href="https://max.ru/..." target="_blank" className="flex flex-col items-center text-purple-400">
          <span className="text-xl">📞</span>
          <span className="text-xs">MAX</span>
        </a>
      </div>
    </div>
  );
};

export default StickyContact;