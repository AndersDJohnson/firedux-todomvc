import Firedux from 'firedux'

let session = (() => {
  const match = (window.location.search || '').match(/s=([^&]*)/)
  return match ? match[1] : null
})()

session = session ? session : (() => {
  return (new Date()).getTime() + '-' + Math.floor((Math.random()*100000))
})()

const firedux = new Firedux({
  url: `https://firedux-todomvc.firebaseio.com/sessions/${session}`,
})

export default firedux
