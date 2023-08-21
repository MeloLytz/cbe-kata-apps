function zipStrings(strA, strB) {
  // Add you solution here

  let result = "";

  const maxLength = Math.max(strA.length, strB.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < strA.length) {
      result += strA[i];
    }
    if (i < strB.length) {
      result = result + strB[i];
    }
  }

  return result;
}

console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"

console.log(zipStrings("abc", "uvwxyz"));
