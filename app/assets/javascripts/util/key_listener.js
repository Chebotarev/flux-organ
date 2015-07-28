$(window).on("keydown", function (event) {
  if (codeTranslator[event.keyCode]) {
    var key = codeTranslator[event.keyCode];

    KeyActions.keydown(key);
  } else if (chordKeys[event.keyCode]) {
    chordKeys[event.keyCode].forEach(function (tone) {
      KeyActions.keydown(tone);
    });
  }
});

$(window).on("keyup", function (event) {
  if (codeTranslator[event.keyCode]) {
    var key = codeTranslator[event.keyCode];

    KeyActions.keyup(key);
  } else if (chordKeys[event.keyCode]) {
    chordKeys[event.keyCode].forEach(function (tone) {
      KeyActions.keyup(tone);
    });
  }
});

var codeTranslator = {
  65: 'F3',
  83: 'G3',
  68: 'A3',
  70: 'B3',
  71: 'C4',
  72: 'D4',
  74: 'E4',
  75: 'F4',
  76: 'G4'
};

var chordKeys = {
  77: ['F3', 'A3', 'C4']
};
