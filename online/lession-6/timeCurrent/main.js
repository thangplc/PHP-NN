function tg() {
  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();
  var hour = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = 0 + currentTime.getSeconds();
  document.getElementById("dongho").innerHTML =
    day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
}
setInterval("tg()", 1000);
console.log(setInterval("tg()", 1000));

var sogiay = 60 * 60 * 24 * 365 * 1;
setTimeout("document.location='index.html", sogiay * 1);
setInterval("document.getElementById('sogiay').innerHTML=sogiay--", 1);
