import "./Button.scss";

export function createButton({ href = "#", text = "Click me", variant = "default", className = "btn-primary" }) {
  const button = document.createElement("a");
  button.href = href;
  button.className = `${variant} ${className}`.trim();
  button.textContent = text;

  return button;
}
