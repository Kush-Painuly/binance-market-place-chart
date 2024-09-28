export const selectCoin = (coin) => ({ type: 'SELECT_COIN', payload: coin });
export const selectTimeframe = (timeframe) => ({ type: 'SELECT_TIMEFRAME', payload: timeframe });
export const fetchChartData = (data) => ({ type: 'FETCH_CHART_DATA', payload: data });