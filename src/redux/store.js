import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import reducers from './reducers'

const isBrowser = (typeof window !== 'undefined');

export default function configureStore(initialState, {req, res} = {}) {

    if (!initialState && req) {
        initialState = 'initial'
    }

    console.log('Store created with initial state', initialState);

    let middlewares = [
        promiseMiddleware({
            promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
        }),
        thunk
    ];

    if (isBrowser) {
        middlewares.push(createLogger({
            collapsed: true
        }));
    }

    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            isBrowser && window['devToolsExtension'] ? window['devToolsExtension']() : f => f
        )
    );

}