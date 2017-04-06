import React, { Component } from 'react';
import '../App.css';
import { getCourses } from '../data/api'

import CourseList from './CourseList'

import '../../css/home.css'


class HomePage extends Component {

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
        <CourseList courses={this.state.courses}></CourseList>
        <div className="col-left">
          <div className="information">
            <h2>About the courses</h2>
            <p>WWCode Web Dev is a series of mini-tutorials that provide the structure and foundation needed to build modern websites. There will be walkthroughs and resources provided to build a foundation of knowledge and encourage devs to customize and enhance their work.</p>
          
            <p>The initial series will cover HTML/CSS, Jekyll, and the necessary developer tools to run it all. After following the series, developers will have a production ready website. Join us at Stoke Denton for the brown-bag lunch study group experience. Tutorials will be posted for those who can't make it. See you there!</p>
          </div>
          <div className="information">
            <h2>About Women Who Code</h2>
            <p>Women Who Code (WWCode) is global non-profit dedicated to inspiring women to excel in technology careers. We work to support this generation in being and becoming leaders and role models in the tech industry.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;