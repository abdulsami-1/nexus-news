import React from 'react';
import { User, Clock, Star } from 'lucide-react';

const PLACEHOLDER = 'https://placehold.co/800x450/0b0f1a/475569?text=Nexus';

const fmt = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const onImgError = (e) => { e.target.src = PLACEHOLDER; };

const NewsItems = ({ title, description, imageUrl, newsUrl, author, date, source, hero }) => {
  const img = imageUrl || PLACEHOLDER;

  if (hero) {
    return (
      <div className="nm-hero-card nm-animate-in">
        <div className="nm-hero-img-wrapper">
          <img src={img} className="nm-hero-img" alt={title} onError={onImgError} />
        </div>
        <div className="nm-hero-body">
          <div>
            <div className="nm-featured-badge">
              <Star size={11} strokeWidth={2.5} fill="currentColor" />
              Featured Story
            </div>
            <div className="nm-hero-source">{source}</div>
            <h2 className="nm-hero-title">{title}</h2>
            <p className="nm-hero-description">{description}</p>
          </div>
          <div className="nm-hero-footer">
            <div className="nm-meta-group">
              <span className="nm-card-meta">
                <User size={11} strokeWidth={2} /> {author || 'Unknown'}
              </span>
              <span className="nm-card-meta">
                <Clock size={11} strokeWidth={2} /> {fmt(date)}
              </span>
            </div>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="nm-read-btn">
              Read Story →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="nm-card nm-animate-in">
      <div className="nm-card-img-wrapper">
        <img src={img} className="nm-card-img" alt={title} onError={onImgError} />
        <span className="nm-source-badge">{source}</span>
      </div>
      <div className="nm-card-body">
        <h5 className="nm-card-title">{title}</h5>
        <p className="nm-card-description">{description}</p>
        <div className="nm-card-footer">
          <div className="nm-meta-group">
            <span className="nm-card-meta">
              <User size={11} strokeWidth={2} /> {author || 'Unknown'}
            </span>
            <span className="nm-card-meta">
              <Clock size={11} strokeWidth={2} /> {fmt(date)}
            </span>
          </div>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="nm-read-btn">
            Read →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
