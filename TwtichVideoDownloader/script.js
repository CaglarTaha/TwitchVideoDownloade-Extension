
var videoUrl = document.querySelector('.player-video video').src;

var startTime = 0;
var endTime = 60;


function setStartEnd() {
  
  startTime = parseInt(document.getElementById('start-time').value);
  endTime = parseInt(document.getElementById('end-time').value);
}


var downloadButton = document.createElement('button');
downloadButton.innerHTML = 'Videoyu İndir';
downloadButton.addEventListener('click', function() {
  
  var newUrl = videoUrl + '#t=' + startTime + ',' + endTime;


  window.open(newUrl, '_blank');
});

var startTimeInput = document.createElement('input');
startTimeInput.setAttribute('type', 'number');
startTimeInput.setAttribute('value', startTime);
startTimeInput.setAttribute('id', 'start-time');

var endTimeInput = document.createElement('input');
endTimeInput.setAttribute('type', 'number');
endTimeInput.setAttribute('value', endTime);
endTimeInput.setAttribute('id', 'end-time');


var setStartEndButton = document.createElement('button');
setStartEndButton.innerHTML = 'Başlangıç ve Bitiş Noktalarını Ayarla';
setStartEndButton.addEventListener('click', setStartEnd);


var pluginUI = document.createElement('div');
pluginUI.appendChild(startTimeInput);
pluginUI.appendChild(endTimeInput);
pluginUI.appendChild(setStartEndButton);
pluginUI.appendChild(downloadButton);

document.body.appendChild(pluginUI);
