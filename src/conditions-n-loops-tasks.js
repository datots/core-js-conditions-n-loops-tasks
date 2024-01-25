/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: qR, y: qC } = queen;
  const { x: kR, y: kC } = king;

  if (qR === kR) return true;

  if (qC === kC) return true;

  if (Math.abs(qR - kR) === Math.abs(qC - kC)) return true;

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && (a === b || b === c || c === a);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num < 1 || num > 39) {
    throw new Error(
      'Number out of range. Please enter a number between 1 and 39.'
    );
  }

  let result = '';
  let remaining = num;

  while (remaining > 0) {
    switch (true) {
      case remaining >= 10:
        result += 'X';
        remaining -= 10;
        break;
      case remaining >= 9:
        result += 'IX';
        remaining -= 9;
        break;
      case remaining >= 5:
        result += 'V';
        remaining -= 5;
        break;
      case remaining >= 4:
        result += 'IV';
        remaining -= 4;
        break;
      default:
        result += 'I';
        remaining -= 1;
        break;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus ';
        break;
      case '0':
        result += 'zero ';
        break;
      case '1':
        result += 'one ';
        break;
      case '2':
        result += 'two ';
        break;
      case '3':
        result += 'three ';
        break;
      case '4':
        result += 'four ';
        break;
      case '5':
        result += 'five ';
        break;
      case '6':
        result += 'six ';
        break;
      case '7':
        result += 'seven ';
        break;
      case '8':
        result += 'eight ';
        break;
      case '9':
        result += 'nine ';
        break;
      case '.':
        result += 'point ';
        break;
      case ',':
        result += 'point ';
        break;
      default:
        result += '';
        break;
    }
  }
  let newRes = '';
  for (let i = 0; i < result.length - 1; i += 1) {
    newRes += result[i];
  }

  return newRes;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const len = str.length;

  function getCharFromEnd(index) {
    return str[len - 1 - index];
  }

  for (let i = 0; i < Math.floor(len / 2); i += 1) {
    if (str[i] !== getCharFromEnd(i)) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  const newNum = `${num}`;

  for (let i = 0; i < newNum.length; i += 1) {
    if (+newNum[i] === digit) result = true;
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let result = -1;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    leftSum += arr[i];
    rightSum = 0;
    if (result > -1) break;
    for (let j = 0; j < arr.length - 1; j += 1) {
      rightSum += arr[arr.length - j - 1];

      if (leftSum === rightSum && i + 1 === arr.length - j - 2) {
        result = i + 1;
        break;
      }
    }
  }

  if (arr.length < 3) result = -1;
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  let writedNumSize = 0;
  let step = 0;
  let count = 1;
  for (let i = 0; i < size; i += 1) {
    const tempArr = [];
    for (let j = 0; j < size; j += 1) {
      tempArr[j] = 0;
    }
    result[i] = tempArr;
  }
  let x = 0;
  let y = 0;
  let lessRightSteps = 0;
  let lessDownSteps = 0;

  for (let i = 0; i < size * size; i += writedNumSize) {
    if (step >= 4) {
      step = 1;
    } else {
      step += 1;
    }

    if (step === 1) {
      writedNumSize = 0;
      y = lessRightSteps;
      for (let j = 0; j < size - lessRightSteps - lessDownSteps; j += 1) {
        x = j + lessRightSteps;
        result[y][x] = count;
        count += 1;
        writedNumSize += 1;
      }
      lessRightSteps += 1;
    }

    if (step === 2) {
      writedNumSize = 0;
      for (let j = 0; j < size - lessRightSteps - lessDownSteps; j += 1) {
        y = j + lessRightSteps;
        x = result[y].length - lessRightSteps;
        result[y][x] = count;
        count += 1;
        writedNumSize += 1;
      }
    }

    if (step === 3) {
      writedNumSize = 0;
      y = result.length - lessRightSteps;
      for (let j = 0; j < size - lessRightSteps - lessDownSteps; j += 1) {
        x = result[y].length - 1 - lessRightSteps - j;
        result[y][x] = count;
        count += 1;
        writedNumSize += 1;
      }
      lessDownSteps += 1;
    }

    if (step === 4) {
      writedNumSize = 0;
      x = lessRightSteps - 1;
      for (let j = 0; j < size - lessRightSteps - lessDownSteps; j += 1) {
        y = result.length - 1 - lessDownSteps - j;
        result[y][x] = count;
        count += 1;
        writedNumSize += 1;
      }
    }
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [...matrix[i]];
  }

  for (let i = 0; i < matrix.length; i += 1) {
    const el = matrix[i];
    for (let j = 0; j < el.length; j += 1) {
      result[j][matrix.length - 1 - i] = el[j];
    }
  }

  for (let i = 0; i < result.length; i += 1) {
    newMatrix[i] = [...result[i]];
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    const elem = newArr[i];
    let j = i - 1;
    while (j >= 0 && newArr[j] > elem) {
      newArr[j + 1] = newArr[j];
      j -= 1;
    }
    newArr[j + 1] = elem;
  }
  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str;
  let i = 0;
  let lessIterations = iterations % (str.length - 2);
  if (iterations > 100) {
    lessIterations *= 5;
  }
  while (i < lessIterations) {
    for (let j = 0; j < Math.round(newStr.length / 2); j += 1) {
      const currentElem = newStr[j + 1];
      newStr =
        newStr.substring(0, j + 1) + newStr.substring(j + 2, newStr.length);
      newStr += currentElem;
    }
    i += 1;
  }
  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numberStr = `${number}`;
  const newStr = [];
  let newArr = [];
  let finalStr = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    newStr.push(numberStr[i]);
  }
  for (let i = newStr.length - 1; i >= 0; i -= 1) {
    const changedElem = newStr[i - 1];

    if (newStr[i] > newStr[i - 1]) {
      newArr = newStr.splice(i).sort();

      for (let j = 0; j < newArr.length; j += 1) {
        if (newArr[j] > newStr[i - 1]) {
          newStr[i - 1] = newArr[j];
          newArr[j] = changedElem;
          break;
        }
      }
      newStr.splice(i);
      for (let k = 0; k < newArr.length; k += 1) {
        newStr.push(newArr.sort()[k]);
      }
    }
    finalStr = '';
    for (let o = 0; o < newStr.length; o += 1) {
      finalStr += newStr[o];
    }
    if (+finalStr > number) {
      break;
    }
  }

  return +finalStr;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
