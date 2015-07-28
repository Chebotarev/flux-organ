var Key = React.createClass({

  componentDidMount: function() {
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
  },

  handleChange: function () {
    var keys = KeyStore.all();
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  render: function() {
    return (<div className="organ-key">
        {this.props.noteName}
      </div>)
  }
});
