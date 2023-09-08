const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  } else if (typeof givenNumber === "undefined") {
    return "Error: Bro where is the parameter?";
  } else {
    return "Error: Invalid data type";
  }
};

// Output
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
