import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SingInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
