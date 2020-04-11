import React from "react";
import Card from "./Card";
export default function CardList({ todos }) {
  let complete = 0;
  let incomplete = 0;

  todos.map(todo => {
    if (todo.isComplete) {
      complete = complete + 1;
    } else {
      incomplete = incomplete + 1;
    }
  });

  return (
    <div className="container">
      <div class="row" style={style.cardList}>
        <Card title="TOTAL" count={todos.length} color="-primary" icon={"fa fa-th-list"} />
        <Card
          title="COMPLETED"
          count={complete}
          color="-success"
          icon={"fa fa-check-circle"}
        />
        <Card title="INCOMPLETE" count={incomplete} color="-warning" icon={"fa fa-exclamation-circle"}/>
      </div>
    </div>
  );
}

const style = {
  cardList: {
    marginTop: "5%"
  }
};
