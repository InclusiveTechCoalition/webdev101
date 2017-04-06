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

  setUnfoldedCourse(id) {
    if (this.state.unfoldedCourse === id){
      this.setState({unfoldedCourse: null});
    } else {
      this.setState({unfoldedCourse: id});    
    }
  }

  unfoldedCourseClass(id) {
    return this.state.unfoldedCourse === id ? 'unfolded-course' : '';
  }

  unfoldedCourseArrow(id) {
    return this.state.unfoldedCourse === id ? 'rotated-90' : 'rotated-0';
  }

  render() {
    const course = this.props.course;

    function lessonRoute(lesson) {
      return `/webdev101/course/${course.id}/l/${lesson.route}`;
    }

    return (
      <div className={`course-panel ${this.unfoldedCourseClass(course.id)}`}>
        <Link to={`/webdev101/course/${course.id}/l/${course.lessons[0].route}`}
              className='course-title'>{course.title}
        </Link>


        <i className={`fa fa-chevron-circle-right clickable show-lessons-arrow ${this.unfoldedCourseArrow(course.id)}`} onClick={() => this.setUnfoldedCourse(course.id)}>
        </i>


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


