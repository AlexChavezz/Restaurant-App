import thunk from 'redux-thunk';
import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import { elementReducer } from '../reducers/elementReducer';
import { cartReducer } from '../reducers/cartReducer';
import { buyReducer } from '../reducers/buyReducer';
import { authReducer } from '../reducers/authReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
  auth:authReducer,
  elements: elementReducer,
  cart: cartReducer,
  buy: buyReducer,
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)
