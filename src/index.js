import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './containers/app';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers,composeWithDevTools(
    applyMiddleware(thunkMiddleware) ) );

render(

        <Provider store={store}>
            <App />
        </Provider>,

    document.getElementById('root')
);
registerServiceWorker();
