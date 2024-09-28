import React, { useEffect, useState } from "react";
import { createWebSocket } from "./utils/Ws";
import Chart from "./components/Chart";
import CoinSelector from "./components/CoinSelector";
import TimeframeToggle from "./components/TimeframeToggle";

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [coin, setCoin] = useState("ethusdt");
  const [interval, setInterval] = useState("1m");
  const [ws, setWs] = useState(null); // Add state to hold the WebSocket connection

  useEffect(() => {
    // Create a WebSocket connection
    const newWs = createWebSocket(coin, interval);
    setWs(newWs); // Store the new WebSocket connection

    // Event handler when a new message is received
    newWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const candlestick = data.k; // Kline data (candlestick)
      if (candlestick.x) {
        setChartData((prevData) => [...prevData, candlestick]);
      }
    };

    // Error handler for WebSocket connection issues
    newWs.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    // Cleanup the WebSocket connection when the component unmounts or dependencies change
    return () => {
      if (
        newWs.readyState === WebSocket.OPEN ||
        newWs.readyState === WebSocket.CONNECTING
      ) {
        newWs.close(); // Close WebSocket connection gracefully
      }
    };
  }, [coin, interval]); // Reconnect the WebSocket when coin or interval changes

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Binance Market Data</h1>

      <div className="flex space-x-4 mb-6">
        <CoinSelector currentCoin={coin} onCoinChange={setCoin} />
        <TimeframeToggle
          currentInterval={interval}
          onIntervalChange={setInterval}
        />
      </div>

      <Chart data={chartData} />
    </div>
  );
};

export default App;
