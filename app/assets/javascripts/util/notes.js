(function () {

  var ctx = new (window.AudioContext || window.webkitAudioContext)();

  window.Note = function (freq) {
    this.osc = createOscillator(freq);
    this.gainNode = createGainNode();

    this.osc.connect(this.gainNode);
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 0.3;
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };

  var createOscillator = function(freq){
   var osc = ctx.createOscillator();
   osc.type = "triangle";
   osc.frequency.value = freq;
   osc.detune.value = 0;
   osc.start(ctx.currentTime);
   return osc;
 };

 var createGainNode = function(){
   var gainNode = ctx.createGain();
   gainNode.gain.value = 0;
   gainNode.connect(ctx.destination);
   return gainNode;
 };

})();
