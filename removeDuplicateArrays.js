const array = [1, 1, 2, 4]
  array.reduce((unique, item) => {
    if (unique.includes(item)) {
        return unique;
    }
  return [...unique, item];
  }, [])

console.log(array); // output 1,2,4;
