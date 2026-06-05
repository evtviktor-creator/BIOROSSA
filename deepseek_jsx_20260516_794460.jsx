// src/components/Footer.jsx
import { useState } from 'react';
import InputMask from 'react-input-mask';

const Footer = () => {
  const [messenger, setMessenger] = useState('whatsapp');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // отправка вопроса в выбранный мессенджер или на почту
    if (messenger === 'whatsapp') {
      window.open(`https://wa.me/79001234567?text=У меня вопрос`, '_blank');
    } else if (messenger === 'telegram') {
      window.open('https://t.me/biorosa_bot', '_blank');
    } else {
      window.open('https://max.ru/...', '_blank');
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-3xl font-['Playfair_Display'] font-bold text-amber-400 mb-4">Остались вопросы?</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputMask
              mask="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-amber-400 outline-none"
            />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setMessenger('whatsapp')}
                className={`px-5 py-2 rounded-lg border ${messenger === 'whatsapp' ? 'bg-green-600 border-green-400' : 'border-gray-600'} text-white`}
              >WhatsApp</button>
              <button
                type="button"
                onClick={() => setMessenger('telegram')}
                className={`px-5 py-2 rounded-lg border ${messenger === 'telegram' ? 'bg-blue-600 border-blue-400' : 'border-gray-600'} text-white`}
              >Telegram</button>
              <button
                type="button"
                onClick={() => setMessenger('max')}
                className={`px-5 py-2 rounded-lg border ${messenger === 'max' ? 'bg-purple-600 border-purple-400' : 'border-gray-600'} text-white`}
              >MAX</button>
            </div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition">
              Написать в {messenger}
            </button>
          </form>
        </div>
        <div className="text-gray-300 space-y-3">
          <p className="font-bold text-amber-400 text-xl">BIOROSSA®</p>
          <p>ИП Иванов И.И.</p>
          <p>г. Москва, ул. Примерная, д.10</p>
          <p>info@biorosa.ru</p>
          <p>ОГРНИП 123456789012</p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.ozon.ru/seller/biorosa/" target="_blank" className="bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold">OZON</a>
            <a href="https://ipsumvitamin.ru/?ysclid=moeib367l7287191372" target="_blank" className="bg-fuchsia-600 px-5 py-2 rounded-full text-sm font-semibold">Wildberries</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm border-t border-gray-800 pt-8">
        © 2026 BIOROSSA. Все права защищены. Не является лекарственным средством.
      </div>
    </footer>
  );
};

export default Footer;