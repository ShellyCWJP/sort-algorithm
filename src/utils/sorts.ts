export const bubbleSort = (array: number[]) => {
  if (array.length <= 1) return array;

  let result = array;

  result.forEach((_, i) => {
    result.forEach((_, j) => {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    });
  });

  return result;
};

export const quickSort = (array: number[]) => {
  if (array.length <= 1) return array;

  const [pivot, ...rest] = array;
  const smallerOrEqual = rest.filter((n) => n <= pivot);
  const larger = rest.filter((n) => n > pivot);

  return [...quickSort(smallerOrEqual), pivot, ...quickSort(larger)];
};
