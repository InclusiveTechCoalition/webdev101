import React from 'react';
import { Link } from 'react-router';
import { getCourse } from '../data/api';

import '../../css/course.css';

import LessonSection from './LessonSection';

class Course extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      currentLesson: null,
      lessons: []
    }
    this.renderLessonSection = this.renderLessonSection.bind(this);
    this.setNewLesson = this.setNewLesson.bind(this);
    this.nextLessonRoute = this.nextLessonRoute.bind(this);
    this.prevLessonRoute = this.prevLessonRoute.bind(this);
    this.renderLeftArrow = this.renderLeftArrow.bind(this);
    this.renderRightArrow = this.renderRightArrow.bind(this);
  }
  

  // LIFECYCLE

  componentWillMount() {
    const lessonFromRoute = (lesson) => {
      return lesson.route === this.props.params.lessonRoute;
    }

    getCourse(this.props.params.id)
      .then(response => {
        this.setState({
          course: response,
          lessons: response.lessons,
          currentLesson: response.lessons.find(lessonFromRoute)
        })
      })
  }

  componentDidUpdate() {
    if (this.props.params.lessonRoute !== this.state.currentLesson.route) {
      this.setNewLesson();
      window.scrollTo(0, 0);
    }
  }


  // STATE HELPERS

  setNewLesson() {
    const newLesson = this.state.lessons.find((lesson) => {
      return lesson.route === this.props.params.lessonRoute;
    });

    this.setState({currentLesson: newLesson});
  }


  // UTILITY

  nextLessonRoute() {
    const nextLesson = this.state.lessons.find((lesson) => {
      return lesson.order === this.state.currentLesson.order + 1;
    })

    return nextLesson.route;
  }

  prevLessonRoute() {
    const prevLesson = this.state.lessons.find((lesson) => {
      return lesson.order === this.state.currentLesson.order - 1;
    })

    return prevLesson.route;
  }


  // RENDERING

  renderLessonSection() {
    if (this.state.currentLesson) {
      return (
        <LessonSection lesson={this.state.currentLesson} />
      )
    }
  }

  renderLeftArrow() {
    const currentLesson = this.state.currentLesson;
    const course = this.state.course;

    if (currentLesson && currentLesson.order > 0) {
      return (
        <Link to={`/webdev101/course/${course.id}/l/${this.prevLessonRoute()}`} className='arrow'>&larr; Prev
        </Link>
      )
    }
  }

  renderRightArrow() {
    const currentLesson = this.state.currentLesson;
    const course = this.state.course;

    if (currentLesson && currentLesson.order < this.state.lessons.length - 1) {
      return (
        <Link to={`/webdev101/course/${course.id}/l/${this.nextLessonRoute()}`} className='arrow'>Next &rarr;
        </Link>
      )
    }
  }

  render() {
    return (
      <div className='course'>
        <h1 className='title'>{this.state.course ? this.state.course.title : 'Welcome!'}</h1>

        {this.renderLessonSection()}

        <div className="direction-buttons">
          {this.renderLeftArrow()}
          {this.renderRightArrow()}
        </div>

      </div>
    )
  }
}

export default Course;