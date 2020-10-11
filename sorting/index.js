// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function swapNumbers (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j-1] > arr[j]) {
        swapNumbers(arr, j-1, j)
      }
    }
  }

  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
