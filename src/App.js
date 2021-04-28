import React, {useState} from 'react';
import './App.css';

function Todo({todo, index, markTodo, removeTodo}){
  return (
    <div className="todo">
      <span style={{textDecoration: todo.isDone ? 'line-through' : ""}}> {todo.text}</span>
    <div>
    <button className="outline-success" onClick={()=> markTodo(index)}>√</button>
    <button className="outline-danger" onClick={()=> removeTodo(index)}>x</button>
    </div>
    </div>
    );
}

function FormTodo({addTodo}){
  const[value, setValue]= useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  }

return (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input type="text" className="input"
      value={value} placeholder="Add New Tool"
      onChange={e => setValue(e.target.value)}/>
        <button type="submit" className="btn">submit</button>
    </div>
  </form>
);
}

function App(){
  const[todos, setTodos]= useState([
    {
      text:"This todo is done",
      isDone:true
    },
    {
      text:"This todo is not done",
      isDone:false
    }
  ]);

const addTodo=text => {
  const newTodos=[...todos, {text}];
  setTodos(newTodos);
};

const markTodo=index =>{
  const newTodos=[...todos];
  newTodos[index].isDone=true;
  setTodos(newTodos);
};

const removeTodo=index => {
  const newTodos=[...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

return(
  <div className="app">
    <div className="container">
      <h1 className="title"> TODO LIST</h1>
      <FormTodo addTodo={addTodo}/>
      <div>
        {todos.map((todo,index) => (
          <Todo
          key={index}
          index={index}
          todo={todo}
          markTodo={markTodo}
          removeTodo={removeTodo}
          />))}
        
      </div>
    </div>
  </div>
)
        }
export default App;