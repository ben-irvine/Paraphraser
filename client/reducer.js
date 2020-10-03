import {ADD_WORDS} from './actions'

var initialState = {
    words: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WORDS:
        return {
          words: action.words
        }
    }
}