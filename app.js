function colorChange(event){
    let documentRed = 255*event.offsetX/document.body.clientWidth;

    let documentGreen = 255*event.clientY/screen.height;

    let documentBlue = 255 - 255*event.offsetX/document.body.clientWidth;
    document.body.style.backgroundColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
  }
  document.addEventListener('mousemove', colorChange);
  