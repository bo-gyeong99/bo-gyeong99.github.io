/**
 *  포폴 버튼 클릭
 */
var buttons = document.querySelectorAll('.pt-btn button');
var pts = document.querySelectorAll('.pt');

// 초기에는 pt-02, pt-03, pt-04 컨텐츠를 숨김
pts[1].classList.add('hidden');
pts[2].classList.add('hidden');
pts[3].classList.add('hidden');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    // 모든 pt 요소에 hidden 클래스 추가
    pts.forEach(function(pt) {
      pt.classList.add('hidden');
    });

    // 클릭된 버튼에 해당하는 pt 요소의 hidden 클래스 제거
    pts[index].classList.remove('hidden');
  });
});

/**
 *  무한 반복 멀티플 이미지 슬라이드
 */
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 250,
    slideMargin = 50,
    prevBtn = document.querySelector('.prev-btn'),
    nextBtn = document.querySelector('.next-btn');

makeClone();

function makeClone() {
    for(var i = 0; i < slideCount; i++) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(var i = slideCount - 1; i >= 0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();
    setTimeout(function() {
        slides.classList.add('animated');
    }, 100);
}
function updateWidth() {
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;

    var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}
function setInitialPos() {
    var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = 'translateX( '+ initialTranslateValue+'px)';
}

prevBtn.addEventListener('click',function(){
    moveSlide(currentIdx - 1);
});
nextBtn.addEventListener('click',function(){
    moveSlide(currentIdx + 1);
});

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);
    
    if(currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        }, 600);
    }
}

/*
    썸네일 이미지 클릭시 모달창 열기
*/
var thumbnails = document.querySelectorAll('.slides li img'),
    modal = document.getElementById('modal'),
    modalImg = document.getElementById('modal-image');

// 모달창 닫기 함수
function closeModal() {
  modal.style.display = 'none';
  modalImg.innerHTML = '';
}

// 썸네일 클릭 시 모달창 열기
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    var imageSrc = thumbnail.getAttribute('src').replace('cut_', '');
    var imageAlt = thumbnail.getAttribute('alt');
    modalImg.innerHTML = `<img src="${imageSrc}" alt="${imageAlt}">`;
    modal.style.display = 'flex';
  });
});

// 모달창 바깥 클릭 시 모달창 닫기
modal.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});
// 모달창 이미지 클릭 시 모달창 닫기
modalImg.addEventListener('click', () => {
    closeModal();
  });

