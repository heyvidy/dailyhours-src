import React, { Component } from 'react'

export default class SubjectFormItem extends Component {
   state = {}

   onChange=(e) => {
       this.setState({ [e.target.name]: e.target.value }, () => {
           this.props.onSubChange(this.state);
        //    console.log(this.state);
       }); 
   }

  render() {
    return (
        <div className="subject-info-form">
            It takes  
            <input className="trans-form" type="number" name={"time" + this.props.index} placeholder="hours" onChange={this.onChange}/>  
            hours to study 
            <input className="trans-form" type="text" name={"subject" + this.props.index} placeholder={"Subject " + this.props.index} onChange={this.onChange}/>
        </div>
    )
  }
}
