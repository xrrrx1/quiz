import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App'

import reducers from './reducers/reduceindex';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
