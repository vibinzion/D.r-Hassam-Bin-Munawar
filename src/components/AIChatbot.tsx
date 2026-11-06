import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  HeartPulse,
  X,
  Send,
  Bot,
  MessageCircle,
  ChevronDown,
  RefreshCw,
  User,
} from 'lucide-react';
import { clinicConfig } from '../data/clinicConfig';
import { useClinic } from '../context/ClinicContext';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_WELCOME: ChatMessage = {
  role: 'assistant',
  content:
    `Welcome! 👋 I am **Dr. Hassam Clinic AI Assistant**.\n\nI can answer your questions regarding:\n• 🕒 Clinic timings (4:00 PM – 10:00 PM)\n• 📍 Sahiwal clinic location & directions\n• 🎁 20% discount on labs, medicines & consultations\n• 🩸 Free Thalassemia blood transfusion & Sunday welfare camp\n• 🩺 Diabetes management & Anemia treatments\n\nHow may I assist you today?`,
};

const SUGGESTION_CHIPS = [
  '🕒 Clinic Timings',
  '📍 Sahiwal Address',
  '🎁 20% Discount Voucher',
  '🩸 Free Thalassemia Care',
  '🩺 Diabetes Checkup',
  '📅 Book Appointment',
];

/**
 * Robust Client-Side Clinical Fallback (100% Clean English)
 */
function getClientFallback(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('salam') || q.includes('slam') || q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return 'Welcome to Dr. Hassam Bin Munawar\'s Medical Clinic! 👋 How can I assist you with clinical timings, diabetes management, anemia testing, or scheduling an appointment?';
  }

  if (q.includes('timing') || q.includes('time') || q.includes('hour') || q.includes('kab') || q.includes('waqt') || q.includes('open') || q.includes('schedule')) {
    return '🕒 **Clinic Operating Hours:**\n• Monday to Saturday: 4:00 PM to 10:00 PM\n• Sunday: By Appointment & Free Welfare Camp\n\n📍 Alfarid Blood Bank Centre, Old Chungi, DHQ Road, Sahiwal.\n📞 WhatsApp: 0333-6922404';
  }

  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('kahan') || q.includes('kidhar') || q.includes('map') || q.includes('directions')) {
    return `📍 **Clinic Location:**\nAlfarid Blood Bank & Thalassemia Centre, Old Chungi, DHQ Road, Near Wamiq Hospital, Sahiwal.\n\nGoogle Maps Link: ${clinicConfig.GOOGLE_MAPS_URL}\n🕐 Timings: 4:00 PM – 10:00 PM (Mon-Sat)\n📞 0333-6922404 / 0303-7528713`;
  }

  if (q.includes('discount') || q.includes('off') || q.includes('offer') || q.includes('riayat') || q.includes('voucher') || q.includes('20%')) {
    return '🎉 **20% Clinic Care Discount (Promo Code: HASSAM20):**\nWe offer a flat 20% discount on:\n1. Consultations with Dr. Hassam Bin Munawar\n2. Prescribed Pharmacy Medicines\n3. All Diagnostic Laboratory Blood Tests\n\nContact 0333-6922404 to claim this voucher!';
  }

  if (q.includes('thalassemia') || q.includes('talasemia') || q.includes('transfusion') || q.includes('blood')) {
    return '❤️ **Free Thalassemia Care Program:**\nDr. Hassam and Alfarid Blood Bank provide 100% FREE screened blood transfusions, clinical monitoring, and supportive care for Thalassemia warriors.\n\nPlease call or WhatsApp 0333-6922404 for patient registration.';
  }

  if (q.includes('sunday') || q.includes('welfare') || q.includes('free') || q.includes('camp') || q.includes('deserving')) {
    return '🤝 **Sunday Free Welfare Medical Camp:**\nEvery Sunday, we host a dedicated free medical camp for deserving and underprivileged patients with complimentary doctor consultations, vital checks, and essential pharmaceuticals.';
  }

  if (q.includes('diabetes') || q.includes('sugar') || q.includes('insulin') || q.includes('hba1c') || q.includes('glucose')) {
    return '🩺 **Comprehensive Diabetes Care Center:**\nDr. Hassam Bin Munawar is a Consultant Diabetologist diagnosing and managing Type 1, Type 2, Gestational, Type 5, and secondary diabetes with targeted organ preservation protocols for eyes, kidneys, heart, nerves, and feet.';
  }

  if (q.includes('anemia') || q.includes('hb') || q.includes('fatigue') || q.includes('hemoglobin') || q.includes('weakness')) {
    return '🩸 **Anemia & Low Hemoglobin Hub:**\nIf you suffer from chronic fatigue, pale skin, shortness of breath, or dizziness, your hemoglobin levels may be low. We offer full CBC and serum ferritin testing (with a 20% discount) and individualized iron/vitamin therapy.';
  }

  if (q.includes('appointment') || q.includes('book') || q.includes('slot') || q.includes('fee') || q.includes('charges')) {
    return '📅 **Book an Appointment:**\nYou can book instantly via WhatsApp on 0333-6922404 or use our interactive booking form on this webpage. We look forward to providing you with dedicated clinical care!';
  }

  return 'Thank you for reaching out to Dr. Hassam Bin Munawar\'s Clinic! 🙏\nFor direct assistance, our clinical reception is available via WhatsApp or Call at 0333-6922404 or 0303-7528713.\n\n📍 Alfarid Blood Bank Centre, DHQ Road, Sahiwal\n🕐 4:00 PM – 10:00 PM (Mon-Sat)\n\n"Every Patient Matters — Excellence in Diagnosis, Compassion in Care."';
}

const AIChatbot: React.FC = () => {
  const { openWhatsApp } = useClinic();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (textToSend: string) => {
      const trimmed = textToSend.trim();
      if (!trimmed || isLoading) return;

      const userMsg: ChatMessage = { role: 'user', content: trimmed };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setInput('');
      setIsLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: trimmed,
            history: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) {
          throw new Error(`API responded with ${res.status}`);
        }

        const data = await res.json();
        const reply = data.reply || getClientFallback(trimmed);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } catch {
        // Smooth client-side fallback
        const fallbackReply = getClientFallback(trimmed);
        setMessages((prev) => [...prev, { role: 'assistant', content: fallbackReply }]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleWhatsAppEscalation = () => {
    const lastUserQuery = [...messages].reverse().find((m) => m.role === 'user')?.content || 'Inquiry from Website';
    const msg = `Dear Dr. Hassam Bin Munawar,\nI was inquiring with your Clinic AI Assistant regarding:\n"${lastUserQuery}"\n\nPlease assist me further. Thank you!`;
    openWhatsApp(msg);
  };

  return (
    <>
      {/* ================= Chat Panel ================= */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-50
          w-[360px] sm:w-[400px] h-[550px] max-h-[85vh]
          rounded-3xl shadow-2xl border border-slate-200 bg-white overflow-hidden
          flex flex-col transition-all duration-300 origin-bottom-right
          ${
            isOpen
              ? 'scale-100 opacity-100 pointer-events-auto'
              : 'scale-90 opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Header */}
        <div className="bg-[#0F2942] text-white p-4 flex items-center justify-between shadow-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-teal-700/80 backdrop-blur-md flex items-center justify-center text-white border border-teal-500/30">
                <HeartPulse className="w-6 h-6 animate-pulse text-amber-300" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0F2942]" />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                <span>{clinicConfig.AI_ASSISTANT_NAME}</span>
              </h3>
              <p className="text-[11px] text-teal-200 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Online &bull; 24/7 Clinical Support Assistant</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setMessages([INITIAL_WELCOME])}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[82%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-xs ${
                  msg.role === 'user'
                    ? 'bg-teal-700 text-white rounded-tr-xs'
                    : 'bg-white text-[#0F2942] border border-slate-200 rounded-tl-xs'
                }`}
              >
                {msg.content}
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-xs flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-teal-700 animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 rounded-full bg-teal-700 animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-teal-700 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 bg-white border-t border-slate-200 overflow-x-auto flex gap-1.5 scrollbar-none">
          {SUGGESTION_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => sendMessage(chip)}
              className="text-[11px] whitespace-nowrap bg-slate-100 text-slate-700 border border-slate-200 rounded-full px-2.5 py-1 font-semibold hover:bg-teal-700 hover:text-white transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Bottom Input & WhatsApp Transition */}
        <div className="p-3 bg-white border-t border-slate-200 space-y-2">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a clinical or appointment question..."
              disabled={isLoading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2942] placeholder:text-slate-400 focus:outline-none focus:border-teal-700 focus:bg-white focus:ring-2 focus:ring-teal-700/20 transition-all"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              className="bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span>Powered by Gemini AI</span>
            <button
              onClick={handleWhatsAppEscalation}
              className="text-teal-700 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <MessageCircle className="w-3 h-3" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* ================= Floating Pulse Avatar Launcher Button ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="hidden sm:flex bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl px-3.5 py-2 shadow-xl items-center gap-2 animate-bounce [animation-duration:3s]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-[#0F2942]">
              Dr. Hassam AI Receptionist
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-700 to-[#0F2942] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white ring-4 ring-teal-700/20"
          aria-label={isOpen ? 'Close AI chat' : 'Open AI Clinic Assistant'}
        >
          <span className="absolute -inset-1 rounded-2xl bg-teal-600 opacity-30 group-hover:opacity-60 blur-sm animate-pulse transition-opacity" />

          {isOpen ? (
            <ChevronDown className="w-7 h-7 relative z-10" />
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <HeartPulse className="w-7 h-7 animate-pulse text-amber-300" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default AIChatbot;
