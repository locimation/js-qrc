var qrc = require('./qrc');

var i = 0;

qrc.Connect('10.0.0.11')
  .then(function() {
    console.log('Connected!');
    setInterval(function() {
      i = (i+0.01)%1
      qrc.Call('Control.Set', {"Name": "source_level", "Position": i });
    }, 0.1);
  });