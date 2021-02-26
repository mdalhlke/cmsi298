//VERY NAIVE APPROACH

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sArr = s.split('');
  let tArr = t.split('');

  if (sArr.length !== tArr.length) {
    return false;
  }

  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr.length; j++) {
      if (sArr[i] === tArr[j]) {
        tArr.splice(j, 1);
        break;
      }
    }
  }

  return tArr.length === 0;
};

//BETTER APPROCH USING SORTING

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sArr = s.split('').sort().join('');
  let tArr = t.split('').sort().join('');

  return sArr === tArr;
};
