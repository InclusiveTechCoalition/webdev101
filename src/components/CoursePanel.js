import React, { Component } from 'react';
import { Link } from 'react-router';

class CoursePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unfoldedCourse: null
    }
    this.setUnfoldedCourse = this.setUnfoldedCourse.bind(this);
    this.unfoldedCourseClass = this.unfoldedCourseClass.bind(this);
  }

  setUnfoldedCourse(courseTitle) {
    this.setState({unfoldedCourse: courseTitle})
  }

  unfoldedCourseClass(courseTitle) {
    return this.state.unfoldedCourse === courseTitle ? 'unfolded-course' : '';
  }
  render() {
    const course = this.props.course;

    function lessonRoute(lesson) {
      return `/webdev101/course/${course.id}/l/${lesson.route}`;
    }


    return (
      <div className={`course-panel ${this.unfoldedCourseClass(course.title)}`}>
        <Link to={`/webdev101/course/${course.id}/l/${course.lessons[0].route}`}
              className='course-title'>{course.title}
        </Link>
        <span className="fa-stack clickable" onClick={() => this.setUnfoldedCourse(course.title)}>
          <i className="fa fa-circle-thin fa-stack-2x" aria-hidden="true"></i>
          <i className="fa fa-chevron-right fa-stack-1x" aria-hidden="true"></i>
        </span>
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


