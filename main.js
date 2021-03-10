Webcam.set({
 width : 310,
 heght : 300,
 image_format : 'png',
 png_quality : 90,
 constraints : {
  facingMode : "environment"
 }
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function take_photo(){
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = "<img id = 'photo' src = " + data_uri + ">";
 });
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded(){
 console.log("Model Loaded");
}
function check(){
 photo = document.getElementById("photo");
 classifier.classify(photo, gotresult);
}
function gotresult(error, results){
 if(error){
  console.error(error);
 }
 else{
  console.log(results);
  document.getElementById("object").innerHTML = results[0].label;
 }
}