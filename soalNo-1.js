function changeWord(selectedText, changedText, text) {
  // Menggunakan metode replace() untuk mencari dan mengganti kata pada selectedText dan changedText
  let newText = text.replace(selectedText, changedText);
  return newText;
}

// Contoh kalimat
let text1 = "Saya tidak suka belajar Frontend JavaScript";
let text2 = "Saya suka belajar Backend JavaScript";

// Output
console.log(changeWord("tidak suka", "suka", text1));
console.log(changeWord("suka", "tidak suka", text2));
