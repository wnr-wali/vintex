import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/70 px-6 py-12 md:px-20 md:py-20 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent before:opacity-30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-12 pb-14 border-b border-white/5">

        {/* Brand & WhatsApp */}
        <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
          <img src="/logo-white.png" alt="Vintex Traders" className="h-38 md:h-48 w-auto object-contain self-start animate-fade-in" />
          <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
            The Name of Excellence — Premium embroidery craftsmanship from Lahore to the world.
          </p>
          <a
            href="https://wa.me/923278666254?text=Hello%2C+I+am+interested+in+your+embroidery+products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#25d366] hover:bg-[#1da851] border-[#25d366] hover:border-[#1da851] self-start inline-flex items-center gap-2"
          >
            {/* SVG WhatsApp Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-5 col-span-1">
          <h5 className="text-xs uppercase font-semibold tracking-[0.25em] text-gold">Navigation</h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><Link to="/" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">About Us</Link></li>
            <li><Link to="/products" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Products</Link></li>
            <li><Link to="/gallery" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Gallery</Link></li>
            <li><Link to="/contact" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-5 col-span-1">
          <h5 className="text-xs uppercase font-semibold tracking-[0.25em] text-gold">Products</h5>
          <ul className="flex flex-col gap-2.5 list-none">
            <li><Link to="/products" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Embroidered Towels</Link></li>
            <li><Link to="/products" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Bedsheets &amp; Linen</Link></li>
            <li><Link to="/products" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Fashion Fabric</Link></li>
            <li><Link to="/products" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Corporate Logos</Link></li>
            <li><Link to="/products" className="text-sm text-white/50 hover:text-gold-light transition-colors duration-200">Bridal &amp; Formal</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
          <h5 className="text-xs uppercase font-semibold tracking-[0.25em] text-gold">Contact</h5>
          <ul className="flex flex-col gap-2.5 list-none text-sm text-white/50">
            <li>
              <a href="mailto:waleedneem133@gmail.com" className="hover:text-gold-light transition-colors duration-200">
                waleedneem133@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923278666254" className="hover:text-gold-light transition-colors duration-200">
                +92-327-8666254
              </a>
            </li>
            <li>Lahore, Punjab, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-7 text-xs text-white/30 gap-2">
        <p>&#169; 2025 Vintex Traders &#183; Lahore, Pakistan</p>
        <p>vintextraders.site</p>
      </div>
    </footer>
  );
}
