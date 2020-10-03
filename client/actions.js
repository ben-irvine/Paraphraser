export const ADD_WORDS = "ADD_WORDS"

export function addWords(text){
    var words = text.split(' ')

    return {
      type: ADD_WORDS,
      text: words
    }
  }