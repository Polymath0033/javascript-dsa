// const binarySearch = (arr, elem) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   // return arr[middle] === elem ? middle : -1;
// //   if (arr[middle] === elem) {
// //     return elem;
// //   } else {
// //     return -1;
// //   }
// };

// console.log(binarySearch([1, 4, 5, 0, 8], 1));
// const findLargestString = (str, pattern) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < pattern.length; j++) {
//       if (pattern[j] !== str[i + j]) {
//         console.log("Break");
//         break;
//       }
//       if (j === pattern.length - 1) {
//         console.log("FOUND");
//         counter++;
//       }
//     }
//   }
//   return counter;
// };
// console.log(findLargestString("Hellowar world war", "war"));
var addTwoNumbers = function (l1, l2) {
  let l1_back = "";
  let l2_back = "";
  for (let i = 0; i < l1.length; i++) {
    l1_back += l1[i];
  }
  for (let i = 0; i < l2.length; i++) {
    l2_back += l2[i];
  }
  let sum = Number(l1_back) + Number(l2_back);
  console.log(
    sum
      .toLocaleString()
      .split("")
      .reverse()
      .map((k) => Number(k))
  );
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);
