$(window).on("keydown", function (event) {
  if (codeTranslator[event.keyCode]) {
    event.preventDefault();

    var key = codeTranslator[event.keyCode];

    KeyActions.keydown(key);
  }
});

$(window).on("keyup", function (event) {
  if (codeTranslator[event.keyCode]) {
    event.preventDefault();

    var key = codeTranslator[event.keyCode];

    KeyActions.keyup(key);
  }
});

var codeTranslator = {
  65: 'C3',
  83: 'D3',
  68: 'E3',
  70: 'F3',
  71: 'G3',
  72: 'A3',
  74: 'B3',
  75: 'C4',
  76: 'D4'
};
