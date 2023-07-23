/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a: number[]): number[] {
  // Write your code here
  let nums = [];
  const n = a.length;
  for (let i = n - 1; i >= 0; i--) {
      nums.push(a[i]);
  }
  return nums;
}