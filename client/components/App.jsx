import React from 'react'
import { connect } from 'react-redux'
import { request } from 'superagent'

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
    event.preventDefault()
    console.log(this.state.text)
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

const mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps)(App)
