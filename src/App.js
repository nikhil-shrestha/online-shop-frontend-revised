import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ProductDetails from './pages/product-details/product-details.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
