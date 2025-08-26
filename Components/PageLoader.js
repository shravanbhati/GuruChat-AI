export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#6b28ff]/30 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-[#6b28ff] border-r-[#00d1b2] border-b-[#ff6bcb] border-l-[#6b9bff] rounded-full animate-pulse"></div>
        </div>
        <div className="mt-6 flex space-x-1">
          <div className="w-2 h-2 bg-[#6b28ff] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#00d1b2] rounded-full animate-bounce delay-150"></div>
          <div className="w-2 h-2 bg-[#ff6bcb] rounded-full animate-bounce delay-300"></div>
        </div>
        <p className="mt-4 text-slate-400 text-sm font-medium tracking-wider">
          LOADING
        </p>
      </div>
    </div>
  );
}
