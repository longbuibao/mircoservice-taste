const palindrome = (str) => {
  const strToArray = str.split('');
  if (isPalin(strToArray)) return 'palindrome';
  for (let i = 0; i < strToArray.length; i++) {
    const removedAnElement = strToArray.slice(0, i).concat(strToArray.slice(i + 1));
    if (isPalin(removedAnElement)) return strToArray[i];
  }
  for (let i = 0; i < strToArray.length; i++) {
    const removedAnElement = strToArray.slice(0, i).concat(strToArray.slice(i + 1));
    for (let j = i; j < removedAnElement.length; j++) {
      const removedTwoElement = removedAnElement.slice(0, j).concat(removedAnElement.slice(j + 1));
      if (isPalin(removedTwoElement)) return strToArray[i] + removedAnElement[j];
    }
  }
  return 'not possible';
};
const isPalin = (str) => {
  return str.join('') === [...str].reverse().join('');
};
console.log(palindrome('abjchba'));
