import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, Palette, Package, Globe, Gift, Zap } from 'lucide-react';
import { ABOUT_MAIN_IMAGE } from '../assets/images';

const PRODUCTS = [
  { img: 'https://images.unsplash.com/photo-1583845112203-29329902332e?w=600&q=80', name: 'Embroidered Towels', desc: 'Hotel-grade bath linen for hospitality & retail importers.', tag: 'Export Ready' },
  { img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', name: 'Bedsheets & Linen', desc: 'Intricate border designs on bed linen for home textile buyers.', tag: 'Bulk Available' },
  { img: '/embroidered_floral_gold.jpg', name: 'Fashion Fabric', desc: 'Pakistani motifs & custom patterns on fashion fabric.', tag: 'Custom Design' },
  { img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80', name: 'Table & Kitchen Linen', desc: 'Runners, placemats & napkins for European décor buyers.', tag: 'Home Decor' },
  { img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4b8f?w=600&q=80', name: 'Corporate Logos', desc: 'Precision logo embroidery on uniforms, caps & corporate gifts.', tag: 'OEM Service' },
  { img: '/embroidered_neckline_gold.jpg', name: 'Bridal & Formal Wear', desc: 'Intricate bridal embroidery for South Asian diaspora markets.', tag: 'Premium Tier' },
];

const EDGE_FEATURES = [
  { Icon: Coins, title: 'Factory-Direct Pricing', desc: 'No middlemen — better price, faster decisions.' },
  { Icon: Palette, title: 'Custom Designs', desc: 'Send artwork or logo; we digitize and produce it.' },
  { Icon: Package, title: 'Low MOQ', desc: 'Minimum 50 units — ideal for trial orders.' },
  { Icon: Globe, title: 'Export Experience', desc: 'We handle documentation for international delivery.' },
  { Icon: Gift, title: 'Free Samples', desc: 'Serious buyers get samples before bulk commitment.' },
  { Icon: Zap, title: 'Fast Turnaround', desc: '15–20 day production with progress updates.' },
];

export default function Home() {
  return (
    <div>
      {/* ════════════════════════════════════════════════════════════════
          HERO — Mobile: stacked (text → image → stats bar)
                 Desktop: side-by-side with floating stats on image
         ════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative flex flex-col md:grid md:grid-cols-2 bg-warm min-h-screen">

        {/* ── Text panel ── */}
        <div className="relative z-10 bg-warm flex flex-col justify-center px-6 pt-20 pb-8 md:pt-36 md:pb-24 md:pl-20 md:pr-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-3 md:mb-5">
            <span className="block w-8 h-px bg-gold flex-shrink-0"></span>
            Est. in Lahore, Pakistan
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-forest mb-2 md:mb-3">
            Where Craft Meets <br />
            <em className="italic text-gold">Global Standards</em>
          </h1>
          
          <p className="font-serif text-base md:text-xl font-light text-gold mb-3 md:mb-5 leading-relaxed italic">
            The Name of Excellence
          </p>
          
          <p className="text-sm text-muted leading-relaxed max-w-[420px] mb-6 md:mb-8">
            Premium Embroidery Manufacturer &amp; Exporter. We transform fine textiles into embroidered masterpieces — from bath towels and bedsheets to fashion fabric and corporate apparel. Trusted across 10+ countries.
          </p>
          
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Request a Sample
            </Link>
            <Link
              to="/products"
              className="btn-gold-outline"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* ── Image panel — mobile: visible block below text; desktop: right column ── */}
        <div className="relative w-full flex-grow min-h-[300px] md:min-h-screen overflow-hidden">
          {/* The embroidery image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/hero_embroidery_detail.png')" }}
          ></div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-ink text-white z-20 border-b border-gold/10">
        {[
          { num: '50+', label: 'Machines' },
          { num: '10+', label: 'Countries' },
          { num: 'MOQ 50', label: 'Min Order' },
          { num: '24hr', label: 'Quote' },
        ].map((s, i) => (
          <div 
            key={i} 
            className="py-6 md:py-8 text-center border-r border-b border-white/10 md:border-b-0 last:border-r-0 last:border-b-0"
          >
            <span className="font-serif text-2xl md:text-4xl font-light text-gold-light block">{s.num}</span>
            <span className="text-[10px] md:text-xs tracking-wider uppercase text-white/60 mt-1 block">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════════
          MARQUEE
         ════════════════════════════════════════════════════════════════ */}
      <div className="marquee-wrapper py-3">
        <div className="flex gap-10 animate-marquee w-max">
          {[
            'Embroidered Towels', 'Bedsheets & Linen', 'Fashion Fabric', 'Corporate Logos',
            'Custom Patches', 'Bridal Embroidery', 'Table Runners', 'Bulk Export Orders', 'Free Samples Available',
            'Embroidered Towels', 'Bedsheets & Linen', 'Fashion Fabric', 'Corporate Logos',
            'Custom Patches', 'Bridal Embroidery', 'Table Runners', 'Bulk Export Orders', 'Free Samples Available',
          ].map((text, i) => (
            <span
              key={i}
              className="text-[10px] tracking-widest uppercase text-white/60 whitespace-nowrap flex items-center gap-6 after:content-['✦'] after:text-gold after:text-[8px]"
            >{text}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          ABOUT SNIPPET — image left, text right
         ════════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-parchment overflow-hidden">
        {/* Image */}
        <div className="relative overflow-hidden h-[260px] md:h-auto md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${ABOUT_MAIN_IMAGE}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-parchment/100 hidden md:block"></div>
        </div>

        {/* Text */}
        <div className="p-6 md:p-16 flex flex-col justify-center">
          <div className="section-label">Our Story</div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
            Crafted in Lahore,<br />
            <em className="italic text-gold">Delivered Worldwide</em>
          </h2>
          <p className="text-sm text-muted leading-relaxed mt-4 mb-3">
            Vintex Traders is a Lahore-based embroidery manufacturing unit with years of hands-on
            experience producing premium embroidered textiles for local and international markets.
          </p>
          <p className="text-sm text-muted leading-relaxed mb-6">
            Our strength lies in combining traditional Pakistani craftsmanship with modern machine
            precision — delivering embroidery export-ready for buyers across the USA, Europe, and the Middle East.
          </p>
          
          {/* 2×2 stat grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { num: '50+', label: 'Embroidery Machines' },
              { num: 'USA #1', label: 'Primary Export Market' },
              { num: '15–20', label: 'Days Turnaround' },
              { num: 'MOQ 50', label: 'Low Minimum Order' },
            ].map((h, i) => (
              <div key={i} className="border-l-2 border-gold pl-4">
                <strong className="block font-serif text-2xl text-forest font-light">{h.num}</strong>
                <span className="text-xs text-muted">{h.label}</span>
              </div>
            ))}
          </div>

          <div className="self-start">
            <Link
              to="/about"
              className="btn-gold-outline"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          PRODUCT GRID — 2 col on mobile, 3 col on desktop
         ════════════════════════════════════════════════════════════════ */}
      <div className="px-4 py-12 md:px-20 md:py-24">
        <div className="flex justify-between items-end flex-wrap gap-3 mb-2">
          <div>
            <div className="section-label">What We Make</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
              Our Product <em>Range</em>
            </h2>
          </div>
          <div>
            <Link
              to="/products"
              className="btn-gold-outline"
            >
              View All
            </Link>
          </div>
        </div>

        {/* 2-column on mobile, 3-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8">
          {PRODUCTS.map((card, i) => (
            <div
              key={i}
              className="bg-parchment overflow-hidden border border-gold/15 rounded-md transition-colors duration-150 flex flex-col hover:border-forest/30"
            >
              {/* Image */}
              <div className="aspect-square md:aspect-[4/3] overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.img}')` }}
                ></div>
              </div>
              {/* Body */}
              <div className="p-3 md:p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="font-serif text-[13px] md:text-[17px] text-forest mb-1 font-medium leading-snug">{card.name}</h4>
                  <p className="text-[11px] md:text-xs text-muted leading-relaxed hidden sm:block">{card.desc}</p>
                </div>
                <span className="inline-block mt-2 text-[8px] md:text-[9px] tracking-widest uppercase text-gold border border-gold px-1.5 py-0.5 self-start">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          WHY BUYERS CHOOSE — text + 2×3 feature cards
          Mobile: text above, 2-col feature cards below
          Desktop: side by side
         ════════════════════════════════════════════════════════════════ */}
      <div className="bg-forest bg-forest-textured px-6 py-12 md:p-20 text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div>
            <div className="section-label light">Our Edge</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-cream leading-tight">
              Why Buyers Choose<br />
              <em className="italic text-gold-light">Vintex</em>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mt-4 mb-8 md:mb-10">
              We are not just a manufacturer — we are a growth partner for international importers
              who need quality, reliability, and flexibility.
            </p>
            <div className="inline-block">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
                className="btn-gold-outline light"
              >
                Start a Conversation
              </button>
            </div>
          </div>

          {/* 2-col feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {EDGE_FEATURES.map(({ Icon, title, desc }, i) => (
              <div 
                key={i} 
                className="p-4 md:p-6 bg-ink/40 border border-gold/15 rounded-md transition-colors duration-150 hover:bg-ink/60"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-gold-light mb-2 md:mb-3" strokeWidth={1.5} />
                <h4 className="font-serif text-sm md:text-base text-gold-light mb-1">{title}</h4>
                <p className="text-[11px] md:text-xs text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          CTA BANNER
         ════════════════════════════════════════════════════════════════ */}
      <div className="px-6 py-14 md:py-24 text-center bg-parchment border-t border-b border-gold/10">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
          Ready to Place an Order?
        </h2>
        <p className="text-sm text-muted leading-relaxed max-w-[520px] mx-auto mt-4 mb-8">
          Contact us today — we respond within 24 hours. Free samples for serious buyers.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Send an Enquiry
          </Link>
          <a
            href="https://wa.me/923278666254?text=Hello%2C+I+am+interested+in+your+embroidery+products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}
