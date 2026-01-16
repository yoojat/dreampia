export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative w-full h-[180px] md:h-[220px] lg:h-[260px] overflow-hidden bg-[#003468]">
      {/* Collage background */}
      <div className="absolute inset-0 opacity-60">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1 h-full">
          {[
            "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
          ].map((src, idx) => (
            <div key={idx} className="relative">
              <img
                src={src}
                alt="hero background"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#003468]/80 via-[#002b57]/70 to-[#003468]/30"></div>

      {/* Center texts */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black drop-shadow-md tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-[#ffcc33] text-xs md:text-sm lg:text-base font-extrabold tracking-widest">
          {description}
        </p>
      </div>
    </section>
  );
}
