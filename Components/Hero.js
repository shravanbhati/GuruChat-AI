export default function Hero({
  title = "Chat live with top tech gurus",
  subtitle = "AI-powered chat app to talk directly with coding gurus Hitesh Choudhary & Piyush Garg.",
}) {
  return (
    <header className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-100">
        {title}
      </h1>

      <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
        {subtitle}
      </p>
    </header>
  );
}
