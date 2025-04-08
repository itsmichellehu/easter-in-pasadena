import './ScrollContainer.module.scss';

export function initScroll(containerSelector, nextBtnSelector, prevBtnSelector) {
    document.addEventListener("DOMContentLoaded", function () {
        const scrollContainer = document.querySelector(containerSelector);
        const nextButton = document.querySelector(nextBtnSelector);
        const prevButton = document.querySelector(prevBtnSelector);

        if (scrollContainer && nextButton && prevButton) {
            function scrollNext() {
                scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: "smooth" });
            }

            function scrollPrev() {
                scrollContainer.scrollBy({ left: -scrollContainer.clientWidth, behavior: "smooth" });
            }

            nextButton.addEventListener("click", scrollNext);
            prevButton.addEventListener("click", scrollPrev);
        }
    });
}
