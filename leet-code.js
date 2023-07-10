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
  return sum
    .toLocaleString()
    .split("")
    .reverse()
    .map((k) => Number(k));
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);
