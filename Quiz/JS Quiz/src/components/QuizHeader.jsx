export default function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl text-white font-bold mb-3 tracking-tight">Simple JS Quiz</h1>
      <div className="flex items-center">
        <div className="bg-emerald-500/20 px-4 py-1.5 rounded-full border border-emerald-500/30">
          <p className="text-emerald-400 text-sm font-semibold">
            Question {currentQuestion} of {totalQuestions}
          </p>
        </div>
      </div>
    </div>
  );
}
