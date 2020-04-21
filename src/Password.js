import React, { Component } from 'react'

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
  'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]; 

const random = (n) => {
  return Math.floor(Math.random() * n)
}

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@ssw0rd' }
  }

  generatePassword(len) {
    const password = []
    for (let i = 0; i < len; i ++) {
      password.push(letters[random(letters.length)])
    }
    this.setState({ password: password.join('') })
  }

  render() {
    return (
      <div>
        <div>{this.state.password}</div>
        <div>
          <button onClick={(e) => {
            this.generatePassword(8)
          }}>Generate</button>
        </div>
      </div>
    )
  }
}

export default Password