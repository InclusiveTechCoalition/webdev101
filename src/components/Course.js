import React from 'react';
import { getCourse } from '../data/api';

class Course extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      course: null
    }
  }
  
  componentWillMount() {
    getCourse(this.props.match.params.id)
      .then(response => {
        this.setState({ course: response })
      })

    
  }

  render() {
    return (
      <h1>{this.state.course ? this.state.course.title : 'Welcome!'}</h1>
    )
  }
}

export default Course;