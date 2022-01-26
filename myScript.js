//Navigācijas krāsas nomaiņa (jQuery + JavaScript)
var offset = $("#startchange").offset();
$(document).scroll(function () {
  var scroll_start = $(this).scrollTop();
  if (scroll_start > offset.top) {
    $("#navbar").css("background-color", "black");
  } else {
    $("#navbar").css("background-color", "transparent");
  }
});

//SpaceX logo izmantojums kā atgriešanās uz sākuma izskatu (jQuery)
$("#spacexLogo").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

//"Updates" sekcijas darbība (JavaScript + DOM)
var count1 = 0;
var count2 = 0;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

$("#btn1").click(function () {
  if (count1 % 2 == 0) {
    document.getElementById("btn1").innerHTML = "Close";
  } else {
    document.getElementById("btn1").innerHTML = "Read";
  }
  if (count2 % 2 != 0) {
    console.log("Other button active");
    document.getElementById("btn1").innerHTML = "Read";
  } else {
    var div = document.getElementById("first-update-text");
    div.classList.toggle("newpost");
    count1++;
  }
});

$("#btn2").click(function () {
  if (count2 % 2 == 0) {
    document.getElementById("btn2").innerHTML = "Close";
  } else {
    document.getElementById("btn2").innerHTML = "Read";
  }
  if (count1 % 2 != 0) {
    console.log("Other button active");
    document.getElementById("btn2").innerHTML = "Read";
  } else {
    var div = document.getElementById("second-update-text");
    div.classList.toggle("newpost");
    count2++;
  }
});

//"Performance" sekcijas teksta izveidošana, kad uzspiež uz video, parādoties tikai 1 reizi (JavaScript + DOM)
var count = 0;
$("#videobox").click(function () {
  if (count == 0) {
    var para = document.createElement("p");
    const node = document.createTextNode(
      "*Video of 'Of Course I Still Love You' droneship"
    );
    para.appendChild(node);
    document.getElementById("headAndText").appendChild(para);
    count++;
  }
});

//Iesnieguma formas validācija (JavaScript)

$("#submit").click(function () {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let atPos = email.indexOf("@");
  let dotPos = email.lastIndexOf(".");
  let message = document.forms["myForm"]["message"].value;
  let age = document.forms["myForm"]["age"].value;

  if (name == "") {
    alert("Name must be filled out!");
    return false;
  } else if (!isNaN(name)) {
    alert("Please enter valid name!");
    return false;
  } else if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
    alert("Please enter a valid e-mail address!");
    return false;
  } else if (!$('select[name="Gender"]').val()) {
    //izmantojot jQuery
    alert("Please provide your gender!");
    return false;
  } else if (age == "") {
    alert("Please enter your age!");
    return false;
  } else if (age < 16 || age > 130) {
    alert("Please enter age between 16 and 130!");
    return false;
  } else if (message == "") {
    alert("Please enter your message!");
    return false;
  }
});
