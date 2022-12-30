import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../context/AuthProvider";

const FormField = () => {
  const { user } = useContext(AuthContext);
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user.email;
    const task = form.taskName.value;
    const taskDescription = form.taskDescription.value;
    const taskDate = form.taskDate.value;
    const assignTask = {
      email,
      task,
      taskDescription,
      taskDate,
      status: "Incomplete",
    };
    console.log(assignTask);
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Form onSubmit={handleAddTask}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={user?.email}
          disabled
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTask">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          name="taskName"
          placeholder="Enter Task name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTaskDescription">
        <Form.Label>Task description</Form.Label>
        <textarea
          className="form-control"
          placeholder="Task Description"
          name="taskDescription"
        ></textarea>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date and Time</Form.Label>
        <Form.Control type="date" name="taskDate" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormField;
