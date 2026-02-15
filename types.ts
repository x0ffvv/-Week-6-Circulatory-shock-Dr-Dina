export interface Question {
  id: number;
  section: string;
  question: string;
  options: string[];
  correctAnswerIndex: number; // 0-3 corresponding to A-D
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: (number | null)[]; // Index of selected answer for each question
  isFinished: boolean;
  gameStatus: 'start' | 'playing' | 'finished';
}
