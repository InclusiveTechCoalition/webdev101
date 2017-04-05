import React, { Component } from 'react';
import './App.css';
// import { getCourse, getCourses } from './data/api'

import Header from './Header';
// import Course from './components/Course';
// import HomePage from './components/CourseList';


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     courses: []
  //   }
  // }

  // componentWillMount (){
  //   getCourses().then(response => {
  //     this.setState({ courses: response.courses })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Header />

        {this.props.children}
      </div>
    );
  }
}

export default App;
