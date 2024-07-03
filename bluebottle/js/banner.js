const slides = document.querySelectorAll('.banner_inner_list li');
const dots = document.querySelectorAll('.banner_button li span');
let currentSlide = 0;
let slideInterval;

// 클릭 이벤트
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
         startSlideInterval();
    });
});

// 슬라이드 이동
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}
    
function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-currentSlide * 100}%)`;
    });
    // 버튼 활성화 상태 업데이트
    dots.forEach((dot, index) => {
        dot.classList.remove('banner_active');
    });
    dots[currentSlide].classList.add('banner_active');
}
   
function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}
    
startSlideInterval(); // 페이지가 로드되면 자동 슬라이드 시작