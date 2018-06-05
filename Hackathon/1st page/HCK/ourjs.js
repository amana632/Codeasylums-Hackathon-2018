function reqListener() {
  var a;
  z = JSON.parse(this.responseText);

  a = document.getElementById("quoteone");
  a.innerHTML += z.slips[0].advice;
  a = document.getElementById("quotetwo");
  a.innerHTML += z.slips[3].advice;
  a = document.getElementById("quotethree");
  a.innerHTML += z.slips[4].advice;
}

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener);
o.open("GET", "http://api.adviceslip.com/advice/search/a");
o.send();
