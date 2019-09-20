import React, { Component } from 'react'
import SubjectFormItem from './SubjectFormItem';

export default class SubjectsForm extends Component {
  render() {
    var counters =[]
    if (this.props.count > 0 && this.props.count <= 12) {
      var counts = [...Array(parseInt(this.props.count)).keys()];
      for (let i of counts) {
        counters.push(i+1);
      }
    }
 
    return counters.map(index => (
      <SubjectFormItem key={index} index={index} onSubChange={this.props.onSubChange} />
    ));
  }
}
