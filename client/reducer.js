import {ADD_WORDS, addWords} from './actions'

var initialState = {
    words: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WORDS:
        return {
          ...state,
          words: [action.text]
        }
    }
}