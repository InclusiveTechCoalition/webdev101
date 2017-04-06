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
        <Link to={`/webdev101/course/${course.id}/l/${course.lessons[0].route}`}
              className='course-title'>{course.title}
        </Link>
        <ul className='lesson-list'>
          {course.lessons.map((lesson, idx) => {
            return(
              <Link to={lessonRoute(lesson)} className='lesson-list-link' key={idx}>
                <li className='lesson-list-item'>
                  {lesson.title}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CoursePanel;


