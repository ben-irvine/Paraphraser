import React from 'react'

const App = () => {
  return (
    <>
      <h1>Paraphraser</h1>
      <h3>They're your words now!</h3>

      <h5>Enter the text you would like to paraphrase below:</h5>
      <form>
        <label htmlFor="text">
          <input size="100" width="1000px" type="text" />
        </label>
        <label htmlFor="submit">
          <input type="submit" value="Submit"></input>
        </label>
      </form>
    </>
  )
}

export default App
