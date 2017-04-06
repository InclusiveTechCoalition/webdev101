import React from 'react';

const LessonSection = (props) => {
  return (
    <div className="content" dangerouslySetInnerHTML={{__html: props.lesson.html}}></div>
  )
}

export default LessonSection;