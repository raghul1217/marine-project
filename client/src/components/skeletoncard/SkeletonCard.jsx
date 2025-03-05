// SkeletonCard.js
import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text small"></div>
    <div className="skeleton-text small"></div>
  </div>
);

export default SkeletonCard;
