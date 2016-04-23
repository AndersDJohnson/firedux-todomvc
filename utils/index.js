import _ from 'lodash'

export function firebaseToArray(items) {
  return _(items).map((item, id) => {
    item = _.cloneDeep(item)
    item.id = id
    return item
  }).values().value()
}
