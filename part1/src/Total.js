import React from "react";

const Total = () => {
  const partOneExercises = 10;
  const partTwoExercises = 7;
  const partThreeExercises = 14;
  const totalExercises =
    partOneExercises + partTwoExercises + partThreeExercises;

  return (
    <div>
      <strong>Number of exercises</strong> = {totalExercises}
    </div>
  );
};

export default Total;
