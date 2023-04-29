export const counterReducer = (counterState = 0, action) => {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return action.payload;
    case 'DECREMENT_COUNTER':
      return action.payload
    case 'RESET_COUNTER':
      return action.payload;
    default:
      return counterState;
  }
}