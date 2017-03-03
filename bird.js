var bird = {
  flyTimer: null,
  wingTimer: null,//翅膀摆动定时器


div:document.createElement("div"),
showBird:function(par){
  this.div.style.width = "40px";
  this.div.style.height = "28px";
  this.div.style.backgroundImage = "url(img/bird0.png)";
  this.div.style.backgroundRepeat = "no-repeat";
  this.div.style.position = "absolute";
  this.div.style.left = "50px";
  this.div.style.top = "200px";
  this.div.style.zIndex = "1";
  par.appendChild(this.div);//将小鸟div插入游戏界面
},

fallSpeed: 0,
flyBird:function(){
  bird.flyTimer = setInterval(fly,40);
  function fly(){
    bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ +"px";
    if(bird.div.offsetTop<0){
      bird.fallSpeed=5;
    }
    if(bird.div.offsetTop>=395){
      bird.fallSpeed = 0;
    clearInterval(bird.flyTimer);
    clearInterval(bird.wingTimer);
    }
    if(bird.fallSpeed>12){
      bird.fallSpeed=12;
    }
  }
},

wingWave: function(){
  var up = ["url(img/up_bird0.png)","url(img/up_bird1.png)"];
  var down = ["url(img/down_bird0.png)","url(img/down_bird1.png)"];
  var i = 0,j = 0;
  bird.wingTimer = setInterval(wing,120);
  function wing(){
  if(bird.fallSpeed>0){
    bird.div.style.backgroundImage = down[i++];
    if(i==2){i = 0;}
  }
  if(bird.fallSpeed<0){
    bird.div.style.backgroundImage = up[j++];
    if(j==2){j = 0;}
  }
}
},
};