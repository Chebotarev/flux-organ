window.KeyActions = {
  keydown: function(key) {
    var action = {
      type: 'KEYDOWN',
      key: key
    };
    AppDispatcher.dispatch(action);
  },

  keyup: function(key) {
    var action = {
      type: 'KEYUP',
      key: key
    };
    AppDispatcher.dispatch(action);
  }
};
