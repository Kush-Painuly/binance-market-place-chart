// utils/Ws.js
export const createWebSocket = (coin, interval) => {
  const url = `wss://stream.binance.com:9443/ws/${coin}@kline_${interval}`;
  let ws;

  const connect = () => {
    ws = new WebSocket(url);

    ws.onopen = () => {
      console.log(`WebSocket connection opened for ${coin} with ${interval}`);
    };

    ws.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed. Retrying...");
      setTimeout(connect, 3000); // Reconnect after 3 seconds
    };
  };

  connect();
  return ws;
};
