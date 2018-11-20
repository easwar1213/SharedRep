import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
<App />,

document.getElementById('root'));
registerServiceWorker();
