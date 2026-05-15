import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Override CRA's default favicon with the Nexus logo mark
const nexusSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#0B0F1A"/>
  <rect x="5" y="5" width="10" height="10" rx="2" fill="#E11D48"/>
  <rect x="17" y="5" width="10" height="10" rx="2" fill="#E11D48" opacity="0.45"/>
  <rect x="5" y="17" width="10" height="10" rx="2" fill="#E11D48" opacity="0.45"/>
  <rect x="17" y="17" width="10" height="10" rx="2" fill="#E11D48"/>
</svg>`;
const blob = new Blob([nexusSvg], { type: 'image/svg+xml' });
const faviconUrl = URL.createObjectURL(blob);
document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.type = 'image/svg+xml';
faviconLink.href = faviconUrl;
document.head.appendChild(faviconLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
