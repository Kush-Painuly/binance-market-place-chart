import React from 'react';

const TimeframeToggle = ({ currentInterval, onIntervalChange }) => {
  return (
    <select value={currentInterval} onChange={(e) => onIntervalChange(e.target.value)} className="mb-4">
      <option value="1m">1 Minute</option>
      <option value="3m">3 Minutes</option>
      <option value="5m">5 Minutes</option>
    </select>
  );
};

export default TimeframeToggle;