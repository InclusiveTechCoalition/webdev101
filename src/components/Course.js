import React from 'react';
import { getCourse } from '../data/api';

import '../../css/course.css'

class Course extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      currentLesson: null,
      lessons: []
    }
    this.renderLessonSection = this.renderLessonSection.bind(this);
    this.nextLesson = this.nextLesson.bind(this);
    this.prevLesson = this.prevLesson.bind(this);
  }
  
  componentWillMount() {
    getCourse(this.props.params.id)
      .then(response => {
        console.log(response)
        this.setState({
          course: response,
          lessons: response.lessons,
          currentLesson: response.lessons[0]
        })
      })
  }

  nextLesson(e) {
    e.preventDefault();
    const currentLesson = { ...this.state.currentLesson };
    const nextIndex = (currentLesson.order + 1) % this.state.lessons.length;
    this.setState({
      currentLesson: this.state.lessons[nextIndex]
    })
  }

  prevLesson(e) {
    e.preventDefault();
    const currentLesson = { ...this.state.currentLesson };
    let prevIndex = (currentLesson.order - 1);
    prevIndex = prevIndex < 0 ? this.state.lessons.length - 1 : prevIndex
    this.setState({
      currentLesson: this.state.lessons[prevIndex]
    })
  }

  renderLessonSection() {
    if (this.state.currentLesson) {
      return (
        <div className="content" dangerouslySetInnerHTML={{__html: this.state.currentLesson.html}}></div>
      )
    }
  }

  render() {
    return (
      <div className='course'>
        <h1 className='title'>{this.state.course ? this.state.course.title : 'Welcome!'}</h1>

        {this.renderLessonSection()}

        <div className="direction-buttons">
          <a href="#" className='arrow' onClick={this.prevLesson}>Prev &larr;</a>
          <a href="#" className='arrow' onClick={this.nextLesson}>&rarr; Next</a>
        </div>

      </div>
    )
  }
}

export default Course;