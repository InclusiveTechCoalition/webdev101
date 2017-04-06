import React, { Component } from 'react';
import { Link } from 'react-router';

class CoursePanel extends Component {
  render() {
    const course = this.props.course;

    function lessonRoute(lesson) {
      return `/webdev101/course/${course.id}/l/${lesson.route}`
    }

    return (
      <div className="course-panel">
        <Link to={`/webdev101/course/${course.id}/l/${course.lessons[0].route}`}>{course.title}
        </Link>
        <ul className='lesson-list'>
          {course.lessons.map((lesson, idx) => {
            return(
              <li className='lesson-list-item' key={idx}>
                <Link to={lessonRoute(lesson)}>{lesson.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CoursePanel;


