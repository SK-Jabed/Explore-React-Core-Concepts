import './App.css'
import Todo from './Todo';


function App() {
  return (
    <>
      <h2>Vite + React</h2> 
      <Todo 
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Core Concepts" 
        isDone={false}></Todo>
      <Todo 
        task="Try JSX" 
        isDone={true}></Todo>
      {/* <Device name="Laptop" price="70000"></Device>
      <Device name="Mobile" price="27000"></Device>
      <Device name="Computer" price="30000"></Device>
      <Person></Person>        
      <Student grade="4" score="80"></Student>   
      <Student grade={3} score="60"></Student>   
      <Student></Student>   
      <Developer></Developer>    */}
    </>
  )
}


function Device(props) {
  // console.log(props);
  return <h2>Device Name: {props.name}, Price: {props.price}</h2>
}


function Person() {
  const age = 19;
  const money = 500;
  const person = {name: "Sheikh Jabed"}
  return <h3>I am {person.name}. My age is {age}. I have {money} Taka.</h3>

}

// Destructuring 
const {grade, score} = {grade: "7", score: "99"}


function Student({grade = 5, score = 95}) {
  console.log(grade, score);
  // const age = 19;
  // const money = 500;
  // const person = {name: "Sheikh Jabed", profession: "student"};
  return (
    <div className='student'>
      <h2>I am a Student</h2>
      <p>Grade: {grade}</p>    
      <p>Score: {score}</p>       
    </div>
  )
}


function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid blue",
    borderRadius: "16px"
  }
  return (
    <div style={developerStyle}>
      <h4>Web Developer</h4>
      <p>Coding</p>
    </div>
  )
}


export default App
