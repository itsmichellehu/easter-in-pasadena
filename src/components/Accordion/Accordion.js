import "./Accordion.scss";

export function createAccordion({ title = "Default Title", content = "" } = {}) {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");

    // Header Button
    const header = document.createElement("button");
    header.classList.add("accordion-header");
    header.setAttribute("aria-expanded", "false");

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const icon = document.createElement("span");
    icon.classList.add("accordion-icon");
    icon.textContent = "+";

    header.appendChild(titleElement);
    header.appendChild(icon);

    // Content
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("accordion-content");
    contentContainer.innerHTML = `<p>${content}</p>`;

    // Toggle Functionality
    header.addEventListener("click", () => {
        const isOpen = header.getAttribute("aria-expanded") === "true";
        header.setAttribute("aria-expanded", (!isOpen).toString());
        contentContainer.classList.toggle("open", !isOpen);
        icon.textContent = isOpen ? "+" : "-";
    });

    // Append elements
    accordion.appendChild(header);
    accordion.appendChild(contentContainer);

    return accordion;
}