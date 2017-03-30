import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseList extends Component {
  render() {

    return (
      <div>
        <h1>Available Courses</h1>
        {this.props.courses.map(function(course, idx) {
          return (
            <div className="course-panel" key={idx}>
              <Link to={`course/${course.id}`}>{course.title}
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CourseList;