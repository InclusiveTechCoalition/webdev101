import React, { Component } from 'react';
import { Link } from 'react-router';

class CoursePanel extends Component {
  render() {
    const course = this.props.course;

    return (
      <div className="course-panel">
        <Link to={`/webdev101/course/${course.id}/l/${course.lessons[0].route}`}>{course.title}
        </Link>
        <ul className='lesson-list'>
          {course.lessons.map((lesson) => {
            return(
              <li className='lesson-list-item' key={lesson.id}>{lesson.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CoursePanel;


