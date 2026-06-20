import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { UNIT_MAIN_IMAGE } from '../assets/images';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import StitchBackground from '../components/StitchBackground';
import StaggerItem from '../components/StaggerItem';
import { staggerContainer } from '../lib/motion';

const GALLERY_ITEMS = [
  { img: UNIT_MAIN_IMAGE, caption: 'Embroidery Unit — Lahore' },
  { img: '/embroidered_floral_green.jpg', caption: 'Fashion Fabric' },
  { img: '/embroidered_floral_gold.jpg', caption: 'Detailed Embroidery' },
  { img: 'https://images.unsplash.com/photo-1600369671236-cba8e219e5d8?w=700&q=80', caption: 'Bath Linen' },
  { img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80', caption: 'Bedsheets' },
  { img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80', caption: 'Table Linen' },
  { img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4b8f?w=600&q=80', caption: 'Corporate Logos' },
  { img: '/embroidered_neckline_gold.jpg', caption: 'Bridal Wear' },
  { img: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?w=600&q=80', caption: 'Thread Detail' },
];

function Tile({ item, idx, onOpen, className = '', style = {} }) {
  return (
    <StaggerItem
      className={`relative overflow-hidden cursor-pointer group rounded-md border border-gold/15 transition-colors duration-150 hover:border-forest/35 ${className}`}
      style={style}
      onClick={() => onOpen(idx)}
    >
      <div
        className="gal-bg"
        style={{ backgroundImage: `url('${item.img}')` }}
      ></div>
      <span className="absolute bottom-3 left-3 text-[9px] md:text-[10px] tracking-[0.14em] uppercase text-white/90 bg-ink/65 px-2.5 py-1 rounded-sm backdrop-blur-[4px] z-10 group-hover:bg-forest/80 transition-colors duration-150">
        {item.caption}
      </span>
    </StaggerItem>
  );
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (idx) => { setActiveIndex(idx); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setActiveIndex(null); document.body.style.overflow = ''; };
  const nextImage = (e) => { e.stopPropagation(); setActiveIndex((p) => (p + 1) % GALLERY_ITEMS.length); };
  const prevImage = (e) => { e.stopPropagation(); setActiveIndex((p) => (p - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length); };

  return (
    <div>
      {/* ═══ Page Hero ═══════════════════════════════════════════════════ */}
      <div
        className="min-h-[40vh] md:min-h-[45vh] flex flex-col justify-end px-6 pt-28 pb-10 md:px-20 md:pt-36 md:pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a4d2e 0%, #0a1a10 100%)' }}
      >
        <StitchBackground />
        <div className="section-label light relative">Our Craft</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight relative">
          Embroidery <em>Gallery</em>
        </h1>
        <p className="text-white/60 text-sm md:text-base mt-3 max-w-[500px] leading-relaxed relative">
          A look inside our production facility and the products we create for international buyers.
        </p>
      </div>

      {/* ═══ Gallery Grid ════════════════════════════════════════════════ */}
      <section className="px-4 py-12 md:px-20 md:py-24 overflow-hidden">
        <Reveal className="max-w-[580px] mb-8 md:mb-12">
          <div className="section-label">Visual Showcase</div>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-forest leading-tight">
            Our Work, <em>Up Close</em>
          </h2>
          <p className="text-sm text-muted leading-relaxed mt-3">
            Click any image to open the full lightbox. Contact us to receive physical samples.
          </p>
        </Reveal>

        {/* ══════════════════════════════════════════════
            MOBILE GALLERY: Simple 2-col uniform grid
            ══════════════════════════════════════════════ */}
        <Reveal variant={staggerContainer(0.06)} className="md:hidden grid grid-cols-2 gap-2">
          {/* First item spans full width as hero */}
          <Tile
            item={GALLERY_ITEMS[0]}
            idx={0}
            onOpen={openLightbox}
            className="col-span-2"
            style={{ height: '220px' }}
          />
          {/* Remaining items in 2-col */}
          {GALLERY_ITEMS.slice(1).map((item, i) => (
            <Tile
              key={i + 1}
              item={item}
              idx={i + 1}
              onOpen={openLightbox}
              style={{ height: '160px' }}
            />
          ))}
        </Reveal>

        {/* ══════════════════════════════════════════════
            DESKTOP GALLERY: Bento grid layout
            ══════════════════════════════════════════════ */}
        <Reveal variant={staggerContainer(0.05)} className="hidden md:block space-y-3">
          {/* Row 1 — Featured tile (spans 2 rows) + 2 stacked */}
          <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '320px 320px' }}>
            <Tile
              item={GALLERY_ITEMS[0]}
              idx={0}
              onOpen={openLightbox}
              className="row-span-2"
            />
            <Tile item={GALLERY_ITEMS[1]} idx={1} onOpen={openLightbox} />
            <Tile item={GALLERY_ITEMS[2]} idx={2} onOpen={openLightbox} />
          </div>

          {/* Row 2 — 3 equal tiles */}
          <div className="grid grid-cols-3 gap-3">
            {GALLERY_ITEMS.slice(3, 6).map((item, i) => (
              <Tile
                key={i + 3}
                item={item}
                idx={i + 3}
                onOpen={openLightbox}
                style={{ height: '240px' }}
              />
            ))}
          </div>

          {/* Row 3 — 3 equal tiles */}
          <div className="grid grid-cols-3 gap-3">
            {GALLERY_ITEMS.slice(6).map((item, i) => (
              <Tile
                key={i + 6}
                item={item}
                idx={i + 6}
                onOpen={openLightbox}
                style={{ height: '200px' }}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ Production Unit Showcase ════════════════════════════════════ */}
      <Reveal as="section" className="bg-forest bg-forest-textured py-12 md:py-16 px-6 md:px-20 text-white overflow-hidden border-t border-b border-gold/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div
              className="relative border border-gold/30 rounded-md overflow-hidden w-full"
              style={{ aspectRatio: '16/9' }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url('${UNIT_MAIN_IMAGE}')` }}
              ></div>
            </div>
            
            {/* 4-col stats */}
            <div className="grid grid-cols-4 gap-4 mt-4 md:mt-8">
              {[
                { value: 50, suffix: '+', label: 'Machines' },
                { value: 2, label: 'Lines' },
                { value: 500, suffix: 'k+', label: 'Meters/mo' },
                { value: 100, suffix: '%', label: 'QC Checked' },
              ].map((s, i) => (
                <div key={i} className="bg-ink/60 py-4 md:p-6 text-center border border-gold/15 rounded-md">
                  <CountUp value={s.value} suffix={s.suffix} className="font-serif text-xl md:text-3xl font-light text-gold-light block" />
                  <span className="text-[9px] md:text-[10px] tracking-wider uppercase text-white/50 mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="section-label light">Our Facility</div>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-cream mb-5 leading-tight">
              A Modern Industrial<br />Embroidery Unit
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-3">
              Our Lahore production facility houses 50+ state-of-the-art computerized embroidery machines
              running across two parallel production lines.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-3">
              Each machine delivers consistent stitch density, clean thread paths, and accurate color
              matching across bulk orders of any size.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-7">
              We maintain strict quality control at every stage — from design digitization through to
              final packaging and export documentation.
            </p>
            <div className="self-start">
              <Link
                to="/contact"
                className="btn-gold-outline light"
              >
                Request a Factory Tour
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ═══ Lightbox Modal ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] bg-ink/80 flex flex-col justify-center items-center p-4 md:p-8 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white transition-colors cursor-pointer z-10 liquid-glass-dark liquid-glass-rim rounded-full p-2 border-none"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-7 h-7 md:w-8 md:h-8" />
            </button>
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 transition-colors cursor-pointer z-10 liquid-glass-dark liquid-glass-rim rounded-full border-none"
              onClick={prevImage}
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 transition-colors cursor-pointer z-10 liquid-glass-dark liquid-glass-rim rounded-full border-none"
              onClick={nextImage}
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[activeIndex].img}
                alt={GALLERY_ITEMS[activeIndex].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-md shadow-2xl border border-white/10"
              />
              <p className="relative inline-block liquid-glass-dark liquid-glass-rim rounded-full px-5 py-2 text-cream font-serif text-sm md:text-base mt-4 tracking-wide text-center">
                {GALLERY_ITEMS[activeIndex].caption}
              </p>
              <span className="text-white/40 text-xs mt-1">
                {activeIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
