import React from "react";
import '../App.css'

function TodoList({toggle}) {
  return (
    <div
      className=""
      style={{ paddingTop: 70, paddingLeft: toggle?0:300, paddingBottom: 70 }}>

        <div className="triangle-right"></div>
      </div>
  );
}

export default TodoList;
