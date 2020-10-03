import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

import {addWords} from '../actions'

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
    this.props.dispatch(addWords(this.state.text))
    request.get(`https://api.dictionaryapi.dev/api/v2/entries/en/evil`)
    .then((res) => {
      console.log(res.body[0].meanings[0].definitions[0].synonyms)
    })
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
