import './PageHeader.scss';
import '@components/Button/Button.scss';

function injectPageHeader() {
    document.querySelectorAll(".page-header").forEach((banner) => {
        const {
            bgImage: backgroundImage = "vrwpaviv.elementor.cloud/uploads/2025/01/expressions-exterior-expanded-scaled.webp",
            titleOutlined: titleOutlinedText = "Page",
            titleFilled: titleFilledText = "Title",
            bibleVerseIcon: icon = "assets/svg/ic-quotation-mark.svg",
            bibleVerse: bibleVerseText = "",
            bibleVerseRef: bibleVerseRefText = "",
            showBibleVerse: showBibleVerse = "",
            primaryBtnText: primaryButtonText = "",
            primaryBtnLink: primaryButtonLink = "#",
            showPrimaryBtn: showPrimaryButton = "true",
            secondaryBtnText: secondaryButtonText = "",
            secondaryBtnLink: secondaryButtonLink = "#",
            showSecondaryBtn: showSecondaryButton = "",
            thirdBtnText: thirdButtonText = "",
            thirdBtnLink: thirdButtonLink = "#",
            showThirdBtn: showThirdButton = "",
            fourthBtnText: fourthButtonText = "",
            fourthBtnLink: fourthButtonLink = "#",
            showFourthBtn: showFourthButton = "",
        } = banner.dataset;

        banner.style.background = `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
                                 url('${backgroundImage}') no-repeat center bottom / cover`;

        const createButton = (text, link, show, className) =>
            show !== "false" && text ? `<a href="${link}" class="${className}">${text}</a>` : '';

        const createBibleVerseSection = () => {
            if (showBibleVerse === "false" || !bibleVerseText) return '';
            return `
                <blockquote class="page-header-bible-verse-container">
                    <img src="${icon}" alt="quotation mark" class="page-header-bible-verse-icon"/>
                    <p class="page-header-bible-verse">${bibleVerseText}</p>
                    <p class="page-header-bible-verse-ref">${bibleVerseRefText}</p>
                </blockquote>
            `;
        };

        const buttonsContainer = `
            <div class="page-header-buttons flex-col md:flex">
                ${createButton(primaryButtonText, primaryButtonLink, showPrimaryButton, "btn-primary btn-bg-black")}
                ${createButton(secondaryButtonText, secondaryButtonLink, showSecondaryButton, "btn-secondary btn-bg-white")}
                ${createButton(thirdButtonText, thirdButtonLink, showThirdButton, "btn-secondary btn-bg-white")}
                ${createButton(fourthButtonText, fourthButtonLink, showFourthButton, "btn-secondary btn-bg-white")}
            </div>
        `;

        banner.innerHTML = `
            <div class="content-max-width">
                <h1 class="page-header-title">
                    <span class="outlined">${titleOutlinedText}</span> ${titleFilledText}
                </h1>
                ${createBibleVerseSection()}
                ${buttonsContainer}
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", injectPageHeader);

export { injectPageHeader };

// Usage
