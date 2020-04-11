import React from "react";
import "./Card.css";
import "font-awesome/css/font-awesome.min.css";
export default function Card({ title, count, color, icon }) {
  return (
    <div className="col-sm-4">
      <div
        className={`card text-white bg${color} shadow-lg `}
        style={style.Card}
      >
        <div className="card-body ">
          <h2 className="card-title text-center">
            <span>
              <i className={`${icon}`} style={{ paddingRight: "10px" }}>
                <span>
                  {"              "}
                  {title}
                </span>
              </i>
            </span>
            <span class="badge badge-light  " style={style.span}>
              {count}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

const style = {
  span: {
    marginLeft: "10px"
  },
  icon: {
    paddingRight: "10px"
  },
  card: {
    borderRadius: "25px"
  }
};
