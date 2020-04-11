import React from "react";
import swal from "sweetalert";

export default function TodoTableRow({
  title,
  id,
  isComplete,
  deleteTodo,
  completeTodo,
  updateTodo
}) {
  const buttonStatus = () => {
    if (isComplete === true) {
      return "disabled";
    }
  };

  var txt;

  return (
    <tr>
      <th scope="row">#</th>
      <td style={{ textDecoration: isComplete ? "line-through" : "none" }}>
        {title}
      </td>

      <td>
        <select
          className="bg-primary btn btn-outline-light font-weight-bold "
          onChange={e => completeTodo(id, e.target.value,title)}
        >
          <option className="font-weight-bold" value={1} selected={!isComplete}>
            COMPLETE
          </option>
          <option className="font-weight-bold" value={2} selected={!isComplete}>
            IN-PROGRESS
          </option>
          <option className="font-weight-bold" value={3} selected={!isComplete}>
            IN-COMPLETE
          </option>
        </select>
      </td>
      <td>
        <button
          type="button"
          class={`btn btn-danger btn-block font-weight-bold`}
          onClick={() =>
            swal({
              title: "Are you sure?",
              text: "Do you want to delete this Todo",
              icon: "warning",
              buttons: true,
              dangerMode: true
            }).then(willDelete => {
              if (willDelete) {
                swal("Poof! Your Todo has been deleted!", {
                  icon: "success"
                }).then(() => deleteTodo(id));
              } else {
                swal("Your Todo is Safe");
              }
            })
          }
         
        >
          DELETE
        </button>
      </td>
      <td>
        <button
          type="button"
          class={`btn btn-warning btn-block font-weight-bold ${buttonStatus()}`}
          disabled={isComplete}
          onClick={() =>
            swal("Write your Todo Here:", {
              content: "input"
            }).then(value => {
              if (value !== '') {
                console.log(value)
                swal(`Your Updated Todo: ${value}`);
                txt = value;
                updateTodo(id, txt);
              }
            })
          }
        >
          UPDATE
        </button>
      </td>
    </tr>
  );
}
