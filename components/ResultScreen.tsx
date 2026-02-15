import React from 'react';
import { quizQuestions } from '../data';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart }) => {
  const percentage = (score / total) * 100;
  
  let grade = "";
  let message = "";
  let colorClass = "";

  if (score >= 40) {
    grade = "Excellent! ممتاز جداً! 🏆";
    message = "You have mastered this topic.";
    colorClass = "text-green-600";
  } else if (score >= 30) {
    grade = "Very Good! جيد جداً! 🌟";
    message = "Great job, you know your stuff.";
    colorClass = "text-blue-600";
  } else if (score >= 20) {
    grade = "Good! راجع بعض النقاط 📚";
    message = "You passed, but a little review would help.";
    colorClass = "text-yellow-600";
  } else {
    grade = "Needs Improvement يحتاج مراجعة شاملة 📖";
    message = "Don't give up! Review the material and try again.";
    colorClass = "text-red-600";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center animate-fade-in">
       <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Quiz Completed!</h2>
            
            <div className="mb-8">
                <div className="w-40 h-40 mx-auto rounded-full border-8 border-indigo-100 flex items-center justify-center bg-indigo-50">
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-indigo-600">{Math.round(percentage)}%</span>
                        <span className="text-sm text-indigo-400 font-medium">Score</span>
                    </div>
                </div>
            </div>

            <div className="mb-8 space-y-2">
                <h3 className={`text-2xl font-bold ${colorClass}`}>{grade}</h3>
                <p className="text-slate-500">{message}</p>
                <p className="text-slate-900 font-semibold mt-4 text-lg">
                    You scored {score} out of {total}
                </p>
            </div>

            <button
                onClick={onRestart}
                className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-1"
            >
                Restart Quiz 🔄
            </button>
       </div>
    </div>
  );
};

export default ResultScreen;
