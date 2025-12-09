export default function QuizQuestion({ question }) {
  return (
    <div className="mb-6 bg-slate-500/20 p-5 rounded-2xl border border-slate-500/30">
      <p className="text-white text-lg font-semibold leading-relaxed">{question}</p>
    </div>
  );
}
