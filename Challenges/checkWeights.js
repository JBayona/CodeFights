/*
You work for a company that makes weights that are used for balancing scales in high school science classes. The weights are shipped in boxes, and each box contains weights in a certain range. Each box is labeled with an array that represents the weights it contains. For example, a box of weights from 4 to 12is labeled [4, 12]. The company never ships the same weight twice in a shipment.

A high school that needs a new set of weights orders a package that consists of several boxes. Once in a while, something goes wrong and either one weight falls off the line, or one weight is accidentally added to one of the boxes. Your job is to check each package before it goes out, and detect if this is the case.

Given the labels of the boxes about to be shipped and the actual packageWeight, you should return:

0 if the provided actual packageWeight equals the package weight you would expect according to the label;
a if weight a was accidentally added to the package;
-a if weight a is missing from the package.
Example

For boxes = [[1, 2], [3, 4]] and packageWeight = 10, the output should be
checkWeights(boxes, packageWeight) = 0.

The total expected weight of the package is (1 + 2) + (3 + 4) = 10, which is equal to the packageWeight.

For boxes = [[1, 3], [8, 10]] and packageWeight = 35, the output should be
checkWeights(boxes, packageWeight) = 2.

The total expected weight of the package is (1 + 2 + 3) + (8 + 9 + 10) = 33, which means that a weight weighing 2 was accidentally added to the package.

For boxes = [[1, 2], [3, 4]] and packageWeight = 6, the output should be
checkWeights(boxes, packageWeight) = -4.

The total expected weight of the weights is (1 + 2) + (3 + 4) = 10, which means that weight 4 is missing from the package.

https://codefights.com/challenge/hWKhTrLciWip9D3qZ

*/

function checkWeights(boxes, packageWeight) {
  var result = 0;
  boxes.forEach((item) => {
      result += sumFromMinToMax(item[0], item[1]);
  });
  return packageWeight - result;
}

sumFromMinToMax = (min,max) => ((max-min+1)*(min+max))/2

boxes = [[95,177], 
 [288,381], 
 [482,499], 
 [517,683], 
 [775,805], 
 [865,948]];
packageWeight = 252410;
console.log(checkWeights(boxes, packageWeight));