import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home from "./components/Home";
import FeaturedAds from "./components/FeaturedAds";
import Services from "./components/Services";
import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import AllAds from "./components/AllAds";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
    return (
        <Provider store={store}>
            <Router basename="/">
                <Switch>
                    <Route exact path="/">
                        <Home />
                        <FeaturedAds />
                        <Services />
                        <Client />
                        <About />
                        <Contact />
                    </Route>

                    <Route path="/allAds" component={AllAds} />

                    <ProtectedRoute path="/admin" component={Admin} />

                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
