import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { browserHistory, Router } from 'react-router';

import Store from './Store';
import routes from './routes';

const node =  document.getElementById('root');

ReactDOM.render(
    <Provider store={Store}>   
      		{routes}
    </Provider>,
    node
);
