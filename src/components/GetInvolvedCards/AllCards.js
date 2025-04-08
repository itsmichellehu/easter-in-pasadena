import cardData from "@data/get-involved/cardData.js";

class GetInvolvedCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = Object.keys(cardData)
            .map(id => {
                const data = cardData[id];
                return `
                    <custom-card
                        image="${data.image}"
                        alt-text="${data.altText}"
                        headline="${data.headline}"
                        body-text="${data.bodyText}"
                        primary-button-text="${data.primaryButtonText}"
                        primary-button-link="${data.primaryButtonLink}"
                        ${data.primaryButtonExternal ? 'primary-button-external' : ""}
                        ${data.showSecondaryButton ? 'show-secondary-button' : ""}
                        secondary-button-text="${data.secondaryButtonText || ''}"
                        secondary-button-link="${data.secondaryButtonLink || ''}"
                    ></custom-card>
                `;
            })
            .join(""); // Convert array to a single string
    }
}

customElements.define("get-involved-cards", GetInvolvedCards);
