import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CoursePanel extends Component {
  render() {
    return (
      <div className="course-panel">
        <Link to={`/webdev101/course/${this.props.course.id}`}>{this.props.course.title}
        </Link>
        <ul class='lesson-list'>
          {this.props.course.lessons.map((lesson) => {
            return(
              <li className='lesson-list-item'>{lesson.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CoursePanel;


