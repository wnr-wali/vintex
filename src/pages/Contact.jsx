import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Gift, Send, ChevronDown } from 'lucide-react';

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border border-gold/15 bg-parchment rounded-md transition-all duration-300 overflow-hidden hover:border-forest/25"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 bg-transparent border-none outline-none cursor-pointer"
        type="button"
      >
        <span className="font-serif text-sm md:text-base text-forest font-semibold leading-snug">{q}</span>
        <ChevronDown 
          className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          strokeWidth={2}
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[250px] border-t border-gold/10 py-4 px-5 opacity-100 bg-warm/50' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-[11px] md:text-xs text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    productInterest: '',
    quantity: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', company: '', email: '', country: '', productInterest: '', quantity: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const faqs = [
    { q: 'What is the minimum order quantity?', a: 'Our MOQ starts at 50 units for most product categories. For trial orders, we are flexible — contact us to discuss your specific needs.' },
    { q: 'Can I request a sample before bulk order?', a: 'Yes. We offer free product samples to serious buyers. You only pay for shipping. We encourage samples before bulk commitments.' },
    { q: 'What is the production lead time?', a: 'Standard lead time is 15–20 working days after design approval and advance payment. Rush orders can be discussed.' },
    { q: 'Can you work from our custom design?', a: 'Absolutely. Send us your artwork, logo, or design concept. We digitize it in-house and show you a preview before production.' },
    { q: 'Which countries do you ship to?', a: 'We ship worldwide — USA, UK, Europe, Middle East, and beyond. We assist with export documentation and packaging.' },
    { q: 'What payment methods do you accept?', a: 'We accept T/T (bank transfer) and Western Union. Payment terms: 30% advance, 70% before shipment. Negotiable for long-term partners.' },
  ];

  const contactRows = [
    { Icon: MapPin, text: 'Lahore, Punjab, Pakistan', href: null },
    { Icon: Mail, text: 'waleedneem133@gmail.com', href: 'mailto:waleedneem133@gmail.com' },
    { Icon: Phone, text: '+92-327-8666254', href: 'tel:+923278666254' },
    { Icon: Clock, text: 'Response within 24 hours · Mon–Sat', href: null },
    { Icon: Gift, text: 'Free samples available for serious buyers', href: null },
  ];

  const inputClass = 'border border-gold/25 bg-white p-3 text-sm text-ink outline-none focus:border-forest transition-colors rounded-md w-full';

  return (
    <div>
      {/* ─── Page Hero ──────────────────────────────────────────────── */}
      <div
        className="min-h-[220px] md:min-h-[40vh] flex flex-col justify-end px-6 pt-24 pb-8 md:px-20 md:pt-36 md:pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a4d2e 0%, #0a1a10 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #c8a84b 0, #c8a84b 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        ></div>
        <div className="section-label light relative">Work With Us</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight relative">
          Get a <em>Quote</em>
        </h1>
        <p className="text-white/60 text-xs md:text-base mt-2 md:mt-4 max-w-[500px] leading-relaxed relative">
          Tell us your requirements and we will respond within 24 hours with pricing and availability.
        </p>
      </div>

      {/* ─── Main Split Section ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[70vh] overflow-hidden">
        
        {/* Form Column (First on mobile for high conversion) */}
        <div className="bg-cream px-5 py-8 md:px-16 md:py-20 flex flex-col justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-r border-gold/10">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-forest mb-1">Send an Enquiry</h3>
          <p className="text-xs md:text-sm text-muted mb-6 md:mb-8">Fill in the form and we will get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Your Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd." className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Country</label>
                  <select name="country" value={formData.country} onChange={handleChange} className={inputClass}>
                    <option value="">Select Country</option>
                    {['United States','United Kingdom','Germany','France','Italy','UAE','Saudi Arabia','Other'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Product Interest</label>
                <select name="productInterest" value={formData.productInterest} onChange={handleChange} className={inputClass}>
                  <option value="">Select Category</option>
                  {['Embroidered Towels & Bath Linen','Bedsheets & Pillow Covers','Fashion Fabric Embroidery','Table Runners & Kitchen Linen','Corporate Logo Embroidery','Bridal & Formal Wear','Multiple / Custom'].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Estimated Quantity</label>
                <select name="quantity" value={formData.quantity} onChange={handleChange} className={inputClass}>
                  <option value="">Select Range</option>
                  {['50–200 units (Trial Order)','200–500 units','500–1000 units','1000+ units (Bulk)'].map(q => <option key={q} value={q}>{q}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[9px] md:text-[10px] tracking-widest uppercase text-muted font-bold">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements — design ideas, fabric preferences, timeline, or anything else..."
                  required
                  className={`${inputClass} min-h-[90px] md:min-h-[110px] resize-y`}
                ></textarea>
              </div>
            </div>

            <div className="self-start mt-1">
              <button
                type="submit"
                className="btn-primary hover:bg-moss flex items-center gap-2 border-none"
              >
                <span>Send Enquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {isSubmitted && (
              <p className="text-forest text-sm font-semibold mt-2">
                Thank you! We will reply within 24 hours.
              </p>
            )}
          </form>
        </div>

        {/* Info Column (Second on mobile, stays left on desktop) */}
        <div className="bg-forest bg-forest-textured px-5 py-8 md:px-16 md:py-24 flex flex-col justify-center text-white order-2 lg:order-1">
          <div className="section-label light">Reach Us</div>
          <h2 className="font-serif text-2xl md:text-4xl font-light text-cream leading-tight mb-3">
            Let's Build Something<br /><em>Together</em>
          </h2>
          <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-6 md:mb-10 max-w-[480px]">
            We welcome inquiries from importers, wholesalers, brands, and fashion designers worldwide.
            Whether you need a price quote, a sample, or just want to explore what we can produce — we are here.
          </p>

          <div className="flex flex-col gap-4 md:gap-5">
            {contactRows.map(({ Icon, text, href }, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-light rounded-md flex-shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>
                {href ? (
                  <a href={href} className="text-xs md:text-sm text-gold-light hover:underline">{text}</a>
                ) : (
                  <span className="text-xs md:text-sm text-white/75">{text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="self-start mt-8 md:mt-10">
            <a
              href="https://wa.me/923278666254?text=Hello%2C+I+am+interested+in+your+embroidery+products.+Please+share+more+details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#25d366] hover:bg-[#1da851] text-white border-[#25d366] hover:border-[#1da851] flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ────────────────────────────────────────────── */}
      <section className="px-5 py-10 md:px-20 md:py-24 overflow-hidden">
        <div className="text-center max-w-[580px] mx-auto mb-8 md:mb-12">
          <div className="section-label centered">Common Questions</div>
          <h2 className="font-serif text-2xl md:text-4xl font-light text-forest leading-tight">
            Frequently Asked <em>Questions</em>
          </h2>
        </div>

        {/* 1 col stack on mobile, 2 col grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
