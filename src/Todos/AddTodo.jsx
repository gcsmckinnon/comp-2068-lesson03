import React, { useState } from 'react';

const AddTodo = props => {
  console.log(props);
  const [inputs, setInputs] = useState({});
  const { todos, setTodos } = props;

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
    setTodos([
      ...todos,
      inputs.todo
    ]);
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Todo Item:</label>
          <input
            name="todo"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-primary" 
          type="button"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;