let average;
let i;
let sum;

function getAverage(scores) {
   sum = 0;
   average = 0;
 for (i = 0; i < scores.length; i++) {
   sum += scores[i];
   average = sum / scores.length;
  }

 return average
}



console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]))