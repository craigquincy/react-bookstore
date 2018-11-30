// export const MESSAGES_REQUEST_STARTED = 'MESSAGES_REQUEST_STARTED'
export const UPDATE_BOOKS = 'UPDATE_BOOKS'

const API = process.env.API || 'http://localhost:8082/api'

export const getBooks = () => {
  return async (dispatch) => {
    // dispatch({ type: MESSAGES_REQUEST_STARTED })
    const response = await fetch(`${API}/books`)
    const json = await response.json()
    dispatch({
      type: UPDATE_BOOKS,
      payload: json,
    })
  }
}
