import React, { Component } from 'react';

class CourseList extends Component {
  render() {

    return (
      <div>
        <h1>Available Courses</h1>
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