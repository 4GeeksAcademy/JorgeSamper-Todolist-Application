import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(["Recoger lo que sea"]);

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
      <h1 className="text-center mt-5 pt-2">ToDo List!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input onChange={handleChange} value={value} className="border w-100 bg-light " />
      
      </form>

      <br />
      {list.map((toDo, index) => (
        <div className="d-flex justify-content-center border-bottom">
          <div key={index} className="text-start mx-2">
          {toDo}
            <button onClick={() => handleDelete(index)} className="btn">X</button>
        </div>
      </div>
      ))}
      <span className="fw-bold text-primary pb-4 ">TOTAL Nº{list.length}</span>
    </div>
  );
};

export default Home;
