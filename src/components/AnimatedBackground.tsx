const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-soft animate-gradient" />

      {/* Soft floating blobs - very low opacity */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle, hsl(24 100% 75% / 0.4), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle, hsl(210 90% 75% / 0.4), transparent 70%)", animationDelay: "5s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-3xl opacity-25 animate-blob"
        style={{ background: "radial-gradient(circle, hsl(28 100% 80% / 0.4), transparent 70%)", animationDelay: "10s" }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-25 animate-wave"
        style={{ background: "radial-gradient(circle, hsl(210 100% 80% / 0.35), transparent 70%)" }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
