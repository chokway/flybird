//document 文档对象 总管所有页面元素
var oBird = document.getElementById('headBird');
var oHead = document.getElementById('headTitle');
var oLand1 = document.getElementById('grassLand1');
var oLand2 = document.getElementById('grassLand2');
var oBtn = document.getElementById('startBtn');
var oBg = document.getElementById('wrapBg');
// console 控制台
console.log(oBird);
// 定时器
var index = 0;
setInterval(function(){
  var imgArr =['img/bird0.png','img/bird1.png'];
  oBird.src = imgArr[index++];
  if(index >= 2){
    index = 0;
  }
},200);

//每隔30毫秒震颤标题
// 1找到标题元素 headTitle
// 2定时器 30
// top .style.top +3 -3
var y = 3;
var headTimer = setInterval(head,300);
function head(){
  y*=-1;
  oHead.style.top = (oHead.offsetTop + y) +'px';
};



setInterval(function() {
  oLand1.style.left = (oLand1.offsetLeft - 3)  + 'px';
  oLand2.style.left = (oLand2.offsetLeft - 3)  + 'px';
  if(oLand1.offsetLeft <= -343) {
    oLand1.style.left = '343px';
  }
  if(oLand2.offsetLeft <= -343) {
    oLand2.style.left = '343px';
  }
},30);


oBtn.onclick = function(){
  oHead.style.display = "none";
  oBtn.style.display = "none";
  clearInterval(headTimer);
  bird.showBird(oBg);
  bird.flyBird();
  bird.wingWave();
  oBg.onclick = function(){
    bird.fallSpeed = "-8";
  }
}
