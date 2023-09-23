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
