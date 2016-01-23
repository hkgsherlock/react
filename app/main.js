import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app.jsx';
import About from './js/about.jsx';
import Index from './js/index.jsx';
import { Router, Route, Link, browserHistory, IndexLink, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
// Opt-out of persistent state, not recommended.
let history = createHistory({
  queryKey: false
});

main();

function main() {
  ReactDOM.render((
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="about" component={About} />
        <Route path="*" component={Index}/>
      </Route>
    </Router>
  ), document.getElementById('app'))
}
