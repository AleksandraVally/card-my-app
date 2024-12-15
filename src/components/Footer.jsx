import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Сладкий полураспад</p>
        <ul className="footer-links">
          <li>
            <a href="https://t.me/sladkiipolyraspad" target="_blank" rel="noopener noreferrer">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
