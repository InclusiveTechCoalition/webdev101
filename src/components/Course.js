import React from 'react';
import { getCourse } from '../data/api';

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
  }
  
  componentWillMount() {
    getCourse(this.props.match.params.id)
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

  renderLessonSection() {
    if (this.state.currentLesson) {
      return (
        <div className="content" dangerouslySetInnerHTML={{__html: this.state.currentLesson.html}}></div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.course ? this.state.course.title : 'Welcome!'}</h1>

        {this.renderLessonSection()}

        <a href="#" onClick={this.nextLesson}>Move on</a>

      </div>
    )
  }
}

export default Course;