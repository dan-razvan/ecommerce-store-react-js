import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

import 'firebase/compat/firestore'

const config = {
  apiKey: 'AIzaSyDLQqs_4lKMr9v31vsnSR3HVsafUEhWhhE',
  authDomain: 'ecommerce-store-945da.firebaseapp.com',
  projectId: 'ecommerce-store-945da',
  storageBucket: 'ecommerce-store-945da.appspot.com',
  messagingSenderId: '845701799482',
  appId: '1:845701799482:web:7836443756263475d81f03',
  measurementId: 'G-GQL6544P6L',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
