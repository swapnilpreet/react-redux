import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/todo/Home.jsx';
import Total from './components/todo/Total.jsx'
import Edit from './components/todo/Edit.jsx'
import Todo from './components/todo/Todo.jsx'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/todo" element={<Home/>}/> 
        <Route path="/total" element={<Total/>}/> 
        <Route path="/todo/:id/:name/:status" element={<Todo/>}/> 
        <Route path="/todo/:id/edit" element={<Edit/>}/> 
      </Routes>
    </div>
  );
}

export default App;
