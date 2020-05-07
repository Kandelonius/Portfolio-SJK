function colorChange(event){
  const container = document.getElementsByClassName("container");
  let documentRed = 255*event.offsetX/document.body.clientWidth;
  let documentGreen = 255*event.clientY/screen.height;
  let documentBlue = 255 - 255*event.offsetX/document.body.clientWidth;
  let setColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')'
  console.log(event.offsetX);
  for(i=0;i<container.length;i++){
  container[i].style.backgroundColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
}
  document.body.style.backgroundColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
}
  document.addEventListener('mousemove', colorChange);
  