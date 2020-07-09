import './index.less'
import React from 'react'
import {render} from 'react-dom'
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./reducers";

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)