export default function QuizOptions({ options, selectedOption, onOptionClick }) {
  return (
    <div className="space-y-3 mb-6 flex-1">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onOptionClick(index)}
          className={`w-full py-3.5 px-5 rounded-xl text-white text-left font-semibold transition-all duration-300 transform hover:scale-[1.01] border-2 ${
            selectedOption === index 
              ? 'bg-emerald-500 border-emerald-400 shadow-xl shadow-emerald-500/40 ring-4 ring-emerald-400/30' 
              : 'bg-slate-500/60 border-slate-400/30 hover:bg-slate-500 hover:border-slate-400/50 shadow-lg hover:shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-base">{option}</span>
            {selectedOption === index && (
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
