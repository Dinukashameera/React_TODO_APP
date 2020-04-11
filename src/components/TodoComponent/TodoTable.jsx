import React from "react";
import TodoTableRow from "./TodoTableRow";

export default function TodoTable({
  todos,
  deleteTodo,
  completeTodo,
  updateTodo
}) 
{
  
 const change = (todos) => {
   for (let index = 0; index < todos.length; index++) {
     if(todos[index].isComplete){
      todos.push(todos.splice(index, 1)[0])
     }    
   }
  
}

  return (
    <div style={style.container} className="container">
      <h1 className="text-center">ALL TODOS</h1>
      <table className="table" style={style.table}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">TODO</th>
            <th scope="col">STATUS</th>
            <th scope="col">DELETE</th>
            <th scope="col">UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {
            (change(todos) ,
            todos.map(({ title, id, isComplete }) => (
              
              <TodoTableRow
                key={id}
                title={title}
                id={id}
                isComplete={isComplete}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
              />
            )))
          }
        </tbody>
      </table>
    </div>
  );
}

const style = {
  container: {
    marginTop: "3%",
    borderTop: '5px solid darkgray',
    borderBottom: '5px solid darkgray',
    borderRadius:'5px',
    padding:'45px'
  },
  table: {
    marginTop: "1.9%"
  }
};
