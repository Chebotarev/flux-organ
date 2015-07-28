var Organ = React.createClass({

  componentDidMount: function () {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = '300px';
    this.canvas.height = '300px';

    this.canvasCtx = this.canvas.getContext('2d');
  },

  drawStuff: function (note) {
    function random(number1,number2) {
      var randomNo = number1 + (Math.floor(Math.random() * (number2 - number1)) + 1);
      return randomNo;
    }

    rX = CurX;
    rY = CurY;
    rC = Math.floor((note.gainNode.gain.value/maxVol)*30);

    this.canvasCtx.globalAlpha = 0.2;

    for(i=1;i<=15;i=i+2) {
      this.canvasCtx.beginPath();
      this.canvasCtx.fillStyle = 'rgb(' + 100+(i*10) + ',' + Math.floor((note.gainNode.gain.value/maxVol)*255) + ',' + Math.floor((note.osc.frequency.value/maxFreq)*255) + ')';
      this.canvasCtx.arc(rX+random(0,50),rY+random(0,50),rC/2+i,(Math.PI/180)*0,(Math.PI/180)*360,false);
      this.canvasCtx.fill();
      this.canvasCtx.closePath();
    }
  },

  render: function() {
    return (
      <div id="organ">
        {
          this.props.organKeys.map(function(key) {
            return < Key noteName={key} className="organ-key" _onChange={this.drawStuff}/>
          })
        }
      </div>
    );
  }
});
