const chunk = (array, size) => {
  let index = 0;
  const chunked = [];

  while (index < array.length) {
    const chunk = array.slice(index, index + size);

    chunked.push(chunk);

    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
