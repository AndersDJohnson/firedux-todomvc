import Firedux from 'firedux'

const session = window.location.hash.substr(1) || (() => {
  return (new Date()).getTime() + '-' + Math.floor((Math.random()*100000))
})()

const firedux = new Firedux({
  url: `https://firedux-todomvc.firebaseio.com/sessions/${session}`,
})

export default firedux
