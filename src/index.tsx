import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './App.css';  // Add this line if `App.css` contains important styles
import AkaConsultingWebsite from './aka-consulting.website.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AkaConsultingWebsite />
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

