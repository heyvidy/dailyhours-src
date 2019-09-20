import React, { Component } from 'react'

export default class BasicInfo extends Component {
  state = {}

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.onSubjectChange(this.state);
    }); 
  }

  render() {
    return (
      <div>
        I have to study <input className="trans-form" name="subjects" type="number" onChange={this.onChange} /> 
        subjects in <input className="trans-form" name="days" type="number" onChange={this.onChange}/> days.
      </div>
    )
  }
}
