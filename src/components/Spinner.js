import React from 'react';

const SkeletonCard = () => (
  <div className="nm-skeleton-card">
    <div className="nm-skeleton" style={{ height: '190px' }} />
    <div style={{ padding: '18px' }}>
      <div className="nm-skeleton" style={{ height: '11px', width: '55%', marginBottom: '14px' }} />
      <div className="nm-skeleton" style={{ height: '18px', marginBottom: '8px' }} />
      <div className="nm-skeleton" style={{ height: '18px', width: '85%', marginBottom: '14px' }} />
      <div className="nm-skeleton" style={{ height: '13px', marginBottom: '6px' }} />
      <div className="nm-skeleton" style={{ height: '13px', width: '70%', marginBottom: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="nm-skeleton" style={{ height: '11px', width: '35%' }} />
        <div className="nm-skeleton" style={{ height: '32px', width: '80px', borderRadius: '50px' }} />
      </div>
    </div>
  </div>
);

const Spinner = () => (
  <div className="row g-4 my-1">
    {[1, 2, 3].map(i => (
      <div className="col-lg-4 col-md-6" key={i}>
        <SkeletonCard />
      </div>
    ))}
  </div>
);

export default Spinner;
