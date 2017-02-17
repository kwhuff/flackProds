var weddingVideo1 = document.getElementById('weddingVid1')
var weddingVideo2 = document.getElementById('weddingVid2')
var weddingVideo3 = document.getElementById('weddingVid3')
var weddingButton1 = document.getElementById('button1')
var weddingButton2 = document.getElementById('button2')
var weddingButton3 = document.getElementById('button3')

weddingButton1.addEventListener("click", displayWedding1)
weddingButton2.addEventListener("click", displayWedding2)
weddingButton3.addEventListener("click", displayWedding3)

function displayWedding1(){
  // weddingVideo1.className -= ' noDisplay'
  // weddingVideo2.className += ' noDisplay'
  // weddingVideo3.className += ' noDisplay'
  $(weddingVideo1).removeClass("noDisplay")
  $(weddingVideo2).addClass("noDisplay")
  $(weddingVideo3).addClass("noDisplay")
}

function displayWedding2(){
  $(weddingVideo1).addClass("noDisplay")
  $(weddingVideo2).removeClass("noDisplay")
  $(weddingVideo3).addClass("noDisplay")
}

function displayWedding3(){
  $(weddingVideo1).addClass("noDisplay")
  $(weddingVideo2).addClass("noDisplay")
  $(weddingVideo3).removeClass("noDisplay")
}
