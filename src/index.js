//VIDEO
const video = document.getElementById("video");
const videoHandle = document.getElementById("play-pause");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

videoHandle.addEventListener("click", () => {
  console.log("first");
  if (video.paused) {
    video.play();
    play.classList.add("hidden");
    pause.classList.remove("hidden");
  } else {
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    video.pause();
  }
});

const menu = document.getElementById("menu");
const item1 = document.getElementById("menu-item-1");
const item2 = document.getElementById("menu-item-2");
const item3 = document.getElementById("menu-item-3");

menu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    item2.classList.remove("menu-open-item-2");
    item3.classList.remove("menu-open-item-3");
    setTimeout(() => {
      item1.classList.remove("hidden");
    }, 500);
  } else {
    menu.classList.add("open");
    item2.classList.add("menu-open-item-2");
    item3.classList.add("menu-open-item-3");
    item1.classList.add("hidden");
    setTimeout(() => {}, 500);
  }
});

// CountDown
// day
const dayHalfCircles = document.querySelectorAll(".day-half-circle");
const dayHalfCircleTop = document.querySelector(".day-half-circle-top");

const hourHalfCircles = document.querySelectorAll(".hour-half-circle");
const hourHalfCircleTop = document.querySelector(".hour-half-circle-top");

const minuteHalfCircles = document.querySelectorAll(".minute-half-circle");
const minuteHalfCircleTop = document.querySelector(".minute-half-circle-top");

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
// const secEl = document.getElementById("sec");

const startCountDown = () => {
  var countDownDate = new Date("Apr 1, 2023").getTime();

  var interval = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Update the dom
    dayEl.innerText = days;
    hourEl.innerText = hours;
    minuteEl.innerText = minutes;
    // secEl.innerText = seconds;

    // progress
    const secondDegree = (seconds / 60) * 360;
    const minutesDegree = (minutes / 60) * 360;
    const hoursDegree = (hours / 24) * 360;
    // 100% of 1year = 366 days /i.e/ let expected_date in x years - no of days = n*x
    const daysDegree = (days / 366) * 360;

    let halfCircles = [
      {
        circle: dayHalfCircles,
        halfCircleTop: dayHalfCircleTop,
        degree: daysDegree,
      },
      {
        circle: hourHalfCircles,
        halfCircleTop: hourHalfCircleTop,
        degree: hoursDegree,
      },
      {
        circle: minuteHalfCircles,
        halfCircleTop: minuteHalfCircleTop,
        degree: minutesDegree,
      },
    ];
    halfCircles.map((i) => {
      i.circle.forEach((el) => {
        el.style.transform = `rotate(${i.degree}deg)`;
        if (i.degree >= 180) {
          i.circle[0].style.transform = "rotate(180deg)";
          i.halfCircleTop.style.opacity = "0";
        } else {
          i.halfCircleTop.style.opacity = "1";
        }
      });
    });

    // endprogress

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(interval);
      dayEl.innerText = "0";
      hourEl.innerText = "0";
      minuteEl.innerText = "0";
      // secEl.innerText = "0";
    }
  }, 1000);
};

startCountDown();

// slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slider-controller");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      " slider-controller-active",
      ""
    );
  }
  x[slideIndex - 1].style.display = "grid";
  dots[slideIndex - 1].className += " slider-controller-active";
}
