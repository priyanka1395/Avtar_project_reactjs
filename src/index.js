import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Avatar />, document.getElementById('root'));
serviceWorker.unregister();
