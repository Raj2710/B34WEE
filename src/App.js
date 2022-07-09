import './App.css';
import Details from './components/Details';
import Form from './components/Form';
import Sample from './components/Sample';
function App() {
    let data = [
      {
        name:"Nagarajan",
        email:"nag@gmail.com",
        mobile:"23145667"
      },
      {
        name:"Athul",
        email:"athul@gmail.com",
        mobile:"5464654"
      },
      {
        name:"Adhira",
        email:"adhira@gmail.com",
        mobile:"568989"
      },
      {
        name:"Akal",
        email:"akal@gmail.com",
        mobile:"568989"
      }
    ]
  return <>
    <Sample/>
    <Form/>
    <Details details = {data}/>
  </>
}

export default App;
