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

// Text to Morse
text.addEventListener('input', () => {
  let output = '';
  for (let i = 0; i < text.value.length; i++) {
    if (text.value.charAt(i) == ' ') {
      output += ' / ';
    } else {
      let input = text.value.charAt(i).toUpperCase();
      if (morseLib[input] != undefined) output += morseLib[input] + " ";
    }
  }
  morse.value = output;
});

// Morse to Text
morse.addEventListener('input', () => {
  let output = '';
  let char = '';

  for (let i = 0; i < morse.value.length; i++) {
    let current = morse.value.charAt(i);
    if (current == '/') {
      output += ' ';
      char = '';
    }
    else if (current == ' ') {
      let txt = Object.keys(morseLib).find(key => morseLib[key] == char);
      if (txt != undefined) output += txt;
      char = '';
    } else {
      char += current;
    }
  }
  text.value = output;
});