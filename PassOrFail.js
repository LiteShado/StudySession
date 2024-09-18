let pass;
function hasPassingGrade(score) {
  if (score < 60) {
    pass = false;
  } else {
    pass = true;
  }

  return pass;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));