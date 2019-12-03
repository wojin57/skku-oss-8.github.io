var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');
var content4 = document.getElementById('content4');

var sub_nav1 = document.getElementById('sub_nav1');
var sub_nav2 = document.getElementById('sub_nav2');
var sub_nav3 = document.getElementById('sub_nav3');
var sub_nav4 = document.getElementById('sub_nav4');

content1.style.display = "block";
content2.style.display = "none";
content3.style.display = "none";
content4.style.display = "none";

sub_nav1.addEventListener('click', ShowSubNav1);
sub_nav2.addEventListener('click', ShowSubNav2);
sub_nav3.addEventListener('click', ShowSubNav3);
sub_nav4.addEventListener('click', ShowSubNav4);

function ShowSubNav1() {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "none";
}

function ShowSubNav2() {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
  content4.style.display = "none";
}

function ShowSubNav3() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
  content4.style.display = "none";
}

function ShowSubNav4() {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";
  content4.style.display = "block";
}
