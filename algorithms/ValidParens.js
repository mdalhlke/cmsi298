/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketMatch = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let sArr = s.split('');
  let openBracketArr = [];
  let valid = true;

  if (sArr.length % 2 !== 0) {
    return false;
  }

  sArr.some((c) => {
    if (c.search(/(\{|\(|\[)/) !== -1) {
      openBracketArr.push(bracketMatch[c]);
    } else if (openBracketArr.pop() !== c) {
      valid = false;
      return true;
    }
  });

  return valid && openBracketArr.length === 0;
};
