export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Top Right Hoop/Concentric Circles (Gold) */}
      <svg
        className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] text-gold opacity-[0.09]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10" />
        <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="250" cy="250" r="40" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Bottom Left Hoop/Concentric Circles (Forest Green) */}
      <svg
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[750px] md:h-[750px] text-forest opacity-[0.07]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="290" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 14" />
        <circle cx="300" cy="300" r="240" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
        <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
        <circle cx="300" cy="300" r="40" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Elegant Wavy Thread Line 1 (Gold) */}
      <svg
        className="absolute left-[-5%] top-[5%] w-[110%] h-[90%] text-gold opacity-[0.08]"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -50,150 C 300,50 500,450 800,250 C 1100,50 1300,650 1500,350"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M -50,170 C 280,80 480,480 780,280 C 1080,80 1280,680 1480,380"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Elegant Wavy Thread Line 2 (Forest Green) */}
      <svg
        className="absolute left-[-5%] top-[20%] w-[110%] h-[80%] text-forest opacity-[0.06]"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -50,550 C 250,650 650,250 950,450 C 1250,650 1350,150 1500,250"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M -50,530 C 270,630 670,230 970,430 C 1270,630 1370,130 1520,230"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Decorative vertical lines on sides (Loom thread grid style) */}
      <div className="absolute left-[4%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent"></div>
      <div className="absolute right-[4%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent"></div>
      <div className="absolute left-[12%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-forest/5 to-transparent hidden md:block"></div>
      <div className="absolute right-[12%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-forest/5 to-transparent hidden md:block"></div>
    </div>
  );
}
