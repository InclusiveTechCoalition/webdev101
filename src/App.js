import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCourse, getCourses } from './data/api'

import CourseList from './components/CourseList'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentWillMount (){
    getCourses().then(response => {
      this.setState({ courses: response.courses })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <CourseList courses={this.state.courses}></CourseList>
      </div>
    );
  }
}

export default App;
