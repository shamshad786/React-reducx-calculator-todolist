import React from "react";
import ReactDom from "react-dom";
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import store from './store'
import {BrowserRouter} from 'react-router-dom'



store.subscribe(()=> console.log(store.getState()));

ReactDom.render(
    <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

