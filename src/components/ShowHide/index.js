import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showHideStatusFirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      return (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    }
    return null
  }

  showHideStatusLastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      return (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    }
    return null
  }

  firstNameStatus = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameStatus = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="button-name-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameStatus}
            >
              Show/Hide FirstName
            </button>
            {this.showHideStatusFirstName()}
          </div>
          <div className="button-name-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameStatus}
            >
              Show/Hide LastName
            </button>
            {this.showHideStatusLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
