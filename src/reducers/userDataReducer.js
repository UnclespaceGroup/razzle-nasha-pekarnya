import { isBrowser } from 'utils'
const USER_DATA = 'USER_DATA'

const initialState = isBrowser ? JSON.parse(sessionStorage.getItem(USER_DATA)) : {}

export default function UserDataReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER_DATA': {
      sessionStorage.setItem(USER_DATA, JSON.stringify(action.payload))

      return action.payload
    }

    case 'CLEAR_USER_DATA': {
      sessionStorage.setItem(USER_DATA, undefined)
      return {}
    }

    default:
      return state
  }
}
