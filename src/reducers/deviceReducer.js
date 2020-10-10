const initialState = {
  currentDevice: '',
  isLarge: false,
  isSmall: false
}

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DEVICE':
      return {
        ...action.payload
      }

    default:
      return state
  }
}

export default deviceReducer
