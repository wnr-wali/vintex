import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, MessageCircle, Mail, HelpCircle, Loader2 } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! Welcome to Vintex Traders. I am your AI assistant. How can I help you today?\n\nYou can ask about our MOQ, custom designs, free samples, and delivery timelines, or connect with Waleed directly.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle global event to open chat
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  const suggestionChips = [
    { label: '📦 MOQ & Pricing', query: 'moq' },
    { label: '🎨 Custom Designs', query: 'custom' },
    { label: '🎁 Free Samples', query: 'sample' },
    { label: '🚚 Delivery & Timeline', query: 'delivery' },
  ];

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (q.includes('moq') || q.includes('minimum') || q.includes('order') || q.includes('pricing') || q.includes('rate') || q.includes('price')) {
      return {
        sender: 'bot',
        text: "Our Minimum Order Quantity (MOQ) starts at just 50 units for towels and formal wear, and 100 units for bedsheets. We offer factory-direct pricing (no middlemen) to ensure competitive rates.\n\nWould you like a price quote for a specific quantity?",
        time,
        hasActions: true,
      };
    } else if (q.includes('custom') || q.includes('design') || q.includes('logo') || q.includes('motif') || q.includes('artwork')) {
      return {
        sender: 'bot',
        text: "Yes, we specialize in custom computerized embroidery! Send us your design/logo, and our digitizing team will prepare an embroidery proof. We embroider on towels, bedsheets, corporate wear, and fashion fabrics.\n\nYou can share your artwork files directly with Waleed on WhatsApp.",
        time,
        hasActions: true,
      };
    } else if (q.includes('sample') || q.includes('free') || q.includes('trial')) {
      return {
        sender: 'bot',
        text: "We offer free physical product samples (embroidered towels/fabric borders) to serious B2B buyers. You only pay for standard DHL/FedEx shipping. This lets you inspect our stitching density and fabric feel before bulk order commitments.",
        time,
        hasActions: true,
      };
    } else if (q.includes('delivery') || q.includes('shipping') || q.includes('ship') || q.includes('timeline') || q.includes('days') || q.includes('duration')) {
      return {
        sender: 'bot',
        text: "We ship worldwide (USA, UK, Europe, Middle East, etc.). Our standard production lead time is 15–20 days after design sign-off and deposit. We take care of all export documentation in Pakistan to ensure smooth clearance.",
        time,
        hasActions: true,
      };
    } else if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('salaam') || q.includes('start')) {
      return {
        sender: 'bot',
        text: "Hello! Always happy to help. Let me know if you want to know about our MOQ, samples, custom designs, or shipping, or click the WhatsApp handle to talk directly with Waleed.",
        time,
        hasActions: true,
      };
    } else if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('number') || q.includes('waleed') || q.includes('whatsapp') || q.includes('handle')) {
      return {
        sender: 'bot',
        text: "You can reach out directly using Waleed Neem's handles:\n\n💬 WhatsApp: +92-327-8666254\n✉️ Email: waleedneem133@gmail.com\n\nClick one of the quick contact buttons below to connect instantly!",
        time,
        hasActions: true,
      };
    }

    // Default fallback
    return {
      sender: 'bot',
      text: "I want to make sure you get the right information! I can answer basic details about our MOQ, customization, samples, and shipping. For orders, specific fabrics, or custom quotes, please message Waleed Directly.",
      time,
      hasActions: true,
    };
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newUserMessage = {
      sender: 'user',
      text: textToSend,
      time: userTime,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(textToSend);
      setMessages((prev) => [...prev, botResponse]);
    }, 1100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      {/* ─── Floating Launcher Button ──────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[999] pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-forest text-gold-light border-2 border-gold/45 rounded-full shadow-2xl flex items-center justify-center cursor-pointer relative focus:outline-none"
          aria-label="Toggle Assistant Chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-gold rounded-full border border-forest animate-ping"></span>
          )}
        </motion.button>
      </div>

      {/* ─── Chat Drawer Panel ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-24 right-4 md:right-6 w-[340px] md:w-[380px] h-[500px] bg-warm border border-gold/30 rounded-2xl shadow-2xl z-[998] flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-forest px-4 py-3 flex items-center justify-between border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink border border-gold/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img
                    src="/logo-white-v-badge.png"
                    alt="Vintex Traders Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="text-white text-xs tracking-wider uppercase font-semibold leading-none">Vintex Assistant</h4>
                  <span className="text-[10px] text-gold-light/85 mt-1 block">Online · B2B Support</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-3 scrollbar-hide bg-parchment/30">
              {messages.map((msg, index) => (
                <div key={index} className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start'}`}>
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-forest text-cream rounded-tr-none'
                        : 'bg-warm text-ink border border-gold/15 rounded-tl-none'
                    }`}
                  >
                    {msg.text}

                    {/* Quick Contact Redirect Buttons inside message bubble */}
                    {msg.hasActions && (
                      <div className="mt-4 pt-3 border-t border-gold/10 flex flex-col gap-2">
                        <a
                          href="https://wa.me/923278666254?text=Hello%2c%20I%20want%20to%20discuss%20an%20embroidery%20export%20order."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full bg-[#25d366] hover:bg-[#1da851] text-white border-none py-1.5 px-3 flex items-center justify-center gap-2 text-[10px] rounded-md font-bold"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp Waleed Directly</span>
                        </a>
                        <a
                          href="mailto:waleedneem133@gmail.com?subject=Enquiry%20via%20Vintex%20Assistant"
                          className="btn-gold-outline light w-full bg-forest text-gold-light border border-gold/25 hover:bg-forest/90 py-1.5 px-3 flex items-center justify-center gap-2 text-[10px] rounded-md"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send Email Inquiry</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-muted/65 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {/* Typing animation bubble */}
              {isTyping && (
                <div className="self-start flex flex-col max-w-[85%]">
                  <div className="p-3 bg-warm text-ink border border-gold/15 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-gold" />
                    <span className="text-[10px] text-muted font-medium">Vintex Assistant is writing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-4 py-2 bg-warm border-t border-gold/10 flex gap-2 overflow-x-auto scrollbar-hide shrink-0">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.label)}
                  className="bg-parchment hover:bg-gold/15 text-forest border border-gold/20 text-[10px] py-1 px-2.5 rounded-full flex-shrink-0 cursor-pointer transition-colors duration-150"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-warm border-t border-gold/15 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about MOQ, samples, shipping..."
                className="flex-grow border border-gold/25 bg-white p-2.5 text-xs text-ink outline-none focus:border-forest rounded-lg w-full transition-colors"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="w-8 h-8 bg-forest hover:bg-moss text-gold-light flex items-center justify-center rounded-lg border-none cursor-pointer flex-shrink-0 transition-colors"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
