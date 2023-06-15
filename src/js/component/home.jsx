import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(["First task and not least"]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.trim() !== "") {
      setList((prev) => [...prev, value]);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="text-center bg-light shadow-sm mx-3">
      <h1 className="text-center mt-5 pt-2">TodoList!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          onChange={handleChange}
          value={value}
          placeholder="Write a task..."
          className="border w-100 bg-light text-center"
        />
      </form>

      <br />
      {list.map((toDo, index) => (
        <div
          key={index}
          className="d-flex justify-content-start border-bottom"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          <div className="text-start mx-3 d-flex align-items-center">
            {toDo}
          </div>
          {hoverIndex === index && (
            <button
            onClick={() => handleDelete(index)}
            className="btn ms-auto text-end mx-2"
            style={{ color: "red" }}
            >
              X
            </button>
          )}
        </div>
      ))}
      <span className="fw-bold text-primary mb-4">
        TOTAL Nº{list.length}
      </span>
    </div>
  );
};

export default Home;