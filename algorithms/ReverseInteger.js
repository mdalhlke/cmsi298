/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let strx = x.toString();
  let arr = strx.split('');
  let isNeg = false;

  if (arr[0] == '-') {
    isNeg = true;
    arr.shift();
  }

  if (arr.length > 1) {
    while (arr[arr.length - 1] == '0') {
      arr.pop();
    }
  }

  let res = arr.reverse().join('');

  if (res >= Math.pow(2, 31) - 1) {
    return 0;
  }

  if (isNeg) {
    return -1 * parseInt(res);
  } else {
    return parseInt(res);
  }
};
