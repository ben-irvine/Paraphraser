export const ADD_WORDS = "ADD_WORDS"

export function addWords(text){
    return {
      type: ADD_WORDS,
      text: text 
    }
  }