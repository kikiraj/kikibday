const qsns = ["The date on which all of it started?🥰",
        "Our hang out spot?😍",
        "Place that's kinda unpleasant for us?😅",
        "First beach together😌",
        "Our first sweet day together😊 (date)",
        "Our favourite pic contains....?😘"];
var frames = document.querySelectorAll("aside>span");
var tb = document.querySelector('input[type="text"]');
var btn = document.querySelector('input[type="submit"]');
var p = document.querySelector('p');
var h1 = document.querySelector('h1');
var cft = document.querySelector('.cft');
var note = document.querySelector('#note');
var time = 0;
btn.addEventListener("click", start);

function start(){
  btn.removeEventListener("click", start);
  frames[time+1].classList.toggle("show");
  frames[time+1].classList.toggle("cover");
  frames[time].classList.toggle("show");
  h1.style.display = "none";
  p.style.display = "block";
  tb.style.display = "block";
  btn.value = "Submit";
  p.innerHTML = qsns[time];
  btn.addEventListener("click", checkans);
  cft.classList.toggle("fin");
  btn.classList.toggle("glow-btn");
}

function checkans(){
  ans = tb.value.toLowerCase();
  switch(time){
    case 0:
      check(ans.includes("13"));
      break;
    case 1:
      check(ans.includes("marina"));
      break;
    case 2:
      check(ans.includes("inzy"));
      break;
    case 3:
      check(ans.includes("ecr"));
      break;
    case 4:
      check(ans.includes("5") && ans.includes("aug"));
      break;
    case 5:
      check(ans.includes("moon"));
      break;

  }
}

function check(isCorrect){
  if(isCorrect)
    correct();
  else
    wrong();
}

function next(){
  tb.value="";
  frames[time].classList.toggle("show");
  frames[time+1].classList.toggle("show");
  frames[time+1].classList.toggle("cover");
  btn.value = "Submit";
  p.innerHTML = qsns[time];
  btn.removeEventListener("click", next);
  btn.addEventListener("click", checkans);
}

function wrong(){
  btn.classList.toggle("wrong-btn");
  btn.value = "Wrong!";
  setTimeout(()=>{
    btn.classList.toggle("wrong-btn");
    btn.value = "Submit";
  },3000);
}

function finish(){
  btn.style.display="none";
  tb.style.display="none";
  h1.style.display="block";
  p.innerHTML="The chances of us meeting each other were ridiculously small.🤏<br>Still, the universe brought us together, for which I'm and will be deeply grateful for my entire life!!🥺<br>We been through a bunch of ups and downs already.😁<br>But still a lot to come and we'll persevere through it all and we'll keep the downs to a minimum!😌<br>May this year change your life completely and positively than it did the last year.😊<br>I love you forever bangaram!😚🫂💝<br>Thanks for joining me, and I hope this made your special day, better in some way or another!🥰"
  cft.classList.toggle("fin");
  p.classList.toggle("end");
  note.style.display = "block";
  let beat = new Audio('bday.mp3');
  beat.play()
}

function correct(){
  // if (time!=0)
  cft.classList.toggle("crct-ans");
  cft.classList.toggle("fade-in");
  setTimeout(()=>{
    cft.classList.toggle("fade-in");
    cft.classList.toggle("fade-out");
    setTimeout(()=>{
      cft.classList.toggle("crct-ans");
      cft.classList.toggle("fade-out");
    },1900);
  }, 3000);
  frames[time+1].classList.toggle("cover");
  frames[time+1].classList.toggle("fade-in");
    // frames[time].classList.toggle("show");
  // frames[time+1].classList.toggle("show");
  btn.classList.toggle("correct-btn");
  btn.value = "Correct!";
  btn.removeEventListener("click", checkans);
  setTimeout(()=>{
    btn.classList.toggle("correct-btn");
    if (time!=frames.length-1){
      btn.value =  "Next";
      btn.addEventListener("click", next);
    }
    else {
      btn.value =  "Finish";
      btn.addEventListener("click", finish);
    }
  },3000);
  time++;
}
