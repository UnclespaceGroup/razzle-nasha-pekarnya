import { isBrowser } from 'utils'
const PURCHASES = 'PURCHASES'

const initialState = isBrowser ? JSON.parse(localStorage.getItem(PURCHASES)) : {}

export default function BasketReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PURCHASE': {
      const _state = Object.assign({}, state)
      _state[action.payload.id] = action.payload
      localStorage.setItem(PURCHASES, JSON.stringify(_state))
      return _state
    }

    case 'ADD_NUMBER_PURCHASE': {
      const { id, count = 0 } = action.payload
      const _state = Object.assign({}, state)
      if (_state[id]) {
        _state[id] = {
          ..._state[id], count: count
        }
      } else {
        _state[id] = {
          ...action.payload,
          count: 1
        }
      }
      localStorage.setItem(PURCHASES, JSON.stringify(_state))
      return _state
    }

    case 'REMOVE': {
      const _state = Object.assign({}, state)
      delete _state[action.payload]
      console.log(_state)
      localStorage.setItem(PURCHASES, JSON.stringify(_state))
      return _state
    }

    default:
      return state
  }
}
