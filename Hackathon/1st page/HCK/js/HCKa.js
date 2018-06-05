function reqListener() {
              z = JSON.parse(this.responseText);

             console.log(z);

          }
          var o = new XMLHttpRequest();
          o.addEventListener("load", reqListener);
          o.open("GET", "http://api.adviceslip.com/advice/search/c");
          o.send();