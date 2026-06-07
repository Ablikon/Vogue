import React from 'react';
import './Cover.css';

const Cover = () => {
  return (
    <section className="cover-container">
      <div className="cover-image" style={{ backgroundImage: "url('/assets/cover.png')" }}></div>
      <div className="cover-overlay"></div>
      <div className="cover-content fade-in">
        <div className="cover-top-text">
          <p>SPECIAL EDITION</p>
        </div>
        
        <h1 className="cover-title">ALTYNAI</h1>
        
        <div className="cover-headlines">
          <div className="headline left">
            <h3>THE ART OF PERFECTION</h3>
            <p>Discovering the secrets behind that radiant smile.</p>
          </div>
          <div className="headline right">
            <h3>WINTER MAGIC</h3>
            <p>A beautiful love story told in the snow.</p>
          </div>
        </div>
        
        <div className="cover-bottom-text">
          <p>JUNE 2026 • THE BEAUTY ISSUE</p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
