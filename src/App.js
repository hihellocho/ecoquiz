import "./App.scss";
import { useState } from "react";
import Category from './Component/Category.js';
import QuizPage from "./Component/QuizPage.js";
import ecoData from "./data/ecoData.js";


const App = () => {
  const [categories, setCategories]=useState("");

  const onSelectCategory =(select)=>{
    setCategories(select);
  }

  return (
    <div className="app">
      {!categories &&(
      <Category
      cardData={ecoData.categories}
      onSelected={onSelectCategory}
      />
      )}
      {categories &&(
      <QuizPage quizzesData={categories.quizzes} />
      )}
    </div>
  );
};

export default App;