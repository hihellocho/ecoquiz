const Category = ({ cardData, onSelected }) => {
  return (
    <div className="container">
      <div className="main-wrap">
        <div className="main">
          <p>환경관련 상식퀴즈</p>
          <h1>OX</h1>
          <h2>Quiz</h2>
          <div className="category-wrap">
            {cardData.map((item, idx) => {
              return <button key={idx} onClick={()=>{onSelected(item)}}>{item}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
