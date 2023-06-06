// const sameFrequency = (num1, num2) => {
//   let str1 = String(num1);
//   let str2 = String(num2);
//   if (str1.length !== str2.length) return false;
//   const lookup = {};
//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let letter = str2[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] = -1;
//     }
//   }
//   return true;
// };

// const averagePair = (arr, target) => {
//   if (arr.length === 0) return false;
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let average = (arr[start] + arr[end]) / 2;
//     if (average === target) {
//       return true;
//     } else if (average > target) {
//       end--;
//     } else {
//       start++;
//     }
//   }
//   return false;
// };
// console.log(averagePair([1, 2, 3], 2.5));
// const isSubsequence=(str2,str2)=>{

// }
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }
// console.log(isSubsequence("sing", "sting"));

// function recursive_isSubsequence(str1, str2) {
//   if (str1.length === 0) return true;
//   if (str2.length === 0) return false;
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//   return isSubsequence(str1, str2.slice(1));
// }
const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    console.log(seen[start]);
    seen[char] = i + 1;
  }
  //   console.log(start);
  console.log(longest[seen]);
  return longest;
};
console.log(findLongestSubstring("hello"));
