
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

// request access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // set the video stream as the source of the video element
    video.srcObject = stream;
    video.play();
  })
  .catch(error => {
    alert('Unable to access the camera. Please turn on camera', error);
  });


const captureButton = document.getElementById('capture-btn');
captureButton.addEventListener('click', () => {

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);


  const imageUrl = canvas.toDataURL('image/png');
  console.log(imageUrl);
});

const submit = document.getElementById('login-btn');

function msg() {
  alert("Logged In Successfully");
  window.location.href = "C:\Users\Dell\Desktop\TASK2-FACE LOGIN\index.html";
}

