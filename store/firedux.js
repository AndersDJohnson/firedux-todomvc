import Firedux from 'firedux'

const firedux = new Firedux({
  // url: 'https://firedux-todomvc.firebaseio.com/sessions/' + (new Date()).getTime(),
  url: 'https://firedux-todomvc.firebaseio.com/sessions/default',
})

export default firedux