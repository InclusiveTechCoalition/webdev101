// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { getCourse, getCourses } from './data/api'

// import Course from './components/Course';
// import HomePage from './components/CourseList';


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: []
//     }
//   }

//   componentWillMount (){
//     getCourses().then(response => {
//       this.setState({ courses: response.courses })
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>
//         <HomePage />
//         <Course />
//       </div>
//     );
//   }
// }

// export default App;
