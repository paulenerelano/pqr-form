import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

// import reducers from './reducers';

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middlewares = [reduxThunk];

export const store = createStore(
  // reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares)),
);
