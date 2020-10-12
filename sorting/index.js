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
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swapNumbers(arr, i, minIndex)
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  } else {
    let midpoint = Math.floor(arr.length / 2)
    let left = arr.slice(0, midpoint)
    let right = arr.slice(midpoint, arr.length)

    return merge(mergeSort(left), mergeSort(right))
  }
}

function merge(left, right) {
  let mergedArray = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift())
    } else {
      mergedArray.push(right.shift())
    }
  }

  return [...mergedArray, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
