let colorListener = true;

function colorChange(event){
  const container = document.getElementsByClassName("container");
  let documentRed = 255*event.offsetX/document.body.clientWidth;
  let documentGreen = 255*event.clientY/screen.height;
  let documentBlue = 255 - 255*event.offsetX/document.body.clientWidth;
  let setColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
  for(i=0;i<container.length;i++){
  container[i].style.backgroundColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
}
  document.body.style.backgroundColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
}

function colorToggle(event){
  if (colorListener){
    document.querySelector('.full-screen').removeEventListener('mousemove', colorChange);
      colorListener = false;
  }else{
      document.querySelector('.full-screen').addEventListener('mousemove', colorChange);
      colorListener = true;
  }
}
document.querySelector('.full-screen').addEventListener('mousemove', colorChange);
window.addEventListener('keydown', event =>{
  if(event.key === 'Esc'){
      colorToggle;
  }
});
