import * as types from '../mutation-types'

const data = {
  main: 0,
  rightColumnShow: false
}

const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (data) {
    data.main--
  },
  [types.INCREMENT_MAIN_COUNTER] (data) {
    data.main++
  },
  [types.RIGHT_COLUMN_BUTTON_CLICK] (data) {
    data.rightColumnShow = !data.rightColumnShow
  }
}

export default {
  data,
  mutations
}
