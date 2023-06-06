/* Native solution */
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr1.splice(correctIndex, 1);
  }
  return true;
};
console.log(same([1, 2, 3, 4], [8, 1, 9, 4]));

/*  Frequency Counter */
const f_same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return;
  let frequency_counter_1 = {};
  let frequency_counter_2 = {};
  for (let i of arr1) {
    frequency_counter_1[i] = (frequency_counter_1[i] || 0) + 1;
  }
  for (let i of arr2) {
    frequency_counter_2[i] = (frequency_counter_2[i] || 0) + 1;
  }
  for (let key in frequency_counter_1) {
    if (!(key ** 2 in frequency_counter_2)) {
      return false;
    }

    if (frequency_counter_2[key ** 2] !== frequency_counter_1[key]) {
      return false;
    }
  }
  console.log(frequency_counter_1, frequency_counter_2);
  return true;
};
console.log(f_same([1, 2, 3, 4], [16, 1, 9, 4]));

/* Challenge on Frequency Pattern */
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return;
  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? lookup[letter] + 1 : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};
console.log(anagram("ade", "dea"));
