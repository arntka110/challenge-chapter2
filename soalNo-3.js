const getAngkaTerbesarKedua = (personName) => {
  if (Array.isArray(personName)) {
    // Looping index
    for (let i = 0; i < personName.length; i++) {
      // Looping perbandingan data
      for (let j = 0; j < personName.length - i - 1; j++) {
        // Sort array secara ascending menggunakan algoritma Bubble Sort
        if (personName[j] > personName[j + 1]) {
          // Tukar elemen jika elemen ke-j lebih besar dari elemen ke-(j+1)
          let temp = personName[j];
          personName[j] = personName[j + 1];
          personName[j + 1] = temp;
        }
      }
    }
    // Return angka terbesar kedua
    return personName[personName.length - 2];
  } else if (typeof personName !== "number") {
    return "ERROR: Parameter is null";
  } else {
    return "Error: Invalid data type";
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
