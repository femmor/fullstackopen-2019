import React from "react";

const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <h4>Part 1: {part1}</h4>
      <p>Exercises: {exercises1}</p>
      <hr />

      <h4>Part 2: {part2}</h4>
      <p>Exercises: {exercises2}</p>
      <hr />

      <h4>Part 3: {part3}</h4>
      <p>Exercises: {exercises3}</p>
    </div>
  );
};

export default Content;
