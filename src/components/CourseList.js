import React, { Component } from 'react';

import CoursePanel from './CoursePanel';

class CourseList extends Component {
  render() {
    return (
      <div className='course-list information'>
        <h2>Available Courses</h2>
        {this.props.courses.map(function(course, idx) {
          return (
            <CoursePanel course={course} key={idx} />
          )
        })}
      </div>
    )
  }
}

export default CourseList;