import QuizCard from './QuizCard';

export default function QuizComplete() {
  return (
    <QuizCard>
      <div className="flex flex-col items-center justify-center text-center h-full">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/50 border-4 border-emerald-400/30 animate-pulse">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl text-white font-bold mb-3 tracking-tight">Quiz Completed!</h1>
          <p className="text-emerald-400 text-xl font-semibold mb-6">Congratulations! 🎉</p>
        </div>
        <div className="bg-slate-500/20 px-6 py-4 rounded-2xl border border-slate-500/30">
          <p className="text-slate-300 text-base leading-relaxed">
            You've successfully completed the Simple JS Quiz.
            <br />
            <span className="text-emerald-400 font-semibold">Great job!</span>
          </p>
        </div>
      </div>
    </QuizCard>
  );
}
