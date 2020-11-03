export const ADD_WORDS = "ADD_WORDS"
export const ADD_SYNONYMS = "ADD_SYNONYMS"

export function addWords(words){
    return {
      type: ADD_WORDS,
      words: words
    }
  }

export function addSynonyms(synonyms){
    return {
        type: ADD_SYNONYMS,
        synonyms: synonyms
    }
}