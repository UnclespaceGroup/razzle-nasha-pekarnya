import { combineReducers, createStore } from 'redux'
import { reducer as remoteDataReducer } from '@aic/react-remote-data-provider'
import deviceReducer from './deviceReducer'
import basketReducer from './basketReducer'
import userDataReducer from './userDataReducer'

export const configureStore = ({ device } = {}) => {
  const rootReducer = combineReducers({
    basket: basketReducer,
    remoteData: remoteDataReducer,
    device: deviceReducer,
    userData: userDataReducer
  })

  return createStore(rootReducer, {
    device
  })
}
