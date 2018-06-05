var x;
function reqListener() {
  z = JSON.parse(this.responseText);

  x = z.items[0].id.videoId;
  var f = `https://www.youtube.com/embed/${x}?rel=0&amp;showinfo=0`;
  var zz = document.getElementById("ut1");
  var obj= document.createElement("iframe");
zz.innerHTML += <iframe id="utchild" src={f} allowfullscreen></iframe>;

var o = new XMLHttpRequest();
o.addEventListener("load", reqListener);
o.open(
  "GET",`https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&key=AIzaSyAHodzP3HO6pYy54TVpeK0yfRWe2bn5gUI&q=${mood}`
);
o.send();
