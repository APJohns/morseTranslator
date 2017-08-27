'use strict';

var text = document.getElementById('text');
var morse = document.getElementById('morse');

var morseLib = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----'

  // Text to Morse
};text.addEventListener('input', function () {
  var output = '';
  for (var i = 0; i < text.value.length; i++) {
    if (text.value.charAt(i) == ' ') {
      output += ' / ';
    } else {
      var input = text.value.charAt(i).toUpperCase();
      if (morseLib[input] != undefined) output += morseLib[input] + " ";
    }
  }
  morse.value = output;
});

// Morse to Text
morse.addEventListener('input', function () {
  var output = '';
  var char = '';

  for (var i = 0; i < morse.value.length; i++) {
    var current = morse.value.charAt(i);
    if (current == '/') {
      output += ' ';
      char = '';
    } else if (current == ' ') {
      var txt = Object.keys(morseLib).find(function (key) {
        return morseLib[key] == char;
      });
      if (txt != undefined) output += txt;
      char = '';
    } else {
      char += current;
    }
  }
  text.value = output;
});