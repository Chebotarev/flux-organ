var Key = React.createClass({

  componentDidMount: function() {
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function () {
  },

  getInitialState: function () {
    return { pressed: false };
  },

  handleChange: function () {
    var keys = KeyStore.all();
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
      this.setState({ pressed: true });
    } else {
      this.note.stop();
      this.setState({ pressed: false });
    }
  },

  callDrawStuff: function () {
    this.props._onChange(this.note);
  },

  render: function() {
    var keyClass = this.state.pressed ? "organ-key pressed" : "organ-key";
    return (<div className={ keyClass } onChange={this.callDrawStuff}>
        {this.props.noteName}
      </div>)
  }
});
