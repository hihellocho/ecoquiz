import { useState } from "react";
 
const QuizPage = ({ quiz, onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [ score, setScore ] = useState(0);
  const currentQuiz = quiz[currentIdx];
  const handleClick =(item)=>{
    const result =(item === currentQuiz.correct) ? score+10 : score;
    if(currentIdx+1 < quiz.length){
      setCurrentIdx(currentIdx+1);
      setScore(result);
    }else{
      onFinished(result);
    }
  }

  return (
    <div className="quizpage-container">
      <div className="quizpage-wrap">
        <p>퀴즈({currentIdx+1}/{quiz.length})</p>
        <h1>환경상식 OX퀴즈</h1>
        <div className="quizbox-wrap">
          <h3>Q. {quiz[currentIdx].question}</h3>
          <div className="ox-box">
            <button onClick={()=>{handleClick("O")}}>O</button>
            <button onClick={()=>{handleClick("X")}}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
