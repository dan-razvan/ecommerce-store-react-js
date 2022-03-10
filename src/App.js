import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'

import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        {/* <Route path="/hats/:topicId" component={WhiteHats} /> */}
      </Switch>
    </div>
  )
}

export default App
