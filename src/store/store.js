import thunk from 'redux-thunk';
import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import { elementReducer } from '../reducers/elementReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
  elements: elementReducer,
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)