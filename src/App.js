import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'




const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Authentication = React.lazy(() => import('./views/pages/blogAuthentication/AuthenticationPage'))
const AuthenticationEditPage  = React.lazy(() => import('./views/pages/blogAuthenticationEdit/AuthenticationEditPage'))
const NewPage = React.lazy(() => import('./views/pages/new page/NewPage'))


class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route exact path="/Authentication" name="Authentication Page" render={(props) => <Authentication {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            <Route exact path="/Authenticationeditpage" name="AuthenticationEditPage" render={(props) => <AuthenticationEditPage {...props} />} /> 
            <Route exact path="/NewPage" name="newPage" render={(props) => <NewPage {...props} />} /> 
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
