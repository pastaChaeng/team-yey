import React, { useState } from 'react';
import Certificate from './Certificate';
import './App.css';

function Gallery() {
  const [count, setCount] = useState(0);

  const certificates = [
    {
      id: 1,
      title: 'Arlene Joy Nacion',
      image: 'https://i.pinimg.com/236x/75/90/7c/75907cc6c28a1c95ae4e50095197a1c1.jpg',
    },
    {
      id: 2,
      title: 'Daniella Espiritu',
      image: 'https://i.pinimg.com/236x/ad/78/5e/ad785e02b18f01b60cf792363cfa06bb.jpg',
    },
    // Add more certificate objects as needed
  ];

  return (
    <div className="vscode-frame">
      <div className="vscode-menubar">
        <div className="vscode-menu-item">File</div>
        <div className="vscode-menu-item">Edit</div>
        <div className="vscode-menu-item">View</div>
        <div className="vscode-menu-item">Help</div>
      </div>
      <div className="vscode-panel vscode-solution-explorer">
      <div className="solution-explorer-content">
  <div className="code-line">
    <span className="code-keyword">function</span> printCertificate(certificate) {'{'}
  </div>
  <div className="code-line indent">
    <span className="code-comment">// Simulating certificate printing</span>
  </div>
  <div className="code-line indent">
    <span className="code-comment">// Code to print the certificate goes here</span>
  </div>
  <div className="code-line indent">
    <span className="code-comment">// For demonstration purposes, let's log the certificate details</span>
  </div>
  <div className="code-line indent">
    <span className="code-comment">// Replace with your actual certificate printing code</span>
  </div>
  <div className="code-line">
    <span className="code-keyword">console</span>.log(<span className="code-string">'Printing certificate: '</span>, certificate.title);
  </div>
  <div className="code-line">
    {'}'}
  </div>
</div>

      </div>
      <div className="vscode-panel vscode-display">
        <header>
          <h1 className="title">President's Lister</h1>
        </header>
        <main>
          <div className="certificate-container">
            <Certificate certificate={certificates[count % certificates.length]} />
          </div>
          <button className="button" onClick={() => setCount(count + 1)}>
            Next
          </button>
        </main>
        <footer>
          <p className="footer-text">© 2023 SBIT-3F. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Gallery;
