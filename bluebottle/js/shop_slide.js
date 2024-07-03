document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const shopList = document.querySelector('.shop_list');
    const items = document.querySelectorAll('.shop_list li');
    const totalItems = items.length;                            // 전체 아이템 수
    const visibleItems = 4;                                     // 화면에 보이는 아이템 수
    let currentIndex = 0;                                       
    const itemWidth = 350;                                      // 아이템의 너비
    const itemMargin = 35;                                      // 아이템의 마진

    // Update Buttons Visibility
    function updateButtons() {
        // prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
        prevBtn.style.visibility = currentIndex == 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentIndex >= totalItems - visibleItems ? 'hidden' : 'visible';
    }

    // Slide Items
    function slide(direction) {
        // if (direction === 'next' && currentIndex < totalItems - visibleItems) {
        if (direction == 'next' && currentIndex < totalItems - visibleItems) {
            currentIndex++;
        // } else if (direction === 'prev' && currentIndex > 0) {
        } else if (direction == 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        const offset = -currentIndex * (itemWidth + itemMargin);
        shopList.style.transform = `translateX(${offset}px)`;
        updateButtons();
    }

    // Event Listeners for Slide Buttons
    prevBtn.addEventListener('click', () => slide('prev'));
    nextBtn.addEventListener('click', () => slide('next'));

    // Initial Button Update
    updateButtons();


    // Swiper Effect
    const shopListWrap = document.querySelector('.shop_item_area');
    const swiperButtons = document.querySelector('.swiper_btn');

    shopListWrap.addEventListener('mouseenter', () => {
        swiperButtons.style.opacity = '1';  // Show buttons when mouse enters
    });

    shopListWrap.addEventListener('mouseleave', () => {
        swiperButtons.style.opacity = '0';  // Hide buttons when mouse leaves
    });


    // Image Hover Effect
    const shopItems = document.querySelectorAll(".shop_list_inner");

    shopItems.forEach(item => {
        const hoverImage = item.getAttribute("data-hover-image");
        const shopImg = item.querySelector(".shop_img");

        item.addEventListener("mouseenter", function() {
            shopImg.style.setProperty("--hover-image", `url(${hoverImage})`);
        });

        item.addEventListener("mouseleave", function() {
            shopImg.style.removeProperty("--hover-image");
        });
    });
});
