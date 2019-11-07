  const solutions = (A) => {
    let biValuedLength = 0;

    let getCurrentVal;
    let collections;
    for (let i = 0; i <= A.length; i++) {
      for (let j = i + 1; j <= A.length; j++) {
        getCurrentVal = A.slice(i, j);
        collections = [...new Set(getCurrentVal)];
        if (collections.length < 3) {
          if (getCurrentVal.length > biValuedLength) {
            biValuedLength = getCurrentVal.length;
          }
        }
      }
    }
    console.log(biValuedLength);
  };

  solutions([1, 2, 3, 2]);
