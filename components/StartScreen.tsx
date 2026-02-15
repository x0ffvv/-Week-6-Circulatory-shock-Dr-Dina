import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-100">
        <div className="mb-6">
            <span className="text-6xl">🧠</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Circulatory Shock Quiz
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Test your knowledge of circulatory shock physiology, types, symptoms, and compensatory mechanisms.
          <br/>
          <span className="font-semibold text-slate-700 block mt-2">
            Total Questions: 50 MCQs
          </span>
        </p>

        <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-500 mb-8">
                <span className="px-3 py-1 bg-slate-100 rounded-full">Physiology</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">Medical</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">Exam Prep</span>
            </div>

            <button
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-indigo-500/30 text-lg"
            >
            Start Quiz
            </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
