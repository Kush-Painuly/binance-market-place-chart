import React from 'react'

const CoinSelector = ({ currentCoin, onCoinChange }) => {
  return (
    <select value={currentCoin} onChange={(e) => onCoinChange(e.target.value)} className="mb-4">
      <option value="ethusdt">ETH/USDT</option>
      <option value="bnbusdt">BNB/USDT</option>
      <option value="dotusdt">DOT/USDT</option>
    </select>
  );
};

export default CoinSelector