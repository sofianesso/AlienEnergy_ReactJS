import React from 'react';
import './Button.css';

// Här definieras olika stilar, storlekar och färger för knappen.
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile'];
const COLOR = ['primary', 'black', 'white'];

// Här definieras själva Button-komponenten.
export const Button = ({
  children,       // Innehållet i knappen (t.ex. en textsträng eller en ikon).
  type,           // Vilken typ av knapp (t.ex. "button" eller "submit").
  onClick,        // Vilken funktion som ska köras när knappen klickas på.
  buttonStyle,    // Vilken stil knappen ska ha (t.ex. "btn--primary" eller "btn--outline").
  buttonSize,     // Vilken storlek knappen ska ha (t.ex. "btn--medium" eller "btn--large").
  buttonColor     // Vilken färg knappen ska ha (t.ex. "primary" eller "blue").
}) => {
  // Här kontrolleras om den valda stilen finns i listan med tillåtna stilar. Om den inte finns används den första stilen i listan istället.
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  // Här kontrolleras om den valda storleken finns i listan med tillåtna storlekar. Om den inte finns används den första storleken i listan istället.
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Här kontrolleras om den valda färgen finns i listan med tillåtna färger. Om den inte finns används inget färgvärde.
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  // Här renderas själva HTML-koden för knappen. Klassen för knappen bestäms av de tre kontrollerna ovan.
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
