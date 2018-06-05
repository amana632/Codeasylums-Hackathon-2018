
function reqListener() {
              z = JSON.parse(this.responseText);

             //a= document.getElementById("quoteone");
             //a.innerHTML+=z.
             console.log(z);


          }
          var o = new XMLHttpRequest();
          o.addEventListener("load", reqListener);
          o.open("GET", "http://api.adviceslip.com/advice/search");
          o.send();