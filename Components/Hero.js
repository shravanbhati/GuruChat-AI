export default function Hero({
  title = "Chat live with top tech gurus",
  subtitle = "AI-powered chat app to talk directly with coding gurus Hitesh Choudhary & Piyush Garg.",
}) {
  return (
    <header className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-100 px-4">
        {title}
      </h1>

      <p className="mt-3 sm:mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
        {subtitle}
      </p>
    </header>
  );
}
