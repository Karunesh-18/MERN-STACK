export default function QuizNavigation({ onNext }) {
  return (
    <div className="flex justify-between items-center pt-5 border-t border-slate-500/30">
      <div className="text-slate-400 text-sm font-medium">
        Select an answer to continue
      </div>
      <button
        onClick={onNext}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 border-2 border-emerald-400/30"
      >
        Next →
      </button>
    </div>
  );
}
