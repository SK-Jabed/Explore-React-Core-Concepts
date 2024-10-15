import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1> 
      <Person></Person>    
      <Person></Person>    
      <Student></Student>   
    </>
  )
}


function Person() {
  const age = 19;
  const money = 500;
  const person = {name: "Sheikh Jabed"}
  return <h3>I am {person.name}. My age is {age}. I have {money} Taka.</h3>

}


function Student() {
  const age = 19;
  const money = 500;
  const person = {name: "Sheikh Jabed", profession: "student"};
  return (
    <div>
      <h2>I am a Student</h2>
      <p>Name: {person.name}</p>    
      <p>Age: {age}</p>    
      <p>Money: {money}</p>    
    </div>
  )
}

export default App
