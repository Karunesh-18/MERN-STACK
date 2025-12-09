import { useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import QuizHeader from './components/QuizHeader'
import QuizQuestion from './components/QuizQuestion'
import QuizOptions from './components/QuizOptions'
import QuizNavigation from './components/QuizNavigation'
import QuizComplete from './components/QuizComplete'
import { questions } from './data/questions'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextClick = () => {
    if (selectedOption === null) {
      alert("Please select an option!");
      return;
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return <QuizComplete />;
  }

  return (
    <QuizCard>
      <QuizHeader 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={questions.length} 
      />
      <QuizQuestion question={currentQuestion.text} />
      <QuizOptions 
        options={currentQuestion.options}
        selectedOption={selectedOption}
        onOptionClick={handleOptionClick}
      />
      <QuizNavigation onNext={handleNextClick} />
    </QuizCard>
  );
}

export default App
