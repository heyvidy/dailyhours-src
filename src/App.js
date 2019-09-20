import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import SubjectsForm from './components/SubjectsForm';
import { PieChart } from 'react-easy-chart';

class App extends Component {
  state = {
    subjectdetails: {},
    plotData: [],
    days: 0,
    total_taken: 0
  }


  // On Main Premise Change
  onSubjectChange = (s) => {
    this.setState(s, () => {
      this.setState({ total: parseInt(this.state.days) * 10 }, () => {
        console.log(this.state);
        this.updatePlotData();
      });
    });
  }



  // Update Plot Data
  updatePlotData = () => {
    let plotData = [];
    for (let prop in this.state.subjectdetails) {
      if (prop.startsWith('time')) {
        plotData.push({ key: this.state.subjectdetails["subject" + prop.slice(-1)], value: this.state.subjectdetails[prop] })
      }
    }

    plotData.push({ key: "Free Time", value: this.state.total - this.state.total_taken, color:"#1abc9c"});

    this.setState({ plotData: plotData });
    console.log(this.state.total, this.state.total_taken);
  }


  //  Calcuate update total time Available based on days
  calculateTotal = () => {
    var total_taken = 0
    for (let prop in this.state.subjectdetails) {
      if (prop.startsWith('time')) {
        total_taken = total_taken + parseInt(this.state.subjectdetails[prop]);
      }
    }
    this.setState({ total_taken: total_taken, total: (10 * parseInt(this.state.days)) }, () => {
      this.updateFreeTime();
      this.updatePlotData();

    });
  }


  // Update Free Time in state
  updateFreeTime = () => this.setState({ plotData: [{ key: "Free Time", value: this.state.total - this.state.total_taken, color: "#1abc9c"}] });



  // Update State on Subject Detail Change
  onSubDetailChange = (status) => {
    this.setState({
      subjectdetails: extend(this.state.subjectdetails, status)
    }, () => {

      this.calculateTotal();
    });

  }




  render() {
    return (
      <div className="cover-bg">
        <Header /><br></br> 
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <BasicInfo onSubjectChange={this.onSubjectChange} /><br></br>
              <p><b>Note: </b>Considers you have 10 Free Hours Per Day.</p><br></br>
              <SubjectsForm count={this.state.subjects} onSubChange={this.onSubDetailChange} />
              <br></br>

            </div>
            <div className="col-md-6">
              <PieChart
                labels
                size={400}
                innerHoleSize={200}
                data={this.state.plotData}
              />

            </div>
          </div>
        </div>

      </div>
    );
  }
}

function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

export default App;