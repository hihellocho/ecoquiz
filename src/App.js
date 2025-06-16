import "./App.scss";
import { useState } from "react";
import ecoData from "./data/ecoData.js";
import Category from "./Component/Category.js";
import QuizPage from "./Component/QuizPage.js";
import Result from "./Component/Result.js";

const App = () => {
  const [categories, setCategories] = useState("");
  const [filterQuiz, setFilterQuiz] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleRestart = () => {
    setCategories("");
    setFinished(false);
  };

  const onSelectCategory = (select) => {
    setCategories(select);
    const quizArr = ecoData.quizzes.filter((data) => {
      return data.category === select;
    });
    setFilterQuiz(quizArr);
  };

  const handleFinish = (score) => {
    setFinished(true);
    setScore(score);
  };

  return (
    <div className="app">
      {!categories && (
        <Category 
        cardData={ecoData.categories}
        onSelected={onSelectCategory} />
      )}
      {categories && !finished && (
        <QuizPage
          quiz={filterQuiz} onFinished={handleFinish} appScore={score}
        />
      )}
      {finished &&
      <Result
      appScore={score} onRestart={handleRestart} />}
    </div>
  );
};

export default App;
