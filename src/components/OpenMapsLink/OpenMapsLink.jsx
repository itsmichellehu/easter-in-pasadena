import React from "react";
import * as styles from "./OpenMapsLink.module.scss";

const OpenMapsLink = ({ address }) => {
    const encodedAddress = encodeURIComponent(address);

    // Map URLs
    const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;
    const googleMapsUrl = `https://maps.google.com/?q=${encodedAddress}`;
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;

    // Detect if user is on iOS Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const handleOpenMaps = (event) => {
        event.preventDefault();

        if (navigator.share && isSafari) {
            // iOS Safari: Use the native share sheet
            navigator.share({
                title: "Open in Maps",
                url: googleMapsUrl, // User can choose their preferred app
            }).catch((error) => console.error("Error sharing:", error));
        } else {
            // Default to Google Maps for other browsers
            window.open(googleMapsUrl, "_blank");
        }
    };

    return (
        <a href="#" onClick={handleOpenMaps} className={styles.addressText}>{address}
        </a>
    );
};

export default OpenMapsLink;
