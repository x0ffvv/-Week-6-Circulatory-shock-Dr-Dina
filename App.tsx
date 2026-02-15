import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizGame from './components/QuizGame';
import ResultScreen from './components/ResultScreen';
import { QuizState } from './types';
import { quizQuestions } from './data';

function App() {
  const [gameState, setGameState] = useState<QuizState['gameStatus']>('start');
  const [finalScore, setFinalScore] = useState(0);

  const startQuiz = () => {
    setGameState('playing');
  };

  const finishQuiz = (score: number) => {
    setFinalScore(score);
    setGameState('finished');
  };

  const restartQuiz = () => {
    setGameState('start');
    setFinalScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col font-sans">
      {/* App Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <span className="text-2xl">🩺</span>
                <span className="font-bold text-slate-800 text-lg hidden sm:block">Physiology Quiz</span>
            </div>
            {gameState === 'playing' && (
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    Interactive Mode
                </span>
            )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center w-full">
        {gameState === 'start' && <StartScreen onStart={startQuiz} />}
        {gameState === 'playing' && <QuizGame onFinish={finishQuiz} />}
        {gameState === 'finished' && (
          <ResultScreen 
            score={finalScore} 
            total={quizQuestions.length} 
            onRestart={restartQuiz} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Circulatory Shock Quiz Module</p>
      </footer>
    </div>
  );
}

export default App;
