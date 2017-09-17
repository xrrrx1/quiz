import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import routes from './routes';

import reducers from './reducers/reduceindex';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.querySelector('#root'));
registerServiceWorker();
