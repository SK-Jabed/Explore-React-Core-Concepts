import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1> 
      <Device name="Laptop" price="70000"></Device>
      <Device name="Mobile" price="27000"></Device>
      <Device name="Computer" price="30000"></Device>
      <Person></Person>        
      <Student grade="4" score="80"></Student>   
      <Student grade="3" score="60"></Student>   
      <Student grade="7" score="100"></Student>   
      <Developer></Developer>   
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


function Student(props) {
  console.log(props);
  const age = 19;
  const money = 500;
  const person = {name: "Sheikh Jabed", profession: "student"};
  return (
    <div className='student'>
      <h2>I am a Student</h2>
      <p>Name: {person.name}</p>    
      <p>Age: {age}</p>    
      <p>Money: {money}</p>    
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
