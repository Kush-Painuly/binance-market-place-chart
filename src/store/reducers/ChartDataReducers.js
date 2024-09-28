const initialState = {
    selectedCoin: 'ETH/USDT',
    selectedTimeframe: '1m',
    chartData: [],
  };
  
  const chartDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_COIN':
        return { ...state, selectedCoin: action.payload };
      case 'SELECT_TIMEFRAME':
        return { ...state, selectedTimeframe: action.payload };
      case 'FETCH_CHART_DATA':
        return { ...state, chartData: [...state.chartData, action.payload] };
      default:
        return state;
    }
  };
  
  export default chartDataReducer;