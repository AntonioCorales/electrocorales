export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        stroke="currentColor"
        strokeWidth="43"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-[var(--color-secondary)] transition-transform hover:scale-110"
      >
        {/* Hexágono */}
        <path d="M 256 42.67 l 192 104.53 v 209.07 L 256 469.33 l -192 -104.53 V 147.2 z" />
        {/* Rayo minimalista */}
        <path d="M 277.33 128 l -106.67 149.33 h 85.33 l -21.33 106.67 l 106.67 -149.33 h -85.33 l 21.33 -106.67 z" fill="currentColor" stroke="none" />
      </svg>
      <div className="text-2xl font-bold tracking-tight" style={{ color: "var(--color-secondary)" }}>
        ELECTRO<span className="text-white">CORALES</span>
      </div>
    </div>
  );
}
