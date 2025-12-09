export default function QuizCard({ children }) {
  return (
    <div className="bg-slate-700 w-screen h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br from-slate-600 to-slate-700 w-[700px] h-[650px] rounded-3xl shadow-2xl p-10 flex flex-col border border-slate-500/30">
        {children}
      </div>
    </div>
  );
}
