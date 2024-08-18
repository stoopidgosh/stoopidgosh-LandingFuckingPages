document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const carouselWrapper = document.querySelector(".carousel-wrapper");

    let currentIndex = 0;
    let cardWidth;
    const productCards = document.querySelectorAll(".product-card");
    const totalCards = productCards.length;

    function updateCardWidth() {
        cardWidth = productCards[0].offsetWidth;
        carouselWrapper.style.width = `${cardWidth * totalCards}px`;
    }

    function updateCarousel() {
        const offset = -currentIndex * cardWidth;
        carouselWrapper.style.transform = `translateX(${offset}px)`;
        prevButton.style.display = (currentIndex === 0) ? 'none' : 'block';
        nextButton.style.display = (currentIndex === totalCards - 1) ? 'none' : 'block';
    }

    nextButton.addEventListener("click", function() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    updateCardWidth();
    updateCarousel();

    window.addEventListener("resize", updateCardWidth);
});
