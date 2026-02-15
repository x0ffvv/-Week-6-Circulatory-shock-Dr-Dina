import React, { useState } from 'react';
import { Question } from '../types';
import { quizQuestions } from '../data';

interface QuizGameProps {
  onFinish: (score: number, answers: (number | null)[]) => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentIndex];
  const progress = ((currentIndex) / quizQuestions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);

    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);

    if (index === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish(score, answers);
    }
  };

  const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-slate-600 text-sm font-medium">
        <div className="mb-2 sm:mb-0">
          <span className="px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200 text-indigo-600">
            {currentQuestion.section.split(':')[0]}
          </span>
        </div>
        <div className="flex items-center space-x-2">
            <span>Question {currentIndex + 1} of {quizQuestions.length}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8">
        <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 leading-snug">
            {currentQuestion.question}
            </h2>

            <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
                let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium text-lg flex items-center ";
                
                if (isAnswered) {
                    if (idx === currentQuestion.correctAnswerIndex) {
                        // Correct Answer
                        btnClass += "bg-green-50 border-green-500 text-green-800";
                    } else if (idx === selectedOption && idx !== currentQuestion.correctAnswerIndex) {
                        // Selected Wrong Answer
                        btnClass += "bg-red-50 border-red-500 text-red-800";
                    } else {
                        // Other Answers
                        btnClass += "bg-white border-slate-100 text-slate-400 opacity-60";
                    }
                } else {
                    // Default State
                    btnClass += "bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-slate-50";
                }

                return (
                    <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={isAnswered}
                        className={btnClass}
                    >
                        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 text-sm font-bold ${
                            isAnswered && idx === currentQuestion.correctAnswerIndex ? 'bg-green-200 text-green-800' :
                            isAnswered && idx === selectedOption ? 'bg-red-200 text-red-800' :
                            'bg-slate-100 text-slate-600'
                        }`}>
                            {String.fromCharCode(65 + idx)}
                        </span>
                        {option}
                    </button>
                );
            })}
            </div>
        </div>

        {/* Explanation Footer */}
        {isAnswered && (
            <div className={`p-6 border-t ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} animate-fade-in`}>
                <div className="flex items-start space-x-3">
                    <div className="text-2xl mt-1">
                        {isCorrect ? '✅' : '💡'}
                    </div>
                    <div className="flex-1">
                        <h3 className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                            {isCorrect ? 'Correct!' : 'Incorrect'}
                        </h3>
                        <p className="text-slate-700 text-base leading-relaxed" dir="auto">
                            {currentQuestion.explanation}
                        </p>
                    </div>
                </div>
                <div className="mt-6 text-right">
                    <button 
                        onClick={handleNext}
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition transform hover:-translate-y-1"
                    >
                        {currentIndex === quizQuestions.length - 1 ? "See Results" : "Next Question →"}
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
