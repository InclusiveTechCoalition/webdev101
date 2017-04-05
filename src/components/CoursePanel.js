import React, { Component } from 'react';
import { Link } from 'react-router';

class CoursePanel extends Component {
  render() {
    return (
      <div className="course-panel">
        <Link to={`/webdev101/course/${this.props.course.id}`}>{this.props.course.title}
        </Link>
        <ul className='lesson-list'>
          {this.props.course.lessons.map((lesson) => {
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


