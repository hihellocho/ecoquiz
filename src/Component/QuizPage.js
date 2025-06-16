import { useState } from "react";

const QuizPage = ({ quizzesData }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [ score, setScore ] = useState(0);
  // const handleNext=()=>{
  //   if(currentIdx+1 < quizzesData.length){
  //     setCurrentIdx(currentIdx+1);
  //   }else{
  //     onExit(true);
  //   }
  // }

  return (
    <div className="quizpage-container">
      <div className="quizpage-wrap">
        <p>1/5</p>
        <h1>환경상식 OX퀴즈</h1>
        <div className="quizbox-wrap">
          <h3>Q. {quizzesData[currentIdx].question}</h3>
          <div className="ox-box">
            <button>O</button>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
