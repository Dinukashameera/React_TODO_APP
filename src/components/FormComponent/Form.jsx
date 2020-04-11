import React, { useState } from "react";
import swal from "sweetalert";

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
  };

  return (
    <div style={style.container}>
      <div className="container" style={style.form}>
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col-10">
            <input
              type="text"
              class="form-control"
              value={todo}
              onChange={e => setTodo(e.target.value)}
              placeholder="TYPE THE TODO HERE"
              
            />
          </div>
          <div class="col-2">
            <button
              className="btn btn-primary btn-block"
              onClick={() => swal({
                title: "NICE !!!",
                text: "You Have Added a new Todo!",
                icon: "success",
                button: "WOW !!!"
              })}
            >
              ADD
            </button>
          </div>
        </div>
      </form>
      
    </div>
    </div>
  );
}

const style = {
  form: {
    marginTop: "3%",
    border: '2px solid lightblue',
    borderRadius:'5px',
    backgroundColor : 'lightblue',
    padding : '5px'
  },
  container : {
    
  }
};
