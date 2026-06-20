import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import StitchBackground from '../components/StitchBackground';
import StaggerItem from '../components/StaggerItem';
import { staggerContainer, cardLift } from '../lib/motion';

const PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1583845112203-29329902332e?w=700&q=80',
    tag: 'Export Ready',
    name: 'Embroidered Towels & Bath Linen',
    desc: 'Luxurious bath towels, hand towels, and bath mats with precision machine embroidery. Ideal for hotel-grade hospitality orders and retail home textile importers worldwide.',
    specs: [
      { key: 'Fabric', val: 'Cotton / Polyester' },
      { key: 'Min. Order', val: '50 pcs' },
      { key: 'Lead Time', val: '15–20 days' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
    tag: 'Bulk Available',
    name: 'Bedsheets & Pillow Covers',
    desc: 'Embroidered bedsheets, duvet covers, and pillow covers with intricate border and central motif designs for top-tier buyers.',
    specs: [
      { key: 'Fabric', val: 'Cotton / Satin Blends' },
      { key: 'Min. Order', val: '100 pcs' },
      { key: 'Lead Time', val: '18–22 days' },
    ],
  },
  {
    img: '/embroidered_floral_gold.jpg',
    tag: 'Custom Design',
    name: 'Fashion Fabric Embroidery',
    desc: 'Traditional Pakistani motifs, contemporary geometric patterns, and fully custom designs on fashion fabric for designers and brands.',
    specs: [
      { key: 'Fabric', val: 'Organza / Chiffon / Cotton' },
      { key: 'Min. Order', val: '50 yards' },
      { key: 'Lead Time', val: '12–18 days' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=700&q=80',
    tag: 'Home Decor',
    name: 'Table Runners & Kitchen Linen',
    desc: 'Embroidered table runners, placemats, napkins, and kitchen towels for European home décor importers and lifestyle brands.',
    specs: [
      { key: 'Fabric', val: 'Cotton / Linen Blends' },
      { key: 'Min. Order', val: '100 pcs' },
      { key: 'Lead Time', val: '15–20 days' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4b8f?w=700&q=80',
    tag: 'OEM Service',
    name: 'Corporate Logo Embroidery',
    desc: 'Precision logo embroidery on uniforms, polo shirts, caps, bags, and corporate gifting textiles for brands across the Gulf and Europe.',
    specs: [
      { key: 'Fabric', val: 'As per item' },
      { key: 'Min. Order', val: '100 pcs' },
      { key: 'Lead Time', val: '10–15 days' },
    ],
  },
  {
    img: '/embroidered_neckline_gold.jpg',
    tag: 'Premium Tier',
    name: 'Bridal & Formal Wear',
    desc: 'Intricate, multi-thread bridal embroidery for South Asian diaspora markets in UK, USA, and UAE with machine-grade consistency.',
    specs: [
      { key: 'Fabric', val: 'Organza / Silk' },
      { key: 'Min. Order', val: '50 pcs' },
      { key: 'Lead Time', val: '20–25 days' },
    ],
  },
];

export default function Products() {
  return (
    <div>
      {/* ═══ Page Hero ═══════════════════════════════════════════════════ */}
      <div
        className="min-h-[40vh] md:min-h-[45vh] flex flex-col justify-end px-6 pt-28 pb-10 md:px-20 md:pt-36 md:pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a4d2e 0%, #0a1a10 100%)' }}
      >
        <StitchBackground />
        <div className="section-label light relative">What We Make</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight relative">
          Our Product <em>Range</em>
        </h1>
        <p className="text-white/60 text-sm md:text-base mt-3 max-w-[500px] leading-relaxed relative">
          Six core categories — all customizable, all export-ready, all backed by our quality guarantee.
        </p>
      </div>

      {/* ═══ Catalogue ═══════════════════════════════════════════════════ */}
      <section className="px-4 py-12 md:px-20 md:py-24 overflow-hidden">
        <Reveal className="max-w-[650px] mb-10 md:mb-14">
          <div className="section-label">Full Catalogue</div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
            Embroidery for Every<br /><em>Market &amp; Need</em>
          </h2>
          <p className="text-sm text-muted leading-relaxed mt-3">
            All products are available in custom designs, colors, and sizes.
            Request a sample before placing bulk orders.
          </p>
        </Reveal>

        {/* ── Mobile: 2-col compact card grid ── */}
        <Reveal variant={staggerContainer(0.06)} className="grid grid-cols-2 gap-3 md:hidden">
          {PRODUCTS.map((p, idx) => (
            <StaggerItem
              key={idx}
              whileHover={cardLift}
              className="group bg-parchment overflow-hidden rounded-md border border-gold/15 shadow-sm transition-colors duration-300 flex flex-col hover:border-forest/20"
            >
              <div
                className="w-full aspect-square bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${p.img}')` }}
              ></div>
              <div className="p-3 flex flex-col flex-grow">
                <span className="text-[8px] tracking-[0.15em] uppercase text-gold border border-gold/60 px-1.5 py-0.5 inline-block mb-2 self-start">
                  {p.tag}
                </span>
                <h3 className="font-serif text-[13px] font-semibold text-forest leading-snug mb-1">
                  {p.name}
                </h3>
                {/* Show only 2 key specs on mobile */}
                <div className="mt-auto pt-2 border-t border-gold/15">
                  {p.specs.slice(0, 2).map((spec, si) => (
                    <div key={si} className="flex justify-between text-[10px] py-0.5">
                      <span className="text-muted">{spec.key}</span>
                      <span className="text-forest font-semibold">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Reveal>

        {/* ── Desktop: full side-by-side detail cards ── */}
        <Reveal variant={staggerContainer(0.08)} className="hidden md:grid grid-cols-1 gap-8">
          {PRODUCTS.map((p, idx) => (
            <StaggerItem
              key={idx}
              whileHover={cardLift}
              className="group grid grid-cols-2 bg-parchment overflow-hidden border border-gold/15 rounded-md shadow-sm transition-colors duration-300 hover:border-forest/20"
            >
              {/* Image */}
              <div
                className="min-h-[280px] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${p.img}')` }}
              ></div>
              {/* Body */}
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-gold border border-gold px-2 py-0.5 inline-block mb-4">
                    {p.tag}
                  </span>
                  <h3 className="font-serif text-xl font-light text-forest mb-3 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-5">{p.desc}</p>
                </div>
                <div className="border-t border-gold/20 pt-4 mt-auto">
                  {p.specs.map((spec, sidx) => (
                    <div
                      key={sidx}
                      className="flex justify-between text-[11px] py-1 border-b border-gold/10 last:border-b-0"
                    >
                      <span className="text-muted">{spec.key}</span>
                      <span className="text-forest font-semibold">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Reveal>
      </section>

      {/* ═══ Custom CTA ═══════════════════════════════════════════════════ */}
      <Reveal className="bg-forest bg-forest-textured py-14 md:py-16 px-6 md:px-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-cream mb-4">
          Can't Find What You Need? <em>We Do Custom.</em>
        </h2>
        <p className="text-white/60 text-sm max-w-[500px] mx-auto mb-8 leading-relaxed">
          Send us your design, fabric type, and quantity — we'll produce a quote within 24 hours.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            to="/contact"
            className="btn-primary bg-cream text-forest border-cream hover:bg-transparent hover:text-cream hover:border-cream"
          >
            Request a Custom Quote
          </Link>
          <a
            href="https://wa.me/923278666254?text=Hello%2C+I+need+a+custom+embroidery+quote."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline light"
          >
            WhatsApp Directly
          </a>
        </div>
      </Reveal>
    </div>
  );
}
