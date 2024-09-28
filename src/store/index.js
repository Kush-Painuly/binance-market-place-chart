import { createStore, combineReducers } from 'redux';
import chartDataReducer from './reducers/chartDataReducer';

const rootReducer = combineReducers({
  chartData: chartDataReducer,
});

const store = createStore(rootReducer);

export default store;