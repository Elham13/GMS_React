import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import Home from './components/Home'
import FeaturedAds from './components/FeaturedAds'
import About from './components/About'
import Client from './components/Client'
import Contact from './components/Contact'
import AllAds from './components/AllAds'
import Admin from './components/Admin'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' >
            <Home />
            <FeaturedAds />
            <About />
            <Client />
            <Contact />
          </Route>

          <Route 
            path="/allAds"
            component={AllAds}
          />

          <Route 
            path="/admin"
            component={Admin}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
