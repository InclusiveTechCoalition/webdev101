import React, { Component } from 'react';

class CourseList extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { courses: this.props.courses }
  // }
  render() {

    return (
      <div>
        <h1>i am list</h1>
        {this.props.courses.map(function(course, idx) {
          return (
            <div className="course-panel" key={idx}>{course.title}</div>
          )
        })}
      </div>
    )
  }
}

export default CourseList;