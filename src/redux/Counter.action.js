export const incrementActionCreator = (payload) => {
  return {
    type: 'INCREMENT_COUNTER',
    payload
  }
}

export const decrementActionCreator = (payload) => {
  return {
    type: 'DECREMENT_COUNTER',
    payload
  }
}

export const resetActionCreator = () => {
  return {
    type: 'RESET_COUNTER',
    payload: 0
  }
}

export const fetchPostActionCreator = () => {
  return {
    type: 'FETCH_POSTS'
  }
}

export const resolvePostsActionCreator = (payload) => {
  return {
    type: 'RESOLVE_POSTS',
    payload
  }
}

export const rejectPostsActionCreator = (error) => {
  return {
    type: 'REJECT_POSTS',
    error
  }
}