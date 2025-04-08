import "./PaperContainer.scss";

export function createPaperContainer({ headline, showDivider = true, content, className }) {
  const section = document.createElement('section');
  section.className = `${className}`;

  // Headline
  if (headline) {
    const h3 = document.createElement('h3');
    h3.className = 'containerHeadline';
    h3.textContent = headline;
    section.appendChild(h3);
  }

  // Divider
  if (showDivider) {
    const divider = document.createElement('div');
    divider.className = 'chalk-divider black';
    section.appendChild(divider);
  }

  // Dynamic Content
  const contentDiv = document.createElement('div');
  contentDiv.innerHTML = content;
  section.appendChild(contentDiv);

  return section;
}