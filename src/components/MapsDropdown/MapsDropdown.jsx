import React, { useState } from "react";
import * as styles from "./MapsDropdown.module.scss";

const MapsDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const address = "2540 E. Orange Grove Blvd, Pasadena, CA 91107";
    const encodedAddress = encodeURIComponent(address);

    // Map URLs for different services
    const googleMapsUrl = `https://maps.google.com/?q=${encodedAddress}`;
    const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;
    const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;

    return (
        <div className={styles.mapsDropdown}>
            <button className={styles.mapsButton} onClick={() => setShowDropdown(!showDropdown)}>
                📍 Open in Maps
            </button>

            {showDropdown && (
                <div className={styles.mapsDropdownMenu}>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">🌍 Google Maps</a>
                    <a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">🍏 Apple Maps</a>
                    <a href={wazeUrl} target="_blank" rel="noopener noreferrer">🚗 Waze</a>
                </div>
            )}
        </div>
    );
};

export default MapsDropdown;
