function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}
function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    c_name +
    "=" +
    escape(value) +
    (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
  var x = document.cookie(username);
  alert("sfs");
  document.write(x);
}
function showmessage() {
  var days = 421;
  var inner = document.getElementById("inner");

  nextvisitmsg = "[displaydate]";

  var dat = new Date();
  if (getCookie("visit") == "") {
    setCookie("visit", dat, days);
    document.write("you are visting this website for the first time ");
  } else {
    var p = getCookie("visit");
    var pp = Date.parse(p);
    var now = new Date();
    now.setTime(pp);
    var day = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
    var month = new Array(
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
      // "Jan",
      // "Feb",
      // "Mar",
      // "Apr",
      // "May",
      // "Jun",
      // "Jul",
      // "Aug",
      // "Sep",
      // "Oct",
      // "Nov",
      // "Dec"
    );
    var nd = now.getDate();
    var ny = now.getDay();
    ny = day[ny];
    var nm = now.getMonth();
    nm = month[nm];
    yy = now.getFullYear();
    var hh = now.getHours();
    var ampm = "AM";
    if (hh >= 12) {
      ampm = "PM";
    }
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    var dispDate =
      // ny +
      // ", " +
      // yy +
      // ". " +
      // nm +
      // ". " +
      // nd +
      // ", " +
      hh +
      ":" +
      mins +
      ":" +
      secs +
      " ";

    nextvisitmsg.replace("[displaydate]", dispDate);
    $("#inner").html(dispDate);
  }

  setCookie("visit", dat, days);
}

function ctck() {
  var sds = document.getElementById("dum");
  if (sds == null) {
    alert(
      "You are using a free package.\n You are not allowed to remove the tag.\n"
    );
  }
  var sdss = document.getElementById("dumdiv");
  if (sdss == null) {
    alert(
      "You are using a free package.\n You are not allowed to remove the tag.\n"
    );
  }
}
document.onload = "ctck()";
showmessage();
