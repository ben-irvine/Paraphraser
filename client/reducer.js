import {ADD_WORDS, ADD_SYNONYMS} from './actions'

var initialState = {
    words: [],
    synonyms: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_WORDS:
        return {
            ...state,
          words: action.words
        }
      case ADD_SYNONYMS:
        state.synonyms.push(action.synonyms)
          return {
            ...state,
            synonyms: state.synonyms
          }
      default:
        return state
    }
}