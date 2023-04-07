const morseCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "/": " "
};

function decode() {
  const input = document.getElementById("input").value.trim();
  const words = input.split(" / ");
  let output = "";
  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split(" ");
    for (let j = 0; j < letters.length; j++) {
      const letter = morseCode[letters[j]];
      output += letter;
    }
    output += " ";
  }
  document.getElementById("output").textContent = output;
}
