import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Handshake, Lightbulb, Users, Factory, Eye } from 'lucide-react';
import { ABOUT_MAIN_IMAGE } from '../assets/images';

const VALUES = [
  { Icon: ShieldCheck, title: 'Quality First', desc: 'Every stitch is checked before it leaves our facility. No compromise on quality regardless of order size.' },
  { Icon: Handshake, title: 'Reliability', desc: 'We deliver on our commitments — on time, every time. Buyers trust our production timelines.' },
  { Icon: Lightbulb, title: 'Innovation', desc: 'We invest in modern machinery and stay current with global embroidery trends for consistent output.' },
  { Icon: Users, title: 'Partnership', desc: 'We offer flexible terms, low MOQs, and free samples to build long-term relationships.' },
  { Icon: Factory, title: 'Scale', desc: 'With 50+ machines we handle trial orders and scale to bulk production without delay.' },
  { Icon: Eye, title: 'Transparency', desc: 'Clear pricing, honest timelines, and open communication from inquiry to delivery.' },
];

const STEPS = [
  { num: '01', title: 'Share Requirements', desc: 'Tell us your product, quantity, design, and timeline via WhatsApp or email.' },
  { num: '02', title: 'Design & Quote', desc: 'We digitize your design and send a detailed price quote within 24–48 hours.' },
  { num: '03', title: 'Sample Approval', desc: 'A physical sample is produced and shipped to you for quality sign-off.' },
  { num: '04', title: 'Production', desc: 'Full-scale production with quality checks at every stage.' },
  { num: '05', title: 'Delivery', desc: 'Packed in export-grade cartons and shipped worldwide.' },
];

const MARKETS = [
  { code: 'US', name: 'United States', detail: 'Primary market · Home textiles & corporate' },
  { code: 'UK', name: 'United Kingdom', detail: 'Diaspora fashion & home décor' },
  { code: 'IT', name: 'Italy', detail: 'Fashion fabric & luxury linen' },
  { code: 'FR', name: 'France', detail: 'Fashion & home textile buyers' },
  { code: 'DE', name: 'Germany', detail: 'Wholesale & retail importers' },
  { code: 'AE', name: 'UAE', detail: 'Hospitality & corporate uniforms' },
  { code: 'SA', name: 'Saudi Arabia', detail: 'Formal wear & home textiles' },
  { code: 'GL', name: 'Global Shipping', detail: 'Open to new markets worldwide' },
];

export default function About() {
  return (
    <div>
      {/* ═══ Page Hero ═══════════════════════════════════════════════════ */}
      <div
        className="min-h-[40vh] md:min-h-[45vh] flex flex-col justify-end px-6 pt-28 pb-10 md:px-20 md:pt-36 md:pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a4d2e 0%, #0a1a10 100%)' }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#c8a84b 0,#c8a84b 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }}></div>
        <div className="section-label light relative">Who We Are</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight relative">Our <em>Story</em></h1>
        <p className="text-white/60 text-sm md:text-base mt-3 max-w-[500px] leading-relaxed relative">
          From a local embroidery unit in Lahore to a trusted international supplier.
        </p>
      </div>

      {/* ═══ Intro ══════════════════════════════════════════════════════ */}
      <section className="px-6 py-12 md:px-20 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute top-6 -left-3 w-[3px] h-[60%] bg-gold hidden md:block"></div>
            <div
              className="w-full h-[240px] md:h-auto md:aspect-[4/3] rounded-md bg-center bg-cover bg-no-repeat transition-all duration-500"
              style={{ backgroundImage: `url('${ABOUT_MAIN_IMAGE}')` }}
            ></div>
            <div
              className="hidden md:block absolute -bottom-8 -right-8 w-1/2 aspect-square bg-center bg-cover bg-no-repeat border-4 border-warm rounded-md shadow-xl"
              style={{ backgroundImage: "url('/embroidered_floral_gold.jpg')" }}
            ></div>
          </div>

          <div className="flex flex-col">
            <div className="section-label">Vintex Traders</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
              Craftsmanship That<br /><em>Speaks Globally</em>
            </h2>
            <div className="h-5"></div>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Vintex Traders is a Lahore-based embroidery manufacturing unit with years of hands-on
              experience in producing premium embroidered textiles for local and international buyers.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              What started as a vision to bring Pakistan's rich embroidery heritage to the global market
              has grown into a fully-equipped industrial operation — with over 50 computerized embroidery
              machines running in our modern production facility.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Our philosophy is simple: every order, whether 50 pieces or 5,000, gets the same
              dedication to quality, precision, and communication.
            </p>
            <div className="self-start">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Core Values — 2 col on MOBILE, 3 col on desktop ════════════ */}
      <section className="bg-parchment px-4 py-12 md:px-20 md:py-24">
        <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-10">
          <div className="section-label centered">What Drives Us</div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
            Our Core <em>Values</em>
          </h2>
        </div>
        
        {/* Always 2-col; 3-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-8">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-warm p-4 md:p-8 rounded-md border border-gold/15 transition-colors duration-150 hover:border-forest/20"
            >
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-gold mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-sm md:text-lg text-forest mb-1.5 font-medium leading-snug">{title}</h3>
              <p className="text-[11px] md:text-xs text-muted leading-relaxed hidden sm:block">{desc}</p>
              {/* On mobile, show a shorter version */}
              <p className="text-[11px] text-muted leading-relaxed sm:hidden line-clamp-3">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Process Steps — horizontal scroll on mobile ═══════════════ */}
      <section className="px-4 py-12 md:px-20 md:py-24 overflow-hidden">
        <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-10">
          <div className="section-label centered">How It Works</div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
            From Idea to <em>Delivery</em>
          </h2>
        </div>

        {/* Mobile: horizontal scrollable row; Desktop: 5-col grid with connector line */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent hidden md:block"></div>

          {/* Scrollable on mobile */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 md:gap-0 snap-x snap-mandatory scrollbar-hide">
            {STEPS.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[170px] md:w-auto snap-start md:snap-none p-3 md:p-4 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold flex items-center justify-center mx-auto mb-3 font-serif text-lg md:text-xl font-light text-forest bg-warm relative z-10 cursor-default transition-colors duration-150 hover:bg-forest hover:text-gold-light hover:border-forest">
                  {s.num}
                </div>
                <h4 className="font-serif text-xs md:text-sm text-forest mb-1 font-medium leading-snug">{s.title}</h4>
                <p className="text-[10px] md:text-[11px] text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <p className="text-center text-[10px] text-muted/60 mt-2 md:hidden tracking-wider uppercase animate-bounce">
            Swipe to see all steps
          </p>
        </div>
      </section>

      {/* ═══ Export Markets — 2×4 on mobile, 4 col on desktop ═══════════ */}
      <section className="bg-forest bg-forest-textured px-4 py-12 md:px-20 md:py-24 text-white overflow-hidden">
        <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-10">
          <div className="section-label light centered">Global Reach</div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream leading-tight">
            Our Export <em>Markets</em>
          </h2>
        </div>
        
        {/* 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MARKETS.map((m, i) => (
            <div
              key={i}
              className="bg-ink/50 p-5 md:p-8 text-center cursor-default rounded-md border border-gold/15 transition-all duration-150 hover:bg-ink/75 flex flex-col items-center"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/45 flex items-center justify-center font-serif text-xs font-semibold text-gold-light mb-3 bg-warm/5">
                {m.code}
              </div>
              <h4 className="font-serif text-xs md:text-sm text-gold-light mb-0.5 font-medium">{m.name}</h4>
              <p className="text-[9px] md:text-[10px] text-white/45 leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
