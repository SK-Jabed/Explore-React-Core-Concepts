import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Player from './Player';
import BookStore from './BookStore';


function App() {
  const actors = ["SRK", "Salman", "Amir", "Akshay"]

  const books = [
    {id: 1, name: "English", price: 220},
    {id: 2, name: "Mathematics", price: 280},
    {id: 3, name: "Physics", price: 250},
    {id: 4, name: "Biology", price: 300}
  ]

  const players = [
    {name: "Messi", age: "37"},
    {name: "CR7", age: "39"},
    {name: "Neymar", age: "32"}
  ]
  return (
    <>
      <h2>Vite + React</h2> 
      
      <BookStore books={books}></BookStore>

      {
        players.map(player => <Player player={player}></Player>)
      }
      
      
      <Actor name={"Srk"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo 
        task="Learn React" 
        isDone={true}></Todo>
      <Todo 
        task="Core Concepts" 
        isDone={false}></Todo>
      <Todo 
        task="Try JSX" 
        isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="70000"></Device>
      <Device name="Mobile" price="27000"></Device>
      <Device name="Computer" price="30000"></Device>
      <Person></Person>        
      <Student grade="4" score="80"></Student>   
      <Student grade={3} score="60"></Student>   
      <Student></Student>   
      <Developer></Developer> */}
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
