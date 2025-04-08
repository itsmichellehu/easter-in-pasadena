// /Users/michelle/Documents/04_Clients/01_Expressions-Church/Expressions Website/src/components/-chalk-divider/-chalk-divider.js

export function createChalkDivider(variant, className) {
    const hr = document.createElement('hr');
    hr.className = `chalk-divider ${className} ${variant ? `${variant}-chalk-divider` : ''}`;
    return hr;
}

// Example usage:
const divider = createChalkDivider('someVariant', 'someClass');
document.body.appendChild(divider);
