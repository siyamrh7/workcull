import React, { Component } from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import './scss/style.scss';
import Privacy from './views/pages/Privacy/Privacy';
import Terms from './views/pages/Terms/Terms'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Home = React.lazy(() => import('./views/pages/Home/Home'));

const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
              <Route path="/workcull" name="Home" render={props => <TheLayout {...props}/>} />
              <Route path="/privacy" component={Privacy}/>
              <Route path="/terms" component={Terms}/>
              <Route component={Page500}/>
            </Switch>
          </React.Suspense>
      </Router>
    );
  }
}

export default App;
