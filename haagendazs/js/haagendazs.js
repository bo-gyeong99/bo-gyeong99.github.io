/**
 * 스크롤시 메뉴바의 배경색 바꾸기
 */
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".nav");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

/**
 * sns 이미지 무한 슬라이드
 */
document.addEventListener('DOMContentLoaded', function() {
  var snsImg = document.getElementById('sns-img');
  var imgs = snsImg.getElementsByTagName('img');
  // 현재 이미지 위치를 나타내는 변수
  var currentPosition = 0;
  // 이미지를 이동시키는 setInterval() 메서드의 반환 값
  var interval;

  function startSlideshow() {
    interval = setInterval(() => {
      currentPosition -= 2;
      snsImg.style.transform = `translateX(${currentPosition}px)`;
      if (currentPosition == -(imgs.length - 1) * (400)) {
        currentPosition = 0;
      }
    }, 50);
  }

  function stopSlideshow() {
    clearInterval(interval);
  }

  startSlideshow();
  snsImg.addEventListener('mouseenter', stopSlideshow);
  snsImg.addEventListener('mouseleave', startSlideshow);

  // 이미지 복제 함수 호출
  cloneImages();
});

function cloneImages() {
  const snsImg = document.getElementById('sns-img');
  const imgs = snsImg.getElementsByTagName('img');
  const imgCount = imgs.length;

  // 복제할 이미지 수
  const cloneCount = 2;

  // 이미지를 복제하여 오른쪽에 추가
  for (let i = 0; i < cloneCount; i++) {
    for (let j = 0; j < imgCount; j++) {
      const cloneImg = imgs[j].cloneNode(true);
      snsImg.appendChild(cloneImg);
    }
  }
}

