var weddingVideo1 = document.getElementById('weddingVid1')
var weddingVideo2 = document.getElementById('weddingVid2')
var weddingVideo3 = document.getElementById('weddingVid3')
var weddingButton1 = document.getElementById('button1')
var weddingButton2 = document.getElementById('button2')
var weddingButton3 = document.getElementById('button3')
var lifeVid1 = document.getElementById('lifeVid1');
var lifeVid2 = document.getElementById('lifeVid2');
var lifeButton1 = document.getElementById('lifebutton1')
var lifeButton2 = document.getElementById('lifebutton2')
var promoVid1 = document.getElementById('promoVid1');
var promoVid2 = document.getElementById('promoVid2');
var promoButton1 = document.getElementById('promoButton1');
var promoButton2 = document.getElementById('promoButton2');

weddingButton1.addEventListener("click", displayWedding1)
weddingButton2.addEventListener("click", displayWedding2)
weddingButton3.addEventListener("click", displayWedding3)
lifeButton1.addEventListener("click", displaylife1)
lifeButton2.addEventListener("click", displaylife2)
promoButton1.addEventListener("click", displayPromo1);
promoButton2.addEventListener("click", displayPromo2);

function displayWedding1(){
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

function displaylife1(){
  $(lifeVid2).addClass("noDisplay")
  $(lifeVid1).removeClass("noDisplay")
}

function displaylife2(){
  $(lifeVid1).addClass("noDisplay")
  $(lifeVid2).removeClass("noDisplay")
}

function displayPromo1(){
  $(promoVid1).removeClass("noDisplay")
  $(promoVid2).addClass("noDisplay")
}

function displayPromo2(){
  $(promoVid1).addClass("noDisplay")
  $(promoVid2).removeClass("noDisplay")
}

$(window).scroll(function () {
   $('#landscape').css({
      'top' : ($(this).scrollTop()/6)+"px"
   });
});
