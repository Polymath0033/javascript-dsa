 // console.log(res);
  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (res < -1 * Math.pow(2, 31)) {
    return -1 * Math.pow(2, 31);
  } else {
    return res;
  }