var Organ = React.createClass({

  render: function() {
    return (
      <div id="organ">
        {
          this.props.organKeys.map(function(key) {
            return < Key noteName={key} className="organ-key"/>
          })
        }
      </div>
    );
  }
});
