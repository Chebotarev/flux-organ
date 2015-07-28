(function () {

  var _keysPressed = [];

  window.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _keysPressed.slice();
    },

    addChangeListener: function (callback) {
      KeyStore.on("CHANGED", callback);
    },

    changed: function () {
      KeyStore.emit("CHANGED");
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.type) {
        case KeyConstants.KEYDOWN:
          _keysPressed.push(payload.key);
          KeyStore.changed();
          break;
        case KeyConstants.KEYUP:
          _keysPressed.splice(_keysPressed.indexOf(payload.key), 1);
          KeyStore.changed();
          break;
        default:
          throw 'wtf?';
      }
    })

  });
})();
