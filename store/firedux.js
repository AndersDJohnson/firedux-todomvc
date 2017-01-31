import Firedux from 'firedux'
import firebase from 'firebase'

let session = (() => {
  const match = (window.location.search || '').match(/s=([^&]*)/)
  return match ? match[1] : null
})()

session = session ? session : (() => {
  return (new Date()).getTime() + '-' + Math.floor((Math.random()*100000))
})()

const firebaseApp = firebase.initializeApp({
  databaseURL: 'https://firedux-todomvc.firebaseio.com'
})

const rootRef = firebaseApp.database().ref()

const ref = rootRef.child(`sessions/${session}`)

const firedux = new Firedux({
  ref
})

export default firedux
