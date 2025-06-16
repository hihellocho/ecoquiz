const Result = ({appScore, onRestart}) => {
  return (
    <div className="result-container">
      <div className="result-wrap">
        <div className="txt">
          <p>퀴즈종료</p>
          <h1>최종점수: {appScore}점</h1>
          <p>★수고하셨습니다★</p>
        </div>
        <button onClick={()=>{onRestart()}}>처음으로</button>
      </div>
    </div>
  );
};

export default Result;
