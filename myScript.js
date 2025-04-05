document.querySelector("body").addEventListener("mousemove", eyeball);
    
function eyeball() {
  const eye = document.querySelectorAll(".eyes");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rotate + "deg)";
  });
}


window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}




// FOOTER

$(document).ready(function() {
  
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function() {
    siteFooter();
  });
  
  function siteFooter() {
    var siteContent = $('#site-content');
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $('#site-footer');
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();

    console.log('Content Height = ' + siteContentHeight + 'px');
    console.log('Content Width = ' + siteContentWidth + 'px');
    console.log('Footer Height = ' + siteFooterHeight + 'px');
    console.log('Footer Width = ' + siteFooterWidth + 'px');

    siteContent.css({
      "margin-bottom" : siteFooterHeight + 50
    });
  };
});