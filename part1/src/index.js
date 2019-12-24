import React from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = ({ course, part, exercises, totalExercises }) => {
  return (
    <div>
      <Header course={course} />
      <Content part={part} exercises={exercises} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
