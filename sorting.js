// Bubble sort
//function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//Another optimized way
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//return arr;
//}

//with ES6
// const bubbleSort = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
//     }
//   }
//   return arr;
// };
//var data = Array.apply(null, { length: 10000 }).map(Function.call, Math.random);
//console.log(bubbleSort([29, 45, 37, 8]));
//console.log(bubbleSort(data));
/*Selection sort*/
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let minimum = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minimum]) minimum = j;
//     }
//     if (i !== minimum) {
//       console.log(i, minimum);
//       var temp = arr[i];
//       arr[i] = arr[minimum];
//       arr[minimum] = temp;
//     }
//   }
//   return arr;
// };
//console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

/* Insertion sort */
// const insertionSort = (arr) => {
//   for (var i = 1; i < arr.length; i++) {
//     var currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//     console.log(arr);
//   }
//   return arr;
// };
// insertionSort([2, 5, 9, 76, 4]);
// console.log(insertionSort([2, 1, 9, 76, 4]));

/* Time  Complexity Best*/
//bubble sort->O(n)
//selection sort->o(n)
//insertion sort->O(n**2)

/* Time  Complexity Average*/
//bubble sort->O(n**2)
//selection sort->o(n**2)
//insertion sort->O(n**2)

/* Time  Complexity Average*/
//bubble sort->O(n**2)
//selection sort->o(n**2)
//insertion sort->O(n**2)

/* Space Complexity */
//bubble sort->O(1)
//selection sort->o(1)
//insertion sort->O(1)

/* Merge Sort */
// const merge = (arr1, arr2) => {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// };
//console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(mergeSort([2, -1, 7, 5, 10]));

/* Merge sort */
//Time Complexity Best case->O(nlogn)
//Time complexity Average->O(nlogn)
//Time Complexity Worst ->O(nlogn)
//Space Complexity ->O(n)

/* Quick sort */
function pivoT(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
console.log(pivoT([0, 1, -1, 8, 90]));
