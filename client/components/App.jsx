import React from 'react'

class App extends React.Component {
  state = {
    text: ''
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <>
        <h1>Paraphraser</h1>
        <h3>They're your words now!</h3>

        <h5>Enter the text you would like to paraphrase below:</h5>
        <form>
          <label htmlFor="text">
            <input name="text" onChange={this.handleChange} size="100" width="1000px" type="text" />
          </label>
          <button onClick={this.handleSubmit}>Paraphrase</button>
        </form>
      </>
    )
  }
}

export default App
