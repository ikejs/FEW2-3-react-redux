import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPassword } from './actions'

const letters = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,'Z', 'Y', 'X', 
  'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 
  'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 
  'G', 'F', 'E', 'D', 'C', 'B', 'A'
]; 

const random = (n) => {
  return Math.floor(Math.random() * n)
}

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      password: "p@ssw0rd",
      name: "Facebook" 
    }
  }

  generatePassword() {
    const password = []
    for (let i = 0; i < 3; i ++) {
      password.push(letters[random(letters.length)])
    }
    password.push("-");
    for (let i = 0; i < 3; i ++) {
      password.push(letters[random(letters.length)])
    }
    password.push("-");
    for (let i = 0; i < 3; i ++) {
      password.push(letters[random(letters.length)])
    }
    this.setState({ password: password.join('') })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => {
          this.setState({ name: e.target.value })
          }}
        />
        <input type="text" value={this.state.password} onChange={(e) => {
          this.setState({ password: e.target.value })
          }}
        />
        <div>
          <button onClick={(e) => {
            this.generatePassword()
          }}>Generate</button>
        </div>
        <div>
          <button onClick={(e) => {
            this.props.addPassword(this.state.name, this.state.password)
          }}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
    addPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Password)
