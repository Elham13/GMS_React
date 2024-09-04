import { Switch, Route } from "react-router-dom";

import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import Home from "./components/Home";
import FeaturedAds from "./components/FeaturedAds";
import About from "./components/About";
import Client from "./components/Client";
import Contact from "./components/Contact";
import AllAds from "./components/AllAds";
import Admin from "./components/Admin";
import Login from "./components/Login";
import SingleProduct from "./components/partials/SingleProduct";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <FeaturedAds />
        <Client />
        <About />
        <Contact />
      </Route>

      <Route path="/allAds" component={AllAds} />
      <Route path="/product-details/:id" component={SingleProduct} />

      <AdminProtectedRoute path="/admin" component={Admin} />

      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
