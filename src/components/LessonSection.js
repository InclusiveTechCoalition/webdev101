import React from 'react';

class LessonSection extends React.Component {
  
  // componentWillUpdate() {
  //   console.log('will update')
  // }

  // componentDidUpdate() {
  //   console.log('did update')
  // }

  // componentWillReceiveProps() {
  //   console.log('received props')
  // }

  render() {
    return (
      <div className="content" dangerouslySetInnerHTML={{__html: this.props.lesson.html}}></div>
    )
  }
}

export default LessonSection;