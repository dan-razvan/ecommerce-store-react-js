import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { useState } from 'react'
import { auth } from './firebase/firebase.util'

import './App.css'
import { useEffect } from 'react/cjs/react.production.min'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      curentUser: null,
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  // const [currentUser, setCurrentUser] = useState(null)

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user)
  //     console.log(user)
  //   })
  // }, [currentUser])
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SingInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
