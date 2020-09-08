import React from "react";

function ToDoItem(props) {
  const [line, setLine] = React.useState(false);

  function handleClick() {
    setLine((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.todoitem}
      </li>
    </div>
  );
}

export default ToDoItem;
