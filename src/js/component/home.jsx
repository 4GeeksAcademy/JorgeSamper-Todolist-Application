import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(["Recoger lo que sea"]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setList((prev) => [...prev, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">To-Do List!</h1>
      <input onChange={handleChange} value={value} />
      <button onClick={handleClick} className="btn btn-success">
        Send
      </button>

      <br />
      {list.map((toDo, index) => (
        <div key={index}>
          {index + 1}. {toDo}
          <button onClick={() => handleDelete(index)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
