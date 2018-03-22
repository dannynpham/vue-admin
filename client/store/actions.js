import * as types from './mutation-types'
import axios from 'axios'

export const toggleSidebar = ({ commit }, config) => {
  if (config instanceof Object) {
    commit(types.TOGGLE_SIDEBAR, config)
  }
}

export const toggleDevice = ({ commit }, device) => commit(types.TOGGLE_DEVICE, device)

export const expandMenu = ({ commit }, menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}

export const switchEffect = ({ commit }, effectItem) => {
  if (effectItem) {
    commit(types.SWITCH_EFFECT, effectItem)
  }
}

export const storeUsers = ({ commit }, users) => {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      commit('STORE_USERS', res.data)
      resolve(res.data)
    })
    .catch(e => {
      reject(e)
    })
  })
}
