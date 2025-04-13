let colorListener = true;
const instruction = document.getElementById("instruction");
// const passwordModal = document.getElementById("dev-name"); // element for modal popout
function colorChange(event) {
  const container = document.getElementsByClassName("container");
  let documentRed = 255 * event.offsetX / document.body.clientWidth;
  let documentGreen = 255 * event.clientY / screen.height;
  let documentBlue = 255 - 255 * event.offsetX / document.body.clientWidth;
  let setColor = 'rgb(' + documentRed + ',' + documentGreen + ',' + documentBlue + ')';
  for (i = 0; i < container.length; i++) {
    container[i].style.backgroundColor = setColor;
  }
  instruction.style.backgroundColor = setColor;
  document.body.style.backgroundColor = setColor;
}

function colorToggle(event) {
  if (colorListener) {
    document.querySelector('.full-screen').removeEventListener('mousemove', colorChange);
    colorListener = false;
  } else {
    document.querySelector('.full-screen').addEventListener('mousemove', colorChange);
    colorListener = true;
  }
}
document.querySelector('.full-screen').addEventListener('mousemove', colorChange);

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    colorToggle(e);
  }
});


// passwordModal.onclick = function() {
  // modal.style.display = "block";
// }
