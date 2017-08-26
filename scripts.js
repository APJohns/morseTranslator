const text = document.getElementById('text');
const morse = document.getElementById('morse');

const morseLib = {
  'A' : '.-',
  'B' : '-...',
  'C' : '-.-.',
  'D' : '-..',
  'E' : '.',
  'F' : '..-.',
  'G' : '--.',
  'H' : '....',
  'I' : '..',
  'J' : '.---',
  'K' : '-.-',
  'L' : '.-..',
  'M' : '--',
  'N' : '-.',
  'O' : '---',
  'P' : '.--.',
  'Q' : '--.-',
  'R' : '.-.',
  'S' : '...',
  'T' : '-',
  'U' : '..-',
  'V' : '...-',
  'W' : '.--',
  'X' : '-..-',
  'Y' : '-.--',
  'Z' : '--..',
  '1' : '.----',
  '2' : '..---',
  '3' : '...--',
  '4' : '....-',
  '5' : '.....',
  '6' : '-....',
  '7' : '--...',
  '8' : '---..',
  '9' : '----.',
  '0' : '-----'
}

text.addEventListener('input', () => {
  let output = '';
  for (let i = 0; i < text.value.length; i++) {
    if (text.value.charAt(i) == ' ') {
      output += '   ';
    } else {
      input = text.value.charAt(i).toUpperCase();
      output += morseLib[input] + " ";
    }
  }
  morse.value = output;
  console.log(output);
})