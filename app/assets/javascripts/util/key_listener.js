$(window).on("keydown", function (event) {
  if (codeTranslator[event.keyCode]) {
    var key = codeTranslator[event.keyCode];

    KeyActions.keydown(key);
  }
});

$(window).on("keyup", function (event) {
  if (codeTranslator[event.keyCode]) {
    var key = codeTranslator[event.keyCode];

    KeyActions.keyup(key);
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
