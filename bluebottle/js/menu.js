var slides = document.querySelector(".menu_items_wrap"),
    slide = document.querySelectorAll('.item_list'),
    currentIdx = 0,
    slideCount = slide.length,
    dotActive = document.querySelector(".dot_active"),
    slideWidth = 300,
    slideMargin = 30,
    dot = document.querySelector(".dot");

    slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

    function moveSlide(num) {
        slides.style.left = -num * 330 + 'px';
        currentIdx = num;
    }
    dot.addEventListener('click', function() {
        if(currentIdx < slideCount - 1) {
            moveSlide(currentIdx + 1);
            console.log(currentIdx);
        } else {
            moveSlide(slideCount - 3);
        }
    });
