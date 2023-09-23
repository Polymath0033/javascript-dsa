// var addTwoNumbers = function (l1, l2) {
//   let l1_back = "";
//   let l2_back = "";
//   for (let i = 0; i < l1.length; i++) {
//     l1_back += l1[i];
//   }
//   for (let i = 0; i < l2.length; i++) {
//     l2_back += l2[i];
//   }
//   let sum = Number(l1_back) + Number(l2_back);
//   return sum
//     .toLocaleString()
//     .split("")
//     .reverse()
//     .map((k) => Number(k));
// };
// addTwoNumbers([2, 4, 3], [5, 6, 4]);
// const searchRange = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
// };

// const reverse_ = (x) => {
//   let absoluteX = Math.abs(x).toString();
//   absoluteX = absoluteX.split("").reverse().join("");
//   return x > 0
//     ? absoluteX < Math.pow(2, 31) - 1
//       ? absoluteX
//       : 0
//     : -absoluteX > -Math.pow(2, 31)
//     ? -absoluteX
//     : 0;
// };
// console.log(reverse_(12490));

const myAtoi = (s) => {
  const trimString = s.trim();
  //return Math.abs(trimString);
  let stringWithoutLetter = trimString.replace(/[a-zA-Z]/g, "");
  let absoluteS = Math.abs(stringWithoutLetter).toString();
  // console.log(absoluteS);
  // let oput = "";
  // for (let i = 0; i < s.length; i++) {
  //   if (parseInt(s[i]) != NaN) {
  //     oput += s[i];
  //   }
  // }
  // console.log(oput);
  let res = parseInt(stringWithoutLetter) ? parseInt(stringWithoutLetter) : 0;
  console.log(res);
  // if (res > Math.pow(2, 31) - 1) {
  //   return Math.pow(2, 31) - 1;
  // } else if (res < -1 * Math.pow(2, 31)) {
  //   return -1 * Math.pow(2, 31);
  // } else {
  //   return res;
  // }
  return absoluteS > Math.pow(2, 31) - 1
    ? Math.pow(2, 31) - 1
    : stringWithoutLetter < -1 * Math.pow(2, 31)
    ? -1 * Math.pow(2, 31)
    : stringWithoutLetter;

  // return res > 0
  //   ? absoluteS < Math.pow(2, 31) - 1
  //     ? absoluteS
  //     : 0
  //   : -absoluteS > -Math.pow(2, 31)
  //   ? -absoluteS
  //   : 0;
};
console.log(myAtoi("words and 987"));
//console.log(Math.pow(2, 31));
