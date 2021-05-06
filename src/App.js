import { Provider } from 'react-redux';
import store from '../src/redux/store'
import Home from './components/Home'
import FeaturedAds from './components/FeaturedAds'
import About from './components/About'
import Client from './components/Client'
import Contact from './components/Contact' 

function App() {
  return (
    <Provider store={store}>
    <div>
      <Home />
      <FeaturedAds />
      <About />
      <Client />
      <Contact />
    </div>
    </Provider>
  );
}

export default App;
