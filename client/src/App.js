import Navbar from './components/Navbar/Navbar' ;
import './App.css';
import {useEffect} from 'react'
import { UseDispatch, useDispatch } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import Allroutes from './Allroutes';
import { fetchAllquestions } from './actions/Questions';
import { fetchAllUsers } from './actions/users';


function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllquestions())
    dispatch(fetchAllUsers())
  },[dispatch]
  )

  return (
    <div className="App">
      <Router>
      <Navbar/>
       <Allroutes />
      </Router>
    </div>
  );
}

export default App;
